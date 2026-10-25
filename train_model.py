
from pathlib import Path

import joblib
import numpy as np
import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.ensemble import (
    RandomForestRegressor,
    GradientBoostingRegressor,
)
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler


BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "ev_dataset.csv"
MODEL_DIR = BASE_DIR / "models"
MODEL_FILE = MODEL_DIR / "ev_price_model.joblib"
RESULT_FILE = BASE_DIR / "model_results.csv"

TARGET = "selling_price_inr"

NUMERIC_FEATURES = [
    "year",
    "vehicle_age",
    "battery_capacity_kwh",
    "range_km",
    "km_driven",
    "battery_health_percent",
    "listing_month",
]

CATEGORICAL_FEATURES = [
    "brand",
    "model",
    "region",
]

FEATURES = NUMERIC_FEATURES + CATEGORICAL_FEATURES


def main():
    if not DATA_FILE.exists():
        raise FileNotFoundError(
            "ev_dataset.csv was not found. "
            "Run python generate_dataset.py first."
        )

    MODEL_DIR.mkdir(parents=True, exist_ok=True)

    df = pd.read_csv(DATA_FILE)

    required = FEATURES + [TARGET]
    missing_columns = set(required) - set(df.columns)

    if missing_columns:
        raise ValueError(
            f"Dataset is missing columns: {sorted(missing_columns)}"
        )

    df = df.dropna(subset=[TARGET])
    df = df.drop_duplicates()

    X = df[FEATURES]
    y = df[TARGET]

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.20,
        random_state=42,
    )

    numeric_pipeline = Pipeline([
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ])

    categorical_pipeline = Pipeline([
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("encoder", OneHotEncoder(handle_unknown="ignore")),
    ])

    preprocessing = ColumnTransformer([
        ("numeric", numeric_pipeline, NUMERIC_FEATURES),
        ("categorical", categorical_pipeline, CATEGORICAL_FEATURES),
    ])

    candidates = {
        "Linear Regression": LinearRegression(),
        "Random Forest": RandomForestRegressor(
            n_estimators=200,
            min_samples_leaf=2,
            random_state=42,
            n_jobs=-1,
        ),
        "Gradient Boosting": GradientBoostingRegressor(
            n_estimators=150,
            learning_rate=0.05,
            max_depth=3,
            random_state=42,
        ),
    }

    results = []
    trained_models = {}

    for name, estimator in candidates.items():
        pipeline = Pipeline([
            ("preprocessing", preprocessing),
            ("model", estimator),
        ])

        pipeline.fit(X_train, y_train)
        predictions = pipeline.predict(X_test)

        mae = mean_absolute_error(y_test, predictions)
        rmse = np.sqrt(mean_squared_error(y_test, predictions))
        r2 = r2_score(y_test, predictions)

        results.append({
            "model": name,
            "MAE_INR": round(float(mae), 2),
            "RMSE_INR": round(float(rmse), 2),
            "R2": round(float(r2), 4),
        })

        trained_models[name] = pipeline

        print(f"\n{name}")
        print(f"  MAE:  Rs. {mae:,.2f}")
        print(f"  RMSE: Rs. {rmse:,.2f}")
        print(f"  R2:   {r2:.4f}")

    results_df = pd.DataFrame(results).sort_values("MAE_INR")
    results_df.to_csv(RESULT_FILE, index=False)

    best_name = results_df.iloc[0]["model"]
    best_model = trained_models[best_name]

    # Save the complete fitted pipeline, including preprocessing.
    joblib.dump(best_model, MODEL_FILE)

    print("\n" + "=" * 48)
    print("MODEL TRAINING COMPLETED")
    print("=" * 48)
    print(f"Records used: {len(df)}")
    print(f"Training records: {len(X_train)}")
    print(f"Testing records: {len(X_test)}")
    print(f"Best model by test MAE: {best_name}")
    print(f"Saved model: {MODEL_FILE}")
    print(f"Saved comparison: {RESULT_FILE}")
    print("\nModel comparison:")
    print(results_df.to_string(index=False))
    print(
        "\nReminder: these scores use synthetic practice data. "
        "They do not measure real-world EV valuation accuracy."
    )


if __name__ == "__main__":
    main()

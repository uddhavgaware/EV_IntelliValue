
import numpy as np
import pandas as pd
from pathlib import Path

# Pre-Owned EV Valuation & Market Demand Intelligence
# Generates a synthetic dataset for development and testing.
# These records are simulated, not real market listings.

OUTPUT_FILE = Path(__file__).resolve().parent / "ev_dataset.csv"
RANDOM_SEED = 42
NUMBER_OF_RECORDS = 1500

def generate_dataset():
    rng = np.random.default_rng(RANDOM_SEED)

    # Verified Indian EV Model Catalog with authentic base prices and specifications
    models_db = [
        {"brand": "Tata", "model": "Nexon EV", "battery": 40.5, "range": 453, "base_price": 1449000, "weight": 0.22},
        {"brand": "Tata", "model": "Punch EV", "battery": 35.0, "range": 421, "base_price": 1199000, "weight": 0.14},
        {"brand": "Tata", "model": "Tiago EV", "battery": 24.0, "range": 315, "base_price": 849000, "weight": 0.12},
        {"brand": "Tata", "model": "Tigor EV", "battery": 26.0, "range": 315, "base_price": 1249000, "weight": 0.06},
        {"brand": "Tata", "model": "Curvv EV", "battery": 55.0, "range": 585, "base_price": 1749000, "weight": 0.08},
        {"brand": "MG", "model": "ZS EV", "battery": 50.3, "range": 461, "base_price": 2149000, "weight": 0.09},
        {"brand": "MG", "model": "Windsor EV", "battery": 38.0, "range": 331, "base_price": 1349000, "weight": 0.08},
        {"brand": "MG", "model": "Comet EV", "battery": 17.3, "range": 230, "base_price": 699000, "weight": 0.05},
        {"brand": "Mahindra", "model": "XUV400 EV", "battery": 39.4, "range": 456, "base_price": 1549000, "weight": 0.07},
        {"brand": "Mahindra", "model": "BE 6e", "battery": 59.0, "range": 550, "base_price": 1890000, "weight": 0.04},
        {"brand": "Hyundai", "model": "Creta EV", "battery": 45.0, "range": 473, "base_price": 1790000, "weight": 0.05},
        {"brand": "Hyundai", "model": "Ioniq 5", "battery": 72.6, "range": 631, "base_price": 4600000, "weight": 0.03},
        {"brand": "Hyundai", "model": "Kona Electric", "battery": 39.2, "range": 452, "base_price": 2380000, "weight": 0.03},
        {"brand": "BYD", "model": "Atto 3", "battery": 60.5, "range": 521, "base_price": 2499000, "weight": 0.04},
        {"brand": "BYD", "model": "Seal", "battery": 82.5, "range": 650, "base_price": 4100000, "weight": 0.02},
    ]

    weights = np.array([m["weight"] for m in models_db])
    weights /= weights.sum()

    rows = []

    for _ in range(NUMBER_OF_RECORDS):
        idx = rng.choice(len(models_db), p=weights)
        ev = models_db[idx]

        brand = ev["brand"]
        model = ev["model"]
        base_price = ev["base_price"]
        battery_capacity = ev["battery"]

        year = int(rng.integers(2019, 2027))
        vehicle_age = max(0, 2026 - year)

        # Range variation around ARAI certified
        range_km = int(ev["range"] * rng.uniform(0.95, 1.05))

        # Mileage driven correlates with vehicle age
        km_driven = int(rng.integers(3000, 25000) * max(1, vehicle_age) * rng.uniform(0.7, 1.3))
        km_driven = int(np.clip(km_driven, 1000, 140000))

        # Battery health degradation (1.2% - 2.5% per year + mileage wear)
        battery_health = round(
            float(np.clip(100.0 - vehicle_age * rng.uniform(1.2, 2.4)
                    - (km_driven / 15000) * rng.uniform(0.3, 0.8)
                    + rng.normal(0, 1.0), 68.0, 100.0)), 1
        )

        # 2026 Indian Resale Depreciation Curve (documenting the 3-Year Cliff: 50-55% retention)
        if vehicle_age == 0:
            age_factor = 0.98
        elif vehicle_age == 1:
            age_factor = rng.uniform(0.79, 0.83) # ~20% drop year 1
        elif vehicle_age == 2:
            age_factor = rng.uniform(0.64, 0.69) # ~33% drop year 2
        elif vehicle_age == 3:
            age_factor = rng.uniform(0.50, 0.55) # 50-55% 3-year cliff documented in 2026 studies
        elif vehicle_age == 4:
            age_factor = rng.uniform(0.42, 0.47)
        else:
            age_factor = max(0.30, 0.40 - (vehicle_age - 5) * 0.04)

        # Non-linear SOH impact: High-ticket battery replacement anxiety accelerates depreciation below 85% SOH
        soh_ratio = battery_health / 100.0
        if soh_ratio >= 0.88:
            battery_factor = soh_ratio ** 1.15
        else:
            battery_factor = (soh_ratio ** 1.6)

        usage_factor = max(0.70, 1.0 - (km_driven / 400000))

        region = rng.choice(
            ["Pune", "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"],
            p=[0.22, 0.22, 0.18, 0.16, 0.12, 0.10]
        )
        regional_multipliers = {
            "Bengaluru": 1.02,
            "Pune": 1.01,
            "Mumbai": 1.00,
            "Delhi": 0.99,
            "Hyderabad": 0.98,
            "Chennai": 0.98,
        }
        reg_factor = regional_multipliers.get(region, 1.0)

        selling_price = (
            base_price
            * age_factor
            * usage_factor
            * battery_factor
            * reg_factor
            * rng.uniform(0.95, 1.05)
        )

        selling_price = max(180000, round(selling_price / 1000) * 1000)

        listing_month = int(rng.integers(1, 13))
        days_listed = int(rng.integers(1, 90))

        rows.append({
            "brand": brand,
            "model": model,
            "year": year,
            "vehicle_age": vehicle_age,
            "battery_capacity_kwh": battery_capacity,
            "range_km": range_km,
            "km_driven": km_driven,
            "battery_health_percent": battery_health,
            "region": region,
            "listing_month": listing_month,
            "days_listed": days_listed,
            "selling_price_inr": int(selling_price),
        })

    df = pd.DataFrame(rows)

    # Add a few missing values so the preprocessing pipeline
    # can be tested realistically.
    for column in ["battery_health_percent", "range_km"]:
        missing_indices = rng.choice(
            df.index, size=int(len(df) * 0.02), replace=False
        )
        df.loc[missing_indices, column] = np.nan

    df.to_csv(OUTPUT_FILE, index=False)

    print("Synthetic EV dataset generated successfully!")
    print(f"File saved at: {OUTPUT_FILE}")
    print(f"Number of records: {len(df)}")
    print("\nFirst five rows:")
    print(df.head().to_string(index=False))
    print("\nMissing values:")
    print(df.isnull().sum().to_string())
    print("\nIMPORTANT: This is simulated data, not actual market data.")

if __name__ == "__main__":
    generate_dataset()

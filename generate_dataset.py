
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

    brands = {
        "Tata": ["Nexon EV", "Tiago EV", "Tigor EV"],
        "MG": ["ZS EV", "Comet EV"],
        "Mahindra": ["XUV400 EV", "eVerito"],
        "Hyundai": ["Kona Electric", "Ioniq 5"],
        "BYD": ["Atto 3", "e6"],
    }

    brand_names = list(brands.keys())
    brand_probabilities = [0.36, 0.23, 0.19, 0.12, 0.10]

    rows = []

    for _ in range(NUMBER_OF_RECORDS):
        brand = rng.choice(brand_names, p=brand_probabilities)
        model = rng.choice(brands[brand])

        year = int(rng.integers(2018, 2027))
        vehicle_age = 2026 - year

        battery_capacity = float(
            rng.choice([17.3, 21.5, 26.0, 30.2, 35.0, 40.5, 45.0, 50.3, 60.5, 70.0])
        )

        range_km = int(
            battery_capacity * rng.uniform(4.0, 6.5)
        )

        km_driven = int(rng.integers(1000, 120001))
        battery_health = round(
            np.clip(100 - vehicle_age * rng.uniform(1.0, 2.2)
                    - km_driven / 12000 * rng.uniform(0.2, 0.9)
                    + rng.normal(0, 2), 65, 100), 1
        )

        original_price = battery_capacity * 70000 + 300000
        age_factor = max(0.35, 1 - vehicle_age * 0.075)
        usage_factor = max(0.70, 1 - km_driven / 500000)
        battery_factor = battery_health / 100

        selling_price = (
            original_price
            * age_factor
            * usage_factor
            * battery_factor
            * rng.uniform(0.90, 1.10)
        )

        selling_price = max(150000, round(selling_price / 1000) * 1000)

        region = rng.choice(
            ["Pune", "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"],
            p=[0.22, 0.22, 0.18, 0.16, 0.12, 0.10]
        )

        listing_month = int(rng.integers(1, 13))
        days_listed = int(rng.integers(1, 121))

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

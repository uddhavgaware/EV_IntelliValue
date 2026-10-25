# ⚡ EV_IntelliValue
### *Intelligent Pre-Owned Electric Vehicle Valuation & Market Analytics Platform*

[![Python Version](https://img.shields.io/badge/Python-3.10%20%7C%203.11%20%7C%203.12%20%7C%203.13-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.30+-FF4B4B?logo=streamlit&logoColor=white)](https://streamlit.io/)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-F7931E?logo=scikitlearn&logoColor=white)](https://scikit-learn.org/)
[![Plotly](https://img.shields.io/badge/Plotly-Interactive%20Charts-3F4F75?logo=plotly&logoColor=white)](https://plotly.com/)
[![Model R2](https://img.shields.io/badge/Model%20R%C2%B2-0.9774%20(97.7%25)-10b981?style=flat)](https://github.com/uddhavgaware/EV_IntelliValue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Overview

**EV_IntelliValue** is an end-to-end Machine Learning web application engineered to solve the complex pricing opacity in the secondary electric vehicle (EV) market. Unlike internal combustion engine (ICE) vehicles where mechanical wear dominates depreciation, an electric vehicle's residual value is heavily dictated by **Battery State-of-Health (SOH)**, **pack capacity (kWh)**, **real-world degradation curves**, and **regional market adoption**.

Powered by high-precision ensemble regression algorithms (**Gradient Boosting**, **Random Forest**) and wrapped in an ultra-clean corporate dashboard built with **Streamlit** and **Plotly**, EV_IntelliValue delivers instant, data-driven resale valuations and comprehensive market analytics.

---

## 🌟 Key Features

### 1. 🎯 Real-Time Valuation Predictor
- Instant fair market price estimation in **₹ INR** for popular Indian EV brands (**Tata, MG, Mahindra, Hyundai, BYD**).
- Dynamic valuation bounds (**Low – Expected – High**) reflecting market volatility and condition variance.
- Value driver breakdown: quantifiable impact of battery condition, age, usage, and brand equity.

### 2. 🔋 Battery Degradation Lab & State-of-Health (SOH) Modeling
- Dedicated lab simulating non-linear battery degradation across vehicle age and odometer mileage.
- Live sensitivity curve showing how each 1% drop in battery health impacts resale value in rupees.
- Remaining capacity estimations and replacement cost risk warnings.

### 3. 📊 Market Intelligence & Regional Analytics
- Exploratory data analytics on key markets (**Pune, Mumbai, Delhi, Bengaluru, Hyderabad, Chennai**).
- Interactive multi-dimensional scatter plots (Price vs. Km Driven with OLS trendlines).
- Market share distributions, average days on market, and pricing histograms.

### 4. 🏆 Model Evaluation & Benchmark Dashboard
- Live comparative benchmark across **Gradient Boosting**, **Random Forest**, and **Linear Regression**.
- Detailed error metrics including **Mean Absolute Error (MAE)**, **Root Mean Squared Error (RMSE)**, and **Coefficient of Determination (R²)**.
- Feature importance visualization displaying which factors influence EV pricing most.

---

## 🔬 Machine Learning Pipeline & Performance

The training pipeline uses Scikit-Learn pipelines and column transformers to ensure zero data leakage between training and evaluation splits:

```
Raw Input Data (ev_dataset.csv)
   │
   ├──> Numeric Features (Age, Battery kWh, Range, Km, SOH %, Month)
   │      └── SimpleImputer(median) ──> StandardScaler()
   │
   ├──> Categorical Features (Brand, Model, Region)
   │      └── SimpleImputer(most_frequent) ──> OneHotEncoder(handle_unknown="ignore")
   │
   └──> Model Selection & Fitting (Grid / Ensemble Evaluation)
          └── Best Model: GradientBoostingRegressor ──> Serialized .joblib
```

### 📊 Model Benchmark Results

| Model | MAE (₹ INR) | RMSE (₹ INR) | R² Score | Performance |
| :--- | :---: | :---: | :---: | :---: |
| **Gradient Boosting Regressor** 🥇 | **₹ 1,05,356** | **₹ 1,45,036** | **0.9774** | **Best Precision & Generalization** |
| Extra Trees Regressor 🥈 | ₹ 1,23,101 | ₹ 1,70,553 | 0.9687 | Extremely Fast Multi-Tree Ensemble |
| Random Forest Regressor 🥉 | ₹ 1,26,565 | ₹ 1,75,978 | 0.9667 | Strong Ensemble Baseline |
| Linear Regression | ₹ 2,05,937 | ₹ 2,74,066 | 0.9193 | Baseline Linear Reference |

> **Key Takeaway:** The Gradient Boosting model explains **97.7% of the variance** in EV resale pricing, capturing nuanced non-linear battery health penalties that linear models fail to reflect.

---

## 🗂️ Dataset Schema

The underlying dataset contains simulated market listings designed to emulate real-world Indian EV market conditions:

| Feature | Type | Description |
| :--- | :--- | :--- |
| `brand` | Categorical | Vehicle Manufacturer (Tata, MG, Mahindra, Hyundai, BYD) |
| `model` | Categorical | Specific Model (Nexon EV, ZS EV, XUV400 EV, Ioniq 5, Atto 3, etc.) |
| `year` | Integer | Manufacturing / Registration Year (2018 – 2026) |
| `vehicle_age` | Integer | Calculated vehicle age in years |
| `battery_capacity_kwh` | Float | Usable battery pack size (17.3 kWh to 70.0 kWh) |
| `range_km` | Integer | Estimated single-charge driving range (km) |
| `km_driven` | Integer | Total odometer reading (km) |
| `battery_health_percent`| Float | State-of-Health (SOH) percentage (65.0% – 100.0%) |
| `region` | Categorical | Regional market location |
| `listing_month` | Integer | Month of sale listing (1 – 12) |
| `selling_price_inr` | Integer | **Target Variable:** Resale transaction price in ₹ INR |

---

## 📂 Project Directory Structure

```text
EV_IntelliValue/
│
├── .gitignore               # Git exclusion rules (venv, cache, temporary files)
├── LICENSE                  # MIT License
├── README.md                # Comprehensive project documentation
├── requirements.txt         # Production and development dependencies
│
├── app.py                   # Full Streamlit web application & interactive UI
├── generate_dataset.py      # Synthetic market dataset generator
├── train_model.py           # Machine learning training & evaluation pipeline
│
├── ev_dataset.csv           # Pre-processed EV market records (1,500 samples)
├── model_results.csv        # Cross-model evaluation metrics (MAE, RMSE, R2)
└── models/
    └── ev_price_model.joblib # Trained and serialized Gradient Boosting model
```

---

## 🚀 Quickstart Guide

### 1. Clone the Repository
```bash
git clone https://github.com/uddhavgaware/EV_IntelliValue.git
cd EV_IntelliValue
```

### 2. Create and Activate a Virtual Environment
```bash
# Windows (PowerShell)
python -m venv .venv
.venv\Scripts\Activate.ps1

# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Required Dependencies
```bash
pip install -r requirements.txt
```

### 4. Launch the Streamlit Application
```bash
streamlit run app.py
```
Open your browser and navigate to `http://localhost:8501`.

---

## 🛠️ Reproducing Training & Data Generation

To regenerate the synthetic dataset or retrain the machine learning pipeline from scratch:

```bash
# Step 1: Generate synthetic EV market records
python generate_dataset.py

# Step 2: Run ML pipeline, benchmark models, and export trained artifact
python train_model.py
```

The output will automatically refresh `ev_dataset.csv`, `model_results.csv`, and save the optimized model to `models/ev_price_model.joblib`.

---

## 💻 Tech Stack

- **Application & Dashboard:** [Streamlit](https://streamlit.io/)
- **Data Manipulation & Preprocessing:** [Pandas](https://pandas.pydata.org/), [NumPy](https://numpy.org/)
- **Machine Learning & Modeling:** [Scikit-Learn](https://scikit-learn.org/)
- **Model Serialization:** [Joblib](https://joblib.readthedocs.io/)
- **Data Visualization:** [Plotly Express & Graph Objects](https://plotly.com/python/)

---

## 👤 Author

- **Uddhav Gaware**
- GitHub: [@uddhavgaware](https://github.com/uddhavgaware)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

---
title: "Detecting Data and Concept Drift in Real-Time Machine Learning Systems"
description: "Techniques for monitoring production ML models, tracking distribution shifts with statistical tests, and automating retraining triggers."
date: "2026-02-18"
category: "Data Science"
tags: ["Data Science", "Machine Learning", "MLOps", "Python"]
author: "Abderrahman ES-SEBYITY"
---

A machine learning model running in production is an evolving entity interacting with a non-stationary world. While accuracy on test sets may look stellar during offline training, real-world user behavior, seasonal cycles, and market shifts inevitably degrade performance over time.

This phenomenon is categorized into two key dimensions: **Data Drift** (covariate shift) and **Concept Drift** (target shift).

---

## Data Drift vs. Concept Drift

- **Data Drift (`P(X)` changes)**: The input feature distribution shifts, while the conditional probability `P(Y|X)` remains constant.
- **Concept Drift (`P(Y|X)` changes)**: The relationship between input features and target labels shifts, even if input distributions appear stable.

```python
import numpy as np
from scipy import stats

def compute_ks_drift(reference_data: np.ndarray, current_data: np.ndarray, alpha: float = 0.05) -> dict:
    """Performs two-sample Kolmogorov-Smirnov test to detect feature drift."""
    statistic, p_value = stats.ks_2samp(reference_data, current_data)
    is_drifted = p_value < alpha
    
    return {
        "statistic": float(statistic),
        "p_value": float(p_value),
        "is_drifted": is_drifted,
    }
```

---

## Statistical Drift Metrics for Production Monitoring

Depending on the feature type (continuous vs. categorical), different metrics offer optimal trade-offs between compute overhead and sensitivity:

1. **Population Stability Index (PSI)**:
   A staple in credit risk and financial modeling. A PSI < 0.1 indicates no significant shift, 0.1 ≤ PSI < 0.25 indicates moderate change, and ≥ 0.25 signifies significant shift requiring intervention.
2. **Wasserstein Distance (Earth Mover's Distance)**:
   Measures the minimum work required to transform one continuous distribution into another. Very effective for normalized embeddings and high-dimensional features.
3. **Chi-Square Goodness-of-Fit Test**:
   Ideal for categorical feature drift analysis across distinct bins.

---

## Designing Automated Retraining Triggers

In a resilient MLOps architecture, drift alerts should not simply send Slack notifications; they should trigger automated validation pipelines:

```python
def drift_monitoring_hook(feature_name: str, drift_result: dict):
    if drift_result["is_drifted"]:
        print(f"[ALERT] Drift detected on feature '{feature_name}' (p-value: {drift_result['p_value']:.4f})")
        # Trigger shadow model inference or dataset snapshot for retraining
```

By actively monitoring feature distributions rather than waiting for downstream business KPI drops, data teams can resolve model degradation before it impacts production users.

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style="darkgrid")


debt_data = pd.read_csv('debt_data.csv')

sns.violinplot(
  x = "income_bracket",
  y = "median_debt",
  data = debt_data,
  alpha = 0.1
).get_figure().savefig('income-debt-violin.png')

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style="darkgrid")

finaid_data = sns.load_dataset()

sns.relplot(
  x = "Household Income",
  y = "Financial Aid",
  data = finaid_data
)
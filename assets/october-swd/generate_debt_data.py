import pandas as pd

dataset = pd.read_csv('MERGED2015_16_PP.csv')
with open('debt_data.csv', 'w') as f:
  f.write('income_bracket,median_debt\n')
  for d in dataset.LO_INC_DEBT_MDN:
    if (type(d) is float or (type(d) is str and not d.startswith('P'))):
      f.write('lo,{}\n'.format(d))
  for d in dataset.MD_INC_DEBT_MDN:
    if (type(d) is float or (type(d) is str and not d.startswith('P'))):
      f.write('md,{}\n'.format(d))
  for d in dataset.HI_INC_DEBT_MDN:
    if (type(d) is float or (type(d) is str and not d.startswith('P'))):
      f.write('hi,{}\n'.format(d))

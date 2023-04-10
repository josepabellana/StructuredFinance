import pandas as pd

dataset_url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data'
column_names = ['age', 'workclass', 'fnlwgt', 'education', 'education-num', 'marital-status', 'occupation', 'relationship', 'race', 'sex', 'capital-gain', 'capital-loss', 'hours-per-week', 'native-country', 'y']

df = pd.read_csv(
	dataset_url,
	names = column_names
)
df['y'] = (df['y'] == ' >50K').astype('int')

df.tail()
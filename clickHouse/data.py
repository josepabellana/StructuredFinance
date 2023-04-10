import pandas as pd

dataset_url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data'
column_names = ['age', 'workclass', 'fnlwgt', 'education', 'education-num', 'marital-status', 'occupation', 'relationship', 'race', 'sex', 'capital-gain', 'capital-loss', 'hours-per-week', 'native-country', 'y']

df = pd.read_csv(
	dataset_url,
	names = column_names
)
df['y'] = (df['y'] == ' >50K').astype('int')

df.tail()



from pprint import pprint
from sklearn import linear_model

model = linear_model.SGDClassifier(
    loss='log_loss',
    penalty=None,
    fit_intercept=True,
    learning_rate='constant',
    eta0=0.01,
    max_iter=1,
    shuffle=False
)

X = df[['age', 'fnlwgt', 'education-num', 'capital-gain', 'capital-loss', 'hours-per-week', 'y']].copy()
y = X.pop('y')
model = model.fit(X[:1000], y[:1000])

print(model.intercept_[0])
pprint(dict(zip(X.columns, model.coef_[0])))
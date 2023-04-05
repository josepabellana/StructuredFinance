# Import yfinance package
import yfinance as yf

# Set the start and end date
start_date = '1990-01-01'
end_date = '2021-07-12'

# Set the ticker
ticker = 'AMZN'

# Get the data
data = yf.download(ticker, start_date, end_date)

# Print 5 rows
data.tail()
# Import matplotlib for plotting
import matplotlib.pyplot as plt

# Plot adjusted close price data
data['Adj Close'].plot()
plt.show()
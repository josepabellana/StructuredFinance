# Import yfinance
import yfinance as yf

# Set the ticker as MSFT
msft = yf.Ticker("MSFT")

# get price to book
pb = msft.info['priceToBook']
pe = msft.info['regularMarketPrice']/msft.info['trailingEps']
print('Price to Book Ratio is: %.2f' % pb)
print('Price to Earnings Ratio is: %.2f' % pe)


# show revenues
revenue = msft.financials.loc['Total Revenue']
plt.bar(revenue.index, revenue.values)
plt.ylabel("Total Revenues")
plt.show()


EBIT = msft.financials.loc['Earnings Before Interest and Taxes']
plt.bar(EBIT.index, EBIT.values)
plt.ylabel("EBIT")
plt.show()
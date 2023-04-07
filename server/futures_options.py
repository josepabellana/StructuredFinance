from datetime import date
from nsepy import get_history
# Stock options (for index options, set index = True)
stock_fut = get_history(symbol="HDFC",
 start=date(2019, 1, 15),
 end=date(2019, 2, 1),
 futures=True,
 expiry_date=date(2019, 2, 28))
stock_fut.head()



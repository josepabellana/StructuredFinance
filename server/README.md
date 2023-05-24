Welcome to OpenBB Terminal v2.5.1
╭──────────────────────────────────────────────────────────────────────────────╮
│ Welcome to the OpenBB Terminal.                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

The following walkthrough will guide you towards making the most out of the OpenBB Terminal.

Press Enter to continue or 'q' followed by Enter to exit.



╭──────────────────────────────────────────────────────────────────────────────╮
│ #1 - Commands vs menu.                                                       │
╰──────────────────────────────────────────────────────────────────────────────╯

Menus are a collection of 'commands' and 'sub-menus'.
You can identify them through their distinct color and a '>' at the beginning of the line

For instance:
>   stocks             access historical pricing data, options, sector and industry, and overall due diligence


Commands are expected to return data either as a chart or table.
You can identify them through their distinct color

For instance:
>   news               display news articles based on term and data sources 
stocks  


╭──────────────────────────────────────────────────────────────────────────────╮
│ #2 - Using commands                                                          │
╰──────────────────────────────────────────────────────────────────────────────╯

Commands throughout the terminal can have additional arguments.

Let's say that in the current menu, you want to have more information about the command 'news'.

You can either see the available arguments in the terminal, using: news -h

 or you can find out more about it with an output example on the browser, using: about news



╭──────────────────────────────────────────────────────────────────────────────╮
│ #3 - Setting API Keys                                                        │
╰──────────────────────────────────────────────────────────────────────────────╯

The OpenBB Terminal does not own any of the data you have access to.

Instead, we provide the infrastructure to access over 100 different data sources from a single location.

Thus, it is necessary for each user to set their own API keys for the various third party sources

You can find more about this on the 'keys' menu.

For many commands, there are multiple data sources that can be selected.

The help menu shows the data sources supported by each command.

For instance:
    load               load a specific stock ticker and additional info for analysis   [YahooFinance, AlphaVantage, Polygon, EODHD]

The user can go into the 'sources' menu and select their preferred default data source.
keys


╭──────────────────────────────────────────────────────────────────────────────╮
│ #4 - Symbol dependent menus and commands                                     │
╰──────────────────────────────────────────────────────────────────────────────╯

Throughout the terminal, you will see commands and menus greyed out.

These menus or commands cannot be accessed until an object is loaded.

Let's take as an example the 'stocks' menu.

You will see that the command 'disc' is available as its goal is to discover new tickers:
>   stocks             access historical pricing data, options, sector 

On the other hand, 'fa' menu (fundamental analysis) requires a ticker to be loaded.

And therefore, appears as:
>   fa                 fundamental analysis of loaded ticker 

Once a ticker is loaded with: load TSLA

The 'fa' menu will be available as:
>   fa                 fundamental analysis of loaded ticker 



╭──────────────────────────────────────────────────────────────────────────────╮
│ #5 - Terminal Navigation                                                     │
╰──────────────────────────────────────────────────────────────────────────────╯

The terminal has a tree like structure, where menus branch off into new menus.

The users current location is displayed before the text prompt.

For instance, if the user is inside the menu disc which is inside stocks, the following prompt will appear:
2022 Oct 18, 21:53 (🦋) /stocks/disc/ $

If the user wants to go back to the menu above, all they need to do is type 'q'.

If the user wants to go back to the home of the terminal, they can type '/' instead.

Note: Always type 'h' to know what commands are available in each menu



╭──────────────────────────────────────────────────────────────────────────────╮
│ #6 - Command Pipeline                                                        │
╰──────────────────────────────────────────────────────────────────────────────╯

The terminal offers the capability of allowing users to speed up their navigation and command execution.

Therefore, typing the following prompt is valid:
2022 Oct 18, 21:53 (🦋) / $ stocks/load TSLA/dd/pt

In this example, the terminal - in a single action - will go into 'stocks' menu, run command 'load' with 'TSLA' as input,
go into sub-menu 'dd' (due diligence) and run the command 'pt' (price target).



╭──────────────────────────────────────────────────────────────────────────────╮
│ #6 - OpenBB Scripts                                                          │
╰──────────────────────────────────────────────────────────────────────────────╯

The command pipeline capability is great, but the user experience wasn't great copy-pasting large lists of commands.

We allow the user to create a text file of the form:

FOLDER_PATH/my_script.openbb
stocks
load TSLA
dd
pt

which can be run through the 'exe' command in the home menu, with:
2022 Oct 18, 22:33 (🦋) / $ exe FOLDER_PATH/my_script.openbb





╭──────────────────────────────────────────────────────────────────────────────╮
│ #7 - OpenBB Scripts with Arguments                                           │
╰──────────────────────────────────────────────────────────────────────────────╯

The user can create a script that includes arguments for the commands.

Example:

FOLDER_PATH/my_script_with_variable_input.openbb
stocks
# this is a comment
load $ARGV[0]
dd
pt
q
load $ARGV[1]
candle

and then, if this script is run with:
2022 Oct 18, 22:33 (🦋) / $ exe FOLDER_PATH/my_script_with_variable_input.openbb -i AAPL,MSFT

This means that the pt will run on AAPL while candle on MSFT



╭──────────────────────────────────────────────────────────────────────────────╮
│ #8 - OpenBB Script Generation/purple]                                        │
╰──────────────────────────────────────────────────────────────────────────────╯

To make it easier for users to create scripts, we have created a command that 'records' user commands directly into a script.

From the home menu, the user can run:
2022 Oct 18, 22:33 (🦋) / $ record

and then perform your typical investment research workflow before entering

2022 Oct 18, 22:33 (🦋) / $ stop

After stopping, the script will be saved to the 'scripts' folder.



╭──────────────────────────────────────────────────────────────────────────────╮
│ #9 - Terminal Customization                                                  │
╰──────────────────────────────────────────────────────────────────────────────╯

Users should explore the settings and featflags menus to configure their terminal.

The fact that our terminal is fully open source allows users to be able to customize anything they want.

If you are interested in contributing to the project, please check:
https://github.com/OpenBB-finance/OpenBBTerminal



╭──────────────────────────────────────────────────────────────────────────────╮
│ #10 - Support                                                                │
╰──────────────────────────────────────────────────────────────────────────────╯

We are nothing without our community, hence we put a lot of effort in being here for you.

If you find any bug that you wish to report to improve the terminal you can do so with:
2022 Oct 18, 22:33 (🦋) / $ support CMD

which should open a form in your browser where you can report the bug in said 'CMD'.

If you want to know more, or have any further question. Please join us on Discord:
https://openbb.co/discord


╭──────────────────────────────────── Home ────────────────────────────────────╮
│                                                                              │
│ Information, guides and support for the OpenBB Terminal:                     │
│     intro              introduction on the OpenBB Terminal                   │
│     about              discover the capabilities of the OpenBB Terminal (htt │
│     support            pre-populate a support ticket for our team to evaluat │
│     survey             fill in our 2-minute survey so we better understand h │
│     wiki               search for an expression in Wikipedia (https://www.wi │
│     news               display news articles based on term and data sources  │
│                                                                              │
│ Configure your own terminal:                                                 │
│ >   keys               set API keys and check their validity                 │
│ >   featflags          enable and disable feature flags                      │
│ >   sources            select your preferred data sources                    │
│ >   settings           tune settings (export folder, timezone, language, plo │
│                                                                              │
│ Record and execute your own .openbb routine scripts:                         │
│     record             start recording current session                       │
│     stop               stop session recording and convert to .openbb routine │
│     exe                execute .openbb routine scripts (use exe --example fo │
│                                                                              │
│ Main menu:                                                                   │
│ >   stocks             access historical pricing data, options, sector and i │
│ >   crypto             dive into onchain data, tokenomics, circulation suppl │
│ >   etf                exchange traded funds. Historical pricing, compare ho │
│ >   economy            global macroeconomic data, e.g. futures, yield, treas │
│ >   forex              foreign exchanges, quotes, forward rates for currency │
│ >   futures            commodities, bonds, index, bitcoin and forex          │
│ >   fixedincome        access central bank decisions, yield curves, governme │
│ >   alternative        alternative datasets, such as COVID and open source m │
│ >   funds              mutual funds search, overview, holdings and sector we │
│                                                                              │
│ OpenBB Toolkits:                                                             │
│ >   econometrics       statistical and quantitative methods for relationship │
│ >   forecast           timeseries forecasting with machine learning          │
│ >   portfolio          perform portfolio optimization and look at portfolio  │
│ >   dashboards         interactive dashboards using voila and jupyter notebo │
│ >   reports            customizable research reports through jupyter noteboo │
│                                                                              │
╰───────────────────────────────── OpenBB Terminal v2.5.1 (https://openbb.co)

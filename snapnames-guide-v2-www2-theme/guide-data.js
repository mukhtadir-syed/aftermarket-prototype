const SNAPNAMES_GUIDE = {
  support: {
    ticketUrl: "https://SnapNames.com/support/",
    phone: "1-877-352-5630"
  },
  reminders: [
    "New accounts are required to keep a credit card on file.",
    "New accounts start as unverified accounts.",
    "Unverified accounts can place limited backorders, join limited auctions, and bid up to limited amounts.",
    "Registrant information must be accurate and current.",
    "Expiry and Pending Delete inventory have cutoff times.",
    "Payments of $50,000 or more require bank-to-bank direct transfer."
  ],
  chapters: [
    {
      id: "create-account",
      eyebrow: "Account setup",
      title: "Create a New Account",
      summary: "Create the SnapNames account you need before placing backorders, joining auctions, or buying domains.",
      steps: [
        "Click Sign In at the top right corner of the SnapNames homepage.",
        "Click New Customer? Start Here.",
        "Complete the New Account page with account preferences, contact information, and billing information.",
        "Agree to the SnapNames Terms of Service.",
        "Complete the captcha.",
        "Click Submit."
      ],
      important: [
        "All new accounts are required to have a credit card on file for payment of domain names purchased or won at auction.",
        "After the account is created, it starts in unverified status.",
        "An unverified account can place some backorders and participate in some auctions, but limits apply."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-000.png",
          alt: "SnapNames homepage with Sign In and search controls",
          points: [
            { n: 1, x: 93, y: 10, label: "Sign In", text: "Start account creation from the Sign In link in the top right." },
            { n: 2, x: 33, y: 67, label: "Search area", text: "After account setup, this is where most buying tasks begin." }
          ]
        },
        {
          src: "assets/extracted-pdf-images/snapnames-001.png",
          alt: "SnapNames New Account form",
          points: [
            { n: 1, x: 32, y: 18, label: "Account preferences", text: "Create your username, password, and bidding alias." },
            { n: 2, x: 39, y: 45, label: "Contact information", text: "Enter reachable and accurate contact details." },
            { n: 3, x: 39, y: 83, label: "Billing information", text: "Add the card details required for new accounts." }
          ]
        }
      ],
      details: [
        {
          title: "What happens after signup",
          copy: "The account can place backorders and participate in auctions in unverified status, but SnapNames applies participation limits until verification is completed."
        }
      ]
    },
    {
      id: "verified-bidder",
      eyebrow: "Account limits",
      title: "Verified vs Unverified Accounts",
      summary: "Understand the difference between a new unverified account and a verified bidder account.",
      steps: [
        "Go to the Verified Bidder page on SnapNames.",
        "Download the Verified Bidder application.",
        "Complete the application.",
        "Submit the completed application to SnapNames Customer Support through a support ticket."
      ],
      important: [
        "Every new account starts as unverified.",
        "Unverified accounts are limited in how many backorders they can place, which auctions they can join, and how high they can bid.",
        "Verification is required to fully participate in SnapNames auctions."
      ],
      links: [
        {
          label: "Verified Bidder page",
          href: "https://SnapNames.com/domain-auction/account_become_verified.action"
        }
      ],
      details: [
        {
          title: "When to complete verification",
          copy: "Complete verification before you plan to participate seriously in auctions, especially if you expect to place multiple backorders or higher bids."
        }
      ]
    },
    {
      id: "participate-auctions",
      eyebrow: "Auctions",
      title: "Participate in Auctions",
      summary: "Use My Auctions to review active auctions, manage bids, and download auction activity.",
      steps: [
        "Hover over Buyer Dashboard on the SnapNames homepage.",
        "Click My Auctions.",
        "Review the active auctions where you are a participant.",
        "Raise or lower your maximum bid where available.",
        "Place a bid in the auction.",
        "Download a list of auctions where you are currently a participant.",
        "Filter the active auction list to show auctions that end today."
      ],
      important: [
        "A backorder can lead to an auction when more than one customer is interested in the same domain.",
        "Review the domain name, current bid, time left, and your maximum bid before placing bids.",
        "Use Refresh Page if you need the latest auction status."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-002.png",
          alt: "SnapNames My Auctions page",
          points: [
            { n: 1, x: 13, y: 28, label: "Show filter", text: "Use the filter to narrow active auctions." },
            { n: 2, x: 76, y: 59, label: "Auction status", text: "Review bid, bidder, and time-left columns before acting." },
            { n: 3, x: 90, y: 46, label: "Place Bids", text: "Submit bid changes only after reviewing the row." }
          ]
        }
      ],
      details: [
        {
          title: "What you can manage from My Auctions",
          copy: "My Auctions supports active auction review, maximum bid changes, bid placement, list downloads, and filtering auctions that end today."
        }
      ]
    },
    {
      id: "registrant-info",
      eyebrow: "Account details",
      title: "Manage Registrant and WHOIS Information",
      summary: "Keep registrant information accurate so purchased domains can be fulfilled through registrar partners.",
      steps: [
        "Log in to your SnapNames account.",
        "Hover over My Account.",
        "Click Registration Info.",
        "Update the registrant information that will be provided to registrars for domains you purchase.",
        "Save the updated information."
      ],
      important: [
        "Registrant information is used for domain names you purchase.",
        "You must provide accurate and current information.",
        "Fake or unverifiable information can cause account suspension and loss of purchased domain names."
      ],
      details: [
        {
          title: "Why this matters",
          copy: "After you win or purchase a domain, the domain is made accessible through the registrar partner where the domain is registered. Accurate registrant details help that handoff work correctly."
        }
      ]
    },
    {
      id: "link-registrar",
      eyebrow: "Registrar fulfillment",
      title: "Link Your Registrar Account",
      summary: "For supported registrar partners, link your SnapNames account so purchased domains can fulfill to your registrar account.",
      steps: [
        "Log in to your SnapNames account.",
        "Open Account Information.",
        "Find the Linked Partner Registrar Accounts section near the bottom of the screen.",
        "Click Link Partner Registrar Account.",
        "Follow the prompts on the next page to complete linking."
      ],
      important: [
        "Registrar account linking is available only for a limited number of registrar partners.",
        "Linked registrar accounts help direct eligible purchased domains to the correct registrar account.",
        "If your registrar is not available for linking, use the fulfillment information provided after purchase."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-003.png",
          alt: "Linked Partner Registrar Accounts section",
          points: [
            { n: 1, x: 12, y: 40, label: "Link action", text: "Use this link to start connecting a supported registrar account." }
          ]
        }
      ]
    },
    {
      id: "auction-history",
      eyebrow: "Records",
      title: "View Auction History",
      summary: "Use Order History to review domains you bid on and filter auction records by date range.",
      steps: [
        "Log in to your account.",
        "Mouse over Financial Center in the navigation bar.",
        "Click Order History.",
        "Review the domains that you bid on.",
        "Change the date range using Show records from.",
        "Use Custom to set From and To dates when needed."
      ],
      important: [
        "Order History can show current month, previous month, year to date, last year, all, or a custom date range.",
        "Use Order History when you need a record of auction participation.",
        "If you cannot find an expected auction record, widen the date range."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-004.png",
          alt: "SnapNames Order History page",
          points: [
            { n: 1, x: 53, y: 68, label: "Date range", text: "Change the date range to find older auction records." },
            { n: 2, x: 88, y: 79, label: "Auction fields", text: "Review winning bid, max bid, status, high bidder, and auction ended." }
          ]
        }
      ]
    },
    {
      id: "sms-notifications",
      eyebrow: "Alerts",
      title: "Set SMS Notifications",
      summary: "Add a mobile number and choose which auction notifications you want to receive.",
      steps: [
        "Log in to your account.",
        "Mouse over My Account on the navigation bar.",
        "Click Notifications.",
        "Enter the mobile number for text notifications.",
        "Enter the security code shown on the page.",
        "Click Save.",
        "Select the notifications you want.",
        "Click Save Settings."
      ],
      important: [
        "SMS notifications help you track auction events, but you still need to check auction status directly.",
        "The notification screen lists buyer alerts such as outbid, auction started, auctions ending soon, and auction won.",
        "The displayed screen notes that SMS service compatibility may depend on phone number location."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-005.png",
          alt: "SnapNames Notifications page",
          points: [
            { n: 1, x: 14, y: 46, label: "Mobile number", text: "Enter the country code and mobile number." },
            { n: 2, x: 18, y: 56, label: "Security code", text: "Type the code exactly as shown." },
            { n: 3, x: 23, y: 88, label: "Notification choices", text: "Choose the buyer alerts you want to receive." }
          ]
        }
      ]
    },
    {
      id: "backorders",
      eyebrow: "Buying domains",
      title: "Place Backorders",
      summary: "Search for a domain, add one or more domains to the cart, place the order, and track pending orders.",
      steps: [
        "Search for a domain name.",
        "Review the search results page and domain information.",
        "Click the backorder button beside a domain, or select checkboxes for multiple domains.",
        "If you selected checkboxes, click Add to Cart.",
        "Use Advanced Search or category links when you need more specific domain lists.",
        "Open the cart icon at the top of the page.",
        "Remove items or increase your bid before finalizing.",
        "Click Place Order to place the backorder.",
        "Track backorders from Buyer Dashboard, then Pending Orders."
      ],
      important: [
        "A backorder is a request to acquire a domain if SnapNames can obtain it.",
        "A backorder can become an auction when more than one customer is interested.",
        "Review the cart carefully before clicking Place Order."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-008.png",
          alt: "SnapNames search results with backorder options",
          points: [
            { n: 1, x: 39, y: 16, label: "Search term", text: "Search for the domain you want." },
            { n: 2, x: 10, y: 45, label: "Advanced filters", text: "Use filters when basic search results are too broad." },
            { n: 3, x: 97, y: 55, label: "Add to cart", text: "Use the cart action to begin a backorder." }
          ]
        },
        {
          src: "assets/extracted-pdf-images/snapnames-009.png",
          alt: "SnapNames Shopping Cart page",
          points: [
            { n: 1, x: 69, y: 53, label: "Bid amount", text: "Review or increase the bid amount before placing the order." },
            { n: 2, x: 93, y: 28, label: "Place Order", text: "Place the order after checking the cart." }
          ]
        },
        {
          src: "assets/extracted-pdf-images/snapnames-010.png",
          alt: "SnapNames Pending Orders page",
          points: [
            { n: 1, x: 48, y: 32, label: "Pending Orders", text: "Track backorders and orders before acquisition is complete." },
            { n: 2, x: 88, y: 51, label: "Download list", text: "Download pending order records when needed." }
          ]
        }
      ]
    },
    {
      id: "bulk-tools",
      eyebrow: "Bulk work",
      title: "Use Bulk Tools",
      summary: "Manage many domain orders at once with Bulk Order, Bulk Bid, Bulk Delete, and Bulk Set Favorite.",
      steps: [
        "Log in to your account.",
        "Click Bulk Tools to open the drop-down menu.",
        "Select Bulk Order, Bulk Bid, Bulk Delete, or Bulk Set Favorite.",
        "Enter the domains in the required format.",
        "Separate multiple entries with a space, comma, or one line at a time.",
        "Click Submit when the entries are ready."
      ],
      important: [
        "Bulk Order accepts up to 500 domains at one time.",
        "Bulk Order and Bulk Bid use domain and bid amount separated by a colon, such as Domain1.com:100.",
        "Bulk Set Favorite uses domain and action separated by a colon, such as Domain2.com:mark or Domain3.com:remove."
      ],
      details: [
        {
          title: "Bulk Order",
          copy: "Use Bulk Order to place multiple backorders. Format entries as Domain1.com:100."
        },
        {
          title: "Bulk Bid",
          copy: "Use Bulk Bid to update bids on multiple existing orders at one time. Format entries as Domain1.com:100."
        },
        {
          title: "Bulk Delete",
          copy: "Use Bulk Delete to remove multiple existing orders. Enter domain names and separate multiple entries with spaces, commas, or new lines."
        },
        {
          title: "Bulk Set Favorite",
          copy: "Use Bulk Set Favorite to mark or remove favorites. Format entries as Domain2.com:mark or Domain3.com:remove."
        }
      ]
    },
    {
      id: "download-auction-lists",
      eyebrow: "Auction lists",
      title: "Download Auction Lists",
      summary: "Download SnapNames inventory lists so you can review current and upcoming domain auctions outside the site.",
      steps: [
        "Log in to your account.",
        "Click Buyer Dashboard to open the drop-down list.",
        "Click Download Auction Lists.",
        "Choose the list type you need.",
        "Choose a date or download scope.",
        "Choose CSV or compressed text format.",
        "Download the file."
      ],
      important: [
        "CSV files can be opened in most spreadsheet programs such as Excel.",
        "Compressed text files can be extracted and opened in a text editor.",
        "Download options include specific date, all domains in the list, next five days, full data, and light data."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-013.png",
          alt: "SnapNames Auction Lists page",
          points: [
            { n: 1, x: 16, y: 38, label: "Available Soon", text: "Use this list for expiring and deleting names expected to begin auctioning soon." },
            { n: 2, x: 46, y: 38, label: "In Auction", text: "Use this list for names currently in auction." },
            { n: 3, x: 93, y: 25, label: "Download format", text: "Choose CSV or compressed text before downloading." }
          ]
        }
      ],
      details: [
        {
          title: "List types",
          copy: "Available Soon, In Auction, Expiring, Deleting, Top Registrar Domains, Top Domain Categories, Exclusive Web Domains, Premium Partner Domains, and Sell Your Domains auctions and Buy It Now listings."
        }
      ]
    },
    {
      id: "searches",
      eyebrow: "Search",
      title: "Search for Domains",
      summary: "Use basic search, advanced search, and saved searches to find domains and repeat useful search criteria.",
      steps: [
        "Log in to your account.",
        "Enter a domain in the search field in the header and click the magnifying glass, or click the magnifying glass to open search.",
        "Review search results and choose actions such as backorder, bid, or Buy It Now.",
        "For advanced search, open the search page and expand the advanced search fields and filters.",
        "Make selections or enter search data, then click Search.",
        "Click Reset to clear advanced fields and filters.",
        "To save a search, click the Save icon, enter a name, and click Save.",
        "To load a saved search, click Load, open the drop-down list, and select the saved search.",
        "To delete a saved search, load it, then click Delete."
      ],
      important: [
        "Basic search is the fastest path when you know the domain or keyword.",
        "Advanced search helps narrow results by criteria such as source, listing type, TLD, exclusions, and maximums.",
        "Saved searches are useful for repeat buying patterns."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-016.png",
          alt: "SnapNames search page with filters and saved search controls",
          points: [
            { n: 1, x: 39, y: 16, label: "Search field", text: "Enter a domain or keyword." },
            { n: 2, x: 11, y: 53, label: "Filters", text: "Use filters for source, listing type, TLDs, exclusions, and maximums." },
            { n: 3, x: 80, y: 16, label: "Save and Load", text: "Save useful searches and load them later." }
          ]
        }
      ]
    },
    {
      id: "inventory-types",
      eyebrow: "Domain inventory",
      title: "Understand Inventory Types",
      summary: "Know the difference between Expiry, Pending Delete, Exclusive, and Buy It Now inventory before choosing an action.",
      steps: [
        "Review the inventory type shown for the domain.",
        "Check whether the domain has a cutoff time.",
        "Place the backorder before the cutoff if the inventory type requires it.",
        "Use Buy It Now when the listing is available for immediate purchase.",
        "Use auction and pending order pages to track what happens next."
      ],
      important: [
        "Expiry backorders must be placed no later than 9 PM PT the night before the release date posted on SnapNames.",
        "Pending Delete backorders must be placed no later than 10:45 AM PT on the release date posted on SnapNames.",
        "Buy It Now listings are available for instant purchase without bidding."
      ],
      details: [
        {
          title: "Expiry",
          copy: "SnapNames works with Priority Partner registrars to acquire domains after they have expired and gone through the 30 to 45 day Grace Period, before the Renewal Grace Period."
        },
        {
          title: "Pending Delete",
          copy: "After the Redemption Grace Period, a domain enters Pending Delete while the registry processes deletion. Approximately six days later, the domain can become available."
        },
        {
          title: "Exclusive",
          copy: "Exclusive domains are available only on SnapNames."
        },
        {
          title: "Buy It Now",
          copy: "Buy It Now listings are available for instant purchase with no bidding required."
        }
      ]
    },
    {
      id: "payment-options",
      eyebrow: "Payment",
      title: "Payment Options",
      summary: "Use Payment Center and Add Funds to pay for domains and understand when bank transfer is required.",
      steps: [
        "Log in to your account.",
        "Mouse over Financial Center on the navigation bar.",
        "Click Payment Center.",
        "Click Add Funds Now to make a payment.",
        "For payments under $50,000, use the available payment methods shown on the page.",
        "For payments of $50,000 or more, use bank-to-bank direct transfer."
      ],
      important: [
        "Payment options listed for payments under $50,000 include credit card, PayPal, and bank-to-bank direct funds transfer.",
        "Notify SnapNames by email before initiating a bank-to-bank direct funds transfer.",
        "Bank transfer options include Domestic ACH, Domestic Wire, and International Wire."
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-021.png",
          alt: "SnapNames Payment Center page",
          points: [
            { n: 1, x: 10, y: 70, label: "Amount owed", text: "Review total amount owed, funds in account, and additional funds needed." },
            { n: 2, x: 43, y: 66, label: "Add Funds Now", text: "Use this action when payment is needed." },
            { n: 3, x: 52, y: 55, label: "Payment policy", text: "Read payment method limits before choosing a payment method." }
          ]
        },
        {
          src: "assets/extracted-pdf-images/snapnames-022.png",
          alt: "SnapNames Add Funds page",
          points: [
            { n: 1, x: 87, y: 33, label: "Payment method", text: "Choose an available payment method and enter the amount." },
            { n: 2, x: 36, y: 65, label: "Transfer information", text: "Use the transfer instructions when bank transfer is required." }
          ]
        }
      ]
    },
    {
      id: "support-tickets",
      eyebrow: "Support",
      title: "Support Tickets",
      summary: "Create and monitor support tickets when account, payment, auction, or fulfillment questions need support.",
      steps: [
        "Log in to your account.",
        "Click Support in the header.",
        "Go to Help Center.",
        "Click Create New Ticket.",
        "Complete the ticket form.",
        "Click Submit.",
        "Monitor the ticket from the support ticket list.",
        "Click See Details to open the complete ticket.",
        "Sort the ticket list by columns or search for specific tickets."
      ],
      important: [
        "Include the domain name, account email, order or auction context, and a clear description of what happened.",
        "Use Help Center FAQs for common questions before creating a ticket.",
        "For support by phone, call 1-877-352-5630."
      ],
      links: [
        {
          label: "Open SnapNames Support",
          href: "https://SnapNames.com/support/"
        }
      ],
      screens: [
        {
          src: "assets/extracted-pdf-images/snapnames-025.png",
          alt: "SnapNames Help Center and Online Customer Support page",
          points: [
            { n: 1, x: 52, y: 40, label: "FAQs", text: "Review FAQ categories for common topics." },
            { n: 2, x: 90, y: 71, label: "Create New Ticket", text: "Open a new support ticket when self-service help is not enough." },
            { n: 3, x: 91, y: 87, label: "See Details", text: "Open a ticket to view the complete conversation." }
          ]
        }
      ]
    }
  ],
  glossary: [
    {
      term: "Backorder",
      definition: "A request to acquire a domain if SnapNames can obtain it. A backorder can lead to an auction when more than one customer is interested."
    },
    {
      term: "Verified Bidder",
      definition: "A SnapNames account that completed the verification process and can participate more fully in auctions."
    },
    {
      term: "Maximum Bid",
      definition: "The highest amount you are willing to bid in an auction."
    },
    {
      term: "Pending Orders",
      definition: "The Buyer Dashboard area used to track backorders and orders before acquisition or completion."
    },
    {
      term: "Expiry",
      definition: "An inventory type related to expired domains from partner registrars. Backorder cutoff timing matters."
    },
    {
      term: "Pending Delete",
      definition: "A domain state after the Redemption Grace Period while the registry processes deletion."
    },
    {
      term: "Exclusive",
      definition: "A domain available only on SnapNames."
    },
    {
      term: "Buy It Now",
      definition: "A listing available for immediate purchase without bidding."
    }
  ]
};

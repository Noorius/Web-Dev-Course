export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  rating: number;
  category: string;
}

export const items = 
[
  {
    id:1,
    url: "https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225007011_1_3",
    name: "Monitor",
    price: 139.97,
    description: "Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
    image1: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/61FU4QixmRL._AC_SX679_.jpg",
    image3: "https://m.media-amazon.com/images/I/61ErMXHUtRL._AC_SX679_.jpg",
    rating: 4.6,
    category: "Electronic",
    likes: 0
  },
  {
    id:2,
    url: "https://www.amazon.com/TAKAGI-Charging-Connector-Transfer-Compatible/dp/B07PHSF8DP/ref=lp_16225007011_1_6?th=1",
    name: "iPhone Charger",
    price: 9.99,
    description: "TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 13/12/11 Pro Max/XS MAX/XR/XS/X/8/7/Plus/6S/6/SE/5S/iPad",
    image1: "https://m.media-amazon.com/images/I/71m-EsCA2aL._SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/61Jv0BwJVVL._SX522_.jpg",
    image3: "https://m.media-amazon.com/images/I/61KYy3eIxyL._SX522_.jpg",
    rating: 4.4,
    category: "Electronic",
    likes: 0
  },
  {
    id:3,
    url: "https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/?_encoding=UTF8&pd_rd_w=5AIZH&pf_rd_p=ba25a0fb-eeb9-4762-9c76-8ca869df5234&pf_rd_r=1SRBFY3XQTE6J0BJ2XFE&pd_rd_r=849be43d-5c49-430e-8e4a-efd3cdb1f447&pd_rd_wg=WdEKZ&ref_=pd_gw_exports_top_sellers_unrec",
    name: "I Love You to the Moon and Back",
    price: 4.31,
    description: "Show a child just how strong your love is every minute of the day! Features a 'To' and 'From' personalization page, making this sweet offering an ideal gift for baby showers, birthdays, and new parents.",
    image1: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX258_BO1,204,203,200_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/A1OuRF2FJ6L.jpg",
    rating: 4.9,
    category: "Book",
    likes: 0
  },
  {
    id:4,
    url: "https://www.amazon.com/Nuby-Ice-Gel-Teether-Keys/dp/B003N9M6YI/?_encoding=UTF8&pd_rd_w=1pATE&pf_rd_p=a055fed9-eb2d-4497-b602-958472398563&pf_rd_r=WZ74TD3MNDVZXNPSAXHX&pd_rd_r=e375551d-97f0-4429-8e32-b104f58e2f64&pd_rd_wg=N1kxb&ref_=pd_gw_exports_top_sellers_unrec",
    name: "Nuby Ice Gel Teether Keys",
    price: 3.89,
    description: "Learn through play! The Nuby IcyBite Keys teether is another innovation in the natural teething process; a toy which combines exercises for young hands, gums, and teeth as well as providing visual stimulation for your baby.",
    image1: "https://m.media-amazon.com/images/I/81A40fe4mtL._SX466_.jpg",
    image2: "https://m.media-amazon.com/images/I/81yn38xQOOL._SX466_.jpg",
    image3: "https://m.media-amazon.com/images/I/41pXBDjWs9L.jpg",
    rating: 4.7,
    category: "House",
    likes: 0
  },
  {
    id:5,
    url: "https://www.amazon.com/Elden-Ring-PlayStation-5/dp/B09743F8P6/ref=lp_16225016011_1_7",
    name: "Elden Ring",
    price: 59.99,
    description: "ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware's largest game to date, set within a world full of mystery and peril.",
    image1: "https://m.media-amazon.com/images/I/81goNGEYm6L._SX425_.jpg",
    image2: "https://m.media-amazon.com/images/I/81vxO9nwRnL._SX522_.jpg",
    image3: "https://m.media-amazon.com/images/I/81hlzAo27uL._SX522_.jpg",
    rating: 4.2,
    category: "Entertainment",
    likes: 0
  },
  {
    id:6,
    url: "https://www.amazon.com/SAMSUNG-86-inch-Crystal-TU9010-Built/dp/B094C627M5/ref=sr_1_18?field-shipping_option-bin=3242350011&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=85a9188d-dbd5-424e-9512-339a1227d37c&pf_rd_r=6KAK8QSZ4M8JB95PD7DZ&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1646850910&rnid=1266092011&s=electronics&sr=1-18",
    name: "SAMSUNG TV",
    price: 2882,
    description: "CRYSTAL PROCESSOR 4K: This ultra fast processor transforms everything you watch into stunning 4K. MOTION RATE 240: Minimizes motion blur on screen, so action packed movies and sports stay smooth and crisp.",
    image1: "https://m.media-amazon.com/images/I/91uYabXqo8L._AC_SX466_.jpg",
    image2: "https://m.media-amazon.com/images/I/713LVHzRdhS._AC_SX466_.jpg",
    image3: "https://m.media-amazon.com/images/I/81Tp-+MmoZL._AC_SX466_.jpg",
    rating: 4.6,
    category: "Electronic",
    likes: 0
  },
  {
    id:7,
    url: "https://www.amazon.com/FAFOFA-Workout-Outfits-Seamless-Leggings/dp/B08V16PNQY/ref=sr_1_9?crid=35VASF1PUTZR&keywords=comfy+loungewear&pd_rd_r=47f17339-aaf7-42e8-a6d7-aaf0ca6d9a7a&pd_rd_w=03qqo&pd_rd_wg=F3Weg&pf_rd_p=bb27b743-d39d-4423-a18e-dd1d61011f4f&pf_rd_r=XDGEN04RGJFK0YMG6KMH&qid=1646851244&rnid=7141123011&s=apparel&sprefix=comfy+lo%2Cfashion-womens-clothing%2C205&sr=1-9",
    name: "Workout Outfits",
    price: 35.99,
    description: "78% nylon + 22% spandex, ribbed stretchy fabric; high impact;quick-drying fabric Wear-resistant high elastic,skin-friendly, Moisture wicking,comfortable,breathable.medium thickness, moisture wicking and quick dry. 4-way stretch material to promote both soft and compression.",
    image1: "https://m.media-amazon.com/images/I/61NZb48vF4L._AC_UY606_.jpg",
    image2: "https://m.media-amazon.com/images/I/51qpvvvqcFL._AC_UY606_.jpg",
    image3: "https://m.media-amazon.com/images/I/51yUTQKhvQS._AC_UY606_.jpg",
    rating: 4.6,
    category: "House",
    likes: 0
  },
  {
    id:8,
    url: "https://www.amazon.com/Beginning-Angular-Typescript-updated-ebook/dp/B01N9ZUHBA/ref=sr_1_8?crid=26IAE20774I5A&keywords=angular&qid=1646851530&s=books&sprefix=angular%2Cstripbooks-intl-ship%2C570&sr=1-8",
    name: "Beginning Angular with Typescript",
    price: 9.99,
    description: "Angular is one of the leading frameworks to develop apps across all platforms. Reuse your code and build fast and high performing apps for any platform be it web, mobile web, native mobile and native desktop. You use small manageable components to build a large powerful app. No more wasting time hunting for DOM nodes!",
    image1: "https://m.media-amazon.com/images/P/B01N9ZUHBA.01._SCLZZZZZZZ_SX500_.jpg",
    image2: "https://m.media-amazon.com/images/P/1492037656.01._SCLZZZZZZZ_SX500_.jpg",
    image3: "https://m.media-amazon.com/images/P/1839210664.01._SCLZZZZZZZ_SX500_.jpg",
    rating: 4.1,
    category: "Book",
    likes: 0
  },
  {
    id:9,
    url: "https://www.amazon.com/Lenovo-IdeaPad-Processor-Graphics-82KT00GVUS/dp/B09BG841VC/ref=sr_1_25?qid=1646851753&rnid=16225007011&s=computers-intl-ship&sr=1-25",
    name: "Lenovo IdeaPad 3",
    price: 529.00,
    description: "Laptop, 14.0' FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 256GB Storage, AMD Radeon 7 Graphics, Windows 11 Home, Abyss Blue",
    image1: "https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_SX466_.jpg",
    image2: "https://m.media-amazon.com/images/I/81uEWVxAi7L._AC_SX466_.jpg",
    image3: "https://m.media-amazon.com/images/I/71i9nJ5IWbL._AC_SX466_.jpg",
    rating: 4.6,
    category: "Electronic",
    likes: 0
  },
  {
    id:10,
    url: "https://www.amazon.com/AVENGERS-ENDGAME-Blu-ray-Robert-Downey/dp/B07RX2JVBQ/ref=pd_sbs_2/141-6051070-2384355?pd_rd_w=WFbyp&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=X5QG071YX53DXHB7JSAN&pd_rd_r=b296f817-24bb-4b9f-871b-bc6b441aa4e3&pd_rd_wg=xnzUl&pd_rd_i=B07RX2JVBQ&psc=1",
    name: "AVENGERS: ENDGAME",
    price: 13.22,
    description: "The fourth installment of the Avengers series is the once-in-a-lifetime culmination of 22 interconnected films and the climax of an epic journey. Earth's heroes will finally understand how fragile our reality really is -- and the sacrifices that must be made to uphold it -- in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle. Peter Travers of Rolling Stone says, 'Prepare to be wowed!'",
    image1: "https://m.media-amazon.com/images/I/81rypQUyjFL._SL1363_.jpg",
    image2: "https://m.media-amazon.com/images/I/91tl4pFLPpL._SL1500_.jpg",
    image3: "https://m.media-amazon.com/images/I/71V6LC4eY+L.jpg",
    rating: 4.8,
    category: "Entertainment",
    likes: 0
  },
  {
    id:11,
    url: "https://www.amazon.com/Verbatim-Optical-Mouse-Accessibility-Compatible/dp/B00LPC3O3M/?_encoding=UTF8&pd_rd_w=mj8f5&pf_rd_p=26dacb9e-c45b-4443-bb96-74ce304824a7&pf_rd_r=EMVM4JJT42YJ768XVPZG&pd_rd_r=4830aed1-9b02-4ce1-a25a-72038d3b6063&pd_rd_wg=dyzuh&ref_=pd_gw_exports_top_sellers_unrec",
    name: "Computer Mouse",
    price: 5.99,
    description: "Contoured design with sleek, glossy finish. High-resolution optical technology for smooth and precise tracking. Scroll wheel for smooth and precise scrolling",
    image1: "https://m.media-amazon.com/images/I/61BTJc43aWL._AC_SL1500_.jpg",
    image2: "https://m.media-amazon.com/images/I/612iPo3ypBL._AC_SL1500_.jpg",
    image3: "https://m.media-amazon.com/images/I/61Yyz7Yl0XL._AC_SL1500_.jpg",
    rating: 4.5,
    category: "Electronic",
    likes: 0
  },
  {
    id:12,
    url: "https://www.amazon.com/Spider-Man-Todd-McFarlane-Complete-Collection/dp/1302923730/ref=sr_1_10?crid=2MTHWRGWJHJ1S&keywords=comics&qid=1647075301&sprefix=comi%2Caps%2C569&sr=8-10",
    name: "Spider-Man Comics",
    price: 35.99,
    description: "Todd McFarlane became a superstar illustrating AMAZING SPIDER-MAN, but he changed the industry forever with his next project: the 'adjectiveless' SPIDER-MAN! Taking on both writing and art duties, McFarlane ushered Peter Parker into a gritty new era - and it began with 'Torment'! When the Big Apple's streets run red with blood, the web-slinger heads into the sewers to stop the Lizard's homicidal rampage. But what is driving his old friend and foe? ",
    image1: "https://images-na.ssl-images-amazon.com/images/I/616u52ccygL._SX323_BO1,204,203,200_.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/51RiXEXZuQL.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81DjOct3fhL.jpg",
    rating: 4.7,
    category: "Book",
    likes: 0
  },
  {
    id:13,
    url: "https://www.amazon.com/Vintage-Parlour-Dominoes-Tic-Tac-Toe-Engraved/dp/B07K1DV47W/ref=sr_1_49?crid=286ZTEXGCYP82&keywords=table+game&qid=1647078066&sprefix=table+game%2Caps%2C336&sr=8-49",
    name: "Parlour Game Set",
    price: 34.99,
    description: "Step into the past with this vintage wooden parlour game set. These classic, indoor leisure games have stood the test of time, promoting logic and word-play for year. Includes 28 wooden dominoes, 9 wooden Tic Tac Toe tokens, and 10 wooden dice. Play classic Dominoes and Tic Tac Toe and use wooden dice to play games like Bunco, Farkle, and Yahtzee.",
    image1: "https://m.media-amazon.com/images/I/81bmy45ADLL._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/81PYxttP5NL._AC_SX679_.jpg",
    image3: "https://m.media-amazon.com/images/I/81Hq95bk3zL._AC_SX679_.jpg",
    rating: 4.1,
    category: "Entertainment",
    likes: 0
  },
  {
    id:14,
    url: "https://www.amazon.com/dp/B01CIG8PVY/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B01CIG8PVY&pd_rd_w=7UCJF&pf_rd_p=57cbdc41-b731-4e3d-aca7-49078b13a07b&pd_rd_wg=IyWvU&pf_rd_r=3BCNHGS79JAHN37X9JC1&pd_rd_r=5534c0cf-03f1-4e8a-ae40-be3748547a9b&s=toys-and-games&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMVZXT0hQR0JBU05HJmVuY3J5cHRlZElkPUEwNTM3NTA0MUFFSTU4WUpIRFpCOCZlbmNyeXB0ZWRBZElkPUEwODYyNzg4U0VGM1dHUzlIMDRKJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    name: "International Chess Set",
    price: 49.96,
    description: "metal Handmade Folding Wooden Chessboard Metal Chess Pieces With 2.6'/6.6cm King Environmental Metallic Material, Exquisite And Easy-carry The Size:29*28.5*2.8cm(11.4*11.2*1.1inch) Metal Lock Catch on The Chessboard",
    image1: "https://m.media-amazon.com/images/I/51U8tig-eDL._AC_.jpg",
    image2: "https://m.media-amazon.com/images/I/41nodSniGuL._AC_.jpg",
    image3: "https://m.media-amazon.com/images/I/51I+S0FxmHL._AC_.jpg",
    rating: 4.5,
    category: "Entertainment",
    likes: 0
  },
  {
    id:15,
    url: "https://www.amazon.com/Bedsure-Pieces-Alternative-Comforter-Pillowcases/dp/B07NYR18X4/ref=sr_1_30_sspa?qid=1647078594&rnid=16225011011&s=kitchen-intl-ship&sr=1-30-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSDkxMEtJREhVNE9SJmVuY3J5cHRlZElkPUEwMDQwODk0M1FQRFdDRzI3WUZGNCZlbmNyeXB0ZWRBZElkPUEwODcyNTMwMlVBUldLVllQU0FNWCZ3aWRnZXROYW1lPXNwX2J0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
    name: "Bedsure Queen Comforter",
    price: 67.99,
    description: "Preferred Fabric: Crafted from brushed microfiber fabric, this 100% polyester pinch pleat queen comforter set with a subtle texture is ultra-soft against the skin. A cloud-like down alternative filling creates a fluffy comforter, providing just the right amount of warmth.",
    image1: "https://m.media-amazon.com/images/I/71jWVkoXshL._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/818SgQQUZXS._AC_SX679_.jpg",
    image3: "https://m.media-amazon.com/images/I/81YUOvyiijL._AC_SX679_.jpg",
    rating: 4.6,
    category: "House",
    likes: 0
  },
  {
    id:16,
    url: "https://www.amazon.com/MR-SIGA-Microfiber-Cleaning-Cloth-Pack/dp/B07HRCDDL1/ref=sr_1_21?qid=1647078778&s=kitchen-intl-ship&sr=1-21",
    name: "Microfiber Cleaning Cloth",
    price: 12.99 ,
    description: "ULTRA SOFT MATERIAL & SCRATCH FREE - Ultra soft and highly absorbent microfiber cleaning cloths, great for cleaning windows, kitchenware, car or other delicate surfaces.",
    image1: "https://m.media-amazon.com/images/I/71qdeSw6NSL._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/712XqjmhfNL._AC_SX679_.jpg",
    image3: "https://m.media-amazon.com/images/I/71G+FDe3nIL._AC_SX679_.jpg",
    rating: 4.7,
    category: "House",
    likes: 0
  },
  {
    id:17,
    url: "https://www.amazon.com/%E3%80%90Upgraded%E3%80%91Bedside-Charging-Dimmable-Nightstand-Included/dp/B09BN14TRD/ref=sr_1_8?crid=ZUR1SVUI0NPI&keywords=lamp&qid=1647078905&sprefix=la%2Caps%2C352&sr=8-8",
    name: "Bedside Lamp",
    price: 25.49,
    description: "❤️ Featured with touch-sensitive sensor, our touch control table lamp allows you to make quick changes to three different brightness, and soften the atmosphere quickly for you. Simply a touch/ pat on our bedside lamps' base or supporting pole with eyes closed when you want the nightstand lamp on, off, brighter, or dimmer.",
    image1: "https://m.media-amazon.com/images/I/71z88GeI4uL._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/81xpqjfwrWL._AC_SX569_.jpg",
    image3: "https://m.media-amazon.com/images/I/81S42vDqmlL._AC_SX569_.jpg",
    rating: 4.6,
    category: "House",
    likes: 0
  },
  {
    id:18,
    url: "https://www.amazon.com/Hasbro-Gaming-Game-Life-Minigames/dp/B08TPLKMYT/ref=sr_1_5?crid=13VXTYBQ98ARW&keywords=game&qid=1647080154&sprefix=ga%2Caps%2C411&sr=8-5",
    name: "Super Mario Edition Board Game",
    price: 21.99,
    description: "INSPIRED BY SUPER MARIO: It's The Game of Life board game with an exciting twist featuring Super Mario video game-inspired characters, artwork, and gameplay.",
    image1: "https://m.media-amazon.com/images/I/71DJVHtPkTS._AC_SX679_.jpg",
    image2: "https://m.media-amazon.com/images/I/91+56vFgfMS._AC_SX679_.jpg",
    image3: "https://m.media-amazon.com/images/I/71oIAH3rw0S._AC_SX679_.jpg",
    rating: 4.8,
    category: "Entertainment",
    likes: 0
  },
  {
    id:19,
    url: "https://www.amazon.com/dp/0375851569/ref=s9_acsd_ri_bw_c2_x_1_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-12&pf_rd_r=GWE6H0P8PC6124J814WE&pf_rd_t=101&pf_rd_p=912614e3-2b52-463a-bdbb-07c9749935a7&pf_rd_i=283155",
    name: "Dr. Seuss's Beginner Book Collection",
    price: 26.47,
    description: "Originally created by Dr. Seuss himself, Beginner Books are fun, funny, and easy to read. These unjacketed hardcover early readers encourage children to read all on their own, using simple words and illustrations. Smaller than the classic large format Seuss picture books like The Lorax and Oh, The Places You’ll Go!, these portable packages are perfect for practicing readers ages 3-7—and lucky parents too!",
    image1: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/51-Vs0xmmAL._SX339_BO1,204,203,200_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._SX339_BO1,204,203,200_.jpg",
    rating: 4.9,
    category: "Book",
    likes: 0
  },
  {
    id:20,
    url:"https://www.amazon.com/Little-Trucks-Springtime-Alice-Schertle/dp/0544938097/ref=lp_17143709011_1_7",
    name: "Little Blue Truck's Springtime",
    price: 7.66,
    description: "Beep! Beep! Little Blue Truck is out for a ride with his good friend Toad. The sun is shining and the flowers are blooming—it's a beautiful spring day! Who will they see along the way? Open the flaps to meet all of the sweet baby animals just born on the farm. Peep! Peep!",
    image1: "https://images-na.ssl-images-amazon.com/images/I/81uv7QtqJ0L.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/91MQ2Eus+aL.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81LCVS0bvtL.jpg",
    rating: 4.8,
    category: "Book",
    likes: 0
  }
]

export const products = [
  {
    id: 1,
    url: "",
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image1: "",
    image2: "",
    image3: "",
    rating: 0,
    category: "Electronic"
  },
  {
    id: 2,
    url: "",
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image1: "",
    image2: "",
    image3: "",
    rating: 0,
    category: "Electronic"
  },
  {
    id: 3,
    url: "",
    name: 'Phone Standard',
    price: 299,
    description: '',
    image1: "",
    image2: "",
    image3: "",
    rating: 0,
    category: "Electronic"
  }
];




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
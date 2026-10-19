/**
 * Centralized Configuration & Business Data for One Way Pizza
 * Strict adherence to CLIENT_BRIEF.md and user-supplied official Deals Flyer.
 */
const ONE_WAY_DATA = {
  business: {
    name: "One Way Pizza",
    tagline: "Good Pizza Goes a Long Way",
    subtagline: "Authentic, oven-baked Lahore flavor packed with fresh ingredients and generous cheese.",
    city: "Lahore, Punjab, Pakistan",
    address: {
      line1: "Ground Floor, Fajar Plaza, Shop 19, opposite Duniya News",
      line2: "Abbott Road, near Shimla Pahari Road, Garhi Shahu",
      city: "Lahore",
      state: "Punjab",
      postalCode: "54000",
      country: "Pakistan",
      full: "Ground Floor, Fajar Plaza, Shop 19, opposite Duniya News, Abbott Road, near Shimla Pahari Road, Garhi Shahu, Lahore, Punjab, Pakistan, 54000"
    },
    phones: [
      { display: "0309-0614460", raw: "+923090614460", label: "WhatsApp & Order Hotline (Flyer)" },
      { display: "+92 310 2021222", raw: "+923102021222", label: "Primary Order Line" },
      { display: "+92 303 2500034", raw: "+923032500034", label: "Secondary / Inquiries" }
    ],
    links: {
      whatsapp: "https://wa.me/923090614460",
      foodpanda: "https://www.foodpanda.pk/restaurant/ktfh/one-way-pizza-ktfh",
      googleMaps: "https://www.google.com/maps/search/?api=1&query=One+Way+Pizza+Abbott+Road+Lahore",
      directory: "https://www.bizsouthasia.com/PK/one-way-pizza-0303-2500034"
    },
    hours: [
      { days: "Monday – Friday", time: "11:00 AM – 1:30 AM", note: "Late night service" },
      { days: "Saturday", time: "11:00 AM – 2:00 AM", note: "Weekend late night" },
      { days: "Sunday", time: "11:00 AM – 1:30 AM", note: "Late night service" }
    ],
    hoursStatusNote: "Provisional schedule subject to owner confirmation. Late closing times cross midnight."
  },

  menu: [
    {
      id: "special",
      name: "One Way Special Pizza",
      category: "specialty",
      badge: "Chef's Signature",
      description: "Our hallmark recipe loaded with seasoned grilled chicken, savory sausages, mushrooms, black olives, melted golden mozzarella and aromatic garden herbs.",
      image: "assets/images/special_pizza.jpg",
      priceNote: "Available in Deals & A La Carte",
      featured: true
    },
    {
      id: "fajita",
      name: "Chicken Fajita Pizza",
      category: "classic",
      badge: "Lahore Favorite",
      description: "Traditional spicy fajita-marinated chicken breast, crunchy green and red bell peppers, sliced sweet onions, and rich stringy mozzarella cheese.",
      image: "assets/images/fajita_pizza.jpg",
      priceNote: "Available in Deals & A La Carte",
      featured: true
    },
    {
      id: "supreme",
      name: "Super Supreme Pizza",
      category: "specialty",
      badge: "Loaded Supreme",
      description: "A feast for pizza lovers packed with rich savory toppings, mushrooms, capsicum, olives, and premium layered cheese on a crisp crust.",
      image: "assets/images/super_supreme_pizza.jpg",
      priceNote: "Available in Deals & A La Carte",
      featured: true
    },
    {
      id: "hot-spicy",
      name: "Hot & Spicy Pizza",
      category: "spicy",
      badge: "Spicy Kick",
      description: "Fiery hot chicken, spicy green chillies, zesty herb-infused tomato sauce, and double mozzarella cheese for those who love bold heat.",
      image: "assets/images/hot_spicy_pizza.jpg",
      priceNote: "Available in Deals & A La Carte",
      featured: true
    }
  ],

  // 9 Verified Official Deals from Client Supplied Menu Flyer
  deals: [
    {
      id: "deal-1",
      number: "Deal #1",
      title: "2 Large Pizzas Feast",
      items: ["2 Large Pizzas", "1.5L Cold Drink", "Garlic Bread"],
      price: "Rs. 2499",
      badge: "Family Favorite",
      popular: true
    },
    {
      id: "deal-2",
      number: "Deal #2",
      title: "3 Medium Pizzas Mega Combo",
      items: ["3 Medium Pizzas", "3 Cold Drinks", "Garlic Bread"],
      price: "Rs. 3499",
      badge: "Party Pack",
      popular: false
    },
    {
      id: "deal-3",
      number: "Deal #3",
      title: "3 Zinger Burgers Combo",
      items: ["3 Crispy Zinger Burgers", "Small Fries", "500ml Coke"],
      price: "Rs. 1099",
      badge: "Burger Lover",
      popular: true
    },
    {
      id: "deal-4",
      number: "Deal #4",
      title: "Any Large Pizza Special",
      items: ["Any Large Pizza", "1 Garlic Bread", "1 Cold Drink"],
      price: "Rs. 1599",
      badge: "Special Pick",
      popular: true
    },
    {
      id: "deal-5",
      number: "Deal #5",
      title: "Buy 1 Get 1 Free",
      items: ["Buy 1 Medium Pizza", "Get 1 Medium Pizza Free", "Garlic Bread"],
      price: "Weekend Offer",
      badge: "Weekend Special",
      popular: true
    },
    {
      id: "deal-6",
      number: "Deal #6",
      title: "Student Discount Deal",
      items: ["Any Medium Pizza", "500ml Drink", "Show Your Student ID"],
      price: "Rs. 1199",
      badge: "Student Deal 🎓",
      popular: false
    },
    {
      id: "deal-7",
      number: "Deal #7",
      title: "Pizza & Wings Combo",
      items: ["1 Large Pizza", "6 Chicken Wings", "1 Cold Drink"],
      price: "Rs. 1899",
      badge: "Wings & Pizza",
      popular: true
    },
    {
      id: "deal-8",
      number: "Deal #8",
      title: "2 Pizzas Value Duo",
      items: ["2 Pizzas", "Garlic Bread", "2 Cold Drinks"],
      price: "Rs. 1999",
      badge: "Duo Value",
      popular: false
    },
    {
      id: "deal-9",
      number: "Deal #9",
      title: "Pizza Makes Everything Better",
      items: ["1 Fresh Hot Delicious Pizza", "Melting Mozzarella Pull", "Savory Spices"],
      price: "Rs. 999",
      badge: "Only Rs. 999",
      popular: true
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ONE_WAY_DATA;
}

import dashboard from "../images/farm2.png";
import memoryimg from "../images/biglogo.png";

import brand2 from "../images/brand2.png";
import brand3 from "../images/bookingcom.png";
import brand4 from "../images/workaway.png";
import brand5 from "../images/tripadvisor.svg";

import place1 from "../images/gunungpadang.jpg";
import place2 from "../images/tamanbunga.jpg";
import place3 from "../images/littlevenice.jpeg";
import place4 from "../images/floatingvillagge.jpg";
import place5 from "../images/masjid.jpg";
import place6 from "../images/alun.jpeg";
import place7 from "../images/tamanprawatasari.jpg";
import place8 from "../images/kebunraya.jpg";
import place9 from "../images/citymall.jpg";
import place10 from "../images/jayanti.webp";
import place11 from "../images/citambur.jpg";
import place12 from "../images/gunung.jpeg";
import place13 from "../images/theniece.png";
import place14 from "../images/cikondang.jpg";
import place15 from "../images/karangpotong.jpg";
import place16 from "../images/sevillage.jpg";

import standardicon from "../images/doublebed.jpg";
import preminumicon from "../images/singlebed.jpg";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

import banner from "../images/model.jpg";

export const brands = [
  {
    link: "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    iconSrc: brand2,
  },
  {
    link: "https://www.booking.com/hotel/id/farmstay-mananggel-kabupaten-cianjur1.id.html",
    iconSrc: brand3,
  },
  { link: "https://www.workaway.info/en/host/381591867438", iconSrc: brand4 },
  {
    link: "https://www.tripadvisor.com/Hotel_Review-g1006216-d25421193-Reviews-Farmstay_Manangel-Cianjur_West_Java_Java.html",
    iconSrc: brand5,
  },
];

export const navlinks = [
  { link: "Home", id: "/" },
  { link: "About", id: "about" },
  { link: "Experience", id: "experience" },
  { link: "Our Guest", id: "guest" },
  { link: "Gallery", id: "gallery" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  title: "It's a Beautiful World",
  subtitle: "With Farmstay Manangel",
  text: "Discover rustic charm and genuine hospitality at our village farmstay. Run by two passionate villagers, we invite you to experience our culture, traditions, and the beauty of nature. Join us for an authentic and enriching getaway that captures the essence of rural living.",
  btn1: "See Our Guests",
  btn2: "Read an Article",
  img: dashboard,
};

export const memory = {
  title: "Reviving Memories",
  subtitle: "Through Journeys",
  text: "Travel has a magical way of reviving our cherished memories, whether through familiar landscapes, new acquaintances, or shared experiences",
  img: memoryimg,
  experience: [
    { number: "2 years", title: "Experiences" },
    { number: "100+", title: "Guests" },
    { number: "75+", title: "Transactions" },
  ],
};

export const placesAPI = [
  { placeImg: place1, location: "Wisata Situs Gunung Padang", distance: "4.6" },
  {
    placeImg: place2,
    location: "Taman Bunga Nusantara",
    distance: "4.6",
  },
  { placeImg: place3, location: "Little Venice Kota Bunga", distance: "4.2" },
  { placeImg: place4, location: "Floating Village", distance: "4.0" },
  {
    placeImg: place5,
    location: "Masjid Agung Cianjur",
    distance: "4.4",
  },
  {
    placeImg: place6,
    location: "Taman Alun-alun Cianjur",
    distance: "4.5",
  },
  {
    placeImg: place8,
    location: "Kebun Raya Cibodas",
    distance: "4.6",
  },
  {
    placeImg: place9,
    location: "City Mall Cianjur",
    distance: "4.1",
  },
  {
    placeImg: place7,
    location: "Taman Prawatasari Cianjur",
    distance: "4.1",
  },
  {
    placeImg: place10,
    location: "Pantai Jayanti",
    distance: "4.1",
  },
  {
    placeImg: place16,
    location: "Sevillage Ciloto Puncak",
    distance: "4.9",
  },

  { placeImg: place11, location: "Curug Citambur", distance: "5.5" },

  {
    placeImg: place12,
    location: "Gunung Gede Paranggo",
    distance: "5.0",
  },

  { placeImg: place13, location: "The Nice Funtastic Park", distance: "4.6" },
  { placeImg: place14, location: "Curug Cikondang", distance: "4.6" },
  { placeImg: place15, location: "Karang Potong Ocean", distance: "4.4" },
];

export const pricingapi = {
  title: "Choose The Plan That Suits You",
  text: "Cultivate Confidence by Thoughtfully Choosing the Plan that Best Aligns with Your Unique Needs and Preferences.",
  btn1: "Monthly",
  btn2: "Yearly",
  plans: [
    {
      planicon: standardicon,
      title: "Double Bed",
      text: "Experience the charm of a traditional Sundanese room, nestled in the heart of our enchanting farmstay",
      price: "250.000",
      plantype: "Free / Year",
      plancontent: [
        { iconbox: checkbox, text: "Views of mountains, rivers, valleys" },
        {
          iconbox: checkbox,
          text: "Shampoo, Body soap, & Shower gel",
        },
        {
          iconbox: checkbox,
          text: "Towels, Sheets, Cotton sheets and toilet paper",
        },
        {
          iconbox: checkbox,
          text: "Pillows and extra blankets",
        },
        {
          iconbox: checkbox,
          text: "Iron, Clothes drying rack, Safe Mosquito net",
        },
        { iconbox: checkbox, text: "Internet Connection & Wifi" },
        { iconbox: checkbox, text: "Basic cooking equipment" },
        { iconbox: checkbox, text: "Plates and cutlery" },
        {
          iconbox: checkbox,
          text: "Freezer, Blender & Rice cooker",
        },
        { iconbox: checkbox, text: "Gas stove & Barbecue equipment" },
      ],
      buttonText: "Direct Booking on What's Up",
    },
    {
      planicon: preminumicon,
      title: "Sundanese Traditional Room",
      text: "Discover the allure of a locally crafted Sundanese bedroom, meticulously constructed from wood and bamboo, offering breathtaking views of the surroundings.",
      price: "200.000",
      plancontent: [
        { iconbox: checkbox, text: "Views of mountains, rivers, valleys" },
        {
          iconbox: checkbox,
          text: "Shampoo, Body soap, & Shower gel",
        },
        {
          iconbox: checkbox,
          text: "Towels, Sheets, Cotton sheets and toilet paper",
        },
        {
          iconbox: checkbox,
          text: "Pillows and extra blankets",
        },
        {
          iconbox: checkbox,
          text: "Iron, Clothes drying rack, Safe Mosquito net",
        },
        { iconbox: checkbox, text: "Internet Connection & Wifi" },
        { iconbox: checkbox, text: "Basic cooking equipment" },
        { iconbox: checkbox, text: "Plates and cutlery" },
        {
          iconbox: checkbox,
          text: "Freezer, Blender & Rice cooker",
        },
        { iconbox: checkbox, text: "Gas stove & Barbecue equipment" },
      ],
      buttonText: "Direct Booking on What's Up",
    },
  ],
};

export const bannerAPI = {
  title: "The great travel and Adventure",
  text: "thrilling global expedition that takes you to stunning destinations, exposes you to diverse cultures, and offers unforgettable experiences.",
  imgSrc: banner,
  btnText: "Explore More",
};

export const footerAPI = {
  titles: [{ title: "About" }, { title: "Company" }, { title: "Support" }],
  links: [
    [{ link: "About US" }, { link: "Service" }, { link: "Pricing" }],
    [
      { link: "Why Farmstay Manangel?" },
      { link: "Partner with Us" },
      { link: "FAQ" },
      { link: "Articles" },
    ],
    [{ link: "Feedback" }, { link: "Contact Us" }],
  ],
  sociallinks: [
    { link: "https://www.facebook.com/farmstaymanangel/", icon: facebook },
    { link: "https://www.instagram.com/farmstaymanangel/", icon: instagram },
    { link: "https://www.tiktok.com/@farmstaymanangel", icon: twitter },
    { link: "https://www.youtube.com/@farmstaymanangel", icon: youtube },
  ],
};

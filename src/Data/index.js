import beachImg from "../assets/images/category-img/beachicon.png";
import camping from "../assets/images/category-img/camping.png";
import castle from "../assets/images/category-img/castle.png";
import countryside from "../assets/images/category-img/countryside.png";
import Deserts from "../assets/images/category-img/Deserts.png";
import houseboat from "../assets/images/category-img/houseboat.png";
import iconicCity from "../assets/images/category-img/iconicCity.png";
import moutain from "../assets/images/category-img/moutain.png";
import skiing from "../assets/images/category-img/skiing.png";
import tropical from "../assets/images/category-img/tropical.png";

import bali from "../assets/images/Destination-img/bali.png";
import ireland from "../assets/images/Destination-img/ireland.png";
import paris from "../assets/images/Destination-img/paris.png";
import sydney from "../assets/images/Destination-img/sydney.png";

import flight from "../assets/images/offers-img/flight.png";
import hotel from "../assets/images/offers-img/hotel.png";
import bank from "../assets/images/offers-img/bank.png";

import hotels from "../assets/images/propertyType-img/hotels.png";
import apartments from "../assets/images/propertyType-img/apartments.png";
import resorts from "../assets/images/propertyType-img/resorts.png";
import villas from "../assets/images/propertyType-img/villas.png";

import India from "../assets/images/Blog-img/India.png";
import Beach from "../assets/images/Blog-img/Beach.png";
import MoutainBl from "../assets/images/Blog-img/MoutainBl.png";
import TravelTalk from "../assets/images/Blog-img/TravelTalk.png";

import swiss from "../assets/images/Tour-imgs/swiss.png";
import faroe from "../assets/images/Tour-imgs/faroe.png";
import hallstatt from "../assets/images/Tour-imgs/hallstatt.png";
import Innsbruck from "../assets/images/Tour-imgs/Innsbruck.png";

import fussen from "../assets/images/Package-img/fussen.png";
import ushuiai from "../assets/images/Package-img/ushuiai.png";
import vadi from "../assets/images/Package-img/vadi.png";
import berchtesgaden from "../assets/images/Package-img/berchtesgaden.png";

import Havelock from "../assets/images/Honeymoon-img/Havelock.png";
import maldives from "../assets/images/Honeymoon-img/maldives.png";
import Mauritius from "../assets/images/Honeymoon-img/Mauritius.png";
import Whitesunday from "../assets/images/Honeymoon-img/Whitsunday.png";

import { MdFlight, MdEmojiPeople } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";

const HoneymoonItems = [
  {
    path: "Mauritius",
    title: "Mauritius",
    rating: 4.7,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: Mauritius,
  },
  {
    path: "Havelock",
    title: "Havelock",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "3 Flights" },
      { icon: RiHotelFill, detail: "3 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfers",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: Havelock,
  },
  {
    path: "WhitsundayIslands",
    title: "Whitsunday Islands",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "1 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "3 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: Whitesunday,
  },
  {
    path: "Maldives",
    title: "Maldives",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "8 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: maldives,
  },
];

const PackageItems = [
  {
    path: "valdifunes",
    title: "Val di Funes",
    rating: 4.7,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: vadi,
  },
  {
    path: "Fussen",
    title: "Fussen",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "3 Flights" },
      { icon: RiHotelFill, detail: "3 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfers",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: fussen,
  },
  {
    path: "Ushuaia",
    title: "Ushuaia",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "1 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "3 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: ushuiai,
  },
  {
    path: "Berchtesgaden",
    title: "Berchtesgaden",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "8 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: berchtesgaden,
  },
];

const OffersItems = [
  {
    img: flight,
    title: "Domestic Flights",
    content: "Huge savings on flight with trxvl.",
    detail: "Book domestic flights starting @ just ₹1459",
  },
  {
    img: hotel,
    title: "International Hotels",
    content: "Enjoy upto 20% off on International Hotels",
    detail: "Make the most of  this deal on your first booking with trxvl.",
  },
  {
    img: bank,
    title: "Bank Offer",
    content: "Get upto 30% instant discount",
    detail:
      "Get discount on flights, hotels and holiday packages with HDFC bank credit card.",
  },
];

const RecentlyViewed = [
  {
    path: "hallstatt",
    title: "HallStatt",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "3 Flights" },
      { icon: RiHotelFill, detail: "3 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfers",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: hallstatt,
  },
  {
    path: "innsbruck",
    title: "Innsbruck",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "8 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: Innsbruck,
  },
];

const BeachDestinations = [
  {
    path: "swiss",
    title: "Swiss Apls",
    rating: 4.7,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: swiss,
  },
  {
    path: "hallstatt",
    title: "HallStatt",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "3 Flights" },
      { icon: RiHotelFill, detail: "3 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfers",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: hallstatt,
  },
  {
    path: "faroeisland",
    title: "Faroe Island",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "1 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "3 Transfers" },
      { icon: MdEmojiPeople, detail: "4 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: faroe,
  },
  {
    path: "innsbruck",
    title: "Innsbruck",
    rating: 4.9,
    days: "3 Days 4 Nights",
    schedule: [
      { icon: MdFlight, detail: "2 Flights" },
      { icon: RiHotelFill, detail: "1 Hotels" },
      { icon: FaCarSide, detail: "2 Transfers" },
      { icon: MdEmojiPeople, detail: "8 Activities" },
    ],
    desc: [
      "Tour combo with return airport transfer",
      "City Tour",
      "Curious Corner",
    ],
    oldPrice: "88,952",
    nowPrice: "88,952",
    img: Innsbruck,
  },
];

const navItems = [
  {
    path: "",
    title: "Home",
  },
  {
    path: "stays",
    title: "Stays",
  },
  {
    path: "Flights",
    title: "Flights",
  },
  {
    path: "Packages",
    title: "Packages",
  },
];

const DestinationItems = [
  {
    path: "Bali",
    title: "Bali, Indonesia",
    img: bali,
  },
  {
    path: "Kerry",
    title: "Kerry, Ireland",
    img: ireland,
  },
  {
    path: "Sydney",
    title: "Sydney, Australia",
    img: sydney,
  },
  {
    path: "SignUp",
    title: "Paris, France",
    img: paris,
  },
];

const PropertyTypeItems = [
  {
    path: "hotels",
    title: "Hotels",
    img: hotels,
  },
  {
    path: "Apartments",
    title: "Apartments",
    img: apartments,
  },
  {
    path: "resorts",
    title: "Resorts",
    img: resorts,
  },
  {
    path: "villas",
    title: "Villas",
    img: villas,
  },
];

const BlogItems = [
  {
    path: "india",
    title: "India",
    comunity: "Travel comunity",
    travelers: "155,073 travelers",
    img: India,
  },
  {
    path: "traveltalk",
    title: "Travel Talk",
    comunity: "Travel comunity",
    travelers: "155,073 travelers",
    img: TravelTalk,
  },
  {
    path: "beach",
    title: "Beach",
    comunity: "Travel comunity",
    travelers: "155,073 travelers",
    img: Beach,
  },
  {
    path: "moutains",
    title: "Moutains",
    comunity: "Travel comunity",
    travelers: "155,073 travelers",
    img: MoutainBl,
  },
];

const CategoryItems = [
  {
    path: "Beachs",
    title: "Beachs",
    img: beachImg,
  },
  {
    path: "Deserts",
    title: "Deserts",
    img: Deserts,
  },
  {
    path: "Moutains",
    title: "Moutains",
    img: moutain,
  },
  {
    path: "Iconic Cities",
    title: "Iconic Cities",
    img: iconicCity,
  },
  {
    path: "Houseboats",
    title: "Houseboats",
    img: houseboat,
  },
  {
    path: "Countryside",
    title: "Countryside",
    img: countryside,
  },
  {
    path: "Camping",
    title: "Camping",
    img: camping,
  },
  {
    path: "Castles",
    title: "Castles",
    img: castle,
  },
  {
    path: "Skiing",
    title: "Skiing",
    img: skiing,
  },
  {
    path: "Tropical",
    title: "Tropical",
    img: tropical,
  },
];

export {
  navItems,
  CategoryItems,
  DestinationItems,
  OffersItems,
  PropertyTypeItems,
  BlogItems,
  BeachDestinations,
  RecentlyViewed,
  PackageItems,
  HoneymoonItems,
};

import images from "./images";
import {
  FaBus,
  FaRoute,
  FaMoneyBillWave,
  FaClock,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";

const busIconColor = "#7a751a"; // Color before hover
const hoverBusIconColor = "#bc9b22"; // Color after hover

const services = [
  {
    id: 1,
    icon: <FaBus style={{ fill: busIconColor }} />,
    title: "Real-Time Bus Tracking",
    text: "Track your bus in real-time and know exactly when it will arrive at your stop.",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave style={{ fill: busIconColor }} />,
    title: "Affordable Pricing",
    text: "Get the best value for your journey with our competitive and affordable ticket prices.",
  },
  {
    id: 3,
    icon: <GiPathDistance style={{ fill: busIconColor }} />,
    title: "Multiple Routes",
    text: "Explore a variety of routes across the city, connecting key locations conveniently.",
  },
  {
    id: 4,
    icon: <FaRoute style={{ fill: busIconColor }} />,
    title: "Flexible Timings",
    text: "Our buses run on frequent schedules, ensuring that you're never left waiting long.",
  },
  {
    id: 5,
    icon: <BiSupport style={{ fill: busIconColor }} />,
    title: "24/7 Customer Support",
    text: "Our support team is available round-the-clock to assist you with any inquiries.",
  },
  {
    id: 6,
    icon: <FaMobileAlt style={{ fill: busIconColor }} />,
    title: "Mobile Ticketing",
    text: "Book and manage your tickets directly from your mobile phone with ease.",
  },
];

const about = [
  {
    id: 7,
    text: "We provide a reliable and efficient bus service that connects passengers to destinations across the city. With real-time tracking, multiple routes, affordable pricing, and top-notch customer service, we aim to make your journey as smooth and comfortable as possible.",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaClock style={{ fill: busIconColor }} />,
    title: "Punctuality",
    text: "Our buses run on a strict schedule to ensure that you reach your destination on time.",
  },
  {
    id: 9,
    icon: <FaRoute style={{ fill: busIconColor }} />,
    title: "Comprehensive Route Network",
    text: "Our service covers multiple routes and key locations for maximum convenience.",
  },
];

const features = [
  {
    id: 10,
    title: "Real-Time Tracking",
    text: "Track the location of your bus and estimated arrival time in real-time.",
  },
  {
    id: 11,
    title: "Affordable Fares",
    text: "Enjoy the best travel deals with our affordable and transparent pricing.",
  },
  {
    id: 12,
    title: "Flexible Routes",
    text: "Choose from multiple routes that connect major destinations across the city.",
  },
  {
    id: 13,
    title: "24/7 Customer Support",
    text: "Our dedicated team is available to help with any issues or questions, any time.",
  },
  {
    id: 14,
    title: "Mobile Ticketing",
    text: "Book, manage, and use your tickets directly from your mobile device.",
  },
  {
    id: 15,
    title: "Safe and Secure",
    text: "We prioritize passenger safety with regular maintenance and trained staff.",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Connecting the City",
    text: "Our bus routes connect you to every major area, from residential zones to business hubs.",
    image: images.portfolio_img_3,
  },
  {
    id: 17,
    title: "Efficient and Reliable",
    text: "Our punctual and efficient service ensures that you reach your destination on time.",
    image: images.portfolio_img_3,
  },
  {
    id: 18,
    title: "Easy Booking",
    text: "Use our online booking platform or mobile app to book tickets quickly and easily.",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    name: "John Doe",
    text: "Great service! I love being able to track my bus in real-time and plan my commute.",
    image: images.customer_img_1,
    rating: 5,
  },
  {
    id: 20,
    name: "Jane Smith",
    text: "Affordable prices and the routes cover all the major areas I need to travel to.",
    image: images.customer_img_2,
    rating: 4,
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: busIconColor }} />,
    info: "+1 234 567 890",
    text: "Feel free to call us for any inquiries about our bus routes or services.",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: busIconColor }} />,
    info: "support@busservice.com",
    text: "Send us an email for any support issues or questions.",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: busIconColor }} />,
    info: "123 Main Street, Cityville",
    text: "Visit our main office for in-person assistance.",
  },
];

const sections = { services, about, qualities, features, portfolio, testimonials, contact };

export default sections;

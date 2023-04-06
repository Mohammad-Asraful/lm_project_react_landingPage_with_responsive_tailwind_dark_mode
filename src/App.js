import "./App.css";
import HeroSection from "./Component/HeroSection";
import ServicesOffer from "./Component/ServicesOffer";
import WWClient from "./Component/WWClient";
import CustomersWorking from "./Component/CustomersWorking";
import RatingSection from "./Component/RatingSection";
import Portfolio from "./Component/Portfolio";
import ClientCard from "./Component/ClientCard";
import PricingSection from "./Component/PricingSection";
import Testimonial from "./Component/Testimonial";
import AskQues from "./Component/AskQues";
import News from "./Component/News";
import MessageArea from "./Component/MessageArea";
import OfficeBranches from "./Component/OfficeBranches";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesOffer />
      <WWClient />
      <CustomersWorking />
      <RatingSection />
      <Portfolio />
      <ClientCard />
      <PricingSection />
      <Testimonial />
      <AskQues />
      <News />
      <MessageArea />
      <OfficeBranches />
      <Footer />
    </>
  );
};

export default App;

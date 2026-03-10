import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ShopBySport from "@/components/ShopBySport";
import BrandsSection from "@/components/BrandsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import StoreLocation from "@/components/StoreLocation";
import NewsletterStrip from "@/components/NewsletterStrip";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <div className="section-divider" />
      <ShopBySport />
      <div className="section-divider" />
      <BrandsSection />
      <div className="section-divider" />
      <FeaturedProducts />
      <div className="section-divider" />
      <WhyChooseUs />
      <CustomerReviews />
      <div className="section-divider" />
      <StoreLocation />
      <NewsletterStrip />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;

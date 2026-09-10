import Hero from "@/components/home/Hero";
import SignatureMasala from "@/components/home/SignatureMasala";
import ProductsSection from "@/components/home/ProductsSection";
import Promo from "@/components/home/Promo";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Lifestyle from "@/components/home/Lifestyle";
import PaymentPartners from "@/components/home/PaymentPartners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureMasala />
      <ProductsSection />
      <Promo />
      <WhyChooseUs />
      <Lifestyle />
      <PaymentPartners />
    </>
  );
}

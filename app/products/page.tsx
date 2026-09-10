import type { Metadata } from "next";
import ProductPromoBanner from "@/components/products/ProductPromoBanner";
import Categories from "@/components/products/Categories";
import FeaturedProduct from "@/components/products/FeaturedProduct";
import NewArrival from "@/components/products/NewArrival";
import BestSellingProduct from "@/components/products/BestSellingProduct";

export const metadata: Metadata = {
  title: "Products | Sunaulo Jyoti",
};

export default function ProductsPage() {
  return (
    <>
      <ProductPromoBanner />
      <Categories />
      <FeaturedProduct />
      <NewArrival />
      <BestSellingProduct />
    </>
  );
}

import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import BootstrapButton from "./BootstrapButton";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();
  // const loaction = useLocation();
  // const username = location.state;
  // const path = location.pathname;
  // console.log(username, path);

  return (
    <>
      <div className="max-w-[1152px] mx-auto px-6 py-8">
        <PageHeading title="Explore Eazy Stickers">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
export async function productsLoader() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.response?.data?.errorMesaage || error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 },
    );
  }
}

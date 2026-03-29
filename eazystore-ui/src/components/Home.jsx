import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";

export default function Home() {
  const isActive = Math.random() > 0.5;

  const styling = { textAlign: "center", color: isActive ? "dark" : "red" };
  return (
    <>
      <h1
        className={`my-heading ${isActive ? "primary-color" : "secondry-colo"}`}
      >
        Demo of scop of home page
      </h1>

      {/* <h1 style={styling}> Demo of scop of home page</h1> */}
      <div className="home-container">
        <PageHeading title="Explore Eazy Stickers">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}

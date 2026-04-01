import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";
import BootstrapButton from "./BootstrapButton";

export default function Home() {
  const isActive = Math.random() > 0.5;

  const styling = { textAlign: "center", color: isActive ? "dark" : "red" };
  return (
    <>
      {/* <h1
        className={`my-heading ${isActive ? "primary-color" : "secondry-colo"}`}
      >
        Demo of scop of home page
      </h1> */}

      {/* <h1 style={styling}> Demo of scop of home page</h1> */}
      <div className="home-container col-6">
        <div className="container">
          <BootstrapButton text="Submit" type="primary" />
          <BootstrapButton text="Save" type="secondary" />
          <BootstrapButton text="Ok" type="success" />
          <BootstrapButton text="Cancel" type="danger" />
          <BootstrapButton text="Submit" type="primary" />
        </div>
        <div className="d-grid gap-2 col-8 mx-auto">
          <div className="alert alert-primary text-center" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary text-center" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success text-center" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger text-center" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning text-center" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info text-center" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light text-center" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark text-center" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>

        {/* <button className="btn btn-primary">Button</button> */}
        <PageHeading title="Explore Eazy Stickers">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}

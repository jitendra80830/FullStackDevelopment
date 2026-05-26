import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];
function ProductListings({ products }) {
  const [searchText, setsearchText] = useState("");
  const [selectedSort, setSelectedSort] = useState("Popularity");

  let filteredAndSortedProduct = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProduct = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase()),
    );

    return filteredProduct.slice().sort((a, b) => {
      switch (selectedSort) {
        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);

        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);

        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, selectedSort]);

  function handleSearchChange(inputSearch) {
    setsearchText(inputSearch);
  }

  function handleSortType(sortType) {
    setSelectedSort(sortType);
  }

  // switch (selectedSort) {
  //   case "Price Low to High":
  //     filteredAndSortedProduct = filteredAndSortedProduct.sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price),
  //     );
  //     break;
  //   case "Price High to Low":
  //     filteredAndSortedProduct = filteredAndSortedProduct.sort(
  //       (a, b) => parseFloat(b.price) - parseFloat(a.price),
  //     );
  //     break;
  //   case "Popularity":
  //   default:
  //     filteredAndSortedProduct = filteredAndSortedProduct.sort(
  //       (a, b) => parseInt(b.popularity) - parseInt(a.popularity),
  //     );
  //     break;
  // }

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search Product.."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />
        <Dropdown
          label="Sort By"
          options={sortList}
          value={selectedSort}
          handlSort={(value) => handleSortType(value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredAndSortedProduct.length > 0 ? (
          filteredAndSortedProduct.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No product founds
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductListings;

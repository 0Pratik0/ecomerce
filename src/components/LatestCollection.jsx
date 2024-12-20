import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [lastestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  });

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          quis minus facilis rem quam dolor nemo. Quae dolores aliquam quasi
          consequuntur facilis dignissimos? Ea voluptate error eveniet quis?
          Similique, deserunt?
        </p>
      </div>
    </div>
  );
};

export default LatestCollection;

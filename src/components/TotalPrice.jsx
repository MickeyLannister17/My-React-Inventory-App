import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const inventoryItem = useSelector((state) => state.inventory.inventoryList);
  const cartTotalPrice = inventoryItem.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-center items-center bg-primary mx-auto pt-2 mt-1">
      <h3 className="text-white uppercase font-semiBold text-xl mb-1 pb-3">
        Total : ${cartTotalPrice}
      </h3>
    </div>
  );
};

export default TotalPrice;

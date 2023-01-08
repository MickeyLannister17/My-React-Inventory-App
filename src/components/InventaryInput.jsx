import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { inventoryActions } from "../store/cartSlice";
import { useId } from "react";
import uuid from "react-uuid";

const InventaryInput = () => {
  // const id = useId();
  // const inventoryItem = useSelector((state) => state.inventory.inventoryList);
  // console.log(inventoryItem);
  const dispatch = useDispatch();

  const addToInventory = (e) => {
    e.preventDefault();

    const formData = e.target;
    const newProduct = {
      id: uuid(),
      product: formData.product.value,
      price: formData.price.value,
      quantity: formData.quantity.value,
    };
    // console.log(newProduct);

    dispatch(inventoryActions.addToInventory(newProduct));
  };

  return (
    <div className="max-w-[1640px] mx-auto  mt-2">
      <div className="flex flex-col justify-center items-center bg-primary mx-auto py-4">
        <form onSubmit={addToInventory} className="flex flex-col text-white">
          <label className="text-[22px] text-center" htmlFor="product_name">
            Product Name:
          </label>
          <input
            type="text"
            name="product"
            placeholder="Enter Product Name"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded
             bg-primary md:bg-white border-2 border-white md:border-secondary text-secondary md:text-primary"
          />
          <label className="text-[22px] text-center" htmlFor="item_price">
            Price:
          </label>
          <input
            type="number"
            name="price"
            min={1}
            placeholder="Price In Dollar"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded
             bg-primary md:bg-white border-2 border-white md:border-primary text-secondary md:text-primary"
          />
          <label className="text-[22px] text-center" htmlFor="item_quantity">
            Quantity:
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            placeholder="How many: qty"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded
             bg-primary md:bg-white text-secondary md:text-primary border-white md:border-primary border-2"
          />

          <button
            className="text-secondary justify-center items-center font-semibold border-2 w-[200px] md:w-[300px] h-[50px] mx-auto py-2 rounded border-dimWhite
             bg-red-900 
                 transition duration-300 hover:text-secondary mb-1 mt-3 border-primary"
          >
            Add to Inventory
          </button>
        </form>
      </div>
    </div>
  );
};

export default InventaryInput;

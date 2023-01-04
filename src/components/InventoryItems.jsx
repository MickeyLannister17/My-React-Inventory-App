import React from "react";
import InventoryItem from "./InventoryItem";
import { useSelector } from "react-redux";
function InventoryItems() {
  const inventoryItem = useSelector((state) => state.inventory.inventoryList);
  console.log(inventoryItem);
  return (
    <div className=" max-w-[1640px] mx-auto h-[300px] mt-2 overflow-scroll">
      <div className="flex flex-col justify-center items-center bg-primary mx-auto py-4">
        <h1 className="text-white uppercase font-semiBold text-2xl mb-5">
          My Inventory
        </h1>
        <table className="bg-red-900 shadow-2xl border-2 border-red-200 min-w-[330px] h-[50px] md:w-6/12 font-extralight overflow-hidden">
          <thead className="text-white">
            <tr>
              <th className="py-3 bg-red-800">NO</th>
              <th className="py-3 bg-red-800">NAME</th>
              <th className="py-3 bg-red-800">PRICE</th>
              <th className="py-3 bg-red-800">QTY</th>
              <th className="py-3 bg-red-800">TOTAL</th>
              <th className="py-3 bg-red-800">OPT</th>
            </tr>
          </thead>

          <tbody className="bg-red-900 text-center h-[50px]">
            {inventoryItem.map((item, id) => {
              return (
                <tr
                  className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300"
                  key={id}
                >
                  <td>{id}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.totalPrice}</td>
                  <td>
                    <button className="mr-6 mx-auto">-</button>
                    <button className="ml-6 mx-auto">+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryItems;

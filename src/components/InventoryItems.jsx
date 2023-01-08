import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inventoryActions } from "../store/cartSlice";

function InventoryItems() {
  const inventoryItem = useSelector((state) => state.inventory.inventoryList);
  // const addId = useSelector((state) => state.inventory.inventoryList);
  console.log(inventoryItem);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(inventoryActions.removeFromInventory(id));
  };
  const addItem = (id) => {
    dispatch(inventoryActions.addToItems(id));
  };
  // const cartTotalPrice = inventoryItem.reduce(
  //   (accumulator, item) => accumulator + item.price * item.quantity,
  //   0
  // );

  return (
    <div className=" max-w-[1640px] mx-auto h-[300px] mt-2 bg-primary overflow-scroll">
      <div className="flex flex-col justify-center items-center bg-primary mx-auto py-2">
        <h1 className="text-white uppercase font-semiBold text-2xl mb-1 pb-3">
          My Inventory
        </h1>
        {/* <div className="bg-secondary">TotalCartPrice: {cartTotalPrice}</div> */}
        <table className="bg-red-900 shadow-2xl border-2 border-red-200 min-w-[330px] h-[50px] md:w-6/12 font-extralight ">
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

          {inventoryItem.map((item, id) => {
            return (
              <tbody key={id} className="bg-red-900 text-center h-[50px]">
                <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
                  <td>{id}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.totalPrice * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className=" mx-auto"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addItem(item.id)}
                      className="ml-6 mx-auto"
                    >
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default InventoryItems;

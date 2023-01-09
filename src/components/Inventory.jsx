import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { inventoryActions } from "../store/cartSlice";

function Inventory() {
  const inventoryItem = useSelector((state) => state.inventory.inventoryList);

  const cartTotalQuantity = inventoryItem.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const dispatch = useDispatch();
  cartTotalQuantity;

  const showInventory = () => {
    dispatch(inventoryActions.setShowInventory());
  };
  // let quantity = 0;

  return (
    <div className="">
      <button
        onClick={showInventory}
        className="text-secondary flex items-center justify-center font-semibold pl-5 md:border border-secondary py-2 w-25 md:w-32 rounded h-10"
      >
        <BsFillCartCheckFill size={30} color="white" className="" />:{" "}
        {cartTotalQuantity} Items
      </button>
    </div>
  );
}

export default Inventory;

// <div className=" bg-secondary border-b border-gray-100 cursor-pointer w-[100px] ">
//   <h3 className="text-white pt-4 py-4 pl-2 text-2xl font-semiBold uppercase ">
//     Cache
//   </h3>
// </div>

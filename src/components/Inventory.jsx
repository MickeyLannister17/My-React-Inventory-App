import { BsFillCartCheckFill } from "react-icons/bs";

function Inventory() {
  let quantity = 0;

  return (
    <div className="">
      <button className="text-secondary flex items-center justify-center font-semibold border border-secondary py-2 w-32 rounded h-10">
        <BsFillCartCheckFill size={30} color="white" className="" />: {quantity}{" "}
        Items
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

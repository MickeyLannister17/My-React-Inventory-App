import React from "react";

function InventaryInput() {
  return (
    <div className=" max-w-[1640px] mx-auto  mt-2">
      <div className="flex flex-col justify-center items-center bg-primary mx-auto py-4">
        {/* <h1 className="text-white uppercase font-semiBold text-2xl">
          Add To Inventory
        </h1> */}
        <form className="flex flex-col text-white">
          <label className="text-[22px] text-center" htmlFor="product">
            Product Name:
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded bg-white border-2 border-black text-primary"
          />
          <label className="text-[22px] text-center" htmlFor="price">
            Price:
          </label>
          <input
            type="number"
            min={1}
            placeholder="Price In Dollar"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded bg-white border-2 border-black text-primary"
          />
          <label className="text-[22px] text-center" htmlFor="quantity">
            Quantity:
          </label>
          <input
            type="number"
            min={1}
            placeholder="How many: qty"
            className="px-4 py-4 mb-2 text-[18px] font-semiBold text-center md:text-left mt-2 min-w-[300px] md:min-w-[400px] h-[50px] rounded bg-white text-primary"
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
}

export default InventaryInput;

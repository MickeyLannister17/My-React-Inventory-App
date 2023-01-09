import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import InventaryInput from "./InventaryInput";
import Inventory from "./Inventory";
import InventoryItems from "./InventoryItems";
import TotalPrice from "./TotalPrice";

function Layout() {
  const showInventory = useSelector((state) => state.inventory.showInventory);
  return (
    <React.Fragment>
      <div>
        <Header />
        <InventaryInput />
        {!showInventory && <InventoryItems />}
        <TotalPrice />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;

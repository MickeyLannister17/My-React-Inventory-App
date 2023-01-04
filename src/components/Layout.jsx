import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import InventaryInput from "./InventaryInput";
import InventoryItems from "./InventoryItems";

function Layout() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <InventaryInput />
        <InventoryItems />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;

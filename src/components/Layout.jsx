import React from "react";
import Header from "./Header";
import InventaryInput from "./InventaryInput";

function Layout() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <InventaryInput />
      </div>
    </React.Fragment>
  );
}

export default Layout;

import React, { useEffect } from "react";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Carts from "../UI/cart/Carts";

import { useSelector } from "react-redux";

import MenuMobile from "../MenuMobile/MenuMobile";

import "../Layout/layout.css";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <>
      <div>
        <Header />
        {showCart && <Carts />}

        <div className="w_content">
          <Routers />
        </div>
        <Footer />
        <div>
          <MenuMobile />
        </div>
      </div>
    </>
  );
};

export default Layout;

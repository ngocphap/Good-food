import React, { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import userIcon from "../../assets/images/avatar.png";

import "../Header/header.css";
import { MdShoppingCart } from "react-icons/md";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  // console.log(currentUser.email);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const profileSubmenuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  const toggleProfileSubmenu = () =>
    profileSubmenuRef.current.classList.toggle("show_submenu");
  return (
    <header className="header" ref={headerRef}>
      <Container className="menu_header">
        <Row className="">
          {/* logo */}
          <Col
            xs="3"
            className="logo d-flex align-items-start justify-content-start "
          >
            <Link to={"/home"} className="mt-2 ">
              <img src={logo} className="" alt="" />
            </Link>
          </Col>
          {/* menu  */}
          <Col
            xs="6"
            className="d-flex align-items-center justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="navigation"
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </Col>
          {/* icon user */}
          <Col xs="3" className="d-flex align-items-center justify-content-end">
            <div className="nav_right d-flex align-items-center gap-4 ">
              {/* cart icon */}
              <div className="cart_icon" onClick={toggleCart}>
                <MdShoppingCart className="icon_md" />
                <span className="cart_badge">{totalQuantity}</span>
              </div>

              <div className="user_profile ">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileSubmenu}
                />
                <div
                  className="sub_menu  bg-info  "
                  ref={profileSubmenuRef}
                  onClick={toggleProfileSubmenu}
                >
                  {currentUser ? (
                    <Button
                      onClick={logout}
                      color="danger"
                      className="text-center align-items-center justify-content-center w-100 m-1"
                    >
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <p className="" onClick={() => setIsMenu(false)}>
                          Đăng Nhập
                        </p>
                      </Link>
                      <Link to={"/register"}>
                        <p className="" onClick={() => setIsMenu(false)}>
                          Đăng Ký
                        </p>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              <span className="mobile_menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

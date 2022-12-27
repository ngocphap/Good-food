import React, { useEffect } from "react";

import MenuContainer from "../MenuMobile/MenuContainer";
import "../MenuMobile/css.css";
import { PersonRounded, LocalMallRounded, Home } from "@mui/icons-material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
const MenuMobile = () => {
  /* useEffect  tạo vòng lập sử dụng bất cứ khi nào đề xuất */

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="bottomMenu">
      <ul id="menu">
        {/* pre */}
        <MenuContainer link={"/home"} icon={<Home />} isHome />

        <MenuContainer link={"/foods"} icon={<WidgetsRoundedIcon />} />
        <MenuContainer link={"/cart"} icon={<LocalMallRounded />} />

        <MenuContainer link={"/checkout"} icon={<PersonRounded />} />

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default MenuMobile;

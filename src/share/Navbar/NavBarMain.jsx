"use client";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Navbar2 from "./Navbar2";

const NavBarMain = () => {
  const [open, setOpen] = useState(false);

  let openDrawer = () => setOpen(true);
  let closeDrawer = () => setOpen(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <div>
      <Navbar2 openDrawer={openDrawer} />
      <MobileNav open={open} closeDrawer={closeDrawer} />
    </div>
  );
};

export default NavBarMain;

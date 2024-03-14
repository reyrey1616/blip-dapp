import React from "react";
import Logo from "../../assets/blip_logo.webp";
import { Button } from "antd";
const Navbar = () => {
  return (
    <div className="w-[100%] py-2 bg-green-600 flex justify-between items-center px-4">
      <img src={Logo} alt="Blip Logo" width="48" height="48" />
      <Button type="dashed">Connect wallet</Button>
    </div>
  );
};

export default Navbar;

import React from "react";
import {SocialMedia} from "../molecules";
import Images from "../../assets";

const Footer = () => {
    return (
        <div className="
            items-center
            px-2 
            first-letter:py-1
            bg-PrimarioColor5
            flex 
            flex-col 
            sm:flex-row 
            sm:justify-between 
            md:flex-row 
            md:justify-between 
            lg:flex-row 
            lg:justify-between 
            "
        >
        <SocialMedia />
        <span className="text-sm text-gray-300">
            {" "}
            © 2022 All Rights Reserved.
        </span>
        <img
            style={{ width: "13rem", padding: "0" }}
            src={Images.LogoBlancoEducamas}
            alt="LogoBlanco"
        />
        </div>
    );
};

export default Footer;

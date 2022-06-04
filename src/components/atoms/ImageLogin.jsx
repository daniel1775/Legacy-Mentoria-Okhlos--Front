import React from "react";
import Images from "../../assets";

const ImageLogin = () => {
	return (
		<img 
			src={Images.ImagenLogin}  
			alt="ImagenLogin" 
			className="h-screen
			bg-cover
			bg-center
			hidden
			lg:block			
			"
		/> 
	)
};

export default ImageLogin;

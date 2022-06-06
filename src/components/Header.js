import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import profile from "../img/avatar.png";
import Logo from "../img/logo.png";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  console.log(process.env.REACT_APP_FIREBASE_APP_ID)
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl  font-bold italic">Foodies</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={profile}
              alt="userProfile"
              className="w-10 min-w-[40px] h-10-[40px]  drop-shadow-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;

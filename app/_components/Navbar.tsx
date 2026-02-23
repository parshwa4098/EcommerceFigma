import { BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import SideBar from "./SideBar";
import Category from "./Categories";
import Products from "./Products";
import Featured from "./Featured";
import Footer from "./Footer";

export default function Navbar() {
  return (
    <div className="w-full">

     
      <div className="w-full bg-black text-white py-2 border-b-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="w-1/4"></div>

          <div className="w-2/4 text-center text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="underline cursor-pointer ml-2 font-bold">
              ShopNow
            </a>
          </div>

          <div className="w-1/4 flex justify-end">
            <select className="bg-black text-white outline-none text-sm">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
          </div>
        </div>
      </div>

     
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 mt-5">

          <div className="text-2xl font-bold text-black">
            Exclusive
          </div>

         
          <div className="flex gap-8 text-black">
            <a className="underline cursor-pointer">Home</a>
            <a className="cursor-pointer">Contact</a>
            <a className="cursor-pointer">About</a>
            <a className="cursor-pointer">Sign Up</a>
          </div>

          
          <div className="flex items-center gap-4">

            <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm text-black"
              />
              <BiSearch className="text-black text-xl cursor-pointer" />
            </div>

            <CiHeart className="text-2xl cursor-pointer text-black " />
            <PiShoppingCartSimpleLight className="text-2xl cursor-pointer text-black" />
          </div>

        </div>
      </div>
      <SideBar/>
      <Category/>
      <Products/>
      <Featured/>
      <Footer/>

    </div>
  );
}
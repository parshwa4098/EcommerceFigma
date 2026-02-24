/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <div className="w-full">
      <div className="w-full bg-black text-white py-2 border-b-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="w-1/4"></div>

          <div className="w-2/4 text-center text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="underline cursor-pointer ml-2 font-bold">ShopNow</a>
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
          <div className="text-2xl font-bold text-black">Exclusive</div>

          <div className="flex gap-8 text-black">
            <a className="underline cursor-pointer">Home</a>
            <a className="cursor-pointer">Contact</a>
            <a className="cursor-pointer">About</a>

            {!user && (
              <Link href="/auth" className="cursor-pointer">
                Sign Up
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4 relative">
            <CiHeart className="text-2xl cursor-pointer text-black" />
            <PiShoppingCartSimpleLight className="text-2xl cursor-pointer text-black" />

            {user && (
              <div className="relative">
                <CgProfile
                  className="text-2xl cursor-pointer text-black"
                  onClick={() => setOpen(!open)}
                />

                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

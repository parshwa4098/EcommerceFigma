"use client";
/* eslint-disable @next/next/no-img-element */

import Ps5 from "../_assets/Frame 684.jpg";
import Collections from "../_assets/Frame 685.jpg";
import Speakers from "../_assets/Frame 686.jpg";
import Perfume from "../_assets/Frame 687.jpg";
import Free from "../_assets/Services.jpg";
import Customer from "../_assets/Services (1).jpg";
import Money from "../_assets/Services (2).jpg";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function Featured() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded"></div>
          <h4 className="text-red-500 font-bold text-sm">Featured</h4>
        </div>

        <div className="mb-10 mt-4">
          <h2 className="text-2xl font-bold text-black">New Arrival</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="row-span-2">
            <img
              src={Ps5.src}
              alt="ps5 image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div>
            <img
              src={Collections.src}
              alt="collections image"
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src={Speakers.src}
              alt="speakers image"
              className="w-full object-cover rounded-lg"
            />

            <img
              src={Perfume.src}
              alt="perfume image"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center">
              <img
                src={Free.src}
                alt="free and fast delivery image"
                className="w-16 h-16 object-contain mb-4"
              />
              <h1 className="text-black font-bold text-sm mb-2">
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-black text-xs">
                Free delivery for all orders over $140
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={Customer.src}
                alt="customer service image"
                className="w-16 h-16 object-contain mb-4"
              />
              <h1 className="text-black font-bold text-sm mb-2">
                24/7 CUSTOMER SERVICE
              </h1>
              <p className="text-black text-xs">
                Friendly 24/7 customer support
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={Money.src}
                alt="money back image"
                className="w-16 h-16 object-contain mb-4"
              />
              <h1 className="text-black font-bold text-sm mb-2">
                MONEY BACK GUARANTEE
              </h1>
              <p className="text-black text-xs">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>

        <div className=" bottom-8 ">
          <button
            onClick={scrollToTop}
            className="bg-gray-200 text-black p-3 ml-315 rounded-full "
          >
            <MdOutlineArrowUpward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

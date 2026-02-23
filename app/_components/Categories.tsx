/* eslint-disable @next/next/no-img-element */
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import Phone from "../_assets/Category-Phone.jpg";
import Computers from "../_assets/Category-Phone (1).jpg";
import SmartWatch from "../_assets/Category-Phone (2).jpg";
import Camera from "../_assets/Category-Phone (3).jpg";
import Headphone from "../_assets/Category-Phone (4).jpg";
import Gaming from "../_assets/Category-Phone (5).jpg";
import Coat from "../_assets/Cart.jpg";
import bag from "../_assets/Cart (1).jpg";
import cpucooler from "../_assets/Cart (2).jpg";
import bookshelf from "../_assets/Cart (3).jpg";
import Jbl from "../_assets/Frame 600.jpg";
export default function Category() {
  const [current, setCurrent] = useState(0);
  const products = [
    Phone,
    Computers,
    SmartWatch,
    Camera,
    Headphone,
    Gaming,
    Phone,
    Computers,
    SmartWatch,
    Camera,
    Headphone,
    Gaming,
  ];
  const bestsellingproducts = [Coat, bag, cpucooler, bookshelf];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded mb-5"></div>
          <h4 className="text-red-500 font-bold text-sm mb-5">Categories</h4>
        </div>
        <div className="mb-10 flex items-center justify-between ml-6">
          <div className="flex items-center gap-15 ">
            <h2 className="text-2xl font-bold text-black">
              Browse By Category
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <FaArrowLeftLong className="text-black" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>
        <div className="mt-2 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${current * 270}px)`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="min-w-62.5  p-4 rounded">
                <img
                  src={product.src}
                  alt="product"
                  className="w-full h-75 object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded mb-5"></div>
          <h4 className="text-red-500 font-bold text-sm mb-5">This Month</h4>
        </div>
        <div className="mb-10 flex items-center justify-between ml-6">
          <div className="flex items-center gap-15 ">
            <h2 className="text-2xl font-bold text-black">
              Best Selling Products
            </h2>
          </div>

          <div className="flex gap-3">
            <button className="bg-red-600 text-white px-8 py-3 w-39.75 h-14 rounded hover:bg-red-700 ">
              View All
            </button>
          </div>
        </div>
        <div className="mt-2 overflow-hidden">
          <div className="flex">
            {bestsellingproducts.map((bestsellingproduct, index) => (
              <div key={index} className="min-w-62.5 ml-2  p-4 rounded">
                <img
                  src={bestsellingproduct.src}
                  alt="product"
                  className="w-full h-87.5 object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <img
            src={Jbl.src}
            alt="JBL Banner"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}

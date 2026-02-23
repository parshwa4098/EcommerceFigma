"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import Chocolate from "../_assets/Cart (4).jpg";
import Camera from "../_assets/Cart (5).jpg";
import Laptop from "../_assets/Cart (6).jpg";
import Ps5 from "../_assets/Property 25.jpg";
import Car from "../_assets/Cart (7).jpg";
import Shoes from "../_assets/Cart (8).jpg";
import gamepad from "../_assets/Cart (9).jpg";
import Jacket from "../_assets/Cart (10).jpg";

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const topRow = [
    Chocolate,
    Camera,
    Laptop,
    Ps5,
    Chocolate,
    Camera,
    Laptop,
    Ps5,
  ];
  const bottomRow = [Car, Shoes, gamepad, Jacket, Car, Shoes, gamepad, Jacket];
  const handleAllProducts = () => {
    setShowAll((prev) => !prev);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded"></div>
          <h4 className="text-red-500 font-bold text-sm">Our Products</h4>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            Explore Our Products
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              <FaArrowLeftLong className="text-black" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>

        <div className="mt-6">
  {showAll ? (
   
    <div className="grid grid-cols-4 gap-6">
      {[...topRow, ...bottomRow].map((product, index) => (
        <div
          key={index}
          className="rounded-lg p-3 flex items-center justify-center"
        >
          <img
            src={product.src}
            alt="product"
            className="w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  ) : (
 
    <div className="overflow-hidden">
      <div
        className="transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 260}px)`,
        }}
      >
        <div className="flex gap-4">
          {topRow.map((product, index) => (
            <div
              key={index}
              className="min-w-60 rounded-lg p-3 flex items-center justify-center"
            >
              <img
                src={product.src}
                alt="product"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="h-6"></div>

        <div className="flex gap-4">
          {bottomRow.map((product, index) => (
            <div
              key={index}
              className="min-w-60 rounded-lg p-3 flex items-center justify-center"
            >
              <img
                src={product.src}
                alt="product"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
</div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleAllProducts}
            className="bg-red-600 cursor-pointer text-white px-8 py-3 rounded hover:bg-red-700 transition"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

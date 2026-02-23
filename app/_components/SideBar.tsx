"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { PiGreaterThanBold } from "react-icons/pi";

import iphone from "../_assets/Frame 560.jpg";
import keyboard from "../_assets/Cart With Flat Discount (1).jpg";
import controller from "../_assets/Cart With Flat Discount.jpg";
import monitor from "../_assets/Cart With Flat Discount (2).jpg";
import chair from "../_assets/Cart With Flat Discount (3).jpg";

export default function SideBar() {
  const products = [
    controller,
    keyboard,
    monitor,
    chair,
    controller,
    keyboard,
    monitor,
    chair,
    chair,
  ];

  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const handleAllProducts = () => {
    setShowAll((prev) => !prev);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-stretch px-4 py-6 gap-8">
        <aside className="w-56 shrink-0">
          <ul className="text-black space-y-4 text-sm">
            <li className="flex justify-between items-center">
              Woman&apos;s Fashion <PiGreaterThanBold />
            </li>
            <li className="flex justify-between items-center">
              Men&apos;s Fashion <PiGreaterThanBold />
            </li>
            <li>Electronics</li>
            <li>Home & LifeStyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </aside>

        <div className="w-px bg-gray-300"></div>

        <div className="flex-1">
          <img
            src={iphone.src}
            alt="banner"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded"></div>
          <h4 className="text-red-500 font-bold text-sm">Today’s</h4>
        </div>

        <div className="mt-4 flex items-center justify-between ml-6">
          <div className="flex items-center gap-15 ">
            <h2 className="text-2xl font-bold text-black">Flash Sales</h2>

            <div className="flex items-center text-black">
              <div className="text-center mx-4">
                <p className="text-xs">Days</p>
                <p className="text-2xl font-bold">03</p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Hours</p>
                <p className="text-2xl font-bold">23</p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Minutes</p>
                <p className="text-2xl font-bold">19</p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Seconds</p>
                <p className="text-2xl font-bold">56</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-gray-200 p-2 rounded-full "
            >
              <FaArrowLeftLong className="text-black" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full "
            >
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>

        <div className="mt-2">
          {showAll ? (
            <div className="grid grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="p-4 rounded">
                  <img
                    src={product.src}
                    alt="product"
                    className="w-full h-60 object-contain rounded"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${current * 270}px)`,
                }}
              >
                {products.map((product, index) => {
                  const isController = index === 0;

                  return (
                    <div
                      key={index}
                      className={`min-w-62.5 p-4 rounded ${
                        isController ? "mr-12.5" : "mr-12.5 ml-12.5"
                      }`}
                    >
                      <img
                        src={product.src}
                        alt="product"
                        className="w-full h-87.5 object-contain rounded"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="mt-3 flex justify-center">
          <button
            onClick={handleAllProducts}
            className="bg-red-600 text-white cursor-pointer px-8 py-3 rounded hover:bg-red-700 transition"
          >
            View All Products
          </button>
        </div>

        <div className="mt-10">
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

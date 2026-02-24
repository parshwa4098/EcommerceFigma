"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import Chocolates from "../_assets/71RdoeXxtrL 1.png";
import Camera from "../_assets/eos-250d-03-500x500 1.png";
import Laptop from "../_assets/ideapad-gaming-3i-01-500x500 1.png";
import Ps5 from "../_assets/curology-j7pKVQrTUsM-unsplash 1.png";
import Car from "../_assets/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import Shoes from "../_assets/Copa_Sense 1.png";

import Jacket from "../_assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";
import { ProductsCard } from "./ProductsCard";

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const topRow = [
    {
      image: Chocolates,
      name: "Breed Dry Dog Food",
      price: 120,

      rating: 4,
      reviews: 88,
    },
    {
      image: Camera,
      name: "CANON EOS DSLR Camera",
      price: 960,

      rating: 5,
      reviews: 75,
    },
    {
      image: Laptop,
      name: "ASUS FHD Gaming Laptop",
      price: 370,

      rating: 4,
      reviews: 99,
    },
    {
      image: Ps5,
      name: "Curology Product Set",
      price: 375,

      rating: 4,
      reviews: 99,
    },
    {
      image: Chocolates,
      name: "Breed Dry Dog Food",
      price: 120,

      rating: 4,
      reviews: 88,
    },
    {
      image: Camera,
      name: "CANON EOS DSLR Camera",
      price: 960,

      rating: 5,
      reviews: 75,
    },
    {
      image: Laptop,
      name: "ASUS FHD Gaming Laptop",
      price: 370,

      rating: 4,
      reviews: 99,
    },
    {
      image: Ps5,
      name: "Curology Product Set",
      price: 375,

      rating: 4,
      reviews: 99,
    },
  ];
  const bottomRow = [
    {
      image: Car,
      name: "Kids Electric Car",
      price: 120,

      rating: 4,
      reviews: 88,
    },
    {
      image: Shoes,
      name: "Jr. Zoom Soccer Cleats",
      price: 960,

      rating: 5,
      reviews: 75,
    },

    {
      image: Jacket,
      name: "Quilted Satin Jacket",
      price: 375,

      rating: 4,
      reviews: 99,
    },
    {
      image: Car,
      name: "Kids Electric Car",
      price: 120,

      rating: 4,
      reviews: 88,
    },
    {
      image: Shoes,
      name: "Jr. Zoom Soccer Cleats",
      price: 960,

      rating: 5,
      reviews: 75,
    },

    {
      image: Jacket,
      name: "Quilted Satin Jacket",
      price: 375,

      rating: 4,
      reviews: 99,
    },
  ];
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
                  className="min-w-60 rounded-lg p-3 flex items-center justify-center"
                >
                  <ProductsCard product={product} />
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
                      <ProductsCard product={product} />
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
                      <ProductsCard product={product} />
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

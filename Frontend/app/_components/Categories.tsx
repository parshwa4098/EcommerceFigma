/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Phone from "../_assets/Category-CellPhone.svg";
import Computers from "../_assets/Category-Computer.svg";
import SmartWatch from "../_assets/Category-SmartWatch (1).svg";
import Headphone from "../_assets/Category-Headphone.svg";
import Gaming from "../_assets/Category-Gamepad.svg";
import Coat from "../_assets/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import bag from "../_assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import cpucooler from "../_assets/gammaxx-l240-argb-1-500x500 1.png";
import bookshelf from "../_assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import Jbl from "../_assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import { BestSellingProductsCard } from "./BestSellingProducts";

export default function Category() {
  const [current, setCurrent] = useState(0);
  const products = [
    {
      image: Phone,
      name: "Phone",
    },
    {
      image: Computers,
      name: "Computers",
    },
    {
      image: Headphone,
      name: "Headphone",
    },
    {
      image: SmartWatch,
      name: "SmartWatch",
    },
    {
      image: Gaming,
      name: "Gaming",
    },
    {
      image: Phone,
      name: "Phone",
    },
    {
      image: Computers,
      name: "Computers",
    },
    {
      image: Headphone,
      name: "Headphone",
    },
    {
      image: SmartWatch,
      name: "SmartWatch",
    },
    {
      image: Gaming,
      name: "Gaming",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const bestsellingproducts = [
    {
      image: Coat,
      name: "The north Coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      image: bag,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 75,
    },
    {
      image: cpucooler,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 99,
    },
    {
      image: bookshelf,
      name: "Small BookShelf",
      price: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
    {
      image: Coat,
      name: "The north Coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      image: bag,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 75,
    },
    {
      image: cpucooler,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 99,
    },
    {
      image: bookshelf,
      name: "Small BookShelf",
      price: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
  ];

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
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
              <FaArrowLeftLong className="text-black cursor-pointer" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <FaArrowRight className="text-black cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="mt-2 overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-8"
            style={{
              transform: `translateX(-${current * 270}px)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index as any)}
                className="min-w-62.5 flex flex-col items-center justify-center 
             border rounded-lg p-6 cursor-pointer relative 
             hover:border-red-500 transition"
              >
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-red-500/10 rounded-lg"></div>
                )}

                <div
                  className="w-20 h-20 flex items-center justify-center 
                   mb-4 bg-gray-50"
                >
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h2 className="text-lg font-semibold text-center">
                  {product.name}
                </h2>
              </div>
            ))}{" "}
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
              <button
                onClick={handleAllProducts}
                className="bg-red-600 text-white cursor-pointer px-8 py-3 w-39.75 h-14 rounded hover:bg-red-700 "
              >
                View All
              </button>
            </div>
          </div>
          <div className="mt-2 overflow-hidden">
            <div className="mt-2">
              {showAll ? (
                <div className="grid grid-cols-4 gap-6">
                  {bestsellingproducts.map((product, index) => (
                    <div key={index} className="p-4 rounded">
                      <BestSellingProductsCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex overflow-hidden">
                  {bestsellingproducts.map((product, index) => (
                    <div key={index} className="w-1/4 px-4 shrink-0">
                      <BestSellingProductsCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
        
          <div className="mt-20">
            <div className="bg-black rounded-xl px-16 py-20 flex items-center justify-between relative overflow-hidden">
              
             
              <div className="text-white max-w-lg z-10 shrink-0">
                
            
                <p className="text-green-500 font-semibold mb-6 text-lg">
                  Categories
                </p>

              
                <h2 className="text-5xl font-bold leading-tight mb-12">
                  Enhance Your <br /> Music Experience
                </h2>

          
                <div className="flex gap-6 mb-12">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 bg-white text-black rounded-full flex flex-col items-center justify-center"
                    >
                      <span className="text-xl font-bold">
                        {item.value?.toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-md text-lg font-semibold transition">
                  Buy Now
                </button>
              </div>

              <div className="relative flex items-center justify-center flex-1 ml-16">
              
                <div className="absolute w-80 h-80 bg-green-500/20 blur-3xl rounded-full"></div>
                
              
                <img
                  src={Jbl.src}
                  alt="JBL Speaker"
                  className="relative w-96 object-contain z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
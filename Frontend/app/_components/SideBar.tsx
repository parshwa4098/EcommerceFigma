"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { PiGreaterThanBold } from "react-icons/pi";

import keyboard from "../_assets/ChatGPT Image Feb 24, 2026, 12_17_32 PM.png";
import controller from "../_assets/g92-2-500x500 1.png";
import monitor from "../_assets/ChatGPT Image Feb 24, 2026, 12_25_14 PM.png";
import chair from "../_assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import iphone from "../_assets/ChatGPT Image Feb 24, 2026, 10_33_56 AM.png";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { ProductCard } from "./ProductCard";

export default function SideBar() {
  const products = [
    {
      image: controller,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 4,
      reviews: 88,
    },
    {
      image: keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 75,
    },
    {
      image: monitor,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
    {
      image: chair,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
    {
      image: controller,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 4,
      reviews: 88,
    },
    {
      image: keyboard,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 75,
    },
    {
      image: monitor,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
    {
      image: chair,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
  ];
  const visibleCards = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    if (currentIndex < products.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const banners = [iphone, iphone, iphone];
  const [currentBanner, setCurrentBanner] = useState(0);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

        <div className="flex-1 relative">
          <img
            src={banners[currentBanner].src}
            alt="banner"
            className="w-full h-96 object-cover rounded"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full ${
                  currentBanner === index ? "bg-red-500" : "bg-gray-400/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-4 h-8 bg-red-500 rounded"></div>
          <h4 className="text-red-500 font-bold text-sm">Today’s</h4>
        </div>

        <div className="mt-4 flex items-center justify-between ml-6 mb-10">
          <div className="flex items-center gap-15 ">
            <h2 className="text-2xl font-bold text-black">Flash Sales</h2>

            <div className="flex items-center text-black">
              <div className="text-center mx-4">
                <p className="text-xs">Days</p>
                <p className="text-2xl font-bold">
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Hours</p>
                <p className="text-2xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Minutes</p>
                <p className="text-2xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
              </div>

              <span className="text-2xl font-bold text-red-400 mt-3">:</span>

              <div className="text-center mx-4">
                <p className="text-xs">Seconds</p>
                <p className="text-2xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-gray-200 p-2 rounded-full"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-1/4 px-4 shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

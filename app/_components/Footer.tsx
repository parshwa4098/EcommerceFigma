"use client";
/* eslint-disable @next/next/no-img-element */

import { AiOutlineSend } from "react-icons/ai";
import AppStore from "../_assets/AppStore.jpg";
import playstore from "../_assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.jpg";
import QrCode from "../_assets/Qr Code.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-5 gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">Exclusive</h1>
            <h2 className="font-semibold">Subscribe</h2>
            <p className="text-sm text-white">
              Get 10% off your first order
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white rounded px-4 py-2 pr-10 text-sm focus:outline-none placeholder:text-gray-500"
              />
              <AiOutlineSend className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Support</h2>
            <p className="text-sm text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-white">exclusive@gmail.com</p>
            <p className="text-sm text-white">+88015-88888-9999</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Account</h2>
            <a className="text-sm text-white cursor-pointer">My Account</a>
            <a className="text-sm text-white cursor-pointer">
              Login / Register
            </a>
            <a className="text-sm text-white cursor-pointer">Cart</a>
            <a className="text-sm text-white cursor-pointer">Wishlist</a>
            <a className="text-sm text-white cursor-pointer">Shop</a>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Quick Link</h2>
            <a className="text-sm text-white cursor-pointer">Privacy Policy</a>
            <a className="text-sm text-white cursor-pointer">Terms of Use</a>
            <a className="text-sm text-white cursor-pointer">FAQ</a>
            <a className="text-sm text-white cursor-pointer">Contact</a>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Download App</h2>
            <p className="text-xs text-white">Save $3 with App User only</p>

            <div className="flex gap-3 items-center">
              <img
                src={QrCode.src}
                alt="qr code"
                className="w-20 h-20 object-contain"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={playstore.src}
                  alt="play store"
                  className="w-24 object-contain"
                />
                <img
                  src={AppStore.src}
                  alt="app store"
                  className="w-24 object-contain"
                />
              </div>
            </div>

            <div className="flex gap-4 text-xl mt-4">
              <TiSocialFacebook className="cursor-pointer " />
              <LuTwitter className="cursor-pointer " />
              <FaInstagram className="cursor-pointer" />
              <TiSocialLinkedin className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

export function ProductsCard({ product }: { product: any }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className="relative w-full h-auto   bg-gray-100 rounded-t-xl flex items-center justify-center overflow-hidden">
        <img
          src={product.image.src}
          alt={product.name}
          className="h-60  object-contain"
        />

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <CiHeart size={16} />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
            <FaRegEye size={14} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2 h-10">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-red-500 font-bold text-sm">
            ${product.price}
          </span>

          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < product.rating ? "★" : "☆"}</span>
            ))}
          </div>

          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

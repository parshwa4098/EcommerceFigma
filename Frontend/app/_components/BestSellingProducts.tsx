/* eslint-disable @typescript-eslint/no-explicit-any */

import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

/* eslint-disable @next/next/no-img-element */
export function BestSellingProductsCard({ product }: { product: any }) {
  return (
    <div >
    
      <div className="relative h-60 bg-gray-300 rounded flex items-center justify-center">
        <img
          src={product.image.src}
          alt={product.name}
          className="max-h-40 object-contain"
        />

   
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow">
            <CiHeart />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <FaRegEye />
          </button>
        </div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-sm">{product.name}</h3>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-red-500 font-bold">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${product.oldPrice}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < product.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-gray-500 text-sm">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}

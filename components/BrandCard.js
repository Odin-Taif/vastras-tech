import Link from "next/link";
import { urlFor } from "../utils/sanity";

function BrandCard({ _id, title, logo }) {
  // console.log(logo);
  return (
    <div className="flex flex-col mx-auto my-2 py-2 items-center justify-cente backdrop-blur-sm bg-white/30">
      <div
        className="flex mx-auto items-center justify-center h-60 w-60 bg-cover rounded-full border-2 border-y-teal-300 cursor-pointer"
        style={{
          backgroundImage: `url('${urlFor(logo)
            .auto("format")
            .fit("crop")
            .width(200)
            .quality(80)}`,
        }}
      >
        {/* <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button> */}
      </div>
      {/* </Link> */}
      <div className="px-5 py-3">
        <h3 className="text-center text-gray-700 uppercase">{title}</h3>
      </div>
    </div>
  );
}

export default BrandCard;

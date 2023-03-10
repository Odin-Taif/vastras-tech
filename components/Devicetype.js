import { urlFor, PortableText, getClient } from "../utils/sanity";
import Link from "next/link";
import Image from "next/image";
export default function Devicetype(props) {
  const { title, brands } = props;
  // console.log(brands);
  return (
    <div className=" bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {brands &&
            brands.map((brand) => (
              <Link
                key={brand._id}
                href={`/product/${brand.slug.current}`}
                className="h-80 w-full cursor-pointer rounded-sm hover:border-2 border-purple-700"
              >
                <div
                  style={{
                    backgroundImage: `url('${urlFor(brand.mainImage)
                      .auto("format")
                      .fit("crop")
                      .quality(100)}`,
                  }}
                  alt={`Photo of ${brand.title}`}
                  className="h-full w-full bg-cover bg-center"
                />
                <p className="mt-1 text-lg font-medium">
                  <span className="mt-2 text-md text-white">{brand.title}</span>
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

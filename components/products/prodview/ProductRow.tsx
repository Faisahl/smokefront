import React from "react";
import { ProductObject } from "@/app/types/ProductTypes";
import MagnifyingPicture from "@/components/ui/MagnifyingPicture";
import useShoppingCart from "@/utils/hooks/useShoppingCart";

const ProductRow = ({ product }: { product: ProductObject }) => {
  const { name, price, description, image } = product.attributes.base[0];
  const brand = product.attributes.brand.data.attributes.name;
  const img = image.data[0].attributes.formats.large;

  const { addToCart, inCart } = useShoppingCart();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
        <div className="lg:w-2/5 overflow-hidden bg-gray-50 dark:bg-white border shadow-md">
          <MagnifyingPicture
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
            alt={`${name} image`}
            classes={`mx-auto w-1/6 lg:w-1/4 my-6 shadow-lg`}
          />
        </div>
        <div className="lg:w-3/5 border bg-gray-50 dark:bg-white shadow-md">
          <div className="p-6 text-gray-900">
            <div id="prodHead" className="flex justify-between">
              <h2 className="font-semibold text-2xl tracking-wide ml-2">
                {name}
              </h2>
              <h2 className="font-medium text-xl tracking-wide">${price}</h2>
            </div>
            <div id="prodInfo" className="my-6 mx-4 text-sm">
              <p className="">
                <span className="font-medium">Brand:</span>{" "}
                <span className="">{brand}</span>
              </p>
              <p className=" mt-1">
                <span className="font-medium">Color:</span>{" "}
                <span className="">{}</span>
              </p>
              <p className=" mt-1">
                <span className="font-medium">Weight:</span>{" "}
                <span className="">{}</span>
              </p>
              <p className=" mt-1">
                <span className="font-medium">Height:</span>{" "}
                <span className="">{}</span>
              </p>
              <p className=" mt-1">
                <span className="font-medium">Width:</span>{" "}
                <span className="">{}</span>
              </p>
            </div>
            <div id="prodDesc" className="mx-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, quod cum, pariatur necessitatibus sunt expedita
              molestiae quisquam facilis fugiat aut dolores mollitia ut suscipit
              iure quibusdam minus cupiditate nisi ab.
            </div>
          </div>
          <div id="prodButton" className="flex flex-col mb-6">
            <button
              onClick={() => addToCart(product)}
              className="shadow-md mx-auto text-white bg-custo-51 p-3 w-1/2 rounded-md font-semibold text-xl tracking-wide hover:lg:opacity-90"
            >
              Add to Cart
            </button>
            <h3
              className={`${
                inCart ? "block" : "hidden"
              } mx-auto font-bold text-lg text-green-500`}
            >
              Item added!
            </h3>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h2 className="font-semibold text-3xl text-gray-900 dark:text-white">
          Customers also liked:
        </h2>
      </div>
    </>
  );
};

export default ProductRow;

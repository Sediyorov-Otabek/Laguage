import SinglePageCarousel from "@/components/singlePageCarousel/SinglePageCarousel";
import { FC } from "react";
import { BsChevronRight } from "react-icons/bs";

interface ParamsType {
  id: string;
}

// interface AdditionalInfosType {
//   measurements: {
//     width: string;
//     depth: string;
//   };
// }

// interface ReviewType {
//   rating: number;
//   comments: { rating: number }[];
// }

// interface ColorType {
//   name: string;
//   color: string;
// }

// interface ProductType {
//   additional_infos: AdditionalInfosType;
//   id: string;
//   images: ImagesType[];
//   title: string;
//   category: { primary: string };
//   price: string;
//   originalPrice: string;
//   description: string;
//   reviews: ReviewType;
//   colors: ColorType[];
// }

// interface ImagesType {
//   color: string;
//   images: string[];
// }

const SingleProduct: FC<{ params: ParamsType }> = async ({ params }) => {
  const { id } = params;

  async function fetchApi(id: string) {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/67024f68acd3cb34a8920fb3",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$.vg2bZmuax/qqiu9DJyk.uwTjcLnUITl8AW/avzdSi8vzDTQb61da",
          "X-JSON-Path": `$..products[?(@.id == "${id}")]`, // Added quotes around the id
        },
      }
    );

    if (!response.ok) {
      return "";
    }

    return await response.json();
  }

  const data = await fetchApi(id);
  const product = data.record[0];

  if (product) {
    console.log(product);
  }

  return product ? (
    <div className="singleProduct wrapper mb-5">
      <p className="my-5 text-sm text-[#605F5F]">
        Home &nbsp;{">"}&nbsp; Shop &nbsp;{">"}&nbsp;{" "}
        {product?.category.primary} &nbsp;
        {">"}&nbsp; {product?.title}
      </p>
      <div className="singleProduct__top flex-col md:flex-row flex-center items-start justify-between gap-4 md:gap-8">
        <div className="singleProduct__top--images p-3 border min-h- w-full md:w-3/6 lg:w-2/4">
          <SinglePageCarousel images={product?.images[0].images} />
        </div>
        <div className="singleProduct__top--texts flex-grow self-stretch">
          <div className="flex items-center gap-3">
            <span className="reviews text-sm">
              {product?.reviews.comments?.length || 0} reviews
            </span>
          </div>
          <h2 className="text-[1.5rem] lg:text-[2.5rem] my-2">
            {product?.title}
          </h2>
          <p className="text-[#6C7275] text-sm lg:text-base font-light">
            {product?.description}
          </p>
          <h3 className="my-3 text-2xl lg:text-3xl flex-center justify-start gap-3">
            ${product?.price}
            {product?.price < product?.originalPrice && (
              <span className="text-base lg:text-xl line-through text-[#6C7275]">
                ${product?.originalPrice}
              </span>
            )}
          </h3>
          <hr className="mt-6" />
          <div className="colors mt-4">
            <h4 className="flex-center justify-start gap-2 text-[#6C7275] font-[500]">
              Choose colors <BsChevronRight />{" "}
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {product?.colors.map((clr: { color: string }, inx: number) => (
                <div
                  key={inx}
                  className="min-w-10 min-h-10 rounded-full border shadow-md cursor-pointer hover:shadow-none duration-200"
                  style={{ backgroundColor: clr.color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="animate-pulse wrapper mt-6">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4 sm:w-1/4"></div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-2/4 h-64 bg-gray-200 rounded sm:h-80 lg:w-1/2"></div>
        <div className="flex-1">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-4 sm:w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 sm:w-1/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2 sm:w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 sm:w-1/6"></div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3 sm:w-1/4"></div>
            <div className="flex gap-4 mt-2">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

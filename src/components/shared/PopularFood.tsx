/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Clock, Heart, Truck } from "lucide-react";
import { CiDeliveryTruck, CiDiscount1, CiStar } from "react-icons/ci";
import { FaHotel, FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import plus from "../../../public/plus.png";

interface CardProps {
  id: number;
  image: string;
  discount: string;
  rating: string;
  name: string;
  price: string;
  offerPrice: string;
  shop: string;
  time: string;
  deliveryFee: string;
  isLiked?: boolean;
}

const popularFood: CardProps[] = [
  {
    id: 1,
    image: "/bigBurger.png",
    discount: "30% Off",
    rating: "4.6",
    name: "Burger with Emmental Cheese",
    price: "€49.99",
    offerPrice: "€44.99",
    shop: "Burger King",
    time: "30 min",
    deliveryFee: "€02",
    isLiked: true,
  },
  {
    id: 2,
    image: "/chicken.png",
    discount: "35% Off",
    rating: "4.6",
    name: "Tandoori Chicken",
    price: "€49.99",
    offerPrice: "€44.99",
    shop: "Burger King",
    time: "25 min",
    deliveryFee: "€02",
    isLiked: false,
  },
  {
    id: 3,
    image: "/bigKabab.png",
    discount: "30% Off",
    rating: "4.6",
    name: "Döner Kebab",
    price: "€49.99",
    offerPrice: "€44.99",
    shop: "Burger King",
    time: "35 min",
    deliveryFee: "€02",
    isLiked: false,
  },
  {
    id: 4,
    image: "/pizzSlice.png",
    discount: "20% Off",
    rating: "4.6",
    name: "Pepperoni Pizza Slice",
    price: "€49.99",
    offerPrice: "€44.99",
    shop: "Burger King",
    time: "30 min",
    deliveryFee: "€02",
    isLiked: false,
  },
  {
    id: 5,
    image: "/chicken.png",
    discount: "20% Off",
    rating: "4.9",
    name: "Pepperoni Pizza Slice",
    price: "€49.99",
    offerPrice: "€44.99",
    shop: "Burger King",
    time: "30 min",
    deliveryFee: "€02",
    isLiked: false,
  },
];

const PopularFood = () => {
  const [likedItems, setLikedItems] = useState<number[]>(
    popularFood.filter((food) => food.isLiked).map((food) => food.id)
  );

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div className="w-full h-[1204px] flex flex-col">
      {/* top section start */}
      <div className="w-full h-[620px] py-[75px] px-[56px] flex flex-col">
        <div className="flex flex-col gap-[50px] w-full h-full">
          {/* heading section */}
          <div className="flex justify-between px-[17px] h-[84px] w-full">
            <div className="w-[501px] pl-14 h-[84px] flex flex-col gap-3">
              <h4 className="font-lobster font-normal text-[20px] leading-[150%] tracking-[1%] text-[#333333]">
                Popular Food
              </h4>
              <h2 className="font-primary font-semibold text-[40px] leading-[42px] tracking-[1%]">
                Popular <span className="text-[#ED6923]">Food Near me</span>
              </h2>
            </div>
            <button className="border-[#ED6923] mr-14 mt-5 border flex cursor-pointer duration-100 hover:bg-[#ED6923] items-center justify-center w-[172px] h-[48px] rounded-[8px] p-[25px]">
              <span className="text-[#ED6923] hover:text-white">View All</span>
            </button>
          </div>
          {/* card section */}
          <div className="w-full h-[344px] flex items-center justify-center gap-4">
            <Carousel className="w-[1200px] h-[344px] flex gap-6">
              <CarouselContent className="ml-1 w-full">
                {popularFood.map((food) => (
                  <CarouselItem key={food.id} className="pl-1 basis-1/4">
                    <div className="relative overflow-hidden group flex flex-col  bg-white w-[282px] h-[312px] rounded-[15px]">
                      {/* image section start */}
                      <div className="relative w-full h-[160px] overflow-hidden">
                        <Image
                          src={food.image}
                          alt={food.name}
                          width={282}
                          height={175}
                          className="w-full h-full object-cover"
                        />
                        {/* Heart Icon */}
                        <button
                          onClick={() => toggleLike(food.id)}
                          className="absolute top-3 right-3 z-10 w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          <Heart
                            size={20}
                            className={`transition-colors duration-200 ${
                              likedItems.includes(food.id)
                                ? "fill-[#ED6923] text-[#ED6923]"
                                : "text-[#ED6923] hover:text-[#ED6923]"
                            }`}
                          />
                        </button>
                        {/* discount badge */}
                        <div className="flex items-center gap-1 rounded-r-2xl bg-[#ED6923] w-[83px] h-[28px] absolute top-[15px] left-0 p-2">
                          <CiDiscount1 className="text-white" />
                          <p className="text-white text-[12px] leading-[14px] tracking-[1%]">
                            {food.discount}
                          </p>
                        </div>
                        {/* rating badge */}
                        <div className="absolute bottom-3 right-[7px] flex items-center gap-1 rounded-2xl bg-white w-[81px] h-[25px] p-2">
                          <FaStar className="text-[#ED6923]" />
                          <h2 className="flex gap-[2px]">{food.rating} <span className="text-[#333333]">(86)</span></h2>
                        </div>
                      </div>
                      {/* image section end */}
                      {/* content section start */}
                      <div className="w-full h-[137.05px] flex flex-col mt-3 px-[15px]">
                        <div className="w-full h-[107px] flex flex-col gap-3">
                          <div className="w-full h-full flex items-center justify-between">
                            <h4 className="w-[178.89px] h-[46px] text-[18px] font-primary font-medium leading-[130%] tracking-[0.1%] text-[#262626]">{food.name}</h4>
                            <div className="flex flex-col w-[58px] h-[36px] gap-1">
                              <h5 className="text-[#767676] line-through font-primary font-light text-[12px] leading-[16px]">{food.price}</h5>
                              <h5 className="text-[#ED6923] font-primary font-semibold text-[16px] leading-[16px]">{food.offerPrice}</h5>
                            </div>
                          </div>
                          <div className="w-full h-[21px] flex gap-2">
                            <FaHotel size={16}/>
                            <h3 className="font-primary font-normal text-[16px] leading-[130%] tracking-[0%] text-[#262626]">{food.shop}</h3>
                          </div>
                          <div className="w-[133px] h-[16px] flex gap-6 items-center justify-between">
                            <div className="w-[62px] h-[12px] gap-1 flex items-center">
                              <IoMdTime />
                              <h5 className="font-primary font-medium text-[12px] leading-[100%] text-[#5C5C5C]">{food.time}</h5>
                            </div>
                            <div className="w-[47px] h-[16px] flex items-center justify-between gap-1">
                              <Truck size={16}/>
                              <h5 className="font-primary font-medium text-[12px] leading-[100%] text-[#5C5C5C]">{food.deliveryFee}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* content section end */}
                      <div className="absolute bottom-5 right-5 rounded-full cursor-pointer bg-[#E5E5E5]">
                        <Image src={plus} alt="sitted_image" width={44} height={44} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* top section end */}

      {/* bottom section start */}
      <div className="w-full h-[620px] py-[75px] px-[56px] flex flex-col">
        <div className="flex flex-col gap-[50px] w-full h-full">
          {/* heading section */}
          <div className="flex justify-between px-[17px] h-[84px] w-full">
            <div className="w-[501px] pl-13 h-[84px] flex flex-col gap-3">
              <h4 className="font-lobster font-normal text-[20px] leading-[150%] tracking-[1%] text-[#333333]">
                Popular Food
              </h4>
              <h2 className="font-primary font-semibold text-[40px] leading-[42px] tracking-[1%]">
                Popular <span className="text-[#ED6923]">Food Near me</span>
              </h2>
            </div>
            <button className="border-[#ED6923] mr-14 mt-5 border flex cursor-pointer duration-100 hover:bg-[#ED6923] items-center justify-center w-[172px] h-[48px] rounded-[8px] p-[25px]">
              <span className="text-[#ED6923] hover:text-white">View All</span>
            </button>
          </div>
          {/* card section */}
          <div className="w-full h-[344px] flex items-center justify-center gap-4">
            <Carousel className="w-[1200px] h-[344px] flex gap-6">
              <CarouselContent className="ml-1 w-full">
                {popularFood.map((food) => (
                  <CarouselItem key={food.id} className="pl-1 basis-1/4">
                    <div className="relative overflow-hidden group flex flex-col  bg-white w-[282px] h-[280px] rounded-[15px]">
                      {/* image section start */}
                      <div className="relative w-full h-[160px] overflow-hidden">
                        <Image
                          src={food.image}
                          alt={food.name}
                          width={282}
                          height={175}
                          className="w-full h-full object-cover"
                        />
                        {/* discount badge */}
                        <div className="flex items-center gap-1 rounded-r-2xl bg-[#ED6923] w-[83px] h-[28px] absolute top-[15px] left-0 p-2">
                          <CiDiscount1 className="text-white" />
                          <p className="text-white text-[12px] leading-[14px] tracking-[1%]">
                            {food.discount}
                          </p>
                        </div>
                        {/* rating badge */}
                        <div className="absolute bottom-3 right-[7px] flex items-center gap-1 rounded-2xl bg-white w-[81px] h-[25px] p-2">
                          <FaStar className="text-[#ED6923]" />
                          <h2 className="flex gap-[2px]">{food.rating} <span className="text-[#333333]">(86)</span></h2>
                        </div>
                      </div>
                      {/* image section end */}
                      {/* content section start */}
                      <div className="w-[253px] h-[79.05px] flex flex-col gap-3 mt-3 px-[15px]">
                        <div className="w-full h-[57.05px] flex flex-col gap-3">
                          <h3 className="font-primary font-medium text-[18px] leading-[130%] tracking-[0.1%] text-[#262626]">{food.shop}</h3>
                          <div className="w-full h-[24px] flex gap-5">
                            <div className="flex gap-1 w-[79px] h-[24px]">
                              <Clock size={12} />
                              <p className="text-[#ED6923] font-medium text-[12px] leading-[100%]">20-30 min</p>
                            </div>
                            <div className="w-[136px] h-[16px] flex gap-1">
                              <CiDeliveryTruck size={16} />
                              <p className="text-[#ED6923] font-medium text-[12px] leading-[100%]">Delivery Fee {food.deliveryFee}</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[220px] h-[10px] flex items-center gap-1">
                          <p className="font-primary text-[12px] font-normal leading-[10px] tracking-[0%] w-[29px] h-[10px]">Pizza</p>
                          <p className="w-[7px] h-[0px] border-[1px] border-[#686868] rotate-90"></p>
                          <p className="font-primary text-[12px] font-normal leading-[10px] tracking-[0%] w-[40px] h-[10px]">Burger</p>
                          <p className="w-[7px] h-[0px] border-[1px] border-[#686868] rotate-90"></p>
                          <p className="font-primary text-[12px] font-normal leading-[10px] tracking-[0%] w-[34px] h-[10px]">Pasta</p>
                          <p className="w-[7px] h-[0px] border-[1px] border-[#686868] rotate-90"></p>
                          <p className="font-primary text-[12px] font-normal leading-[10px] tracking-[0%] w-[69px] h-[10px]">Chicken Fry</p>
                        </div>
                      </div>
                      {/* content section end */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      {/* bottom section end */}
    </div>
  );
};

export default PopularFood;

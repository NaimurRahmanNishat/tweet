import React from 'react'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { CardContent } from '../ui/card';

interface CategoryProps {
  id: number;
  bgColor: string;
  image: string; 
  name: string;
}

const categories: CategoryProps[] = [
  {
    id: 1,
    bgColor: '#E1B47B',
    image: '/donuts.png',
    name: 'Donuts',
  },
  {
    id: 2,
    bgColor: '#FA8D1C',
    image: '/pizza.png',
    name: 'Pizza',
  },
  {
    id: 3,
    bgColor: '#FD683E',
    image: '/kebab.png',
    name: 'Kebab',
  },
  {
    id: 4,
    bgColor: '#FF8000',
    image: '/burger.png',
    name: 'Burger',
  },
  {
    id: 5,
    bgColor: '#F75E28',
    image: '/sandwich.png',
    name: 'Sandwich',
  },
  {
    id: 6,
    bgColor: '#FCBD00',
    image: '/shawarma.png',
    name: 'Shawarma',
  },
  {
    id: 7,
    bgColor: '#DA270F',
    image: '/taco.png',
    name: 'Taco',
  },
  {
    id: 8,
    bgColor: '#C7CEEA',
    image: '/pizza.png',
    name: 'Pies',
  },
  {
    id: 9,
    bgColor: '#D0F4DE',
    image: '/kebab.png',
    name: 'Tarts',
  },
]

const Category = () => {
  return (
    <div className='w-full h-[422px] py-[72px] px-[99px] flex flex-col gap-2.5'>
      <div className='w-full h-full flex flex-col gap-[65px]'>
        <div className='w-[501px] h-[84px] flex flex-col gap-3'>
          <h3 className='font-lobster font-normal text-[20px] leading-[150%] tracking-[1%] text-[#333333]'>Category</h3>
          <h3 className='font-primary font-semibold text-[40px] leading-[42px] tracking-[1%]'>Popular <span className='text-[#FF7F3E]'>Category</span></h3>
        </div>
        {/* carousel content */}
        <Carousel>
          <CarouselContent className="-ml-1">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="pl-1 basis-1/7">
                <div className="p-1">
                    <CardContent
                      className="w-[138.47px] h-[128px] rounded-[8px] flex flex-col items-center justify-center gap-[12.94px]"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={139}
                        height={94}
                      />
                      <h4 className="text-[20px] font-medium font-primary leading-[23.23px] text-white">{category.name}</h4>
                    </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Category;

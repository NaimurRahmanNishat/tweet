import Category from '@/components/shared/Category';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import MobileApp from '@/components/shared/MobileApp';
import PopularFood from '@/components/shared/PopularFood';
import Testimonial from '@/components/shared/Testimonial';
import TopSection from '@/components/shared/TopSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <TopSection/>
      <Header/>
      <Hero/>
      <Category/>
      <PopularFood/>
      <MobileApp/>
      <Testimonial/>
    </div>
  )
}

export default page;
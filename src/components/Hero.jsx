import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import img1 from '@/images/heroimages/img1.png'
import img2 from '@/images/heroimages/img1.png'

const images = [
  {
    link: img1,
  },
  {
    link: img2,
  },
]

export function Hero() {
  return (
    <>
      <section className=" text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 pt-10 text-center  md:px-10 md:pt-10 lg:px-10 ">
          <h1 className="text-3xl font-bold leading-none sm:text-4xl">
            IEEE{' '}
            <span className="text-pri">Ramaiah Institute Of Technology</span>
          </h1>
          <p className="mt-1 text-lg text-red-600">
            Advancing Technology For Humanity
          </p>
        </div>
      </section>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="lg:h-128 h-96 w-full object-fill"
              src={image.link}
              alt={index}
              width={1745}
              height={636}
              objectFit="cover"
              border-radius="10px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className="pt-5 pb-16 text-justify lg:pt-8">
        <p class="text-md lg:text-xl mx-auto mt-5 max-w-3xl rounded-xl bg-slate-100 p-3 tracking-tight text-slate-800">
          <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in November
          2003. The branch endeavors to enrich the students of RIT with the
          latest developments in various fields of technology and research and
          ensure that their competency levels meet all the required standards in
          today’s industry and participation in a kaleidoscope of technical
          events throughout the year, implicitly emphasizing on extra-curricular
          activities in a student’s life.
        </p>
        <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://site.ieee.org/sb-ritb/about-ieee/ieee-ramaiah/"
            className="text-md mt-10 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
      </Container>
    </>
  )
}

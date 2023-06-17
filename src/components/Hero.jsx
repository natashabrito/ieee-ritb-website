import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Member } from '@/components/Member'
import img1 from '@/images/home/p1.png'
import img2 from '@/images/home/p2.png'
import img4 from '@/images/home/p4.png'
import img3 from '@/images/home/p3.png'
import img5 from '@/images/home/p5.png'
import img6 from '@/images/home/p6.png'

const images = [img1, img2, img3, img4, img5, img6]

const routs = [
  {
    name: 'Creativity',
    link: '/creativity',
  },
  {
    name: 'APS',
    link: '/aps',
  },
  {
    name: 'Computer Society',
    link: '/computersociety',
  },
  {
    name: 'PR Sponsorship',
    link: '/pr_sponsorship',
  },
  {
    name: 'Documentation',
    link: '/documentation',
  },
  {
    name: 'RoboRIT',
    link: '/roborit',
  },
  {
    name: 'XTREME',
    link: '/xtreme',
  },
  {
    name: 'Digital Design',
    link: '/digitaldesign',
  },
  {
    name: 'Sensor Council',
    link: '/sensor_council',
  },
  {
    name: 'WIE',
    link: '/wie',
  },
  {
    name: 'MTTS',
    link: '/mtts',
  },
  {
    name: 'PES',
    link: '/pes',
  },
  {
    name: 'SPS',
    link: '/sps',
  },
]
const members = [
  {
    name: 'SUHAS KATRAHALLI',
    designation: 'Chairperson',
    link: 'https://www.linkedin.com/in/suhaskatrahalli',
    image:
      'https://drive.google.com/uc?id=1bJ38lrFlwMrD6Byz16Ed0R333CDFpHVW&export=view',
  },
  {
    name: 'SRINIVAS C',
    designation: 'SB Secretary',
    link: 'https://www.linkedin.com/in/srinivas-c-678105249/',
    image:
      'https://github.com/myselfshravan/myselfshravan.github.io/assets/94772842/66635445-e53a-4737-ab83-d0374bfbfb1c',
  },
]

export function Hero() {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 pt-8 text-center md:px-10 lg:px-8">
        <h1 className="text-2xl font-bold leading-none md:text-3xl lg:text-4xl">
          IEEE <span className="text-pri">Ramaiah Institute Of Technology</span>
        </h1>
        <p className="mt-1 text-lg text-red-600">
          Advancing Technology For Humanity
        </p>
      </div>
      <div className="mx-auto max-w-4xl p-4">
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
          // navigation={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="h-auto w-full rounded-lg shadow-lg"
                src={image}
                alt={index + 'image'}
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Container className="pt-5 pb-16 text-justify lg:pt-8">
        <p class="text-md mx-auto max-w-3xl rounded-xl bg-slate-100 p-3 tracking-tight text-slate-800 lg:text-xl">
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
            className="text-md mt-8 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-md mt-6 font-semibold text-center">
            All the societies and councils under IEEE-RIT
          </h1>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 lg:items-center"
          >
            {routs.map((item, index) => (
              <li
                key={index}
                className="rounded-xl p-0.5 shadow-lg ring ring-indigo-50 transition hover:shadow-sm"
              >
                <div className="rounded-[10px] bg-white p-5 sm:p-6">
                  <h3 className="text-gray-9 text-center text-base font-semibold uppercase">
                    {item.name}
                  </h3>
                  <div className="flex justify-center">
                    <a href={item.link}>
                      <button className="mt-2 rounded-lg border bg-transparent px-4 py-2 font-semibold text-blue-700 shadow-lg shadow-blue-900/10 hover:border-transparent hover:bg-blue-900 hover:text-white">
                        View
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 text-center">
            Office Bearers of IEEE-RIT
          </h1>
          <div className="mt-8 grid max-w-4xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Member
              name="SUHAS KATRAHALLI"
              designation="SB Chair"
              link="https://www.linkedin.com/in/suhaskatrahalli"
              image="https://drive.google.com/uc?id=1bJ38lrFlwMrD6Byz16Ed0R333CDFpHVW&export=view"
            ></Member>

            <Member
              name="SRINIVAS C"
              designation="SB Secretary"
              link="https://www.linkedin.com/in/srinivas-c-678105249/"
              image="https://drive.google.com/uc?id=1JjKLA1zCL5BZMBB8qnfgxs_nFkoh3aAh&export=view"
            ></Member>

            <Member
              name="VINAYAK SHARMA"
              designation="SB Treasurer"
              link="https://www.linkedin.com/in/vinayak-sharma-033500210"
              image="https://drive.google.com/uc?id=1_AMkkaKxbzlr0QfX5wbDMf6RO4L60gWj&export=view"
            ></Member>

            <Member
              name="PRAJWAL B MEHENDARKAR"
              designation="SB Technical Head"
              link="https://www.linkedin.com/in/prajwal-b-mehendarkar-657544210"
              image="https://drive.google.com/uc?id=1DJb27tCJxoOUgAvCJXyXaogFQRT7BqjR&export=view"
            ></Member>

            <Member
              name="SNEGA UMAPATHI"
              designation="SB Convener"
              link="https://www.linkedin.com/in/snega-umapathi-b73480210"
              image="https://drive.google.com/uc?id=13vngh3QbtTF58xImFpsYYGHgYnn1-dw5&export=view"
            ></Member>

            <Member
              name="DIVYANSH MISHRA"
              designation="SB Vice-Chair"
              link="https://www.linkedin.com/in/divyansh-mishra-0a3168229"
              image="https://drive.google.com/uc?id=1fe_XkP7UrbuPAMBhQnB5rVBzxlNy_0xY&export=view"
            ></Member>

            <Member
              name="ASKANDA MAHAJAN"
              designation="SB Vice-Secretary"
              link="https://in.linkedin.com/in/askanda-mahajan-9a2004200"
              image="https://drive.google.com/uc?id=1a5WSd-AxMViNf7w8C6plRybQThMcsNtY&export=view"
            ></Member>

            <Member
              name="GURTEZ SINGH"
              designation="SB Vice-Treasurer"
              link="https://www.linkedin.com/in/gurtezsingh"
              image="https://drive.google.com/uc?id=1AmN3WmW2wZ8Nqfysn1Jz528byd6HuA8f&export=download"
            ></Member>

            <Member
              name="SANJAY KUMAR"
              designation="SB Vice-Technical Head"
              link="https://www.linkedin.com/in/sanjay-kumar-947911229/"
              image="https://drive.google.com/uc?id=1uNkrtldaPHXTKc62unwr_ejEBBWRInNn&export=view"
            ></Member>

            <Member
              name="SHUBHAM ANAND"
              designation="SB Vice-Convener"
              link="https://www.linkedin.com/in/shubham-anand-507785226/"
              image="https://drive.google.com/uc?id=1W1uCRJvOSW8wBet8GfYbz2AWQ2UcHKIX&export=view"
            ></Member>
          </div>
        </div>
      </Container>
    </section>
  )
}

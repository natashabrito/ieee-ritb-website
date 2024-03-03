import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

import collab1 from "@/images/collab/1.png"
import collab2 from "@/images/collab/2.png"
import collab3 from "@/images/collab/3.png"

import img2 from '@/images/RoboRIT/Picture2.jpg'
import img7 from '@/images/RoboRIT/Picture7.jpg'
import img4 from '@/images/RoboRIT/Picture4.jpg'
import img5 from '@/images/RoboRIT/Picture5.jpg'
import img8 from '@/images/RoboRIT/Picture8.jpg'
import img9 from '@/images/RoboRIT/Picture9.jpg'
import img11 from '@/images/RoboRIT/Picture11.jpg'
import img12 from '@/images/RoboRIT/Picture12.jpg'
import img15 from '@/images/RoboRIT/Picture15.jpg'
import img17 from '@/images/RoboRIT/Picture17.jpg'
import img19 from '@/images/RoboRIT/Picture19.jpg'

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
    img2,
    img4,
    img5,
    img7,
    img8,
    img9,
    img11,
    img12,
    img15,
    img17,
    img19,
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Collab | IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="Collab - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="text-justify">
                            <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Collab
                            </h1>
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                loop={true}
                                autoHeight={true}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
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
                                            src={image}
                                            alt={index}
                                            width={1795}
                                            height={850}
                                            objectFit="cover"
                                            border-radius="10px"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                IEEE RIT-B is the IEEE student branch at Ramaiah institute of Technology. It is one of the largest and most 
                                active student branches in the Bangalore section. IEEE RIT-B was inaugurated in 2003 and since then has 
                                strived to enrich the students of RIT with the latest developments 
                                in various fields of technology and research and advance technology for Humanity . 
                                Over the two decades we have been active for, we have backed many accolades and laurels including 
                                “The Best Large student chapter”, “Best Student Volunteer” and many others. We conduct multitude of 
                                competitions, workshops, seminars and other events which have very high quality. This is further emphasized 
                                by our flagship event ‘Aavishkaar’ and being coordinators of the recent RIT TechFest 2023.
                            </p>
                            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                                Past events:
                            </h1>
                        </div>

                        <h1 className='text-3xl mt-10'>Collabs</h1>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-10">
                            <Image src={collab1} width={300} height={300} alt='collab-image' />
                            <Image src={collab2} width={300} height={300} alt='collab-image' />
                            <Image src={collab3} width={300} height={300} alt='collab-image' />
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

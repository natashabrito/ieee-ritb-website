import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
// import img1 from '@/images/PES-2/Picture1.png'
import img2 from '@/images/PES-2/Picture2.jpg'
import img3 from '@/images/PES-2/Picture3.jpg'
// import img4 from '@/images/PES-2/Picture4.jpg'
import img5 from '@/images/PES-2/Picture5.jpg'
import img6 from '@/images/PES-2/Picture6.jpg'
// import img7 from '@/images/PES-2/Picture7.jpg'

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img2,img3,img5,img6]

export default function Home() {
    return (
        <>
            <Head>
                <title>IEEE PES CHAPTER || IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="IEEE PES CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                IEEE PES CHAPTER
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
                      width={1745}
                      height={800}
                      objectFit="cover"
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
                            <div>
                                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                                    IEEE Power and Energy Society Chapter is a professional society for electrical engineers who work in the power and energy industry. It provides members with access to educational resources, networking opportunities, and professional development opportunities.
                                    The IEEE Power and Energy Society (PES) is a leading non-profit organization driven by volunteers worldwide. Its mission is to be the leading provider of scientific and engineering information on electric power and energy for the betterment of society. A PES Chapter is a technical sub-unit of one or more IEEE Sections and consists of PES members who share technical interests and geographical proximity. Chapters provide PES members with the opportunity to meet and learn from fellow IEEE members. As of January 2023, PES has 800+ global chapters made up of Professional Chapters and Student Branch Chapters.
                                </h1>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
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

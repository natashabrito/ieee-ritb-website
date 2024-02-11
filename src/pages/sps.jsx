import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import { Member } from '@/components/Member'

import img3 from '@/images/SPS/Picture3.png'
import img4 from '@/images/SPS/Picture4.png'
import img5 from '@/images/SPS/Picture5.png'
import img6 from '@/images/SPS/Picture6.png'
import img7 from '@/images/SPS/Picture7.png'
import sps1 from '@/images/slider_event_images/sps/sps1.jpg'
import sps2 from '@/images/slider_event_images/sps/sps2.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img3, img4, img5, img6, sps1, sps2]

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE SPS CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE SPS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE SPS CHAPTER
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
                <h1 className="mt-10 text-justify text-lg tracking-tight text-gray-900 lg:text-xl">
                  Signal processing is the enabling technology for the
                  generation, transformation, extraction, and interpretation of
                  information. It comprises the theory, algorithms with
                  associated architectures and implementations, and applications
                  related to processing information contained in many different
                  formats broadly designated as signals. Signal processing uses
                  mathematical, statistical, computational, heuristic, and/or
                  linguistic representations, formalisms, modeling techniques
                  and algorithms for generating, transforming, transmitting, and
                  learning from signals. The Signal Processing Society is an
                  international organization whose purpose is to: advance and
                  disseminate state-of-the-art scientific information and
                  resources; educate the signal processing community; and
                  provide a venue for people to interact and exchange ideas. SPS
                  RIT tries its best to maintain the high-quality standards of
                  the International Signal Processing Society
                </h1>
              </div>

              <h1 className="mb-10 mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
               

                 <Member
                  name="Aditi Kulkarni"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Aditi%20Kulkarni%20_1MS21EC137%20.jpg?raw=true"
                ></Member>

                   <Member
                  name="Arya Saha"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Arya%20Saha_1MS23EC066-T.jpg?raw=true"
                ></Member>

                <Member
                  name="Ashutosh.S.U"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Ashutosh.S.U_1MS22EC026.jpg?raw=true"
                ></Member>

                
                <Member
                  name="Askanda Mahajan"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Askanda%20Mahajan_1MS21EC030.jpg?raw=true"
                ></Member>

                <Member
                  name="G Charukesh"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/G%20Charukesh_1MS23EC038.jpg?raw=true"
                ></Member>

                <Member
                  name="Joanna Philip"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Joanna%20Philip_1MS22EC054.jpg?raw=true"
                ></Member>

                <Member
                  name="M Naga Sarvani"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/M%20Naga%20Sarvani_1MS22EC075.jpg?raw=true"
                ></Member>

                <Member
                  name="Madhumitha.R"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Madhumitha.R_1MS22EI024.jpg?raw=true"
                ></Member>

                 <Member
                  name="NIHARIKA.R"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/NIHARIKA.R_1MS21EC071.jpg?raw=true"
                ></Member>

                
                 <Member
                  name="Neha C"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/NehaC_1MS21MD016.jpg?raw=true"
                ></Member>

                 <Member
                  name="Nidhi Patil "
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Nidhi%20Patil%20_1MS22EE034.jpg?raw=true"
                ></Member>

                <Member
                  name="Rhakia"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Rhakia_1MS21MD026.jpg?raw=true"
                ></Member>

                <Member
                  name="Rohith Mohite"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Rohith%20Mohite_1MS22EC101.JPG?raw=true"
                ></Member>

                
                <Member
                  name="Sharvesh T Srinivasan"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Sharvesh%20T%20Srinivasan_1MS21MD035.jpg?raw=true"
                ></Member>

                  
                <Member
                  name="Shreyas Bhat"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Shreyas%20Bhat_1MS22EE051.jpg?raw=true"
                ></Member>

                <Member
                  name="Soutrik Raha"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Soutrik%20Raha_1MS23EC034-T.jpg?raw=true"
                ></Member>

                
                <Member
                  name="Srivalli P"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/Srivalli%20P_1MS22EI050.jpg?raw=true"
                ></Member>

                 
                <Member
                  name="T N YOGAJAY"
                  designation="Member"
                  link="None"
                  image="https://github.com/sanjay212003/sps-members/blob/main/T%20N%20YOGAJAY%20_1MS22EC135.jpg?raw=true"
                ></Member>
                
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

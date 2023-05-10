import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'

export default function Contactus() {
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Contact Us - IEEE</title>
        </Head>
        <Header />
        <section class="body-font text-gray-600 ">
          <div class="container mx-auto flex flex-col px-5 py-12">
            <div class="mx-auto lg:w-4/6">
              <div class="flex justify-center">
                <img
                  alt="content"
                  class="rounded-lg object-cover p-2 shadow-md"
                  src="https://site.ieee.org/sb-ritb/files/2018/05/cropped-transparent-bg.png"
                />
              </div>
              <div class="mt-10 flex flex-col sm:flex-row">
                <div class="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                  {/* <div class="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src="https://site.ieee.org/sb-ritb/files/2020/07/KRS-Shobha-K.R-IEEE-RIT-B-500x480.jpg"
                      height={78}
                      width={78}
                    />
                  </div> */}
                  <div class="flex flex-col items-center justify-center text-center">
                    {/* <h2 class="title-font mt-4 text-lg font-medium text-gray-900">
                      Dr. Megha. P. Arakeri
                    </h2>
                    <p class="text-base">Chair, IEEE CIS, Bangalore Section</p> */}
                    <div class="mt-2 mb-4 h-1 w-12 rounded bg-sky-600"></div>
                    <p class="text-dark flex items-center text-sm font-medium">
                      IEEE-RIT Ramaiah Institute of Technology MSR Nagar, MSRIT
                      Post, Mathikere Bangalore-560054
                    </p>
                    <p class="text-dark mt-5 flex items-center text-sm font-medium">
                      <span class="text-primary mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          fill="currentColor"
                          class="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <span>
                        <a href="mailto:ieeeritb@gmail.com">
                          ieeeritb@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="mt-4 mb-10 rounded-xl border-t border-gray-200 bg-slate-100 p-4 text-justify sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                  <p class="mb-4 text-base  ">
                    <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in
                    November 2003. The branch endeavors to enrich the students
                    of RIT with the latest developments in various fields of
                    technology and research and ensure that their competency
                    levels meet all the required standards in today’s industry
                    and participation in a kaleidoscope of technical events
                    throughout the year, implicitly emphasizing on
                    extra-curricular activities in a student’s life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

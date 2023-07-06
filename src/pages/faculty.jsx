import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import img1 from '@/images/members/member(2).jpg'
import img2 from '@/images/members/member(1).jpg'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
const members = [
  {
    name: 'Suhas Katrahalli',
    designation: 'SB Chair',
    description: 'IEEE RITB SB Chair | CSE RITB - 2024',
    image: img1,
  },
  {
    name: 'Srinivas C',
    designation: 'SB Secretary',
    description:
      'Present Novice @RIT,Bangalore, Secretary of IEEE-RITB, Official student speaker at Internshala',
    image: img2,
  },
]

export default function officebearers() {
  return (
    <>
      <Head>
        <title>Faculty Members - IEEE | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section class="bg-blue-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-8 ">
          <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Faculty Members of <span class="text-sky-800">IEEE RITB</span>
            </h2>
          </div>
          <div class="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            {members.map((member) => (
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg border border-blue-100">
                <div className="p-5">
                  <div class="flex justify-center">
                    <Image
                      class="flex-shrink-0 rounded-lg object-cover sm:mx-4"
                      src={member.image}
                      width="250px"
                      height="250px"
                    />
                  </div>
                  <div class="flex flex-1 flex-col justify-between p-6">
                    <div class="flex-1">
                      <p class="text-md flex justify-center font-medium text-sky-600">
                        {member.designation}
                      </p>
                      <div class="mt-2 block">
                        <p class="flex justify-center text-xl font-semibold text-gray-900">
                          {member.name}
                        </p>
                        <p class="mt-3 flex justify-center text-center text-base text-gray-500">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

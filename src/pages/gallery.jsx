import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import img1 from '@/images/gallery/IMG_0130.JPG'
import img2 from '@/images/gallery/DSC_0127.jpg'
import img3 from '@/images/gallery/IMG_0130.JPG'
import img4 from '@/images/gallery/IMG_0130.JPG'
import img5 from '@/images/gallery/IMG_0130.JPG'
import img6 from '@/images/gallery/IMG_0130.JPG'
import img7 from '@/images/gallery/IMG_0130.JPG'

const resources = [
  {
    title: 'Image 1',
    imageSrc: img1,
  },
  {
    title: 'Image 2',
    imageSrc: img2,
  },
  {
    title: 'Image 3',
    imageSrc: img3,
  },
  {
    title: 'Image 4',
    imageSrc: img4,
  },
  {
    title: 'Image 5',
    imageSrc: img5,
  },
  {
    title: 'Image 6',
    imageSrc: img6,
  },
  {
    title: 'Image 7',
    imageSrc: img7,
  },
]

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - IEEE | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section
        id="resources"
        aria-labelledby="resources-title"
        className="scroll-mt-8 py-8 sm:scroll-mt-32 sm:py-5 lg:py-8"
      >
        <Container>
          <p className="mt-2 flex justify-center font-display text-4xl font-medium tracking-tight text-slate-800">
            Event <span className="ml-2 text-sky-600"> Photos</span>
          </p>
        </Container>
        <Container size="lg" className="mt-16">
          <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
            {resources.map((resource) => (
              <li
                key={resource.title}
                className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-6"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-36 lg:h-56">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image src={resource.imageSrc} alt="Gallery Image" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <Footer />
    </>
  )
}

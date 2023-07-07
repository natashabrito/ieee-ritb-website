import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import img1 from '@/images/gallery_images/Image1.jpg'
import img2 from '@/images/gallery_images/Image2.jpg'
import img3 from '@/images/gallery_images/Image3.jpg'
import img4 from '@/images/gallery_images/Image4.jpg'
import img5 from '@/images/gallery_images/Image5.jpg'
import img6 from '@/images/gallery_images/Image6.jpg'
import img7 from '@/images/gallery_images/Image7.jpg'
import img8 from '@/images/gallery_images/Image8.jpg'
import img9 from '@/images/gallery_images/Image9.jpg'
import img10 from '@/images/gallery_images/Image10.jpg'
import img11 from '@/images/gallery_images/Image11.jpg'
import img12 from '@/images/gallery_images/Image12.jpg'
import img13 from '@/images/gallery_images/Image13.jpg'
import img14 from '@/images/gallery_images/Image14.jpg'
import img15 from '@/images/gallery_images/Image15.jpg'
import img16 from '@/images/gallery_images/Image16.jpg'
import img17 from '@/images/gallery_images/Image17.jpg'
import img18 from '@/images/gallery_images/Image18.jpg'
import img20 from '@/images/gallery_images/Image20.jpg'
import img21 from '@/images/gallery_images/Image21.jpg'
import img22 from '@/images/gallery_images/Image22.jpg'
import img23 from '@/images/gallery_images/Image23.jpg'
import img24 from '@/images/gallery_images/Image24.jpg'
import img25 from '@/images/gallery_images/Image25.jpg'
import img26 from '@/images/gallery_images/Image26.jpg'
import img27 from '@/images/gallery_images/Image27.jpg'
import img28 from '@/images/gallery_images/Image28.jpg'
import img29 from '@/images/gallery_images/Image29.jpg'
import img30 from '@/images/gallery_images/Image30.jpg'
import img31 from '@/images/gallery_images/Image31.jpg'
import img32 from '@/images/gallery_images/Image32.jpg'
import img33 from '@/images/gallery_images/Image33.jpg'
import img34 from '@/images/gallery_images/Image34.jpg'
import img35 from '@/images/gallery_images/Image35.jpg'
import img36 from '@/images/gallery_images/Image36.jpg'
import img37 from '@/images/gallery_images/Image37.jpg'
import img38 from '@/images/gallery_images/Image38.jpg'
import img39 from '@/images/gallery_images/Image39.jpg'
import img40 from '@/images/gallery_images/Image40.jpg'
import img41 from '@/images/gallery_images/Image41.jpg'


const resources = [];

for (let i = 1; i <= 41; i++) {
  if (i !== 19) {
    resources.push({
      title: `Image ${i}`,
      imageSrc: "img"+i,
    });
  }}

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

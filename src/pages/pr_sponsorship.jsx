import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IEEE PR AND SPONSORSHIP| IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE PR AND SPONSORSHIP- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE PR AND SPONSORSHIP
              </h1>
              <div>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Q. What does your chapter do?
                </h1>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Ans. The Public Relations and Sponsorship chapter of IEEE at
                  RITB plays a dual role. We are responsible for promoting IEEE
                  events and ensuring maximum participation through effective
                  public relations strategies. Additionally, we actively seek
                  and secure sponsorships from companies to support and enhance
                  our events.
                </h2>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Q. What are your chapter’s present year goals?
                </h1>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Ans. Our chapter’s present year goals involve two key areas. Firstly, we aim to strengthen our public relations efforts by increasing awareness and engagement among students through targeted promotional campaigns. Secondly, we strive to establish strategic partnerships with companies to secure sponsorships that enhance the quality and reach of our events.
                </h2>
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

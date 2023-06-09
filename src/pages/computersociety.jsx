import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IEEE Computer Society| IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE Computer Society- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE Computer Society
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We IEEE Computer Society team are a dynamic community of
                technology enthusiasts, innovators, and professionals who share
                a passion for all things computer science. Our club is dedicated
                to fostering an environment where members can expand their
                knowledge, engage in collaborative projects, and explore the
                ever-evolving world of computing.
                <br></br>
                From organizing engaging events, workshops, and competitions to
                providing valuable resources and networking opportunities, we
                strive to empower our members to excel in their careers and make
                a lasting impact in the field of computer science. Join us on
                this exciting journey as we push the boundaries of technology
                and shape the future of computing!
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. Webinar on topic “Augmented and Virtual Reality” :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The webinar was titled “Augmented and Virtual Reality”
                  presented by Mr. Prateek M Naik, Project Lead and Automation
                  Engineer at RGBSI. The agenda of the webinar was to introduce
                  the latest technologies of the future, Augmented and Virtual
                  Reality.
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  2. WORKSHOP ON AI AND ML FOR POLYTECHNIC FINAL YEAR :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The workshop was conducted by 7th semester students who taught
                  students of Polytechnic preliminaries of Computer Science. It
                  was alluded as an Activity for the Activity points for the 7th
                  sem students. The Polytechnic Students enjoyed learning about
                  the importance of computer science and various of its
                  practical implementations. The workshop was a huge success as
                  the Polytechnic students loved it and the engineering students
                  loved teaching them and sharing a part of their knowledge.
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  3. WORKSHOP ON BASICS OF COMPUTER SCIENCE FOR SCHOOL STUDENTS
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The workshop was conducted by 7th semester students who taught
                  students of 8th and 9th grades preliminaries of Computer
                  Science. It was alluded as an Activity for the Activity points
                  for the 7th sem students. The High Schoolers enjoyed learning
                  about the importance of computer science and various of its
                  practical implementations .
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                4.    DATABASE INTERNALS: A DEEP DIVE INTO HOW DISTRIBUTED DATA SYSTEMS WORK :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The session opened with Mr Arjun introducing us to the speaker Mr Ravish Neelakanthappa and offered him a warm welcome. The speaker started off the session by giving us an introduction to the database module. He also emphasised on the transitions in the old and new technologies that are used to store and process data. Later he briefly explained to us the different types of databases currently used and their evolving trends. He also briefed us about database architecture using various creative visuals
                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Upcoming Events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
               1. 2 day workshop on the topic cyber security . <br /><br /><br />
2. SATARK : A talk on Cyber Security topic

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

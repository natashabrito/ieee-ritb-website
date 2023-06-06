import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>RoboRIT | IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="RoboRIT - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                RoboRIT
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The IEEE RoBoRIT is a professional society under the umbrella of
                the Ramaiah Institue Of Technology. It focuses on promoting the
                theory and practice of robotics and its application across
                various fields of engineering and science.
                <br></br>
                IEEE RoBoRIT chapters organize events, conferences, workshops,
                and technical activities to foster knowledge exchange,
                collaboration, and advancement in the field. We provide a
                platform for researchers, engineers, and students to share their
                work, discuss emerging trends, and explore new ideas in robotics
                and its application.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Joining an IEEE ROBORIT chapter offers several benefits,
                including:
              </p>
              <ul class="ml-4 list-decimal">
                <li>
                  Learning Opportunities: Attend workshops, seminars, and
                  conferences organized by the chapter to learn from experts and
                  stay updated with the latest advancements in the field.
                </li>
                <li>
                  Collaboration: Find opportunities for collaborative research
                  and projects by interacting with like-minded individuals.
                </li>
                <li>
                  Leadership Development: Volunteer for chapter activities and
                  gain valuable leadership and organizational skills.
                </li>
                <li>
                  Recognition: Contribute to the chapter's initiatives and get
                  recognition for your involvement and contributions in the
                  field of robotics and automation.
                </li>
              </ul>
              <div>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Past events:
                </h1>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1.Hardware hackathon
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  About the Event:
                  <br></br>
                  HARD-WAR HACKATHON is the first hardware hackathon being
                  conducted in MSRIT by ROBO-RIT. This Hackathon is not only
                  about coding but giving more importance to the hardware as
                  well. Teams were given a duration of 7 hrs to build a project
                  using any Hardware components. At the end of the time
                  duration, they would be judged based on various factors of the
                  project.
                </p>
                <p className="mt-6 text-lg">Phase 1:</p>
                <p className="text-base text-gray-600">
                  The registrations opened on 1/10/22 for the teams to register.
                  The Rule Book of the event was also published.
                </p>
                <p className="mt-6 text-lg">Phase 2:</p>
                <p className="text-base text-gray-600">
                  The teams were given a time duration of more than 10 days to
                  decide Problem statement and procure the hard ware components
                  for the competition.
                </p>
                <p className="mt-6 text-lg">Day of Event:</p>
                <p className="text-base text-gray-600">
                  The event started at 9am on 15/10/2022 with inauguration from
                  HOD of EC and IEEE teacher coordinator.
                </p>
                <ul class="ml-4 list-disc">
                  <li>
                    <b>Round 1:</b> The Core RoboRIT team invigilated all the
                    teams before the start of the competition to assess the
                    problem statement and check for prebuilt projects/models.
                  </li>
                  <li>
                    <b>Round 2:</b> The CoreTeam along with the sponsorer of the
                    event started the Round 2 judging by seeing the working
                    models and the presentations of the teams to shortlist the
                    top 10 teams among 20.
                  </li>
                  <li>
                    <b>Final round:</b> The judges judged the top 10 teams again
                    based on various criteria and made the final decision.
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex items-center">
                <iframe className='w-full' height={1080} src="https://docs.google.com/document/d/e/2PACX-1vTynj0Vv6kt0GLOBjuulOJnsyh2yEXtifc26SijHMl7W5DWaejn-7SfpzI9nJoQUg/pub?embedded=true"></iframe>
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

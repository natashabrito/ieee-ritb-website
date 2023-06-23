import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IEEE DOCUMENTATION || IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE DOCUMENTATION- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE DOCUMENTATION
              </h1>
              <div>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  IEEE RITB documentation team is a group of dedicated people
                  who attend all the events conducted by the club and write a
                  report of the same. We as a group help in keeping an account
                  of whatever has happened in each event including some
                  photographs of the same. All the details about the winners,
                  speakers, rules etc are summarised accordingly for all the
                  events ensuring appropriate contexts.
                </h1>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member name="Dhruthi Bhat" 
                designation="Chair" 
                link="https://www.linkedin.com/in/dhruthibhat/"
                image="https://drive.google.com/uc?id=1oTKcQ-3uwxcZvy0qLqvoC9gVos4cyFxe&export=view">
    </Member>
    
    <Member name="Maitreyi Darbha" 
                designation="Member" 
                link="https://www.linkedin.com/in/maitreyi-darbha-929020234/"
                image="https://drive.google.com/uc?id=1DLpBMm5Ta7Rd3lXSuWefyQs_hxklV8cm&export=view">
    </Member>
    
    <Member name="Anirudh Bantwal" 
                designation="Member" 
                link="�https://www.linkedin.com/in/anirudh-baliga-30b7b3219/"
                image="https://drive.google.com/uc?id=1k8nqRSEmFe6LCcgucBA7yUuCC6oieT_n&export=view">
    </Member>
    
    <Member name="M Sri Pujitha" 
                designation="Member" 
                link="�https://www.linkedin.com/in/malladi-sri-pujitha-1010oct/"
                image="https://drive.google.com/uc?id=1oEioHlQsux2Qx6uFMRaSfHEHTCvpDQxX&export=view">
    </Member>
    
    <Member name="Abhiraj Paralkar" 
                designation="Member" 
                link="0"
                image="https://drive.google.com/uc?id=13Hbe-NmBVKqUQjBk7AfSKfU4iLQrpWnd&export=view">
    </Member>
    
    <Member name="M Tauheed" 
                designation="Member" 
                link="https://www.linkedin.com/in/mohammed-tauheed-700454279/"
                image="https://drive.google.com/uc?id=1EeRILuiLMdPMYJPiVJxPWiVq-CtzEfku&export=view">
    </Member>
    
    <Member name="Abhinav Singh" 
                designation="Member" 
                link="https://www.linkedin.com/in/ravisagar-k-ab64141ab/"
                image="https://drive.google.com/uc?id=1U-L3H0ls6XAO5Uxi-_enXqPUwdlVUZX3&export=view">
    </Member>
    
    <Member name="Nandini M" 
                designation="Member" 
                link="https://www.linkedin.com/in/nandini-m-a94164252"
                image="https://drive.google.com/uc?id=1icLOrvXV4PxoqufLUqGdTKMpuKK-Kpr7&export=view">
    </Member>
    
    <Member name="Ravisagar K" 
                designation="Member" 
                link="https://www.linkedin.com/in/ravisagar-k-ab64141ab/"
                image="https://drive.google.com/uc?id=1tQTHp0Wr_dIiflpAoWlEdwIwoopi7Knt&export=view">
    </Member>
    
    <Member name="Tanisha Saxena" 
                designation="Member" 
                link="https://www.linkedin.com/in/tanisha-saxena-978237277/"
                image="https://drive.google.com/uc?id=1qv-HOKAH9Ppw61uMuOPNGqMArSH3rIA2&export=view">
    </Member>
                </div>
              </p>

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

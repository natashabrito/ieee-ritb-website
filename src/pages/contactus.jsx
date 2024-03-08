import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Contactus() {
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Contact Us - IEEE</title>
        </Head>
        <Header />
        <section className="body-font text-gray-600" style={{ justifyContent: "center" }}>
          <div className="container mx-auto flex flex-col px-5 py-12">
            <div className="mx-auto lg:w-4/6">
              <h1 style={{ fontSize: '2.5em', fontFamily: 'Josefin Sans', color: '#272343', fontWeight: 'bold', textAlign: 'center' }}>CONTACT US</h1>
              <hr />
              <div className="flex flex-col sm:flex-row justify-center items-center my-20">
                {/* Address Card */}
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0 mx-20">
                  <div className="text-center sm:text-left bg-gray-100 p-6 rounded-lg">
                    <p className="text-lg font-bold">IEEE-RIT</p>
                    <p className="text-base">Ramaiah Institute of Technology</p>
                    <p className="text-sm">MSR Nagar, MSRIT Post, Mathikere</p>
                    <p className="text-sm">Bangalore-560054</p>
                    <p className="text-base mt-5 font-medium">
                      <span className="text-primary mr-3" style={{ verticalAlign: 'middle' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                          style={{ display: 'inline-block' }}
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <a href="mailto:ieeeritb@gmail.com">ieeeritb@gmail.com</a>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Google Map */}
                <div className="w-full sm:w-1/2">
                  <div style={{ width: '100%', borderRadius: '10px' }}>
                    <iframe
                      width="100%"
                      height="300"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Ramaiah%20Institute%20of%20Technology+(IEEE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      style={{ borderRadius: '10px' }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row justify-center items-center" style={{ marginBottom: '30px' }}>
          <div className="lg:flex-col justify-center lg:items-center  lg:mr-12">
          <div className="flex flex-col items-center">
            <iframe src="https://lottie.host/?file=23ecd9fa-1719-42c7-bcef-b021c5e3c509/eHhdi9dHx9.json" style={{ border: 'none', height: '100px' }}></iframe>
            <p className="text-center lg:text-left">Write us on</p>
            <a className="text-center lg:text-left" href="mailto:ieeeritb@gmail.com">ieeeritb@gmail.com</a>
          </div>
          </div>
          <div className="lg:flex-col justify-center lg:items-center lg:mr-12">
           <div className="flex flex-col items-center">
              <iframe src="https://lottie.host/?file=94896b6f-5561-481d-8924-ed335c23637b/eAdCe077z7.json" style={{ border: 'none', height: '100px' }}></iframe>
              <p className="text-center lg:text-left">Reach us on</p>
              <a className="text-center lg:text-left" href="tel:+918123846788">(+91) 81238 46788</a>
           </div>
 
          </div>

          <div className="lg:flex-col justify-center  lg:items-center">
          <div className="flex flex-col items-center">
            <iframe src="https://lottie.host/?file=1341d09a-b282-4dc2-8685-e26dc2784943/Nu0yAutyXc.json" style={{ border: 'none', height: '100px' }}></iframe>
            <p className="text-center lg:text-left">Follow us on insta</p>
            <a className="text-center lg:text-left" href="https://www.instagram.com/ieeeritb">@ieeeritb</a>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

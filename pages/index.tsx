import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeroImage from '../public/images/YSL-Learn-Hero-Image.png'

export default function Home() {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  return (
    <Layout>
      <section className="Ysl-Hero bg-gray-900 text-white">
        <div className="container">
          <div className="py-24 text-white flex flex-col md:flex-row justify-between items-center">
            <div className="basis-1/2 order-2 md:order-1 mt-5 md-m-0">
              <div>
                <div className="font-black text-3xl md:text-5xl">
                  <h1 className="capitalize">
                    Learn In-demand skills guaranteed to land you a high paying
                    job{' '}
                    <span className="text-secondary">
                      even whiles in school
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-start mt-10">
                  <Link
                    href={`${origin}${router.pathname}/courses`}
                    className="bg-gradient-to-r from-primary to-secondary text-center font-bold text-xl p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-900"
                  >
                    Start Learning Today
                  </Link>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="basis-1/2 order-1 md:order-2 mb-10 md-m-0">
              <div className="mx-auto">
                <Image
                  src={HeroImage}
                  alt="Learn In-demand skills guaranteed to land you a high paying
                  job"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

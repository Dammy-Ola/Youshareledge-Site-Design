import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import HeroImage from '../../public/images/YSL-Learn-Hero-Image.png'
import Skills from '../../public/images/learn/jason-goodman-bzqU01v-G54-unsplash.jpg'
import OnlinePlatforms from '../../public/images/learn/jason-goodman-6WR1FmbVbUE-unsplash.jpg'
import Certificate from '../../public/images/learn/felipe-gregate-Ph2KD5qr7VQ-unsplash.jpg'
import LearnFree from '../../public/images/learn/windows-Pmu6-i4iyNE-unsplash.jpg'

export default function YoushareledgeLearnPage() {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  return (
    <Layout
      title={`Learn In-demand skills guaranteed to land you a high paying
      job`}
    >
      <main>
        {/* Hero Section */}
        <section className="Ysl-Hero bg-gray-900 text-white">
          <div className="container">
            <div className="py-24 text-white flex flex-col md:flex-row justify-between items-center">
              <div className="basis-1/2 order-2 md:order-1 mt-5 md-m-0">
                <div>
                  <div className="font-black text-3xl md:text-5xl">
                    <h1 className="capitalize">
                      Learn In-demand skills guaranteed to land you a high
                      paying job{' '}
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
        {/* End of Hero section */}

        {/* Stay relevant in the job-market by Learning the new skills
              employers are looking for in this digital age. */}
        <section className="container my-24 grid md:grid-cols-2 gap-4">
          <div className="mx-auto w-9/12">
            <Image
              src={Skills}
              alt="Learn In-demand skills guaranteed to land you a high paying
                  job"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-3xl md:text-5xl mb-10 text-primary capitalize">
              Learn the new skills employers are looking for in this digital
              age.
            </h2>
            <p>
              In this digital age, having a skill in addition to your academics
              can let you standout from the crowd, and position you well infront
              of your future employer.
            </p>
            <p className="mt-2">
              With Youshareledge Learn, you get the chance to learn skills
              employers are looking for today, skills like software development,
              digital marketing, graphics design and many more.
            </p>
          </div>
        </section>

        {/* Learn from the best online learning platforms in the world */}
        <section className="container my-24 grid md:grid-cols-2 gap-4">
          <div className="md:order-2 mx-auto w-9/12">
            <Image
              src={OnlinePlatforms}
              className="rounded-3xl"
              alt="Learn In-demand skills guaranteed to land you a high paying
                  job"
            />
          </div>
          <div className="md:order-1 flex flex-col justify-center">
            <h2 className="font-bold text-3xl md:text-5xl mb-10 text-primary">
              Learn from the leading online learning platforms in the world.
            </h2>
            <p>
              We are curating the best courses for these in-demand skills from
              the leading online learning platforms in the world.
            </p>
            <p className="mt-2">
              You get the chance to learn from Coursera, Udemy, Udacity and many
              more
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container flex flex-col justify-center items-center">
            <h2 className="font-black text-4xl md:text-5xl mb-5 text-center">
              Start Learning Today
            </h2>
            <p className="mb-10 mx-auto md:w-3/4 text-center">
              Take charge of your future today, and start learning to boost your
              chance of employment right after school. Learn as many skills you
              want. Check out the courses we have for you and start learning
              now.
            </p>
            <div className="flex flex-col md:flex-row md:justify-start">
              <Link
                href={`${origin}${router.pathname}/courses`}
                className="bg-gray-900 text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-primary"
              >
                I&apos;m Learning Now, show me the courses
              </Link>
            </div>
          </div>
        </section>

        {/* Earn a certificate along side */}
        <section className="container my-24 grid md:grid-cols-2 gap-4">
          <div className="mx-auto w-9/12">
            <Image
              src={Certificate}
              alt="Learn In-demand skills guaranteed to land you a high paying
                  job"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-3xl md:text-5xl mb-10 text-primary">
              Earn a certificate of completion and share it with future
              employers
            </h2>
            <p>
              You don&apos;t just learn, you earn a certificate you prove that
              you&apos;ve acquired a new skill.
            </p>
            <p className="mt-2">
              Now you can show future employers your certificate, share it with
              your colleagues, friends, family, or post it on social media. You
              can even add it your Linkedin profile or your cv
            </p>
          </div>
        </section>

        {/* Learn for free or at a discounted price */}
        <section className="container my-24 grid md:grid-cols-2 gap-4">
          <div className="md:order-2 mx-auto w-9/12">
            <Image
              src={LearnFree}
              alt="Learn In-demand skills guaranteed to land you a high paying
                  job"
              className="rounded-3xl"
            />
          </div>
          <div className="md:order-1 flex flex-col justify-center">
            <h2 className="font-bold text-3xl md:text-5xl mb-10 text-primary ">
              Learn all these for free or get them at a discounted price.
            </h2>
            <p className="mt-2">
              Majority of these courses are free, so you don&apos;t have to
              bother about payment, you just need to have time and learn them at
              your own pace.
            </p>
            <p>
              For some courses, though they are free, you might have to pay for
              the certificate.
            </p>
            <p className="mt-2">
              Some courses are not free, they require you to make payment before
              you can have access to the courses. With these kind of courses,
              we&apos;ve negociated with the learning platforms to give all
              Youshareledge Learn members great deals and discount.
            </p>
            <p className="mt-2">
              In most cases, the courses you will find here are free, so have
              fun learning.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container flex flex-col justify-center items-center">
            <h2 className="font-black text-4xl md:text-5xl mb-5 text-center">
              Start Learning Today
            </h2>
            <p className="mb-10 mx-auto md:w-3/4 text-center">
              Take charge of your future today, and start learning to boost your
              chance of employment right after school. Learn as many skills you
              want. Check out the courses we have for you and start learning
              now.
            </p>
            <div className="flex flex-col md:flex-row md:justify-start">
              <Link
                href={`${origin}${router.pathname}/courses`}
                className="bg-gray-900 text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-primary"
              >
                I&apos;m Learning Now, show me the courses
              </Link>
            </div>
          </div>
        </section>

        {/* Get access to scholarships require to cater for your tuition fee */}
        {/* Learn for free and only pay for the certificate */}
      </main>
    </Layout>
  )
}

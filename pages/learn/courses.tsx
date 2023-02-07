import Courses from '@/components/YL/Courses'
import Layout from '../../components/Layout'

export default function YLCoursesPage() {
  return (
    <Layout
      title={`Learn virtually any skill for free or at a discounted price and earn a certificate in the process.`}
    >
      <main>
        {/* Hero Section */}
        <section className="Ysl-Hero bg-gray-900 text-white">
          <div className="container">
            <div className="pt-36 pb-32 text-white flex justify-center items-center">
              <div className="font-black text-3xl md:text-5xl">
                <h1 className="capitalize text-center">
                  Learn virtually any skill for free or at a discounted price.
                  <span className="text-secondary block text-2xl md:text-3xl mt-3">
                    Earn a certificate in the process.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* End of Hero section */}

        {/* Browse through courses */}
        <section className="container my-10">
          <h2 className="font-bold text-3xl text-center text-primary">
            Browse Through Courses
          </h2>
        </section>

        {/* Load Courses */}
        {/* {!courses ? <Spinner /> : <Courses courses={courses} />} */}
        <Courses />
        <Courses />
        <Courses />
      </main>
    </Layout>
  )
}

import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout
      title={`Stay on top of your academics While Building Your Career - Youshareledge Blog`}
      description={`The blog guarantees to reveal every hidden secret
      you need to know to excel in school while also assisting you in
      building your career as a student and preparing you for the job
      market even before you graduate.`}
    >
      <main>
        <section className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary">
          <div className="pt-10"></div>
          <div className="mx-auto w-11/12 text-white flex flex-col md:flex-row justify-between items-center py-20">
            <div className="md:w-1/2 md:mr-5 ">
              <h1 className="font-black text-3xl md:text-5xl capitalize text-secondary">
                Stay on top of your academics While You{' '}
                <span className="underline decoration-white decoration-10">
                  build your career.
                </span>
                {/* Stay on top of your academics whiles you build your career. */}
                {/* Maintain Your Academic Standing While Building Your Career. */}
              </h1>
              <p className="py-10 text-xl md:text-lg">
                The email newsletter guarantees to reveal every hidden secret
                you need to know to excel in school while also assisting you in
                building your career as a student and preparing you for the job
                market even before you graduate.
              </p>
            </div>
            <div className="md:w-1/2 md:ml-5 w-full">
              <div className="bg-white py-10 shadow-2xl rounded-md">
                <form className="px-5">
                  <div className="mb-5">
                    <h2 className="text-center text-primary text-2xl font-bold text">
                      Newsletter Sign up
                    </h2>
                    <p className="text-gray-800 text-center mt-2">
                      Don&apos;t miss out, you won&apos;t get this anywhere, we
                      only share these information to our subscribers, sign up
                      today
                    </p>
                  </div>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium text-slate-700">
                      Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary
                      "
                    />
                  </label>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium text-slate-700">
                      First Name
                    </span>

                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary
                      "
                    />
                  </label>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium text-slate-700">
                      Last Name
                    </span>

                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary
                      "
                    />
                  </label>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium text-slate-700">
                      Phone Number
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-primary
                      "
                    />
                  </label>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium text-slate-700">
                      I want to receive Newsletter for ...
                    </span>

                    <div>
                      <input
                        type="checkbox"
                        name="academics"
                        id="academics"
                        className="mr-3"
                      />
                      <span className="text-sm text-slate-700">Academics</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="careerDevelopmet"
                        id="careerDevelopmet"
                        className="mr-3"
                      />
                      <span className="text-sm text-slate-700">
                        Career Development
                      </span>
                    </div>
                  </label>

                  <input
                    type="submit"
                    value="Sign Me Up For Your Newsletter"
                    className="mt-2 bg-primary p-3 md:font-bold rounded-md w-full text-center cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* {data && <Blogs data={data} />} */}
      </main>
    </Layout>
  )
}

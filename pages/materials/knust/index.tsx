import DepartmentItem from '@/components/DepartmentItem'
import Layout from '@/components/Layout'
import Showcase from '@/components/Showcase'
import { useRouter } from 'next/router'

export default function SingleSchoolPage() {
  const router = useRouter()
  return (
    <Layout title={`Download and Learn more about courses offered in KNUST`}>
      <Showcase data="KNUST" />

      <section className="container">
        <div className="pt-10">
          <h2 className="text-center font-bold text-2xl text-primary mb-5">
            Select Your Department
          </h2>
        </div>

        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
      </section>

      {/* Request */}
      <section className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary text-white py-20">
        <h3 className="text-center font-bold mb-3 text-3xl">
          Can&apos;t find your department ?
        </h3>
        <p className="text-center">
          Send us a request to add your department to the list, so that you can
          download your course materials
        </p>
        <div className="flex justify-center">
          <a
            href={`https://bit.ly/3uDMY11`}
            target="_blank"
            rel="noreferrer"
            // className="bg-secondary text-primary text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-gray-900 hover:text-white"
            className="bg-secondary text-primary text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-gray-900 hover:text-white"
          >
            Send Us A Request
          </a>
        </div>
      </section>
    </Layout>
  )
}

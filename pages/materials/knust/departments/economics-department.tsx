import ProgrammeItem from '@/components/ProgrammeItem'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import Showcase from '../../../../components/Showcase'
// import ProgrammeItem from '../../../../components/ProgrammeItem'

export default function SingleDapartmentPage() {
  const router = useRouter()

  return (
    <Layout
      title={`Download and Learn more about courses offered in economics department`}
    >
      <Showcase data="Economics Department" />
      <div className="container mt-5">
        <h3 className="font-bold mb-5 text-2xl text-primary text-center">
          Programmes Offered
        </h3>

        <ProgrammeItem />
      </div>
    </Layout>
  )
}

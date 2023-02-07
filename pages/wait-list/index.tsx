import Layout from '@/components/Layout'
import Image from 'next/image'
import downloadSVG from '../../public/svgs/8219585_download_transfer_cloud_data_archive_icon.svg'

export default function KNUSTCourseMaterialWaitListPage() {
  return (
    <Layout
      title="Youshareledge - Get access to all your course materials anytime online"
      description='Don&apos;t be a "MUGU" !!!, You will fail if you
    wait until the last minute to begin learning; instead, access
    all of your course materials as soon as possible to stay ahead
    of your colleagues...'
    >
      <main className="md:h-screen bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="py-10 text-white flex flex-col md:flex-row justify-between items-center md:h-screen">
            <div className="basis-1/2 order-2 md:order-1 mt-5 md-m-0">
              <div>
                <div className="font-black text-4xl md:text-5xl">
                  <div className="capitalize">
                    Get access to all your course materials anytime online
                  </div>
                </div>
              </div>
              <div className="my-10">
                <p className="text-lg">
                  Don&apos;t be a &quot;MUGU&quot; !!! You might fail if you
                  wait until the last minute to begin learning; instead, access
                  all of your course materials as soon as possible to stay ahead
                  of your colleagues.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-start">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary md:bg-secondary md:text-primary text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-gray-900 md:hover:text-white"
                >
                  I want to be the first to have access
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="basis-1/2 order-1 md:order-2 mb-10 md-m-0">
              <div className="mx-auto">
                <Image
                  src={downloadSVG}
                  alt="Download Course Material SVG Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

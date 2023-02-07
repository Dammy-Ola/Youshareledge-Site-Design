import Image from 'next/image'
import Layout from '../../components/Layout'
import downloadSVG from '../../public/svgs/8219585_download_transfer_cloud_data_archive_icon.svg'
import Link from 'next/link'

export default function MaterialsPage() {
  return (
    <Layout
      title={`Download and Get Instant Access To All Your Course Materials Anytime Anywhere Here`}
    >
      <main className="md:h-screen bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="py-10 text-white flex flex-col md:flex-row justify-between items-center md:h-screen">
            <div className="basis-1/2 order-2 md:order-1 mt-5 md-m-0">
              <div>
                <div className="font-black text-3xl md:text-5xl">
                  <h1 className="capitalize">
                    Get Instant access to all your course Materials anytime
                    anywhere here
                  </h1>
                </div>
              </div>
              <div className="my-10">
                <h2 className="text-lg">
                  No need to wait for a course mate for days before you have
                  access to your course materials, you can download all your
                  course materials and start learning as soon as possible to
                  stay ahead of the curve.
                </h2>
              </div>
              <div className="flex flex-col md:flex-row md:justify-start">
                <Link
                  href="/materials/knust"
                  className="bg-primary md:bg-secondary md:text-primary text-center font-bold text-base p-5 md:py-5 md:px-10 my-3 rounded-xl drop-shadow-2xl md:mr-10 capitalize hover:bg-gray-900 md:hover:text-white"
                >
                  Take me to the download page
                </Link>
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

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/DepartmentItem.module.css'
import img from '../public/images/pexels-pixabay-207691.jpg'

export default function DepartmentItem() {
  return (
    <div>
      {/* Mobile View */}
      <div className="block md:hidden">
        <div
          className={`flex justify-between bg-white rounded-2xl my-10 md:w-5/6 md:mx-auto hover:shadow-2xl`}
        >
          <div className={`${styles.item}`}>
            <Image
              src={img}
              alt="Download Course Material SVG Icon"
              width={150}
              height={250}
              // layout='responsive'
              className="rounded-l-2xl object-cover h-full"
            />
          </div>
          <div className={`${styles.itemName} flex flex-col p-3`}>
            <div className="">
              <h3 className="font-semibold text-xl">
                <Link
                  href={`/materials/knust/departments/economics-department`}
                  className="hover:underline"
                >
                  Economics Department
                </Link>
              </h3>
              <p className="py-2">
                Download all your course materials in Economics Department
              </p>
            </div>
            <div className="py-3">
              <Link
                href={`/materials/knust/departments/economics-department`}
                className="bg-primary text-center text-white py-2 rounded-3xl px-5 drop-shadow-2xl capitalize hover:bg-secondary md:hover:text-white"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Link href={`/materials/knust/departments/economics-department`}>
          <div
            className={`${styles.card} justify-between bg-white rounded-2xl items-center my-10 md:w-5/6 md:mx-auto hover:shadow-2xl`}
          >
            <div className={`${styles.item}`}>
              <Image
                src={img}
                alt="Download Course Material SVG Icon"
                // width={100}
                // height={70}
                layout="responsive"
                className="rounded-l-2xl"
              />
            </div>
            <div className={`${styles.itemName} ml-5`}>
              <h3 className="font-semibold text-lg">
                <Link
                  href={`/materials/knust/departments/economics-department`}
                  className="hover:underline"
                >
                  Economics Department
                </Link>
              </h3>
              <p>Download all your course materials in Economics Department</p>
            </div>
            <div className={`${styles.item} mr-5`}>
              <Link
                href={`/materials/knust/departments/economics-department`}
                className="bg-primary text-center text-white py-2 rounded-3xl px-5 drop-shadow-2xl capitalize hover:bg-secondary md:hover:text-white"
              >
                See Details
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

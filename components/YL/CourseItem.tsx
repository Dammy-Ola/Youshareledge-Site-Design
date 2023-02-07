import Link from 'next/link'
import Image from 'next/image'
import DefaultCourseImage from '../../public/images/learn/default-course-image.png'

const CourseItem = () => {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <div className="bg-white p-2 grid grid-cols-12 gap-4 rounded-md shadow-sm hover:shadow-2xl">
      <div className="col-span-4 md:shrink-0">
        <Image
          src={DefaultCourseImage}
          alt={'Course Name'}
          className="w-full rounded-md"
        />
      </div>
      <div className="col-span-8">
        <div className="">
          <Link href={'#'} className="font-semibold hover:underline">
            {'Data science masterclass'}
          </Link>
        </div>
        <div className="text-sm mt-2">
          <div className="flex">
            <div className="mr-2">{'Free'}</div>
            <div className="mx-2">{'Udemy'}</div>
            <div className="mx-2">{'Certificate'}</div>
          </div>
          <div className="flex items-center flex-wrap mt-3">
            <small className="bg-gray-900 mr-1 my-1 px-2 py-1 rounded-xl text-white">
              Data Science
            </small>
          </div>
          <div className="flex items-center flex-wrap mt-3">
            <small className="mr-1 my-1 bg-gray-300 px-2 py-1 rounded-xl">
              Data analysis
            </small>
            <small className="mr-1 my-1 bg-gray-300 px-2 py-1 rounded-xl">
              Python Programming
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem

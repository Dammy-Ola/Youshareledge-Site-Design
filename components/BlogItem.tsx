import Image from 'next/image'
import Link from 'next/link'
import SrcImage from '../public/images/pexels-pixabay-207691.jpg'

const BlogItem = () => {
  return (
    <div className="shadow-md hover:shadow-2xl">
      <div className="pb-5">
        <Image
          src={SrcImage}
          alt="Picture of the author"
          layout="responsive"
          width={150}
          height={80}
        />
      </div>
      <div className="p-3">
        <Link href={`/blog/example-blog`}>
          <h2 className="font-semibold text-2xl text-primary hover:underline">
            Example Blog
          </h2>
        </Link>
        <p className="py-5">This is the excerpt</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="https://res.cloudinary.com/youshareledge/image/upload/v1650882332/Dammy_Ola_wqc1xj.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>Dammy Ola</div>
          </div>
          <div>{'1st Jan, 2023'}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem

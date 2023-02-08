import BlogItem from './BlogItem'

const Blogs = () => {
  return (
    <div className="mx-auto w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  )
}

export default Blogs

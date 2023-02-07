import CourseItem from './CourseItem'

const Courses = () => {
  return (
    <section className="container my-5 grid grid-cols-1 md:grid-cols-2 gap-10">
      <CourseItem />
      <CourseItem />
    </section>
  )
}

export default Courses

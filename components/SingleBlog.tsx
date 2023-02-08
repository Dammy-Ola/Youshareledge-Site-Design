import Image from 'next/image'
import SrcImage from '../public/images/pexels-pixabay-207691.jpg'

const SingleBlog = () => {
  return (
    <main>
      <section className="bg-gradient-to-b md:bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto w-11/12 text-white py-10 flex flex-col justify-center">
          <div className="mx-auto mt-20">
            <Image
              src={SrcImage}
              alt="Dammy Ola's Picture"
              width={600}
              height={350}
            />
          </div>
          <h1 className="text-center font-bold mx-auto md:w-8/12 text-2xl md:text-4xl py-5">
            An Example Blog
          </h1>
          <div className="flex justify-center items-center">
            <div className="mr-3">
              <Image
                src="https://res.cloudinary.com/youshareledge/image/upload/v1650882332/Dammy_Ola_wqc1xj.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <h5 className="text-sm">Dammy Ola</h5>
              <small>{'1st Jan, 2023'}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-5 gap-10 py-5">
        <div className="col-span-1"></div>
        <article className="col-span-3">
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga unde
            quam consequuntur maiores laboriosam voluptatum. Sint incidunt,
            nostrum iure dolore ullam aspernatur provident, hic tempore, ipsum
            modi eum voluptatum quae? Alias officia sit vitae culpa quisquam
            iure quo exercitationem quos nostrum voluptas. Eum, nam consectetur!
            Corrupti vitae quod sed earum suscipit nemo voluptatem, enim animi
            deserunt laborum, qui doloribus nobis? Dolore quaerat esse, soluta
            facilis doloribus obcaecati ut eos deserunt cupiditate ad, culpa
            suscipit error unde, labore sunt laudantium vitae dignissimos
            eligendi harum impedit voluptatibus. Totam quibusdam ea atque
            praesentium! Voluptas ex perspiciatis cum, numquam illum pariatur
            nam. Cum quae fugit hic illum asperiores? Beatae suscipit sit animi
            soluta magni inventore, exercitationem eos amet quaerat expedita
            dolorem perspiciatis quibusdam maxime. Laudantium illo odio ipsa
            officiis soluta, quia animi, ex ipsam dolorum nostrum a quisquam et
            maxime. Alias adipisci molestiae quas animi beatae delectus quo
            dignissimos. Quis quo rerum molestiae autem!
          </p>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga unde
            quam consequuntur maiores laboriosam voluptatum. Sint incidunt,
            nostrum iure dolore ullam aspernatur provident, hic tempore, ipsum
            modi eum voluptatum quae? Alias officia sit vitae culpa quisquam
            iure quo exercitationem quos nostrum voluptas. Eum, nam consectetur!
            Corrupti vitae quod sed earum suscipit nemo voluptatem, enim animi
            deserunt laborum, qui doloribus nobis? Dolore quaerat esse, soluta
            facilis doloribus obcaecati ut eos deserunt cupiditate ad, culpa
            suscipit error unde, labore sunt laudantium vitae dignissimos
            eligendi harum impedit voluptatibus. Totam quibusdam ea atque
            praesentium! Voluptas ex perspiciatis cum, numquam illum pariatur
            nam. Cum quae fugit hic illum asperiores? Beatae suscipit sit animi
            soluta magni inventore, exercitationem eos amet quaerat expedita
            dolorem perspiciatis quibusdam maxime. Laudantium illo odio ipsa
            officiis soluta, quia animi, ex ipsam dolorum nostrum a quisquam et
            maxime. Alias adipisci molestiae quas animi beatae delectus quo
            dignissimos. Quis quo rerum molestiae autem!
          </p>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga unde
            quam consequuntur maiores laboriosam voluptatum. Sint incidunt,
            nostrum iure dolore ullam aspernatur provident, hic tempore, ipsum
            modi eum voluptatum quae? Alias officia sit vitae culpa quisquam
            iure quo exercitationem quos nostrum voluptas. Eum, nam consectetur!
            Corrupti vitae quod sed earum suscipit nemo voluptatem, enim animi
            deserunt laborum, qui doloribus nobis? Dolore quaerat esse, soluta
            facilis doloribus obcaecati ut eos deserunt cupiditate ad, culpa
            suscipit error unde, labore sunt laudantium vitae dignissimos
            eligendi harum impedit voluptatibus. Totam quibusdam ea atque
            praesentium! Voluptas ex perspiciatis cum, numquam illum pariatur
            nam. Cum quae fugit hic illum asperiores? Beatae suscipit sit animi
            soluta magni inventore, exercitationem eos amet quaerat expedita
            dolorem perspiciatis quibusdam maxime. Laudantium illo odio ipsa
            officiis soluta, quia animi, ex ipsam dolorum nostrum a quisquam et
            maxime. Alias adipisci molestiae quas animi beatae delectus quo
            dignissimos. Quis quo rerum molestiae autem!
          </p>
        </article>
        <div className="col-span-1"></div>
      </section>
    </main>
  )
}

export default SingleBlog

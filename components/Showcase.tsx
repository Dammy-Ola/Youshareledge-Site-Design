import styles from '../styles/Showcase.module.css'

export const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className="container">
        <h1 className="font-black text-3xl md:text-5xl mb-5 text-secondary">
          KNUST
        </h1>
        <h2 className="text-xl text-center">
          Download KNUST course materials and learn more about your courses here
        </h2>
      </div>
    </div>
  )
}

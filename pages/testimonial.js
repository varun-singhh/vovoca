import Navbar from "../components/homepage/Navbar/Navbar";
import styles from "../styles/Testimonial.module.css";

const testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <Navbar />
      <h1 className={styles.testimonial__heading}>Testimonial</h1>
    </div>
  );
};

export default testimonial;

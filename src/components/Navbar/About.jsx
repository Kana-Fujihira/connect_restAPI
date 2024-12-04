import styles from "./about.module.css";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div className={styles.imageContainer}>
        <img src="https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg" />
      </div>
      <div className={styles.greenText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nemo
          autem ipsum illum maiores blanditiis voluptatem laboriosam tempore
          perferendis inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nemo
          autem ipsum illum maiores blanditiis voluptatem laboriosam tempore
          perferendis inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nemo
          autem ipsum illum maiores blanditiis voluptatem laboriosam tempore
          perferendis inventore.
        </p>
      </div>
      <div className={styles.textContainer}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          aperiam.
        </p>
      </div>
    </div>
  );
}

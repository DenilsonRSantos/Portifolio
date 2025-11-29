import styles from "../styles/Hero.module.css";
import fotoPerfil from "../assets/perfil.png";

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.title}>Denilson Santos</h1>
        <h2 className={styles.subtitle}>Futuro Desenvolvedor Full Stack</h2>

        <p className={styles.description}>
          Focado em Front-end e APIs. Apaixonado por interfaces, performance e
          por construir bases sólidas para me tornar um profissional Full Stack
          completo.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primaryButton}>
            Ver projetos
          </a>
          <a
            href="https://github.com/DenilsonRSantos"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryButton}
          >
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.photoWrapper}>
        <img
          src={fotoPerfil}
          alt="Foto de perfil de Denilson Santos"
          className={styles.photo}
        />
      </div>
    </section>
  );
}

export default Hero;

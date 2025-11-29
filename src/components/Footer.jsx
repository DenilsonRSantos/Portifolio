import styles from "../styles/App.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Denilson Santos. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;

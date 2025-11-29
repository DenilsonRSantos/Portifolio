import { useState } from "react";
import sectionStyles from "../styles/Section.module.css";
import styles from "../styles/Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Obrigado pelo contato! Em breve retornarei.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contato" className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <h2 className={sectionStyles.title}>Contato</h2>
        <p className={sectionStyles.subtitle}>
          Fique à vontade para entrar em contato para oportunidades, dúvidas ou
          feedbacks.
        </p>

        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Nome
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Seu nome "
              />
            </label>

            <label className={styles.label}>
              E-mail
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu email"
              />
            </label>

            <label className={styles.label}>
              Mensagem
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Como posso te ajudar?"
                rows={4}
              />
            </label>

            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>

          <div className={styles.info}>
            <h3>Outros canais</h3>
            <ul>
              <li>
                E-mail:{" "}
                <a href="mailto:denilsonrobertosantos@gmail.com">
                  denilsonrobertosantos@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/denilson-santos-87305a33b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Denilson Santos
                
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/DenilsonRSantos"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/DenilsonRSantos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

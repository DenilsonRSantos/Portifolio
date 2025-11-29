import sectionStyles from "../styles/Section.module.css";

function About() {
  return (
    <section id="sobre" className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <h2 className={sectionStyles.title}>Sobre Mim</h2>

        <p className={sectionStyles.text}>
          Sou estudante de desenvolvimento web, com foco em{" "}
          <strong>Front-end</strong> e <strong>APIs</strong>. Ao longo do curso,
          desenvolvi projetos que reforçaram meus conhecimentos em HTML, CSS,
          JavaScript e React, sempre buscando escrever código limpo, organizado
          e de fácil manutenção.
        </p>

        <p className={sectionStyles.text}>
          Tenho grande interesse em performance, acessibilidade e boas práticas
          de desenvolvimento, além de estar em constante evolução para me
          tornar um desenvolvedor Full Stack preparado para desafios reais do
          mercado.
        </p>

        <p className={sectionStyles.text}>
          Quando não estou codando, gosto de estudar novas tecnologias, revisar
          projetos antigos e melhorar meu portfólio com soluções mais
          profissionais.
        </p>
      </div>
    </section>
  );
}

export default About;

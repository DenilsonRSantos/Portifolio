import sectionStyles from "../styles/Section.module.css";
import ProjectCard from "./ProjectCard.jsx";
import agencia from "../assets/agencia.png";
import barbearia from "../assets/barbearia.png";
import todo from "../assets/todo.png";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Agência Criativa Web",
      description:
        "Landing page responsiva para agência digital, com foco em design moderno, grid e boas práticas de semântica.",
      techs: ["React", "CSS Modules", "Responsividade"],
      repoUrl: "https://github.com/DenilsonRSantos/AgenciaCriativaWeb",
      demoUrl: "https://vercel.com/denilsonrsantos-projects/agencia-criativa-web",
      imageUrl: agencia,
    },
    {
      id: 2,
      name: "Estilo Livre - Barbearia",
      description:
        "Site institucional para barbearia fictícia, com seções de serviços, depoimentos e formulário de contato.",
      techs: ["React", "Bootstrap", "Performance Web"],
      repoUrl: "https://github.com/DenilsonRSantos/EstiloLivre-Otimizado",
      demoUrl: "https://barbearia-estilo-livre.vercel.app/",
      imageUrl: barbearia,
    },
    {
      id: 3,
      name: "Todo List Avançada",
      description:
        "Aplicação de lista de tarefas utilizando React Hooks, Context API e boas práticas de organização de estado.",
      techs: ["React", "Hooks", "Context API"],
      repoUrl: "https://github.com/DenilsonRSantos/todo-list",
      demoUrl: "https://testes-xi-rosy.vercel.app/",
      imageUrl: todo,
    },
  ];

  return (
    <section id="projetos" className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <h2 className={sectionStyles.title}>Projetos</h2>
        <p className={sectionStyles.subtitle}>
          Alguns dos trabalhos que desenvolvi ao longo do curso.
        </p>

        <div className={sectionStyles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

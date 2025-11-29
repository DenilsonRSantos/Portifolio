import styles from "../styles/ProjectCard.module.css";

function ProjectCard({ project }) {
  const { name, description, techs, repoUrl, demoUrl, imageUrl } = project;

  return (
    <article className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={`Screenshot do projeto ${name}`} />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {techs.map((tech) => (
            <li key={tech} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {demoUrl && (
            <a
              href={demoUrl}
              className={styles.primaryLink}
              target="_blank"
              rel="noreferrer"
            >
              Ver demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              className={styles.secondaryLink}
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

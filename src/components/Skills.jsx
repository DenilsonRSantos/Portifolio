import sectionStyles from "../styles/Section.module.css";

function Skills() {
  const skills = {
    "Front-end": ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite"],
    "Estilização": ["CSS Modules", "Flexbox", "Grid", "Responsive Design"],
    "Boas práticas": ["Git e GitHub", "Componentização", "Clean Code"],
    Outros: ["Consumo de APIs", "Deploy (Vercel/Netlify)"],
  };

  return (
    <section id="habilidades" className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <h2 className={sectionStyles.title}>Habilidades</h2>

        <div className={sectionStyles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={sectionStyles.card}>
              <h3 className={sectionStyles.cardTitle}>{category}</h3>
              <ul className={sectionStyles.list}>
                {items.map((item) => (
                  <li key={item} className={sectionStyles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

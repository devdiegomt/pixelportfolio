import classes from "./Experience.module.scss";

type ExperienceProps = {
  exp: {
    img?: string;
    name: string;
    period: string;
    role: string;
    skills: string;
  };
};

const Experience: React.FC<ExperienceProps> = ({ exp }) => {
  return (
    <li className={classes["exp-li"]}> {/* Temporal */}
      {exp.img && (
        <img
          className={classes["work-img"]}
          src={exp.img}
          alt={`${exp.name} logo`}
        />
      )}
      <section className={classes["work-content"]}>
        <p>
          <strong>{exp.name}</strong>
        </p>
        <p>{exp.period}</p>
        <p>{exp.role}</p>
        <p>
          <strong>Skills:</strong> {exp.skills}
        </p>
      </section>
    </li>
  );
};

export default Experience;

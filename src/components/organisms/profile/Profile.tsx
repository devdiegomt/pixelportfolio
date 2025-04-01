import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../../../config/profile";
import classes from "./Profile.module.scss";
import Experience from "../../molecules/profile/experience/Experience";
import Education from "../../molecules/profile/education/Education";
import Certifications from "../../molecules/profile/certifications/Certifications";
import umbLogo from "../../../assets/edu/umb.png";

export default function Profile() {
  return (
    <div className={classes.profile}>
      <h3>Education</h3>
      <hr />
      <div className={classes.edu}>
        <img
          src={umbLogo}
          alt="Manuela Beltrán University"
        />
        <ul className={classes["edu-list"]}>
          {EDUCATION.map((edu) => (
            <Education key={edu.id} edu={edu} />
          ))}
        </ul>
      </div>
      <h3>Work experience</h3>
      <hr />
      <ul className={classes.experience}>
        {EXPERIENCE.map((exp) => (
          <Experience key={exp.id} exp={exp} />
        ))}
      </ul>
      <h3>Certifications</h3>
      <hr />
      <ul className={classes.certifications}>
        {CERTIFICATIONS.map((crt) => (
          <Certifications key={crt.id} crt={crt} />
        ))}
      </ul>
    </div>
  );
}

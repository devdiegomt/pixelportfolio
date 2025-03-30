import Profile from "../../components/organisms/profile/Profile";
import classes from "./Home.module.scss";

export default function HomePage() {
  return (
    <section>
      <h1 className={classes.title}>Professional Profile</h1>
      <h4 className={classes.subtitle}>Software engineer</h4>
      <div className={classes.profile}>
        <Profile />
      </div>
    </section>
  );
}

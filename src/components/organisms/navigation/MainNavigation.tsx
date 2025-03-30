// Image
import profileImg from "../../../assets/images/profile.png";

// Components
import Social from "../../molecules/social/Social";
import NavItem from "../../molecules/navigation/NavItem";
import Quotes from "../../molecules/quotes/Quotes";

// Styles
import classes from "./MainNavigation.module.scss";
import { motion } from "framer-motion";

// Data
import { SOCIAL_IMAGES } from "../../../config/social-images";
import { NAV_ITEMS } from "../../../config/navigation";
import { useLocation } from "react-router-dom";

export default function MainNavigation() {
  const location = useLocation();

  const pathClass =
    location.pathname === "/"
      ? classes["home-page"]
      : location.pathname === "/cv"
      ? classes["cv-page"]
      : location.pathname === "/contact"
      ? classes["contact-page"]
      : location.pathname === "/projects"
      ? classes["projects-page"]
      : classes["default-page"];

  return (
    <header className={classes.header}>
      <Quotes />
      <div className={classes.box}>
        <div className={`${classes.p1} ${pathClass}`}>
          <div className={classes.profile}>
            <img src={profileImg} alt="Profile image" />
          </div>
        </div>
        <div className={classes.bx3}>
          <h2 aria-label="Diego Mayorga Torres">
            {[..."Diego Mayorga Torres"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                }}
                style={
                  char === " " ? { display: "inline-block", width: "8px" } : {}
                }
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <p>@devdiegomt</p>
        </div>
        <div className={classes.bx4}>
          <div className={classes.social}>
            {SOCIAL_IMAGES.map((social) => (
              <Social
                key={social.id}
                social={social}
                className={classes.iconBckg}
              />
            ))}
          </div>
        </div>
        <div className={classes.bx5}>
          <nav>
            <ul className={classes.list}>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavItem to={item.to} end={item.end}>
                    {item.text}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

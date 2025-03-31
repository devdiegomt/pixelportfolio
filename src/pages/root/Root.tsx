import { Outlet, useLocation } from "react-router-dom";
import classes from "./Root.module.scss";
import MainNavigation from "../../components/organisms/navigation/MainNavigation";
import { useEffect, useState } from "react";
import Circles from "../../components/molecules/circles/Circles";
import { homeCirclesClasses } from "../../config/circles";

export default function RootLayout() {
  const location = useLocation();
  const [pathName, setPathName] = useState<string | undefined>();

  useEffect(() => {
    const bodyClass =
      location.pathname === "/"
        ? "home-page"
        : location.pathname === "/cv"
        ? "cv-page"
        : location.pathname === "/contact"
        ? "contact-page"
        : location.pathname === "/projects"
        ? "projects-page"
        : "default-page";

    setPathName(bodyClass);
    document.body.className = bodyClass;
    return () => {
      document.body.className = "";
    };
  }, [location.pathname]);

  return (
    <>
      <Circles circleClasses={homeCirclesClasses} pathName={pathName!} />
      <MainNavigation />
      <main className={classes.root}>
        <Outlet />
      </main>
    </>
  );
}

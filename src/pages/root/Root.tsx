import { Outlet, useLocation } from "react-router-dom";
import classes from "./Root.module.scss";
import MainNavigation from "../../components/organisms/navigation/MainNavigation";
import { useEffect } from "react";

export default function RootLayout() {
  const location = useLocation();

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

    document.body.className = bodyClass;

    return () => {
      document.body.className = "";
    };

  }, [location.pathname]);

  return (
    <>
      <MainNavigation />
      <main className={classes.root}>
        <Outlet />
      </main>
    </>
  );
}

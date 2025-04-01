import { motion } from "framer-motion";

type CirclesClass = {
  id: string;
  commonClass: string;
  homeCircleClass: string;
  projectsCircleClass: string;
  cvCircleClass: string;
  contactCircleClass: string;
};

type CirclesProps = {
  circleClasses: CirclesClass[];
  pathName: string;
};

const Circles: React.FC<CirclesProps> = ({ circleClasses, pathName }) => {
  return (
    <>
      {circleClasses.map((circleClass) => {
        let circlePath = "";

        switch (pathName) {
          case "home-page":
            circlePath = circleClass.homeCircleClass;
            break;
          case "projects-page":
            circlePath = circleClass.projectsCircleClass;
            break;
          case "cv-page":
            circlePath = circleClass.cvCircleClass;
            break;
          case "contact-page":
            circlePath = circleClass.contactCircleClass;
            break;
          default:
            circlePath = "";
            break;
        }

        return (
          <motion.div
            key={circleClass.id}
            layoutId={`circle-${circleClass.id}`}
            className={`${circleClass.commonClass} ${circlePath}`}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
          />
        );
      })}
    </>
  );
};

export default Circles;

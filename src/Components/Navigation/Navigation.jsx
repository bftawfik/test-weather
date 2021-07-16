import { Link } from "react-router-dom";
import missingData from "../../mock/navigation";

const navigation = ({ classes }) => {
  return (
      <ul className={classes.Navigation}>
        {missingData.navigation.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
  );
};

export default navigation;

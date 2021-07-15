import { Link } from "react-router-dom";
import missingData from "../../mock/navigation";

const navigation = () => {
  return (
    <div>
      <ul>
        {missingData.navigation.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default navigation;

import { Link } from "react-router-dom";
import missingData from "../../mock/header";

const Header = () => {
  return (
    <div>
      <div>{missingData.bgText}</div>
      <div>{missingData.logo}</div>
      <div>{missingData.slogan}</div>
      <div>{missingData.title}</div>
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

export default Header;

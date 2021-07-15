import missingData from "../../mock/banner";

const Header = () => {
  return (
    <div>
      <div>{missingData.bgText}</div>
      <div>{missingData.title}</div>
    </div>
  );
};

export default Header;

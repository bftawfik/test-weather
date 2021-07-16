import { Link } from "react-router-dom";

const navigation = ({ classes, asButtons, navigationList }) => {

  const renderItem = (item, asButtons) => {
    return asButtons ? (
      <button onClick={item.handler}>{item.label}</button>
    ) : (
      <Link to={item.link}>{item.label}</Link>
    );
  }
  return (
    <ul className={classes.Navigation}>
      {navigationList.map((item) => (
        <li key={item.id}>{renderItem(item, asButtons)}</li>
      ))}
    </ul>
  );
};

export default navigation;

import missingData from "../../mock/banner";

const Header = ({classes}) => {
  return (
    <div className={classes.Banner}>
      <div className={classes.bgText}>{missingData.bgText}</div>
      <div className={classes.title}>{missingData.title}</div>
      <div className={classes.dots}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Header;

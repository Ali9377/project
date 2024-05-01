import classes from "./Header.module.scss";
const Header = (): JSX.Element => (
  <header>
    <div className={classes.header__inner}>
      <h1>Contact List on JS</h1>
      <span>GitHub Repository link</span>
    </div>
  </header>
);


export default Header;

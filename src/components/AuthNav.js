import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const styles = {
  link: {
    margin: 5,
    display: "block",
    color: "white",
  },
  activeLink: {
    margin: 5,
    display: "block",
    color: "red",
  },
};

const AuthNav = () => (
  <div>
    <Button
      type="click"
      variant="contained"
      color="primary"
      style={{ height: 30 }}
    >
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
    </Button>
    <Button
      style={{ marginLeft: 15, height: 30 }}
      type="click"
      variant="contained"
      color="primary"
    >
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </Button>
  </div>
);

export default AuthNav;

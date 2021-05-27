import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = {
  link: {
    display: "block",
    margin: 5,
    color: "white",
  },
  activeLink: {
    margin: 5,
    display: "block",
    color: "red",
  },
};

const AuthNav = () => (
  <div style={{ display: "flex" }}>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ height: 30 }}
      >
        Registration
      </Button>
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Button
        style={{ marginLeft: 15, height: 30 }}
        type="button"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </NavLink>
  </div>
);

export default AuthNav;

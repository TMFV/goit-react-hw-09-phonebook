import React, { useState } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

function LoginView({ onLogin }) {
  /*   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  }; */

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUserChange = (event) => {
    let inputName = event.currentTarget.name;
    let inputValue = event.currentTarget.value;
    setUser((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: user.email, password: user.password });
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1 style={{ fontFamily: "Roboto" }}>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          label="E-mail:"
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserChange}
        />
        <TextField
          label="Password:"
          type="password"
          name="password"
          value={user.password}
          onChange={handleUserChange}
        />
        <br />
        <Button
          style={{ marginTop: 25 }}
          type="submit"
          variant="contained"
          color="primary"
        >
          SIGN IN 🟩
        </Button>
      </form>
    </div>
  );
}

//Full version
/* const mapDispatchToProps = dispatch=>{
  onSubmit: (data)=>dispatch (authOperations.register(data))
} */
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1 style={{ fontFamily: "Roboto" }}>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          label="E-mail:"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password:"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
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

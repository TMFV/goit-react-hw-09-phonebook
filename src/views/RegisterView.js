import { useState } from "react";
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
function RegisterView({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name: name, email: email, password: password });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1 style={{ fontFamily: "Roboto" }}>Registration</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          label="Name:"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

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
          SIGN UP 🟦
        </Button>
      </form>
    </div>
  );
}
//Short version
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
//Full version
/* const mapDispatchToProps = dispatch=>{
  onSubmit: (data)=>dispatch (authOperations.register(data))
} */

export default connect(null, mapDispatchToProps)(RegisterView);

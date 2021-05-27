import { Component } from "react";
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

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 style={{ fontFamily: "Roboto" }}>Registration</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <TextField
            label="Name:"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            label="E-mail:"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            label="Password:"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
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

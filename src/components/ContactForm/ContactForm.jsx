import style from "./ContactForm.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ContactForm({ onSubmitData }) {
  const [nameState, setNameState] = useState("");
  const [numberState, setNumberState] = useState("");
  const handleNameChange = (event) => {
    setNameState(event.currentTarget.value);
  };
  const handleNumberChange = (event) => {
    setNumberState(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let contactForAdd = { name: nameState, number: numberState };

    onSubmitData(contactForAdd);

    reset();
  };
  const reset = () => {
    setNameState("");
    setNumberState("");
  };

  return (
    <div className={style.contactform}>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
          label="Name:"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
          value={nameState}
        />
        <TextField
          label="Number:"
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
          value={numberState}
        />
        <br />
        <Button
          style={{ marginTop: 25 }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;

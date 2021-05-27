import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function ContactList({ del, contacts }) {
  const deleteId = (Id) => {
    del(Id);
  };
  const createList = () => {
    return contacts.map((contact) => {
      return (
        <li key={contact.id} id={contact.id}>
          <Button
            style={{ marginLeft: 25, height: 30, margin: 5 }}
            data-id={contact.id}
            variant="contained"
            color="primary"
            onClick={() => deleteId(contact.id)}
          >
            Delete
          </Button>
          {`${contact.name}: ${contact.number}`}
        </li>
      );
    });
  };

  return <ul>{createList()}</ul>;
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;

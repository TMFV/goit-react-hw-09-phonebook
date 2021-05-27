import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class ContactList extends Component {
  deleteId = (Id) => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map((contact) => {
      return (
        <li key={contact.id} id={contact.id}>
          <Button
            style={{ marginLeft: 25, height: 30, margin: 5 }}
            data-id={contact.id}
            variant="contained"
            color="primary"
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </Button>
          {`${contact.name}: ${contact.number}`}
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;

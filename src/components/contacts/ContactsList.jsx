import React from "react";
import PropTypes from 'prop-types';
import css from './filter.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
        <ul>
                {contacts.map((el) =>
                        <li key={el.id}>
                                <span className={css.name__people}>{el.name} {el.number}</span>
                                <button className={css.btn__delete} onClick={() => onDeleteContact(el.id)}>Delete</button>
                        </li>)}
        </ul>
);

ContactList.propTypes = {
        contacts: PropTypes.arrayOf(Object).isRequired,
        onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;

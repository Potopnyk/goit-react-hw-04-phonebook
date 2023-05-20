import React, { useState } from "react";
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
    
    const [state, setState] = useState({
        name: '',
        number: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        setState(state => ({ ...state, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state);
        reset();
    };

    const reset = () => {
        setState({ name: '', number: '', });
    };

    return (
        <form
            className={css.contactForm}
            onSubmit={handleSubmit}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={state.name}
                    onChange={handleInputChange}
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={state.number}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm;


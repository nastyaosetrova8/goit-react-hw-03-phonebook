import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactFormStyled } from './ContactFormStyled';

class ContactForm extends Component {
state = {
    name: '',
  number: ''
}

handleChange = ({target: {name, value}}) => {
this.setState({[name]: value})
};

handleSubmit = e => {
    e.preventDefault();
    const contactData = {
        ...this.state,}

this.props.onFormSubmit(contactData);
this.setState({name: '', number: ''});
};


render() {
    return (
<ContactFormStyled onSubmit={this.handleSubmit}>
    <label>
        Name
    <input value={this.state.name}
    onChange={this.handleChange}
    type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
    </label>
        
    <label >
        Number
    <input value={this.state.number} 
    onChange={this.handleChange}
    type="tel"
  name="number"
  pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required />
    </label>
        
        <button type="submit">Add contact</button>
      </ContactFormStyled>
    )
}
}

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
}

export default ContactForm;

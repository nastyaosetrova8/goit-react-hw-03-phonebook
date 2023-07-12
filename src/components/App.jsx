import { Component } from "react"
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import Section from "./Section/Section"

export class App extends Component {
state = {
  contacts: [],
  filter: ''
};


componentDidMount(){
const stringifiedContacts = localStorage.getItem('contacts')
const parsedContacts = JSON.parse(stringifiedContacts) ?? [];

parsedContacts.length > 0 
? this.setState({contacts: parsedContacts}) 
: this.setState({contacts: []});
}


componentDidUpdate(prevProps, prevState){
if(this.state.contacts !== prevState.contacts){
localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
} 


addContact = (contactData) => {
const existContact = this.state.contacts.find(contact => 
contact.name === contactData.name)

  if (existContact) {
 alert(`${contactData.name} is already in contacts.`) }

 else {
const contact = {id: nanoid(), ...contactData};
this.setState(prevState => {
  return {
    contacts: [contact, ...prevState.contacts],}})
  }
}


deleteContact = id => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }});
};


filterContact = filterName => {
  this.setState({filter: filterName});
}

render() { 
const filteredContacts = this.state.contacts.filter(contact => 
  contact.name
  .toLowerCase()
  .includes(this.state.filter
    .toLowerCase().trim()));

  return (
<div>
  <Section title ="Phonebook">
    <ContactForm onFormSubmit={this.addContact}/>
    </Section>

    <Section>
    <h2>Contacts</h2>
    <Filter
    title="Find contacts by name"
    filter={this.state.filter} 
    filterContact={this.filterContact}
    />
    </Section>

    <ContactList 
    contacts={filteredContacts}
    deleteContact={this.deleteContact}
     />
     </div>
  )
}
};

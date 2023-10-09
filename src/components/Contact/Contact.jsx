import { ContactWrap, ButtonDel } from "./Contact.styled";
import PropTypes from 'prop-types';

export const Contact = ({contact })=>{
    const deleteContact = (contactId) => {
        // setContacts(prevContacts =>prevContacts.filter(contact => contact.id !== contactId));
      };
    const {id, name, number} = contact;
    return(
    <ContactWrap>
        <p>{name}: {number}</p>
        <ButtonDel onClick={()=> deleteContact(id)}>Delete</ButtonDel>
    </ContactWrap>
    )
}

Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }),
     onDelete: PropTypes.func,
}
import { Contact } from "components/Contact/Contact";
import { ContactListWrap, ListItem } from "./ContactList.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts,  getFilter } from "redux/selectors";

export const ContactList =( )=>{
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  

    return(
        <ContactListWrap>
          {filterContacts.map(contact => (
            <ListItem key={contact.id}>
                <Contact/>
            </ListItem>
          ))}
        </ContactListWrap>
    )
}

ContactList.propTypes = {
  filterContactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  deleteContact: PropTypes.func,
}
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/contacts/contact-selectors';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectVisibleContacts);


  return (
    <ul>
      {contactsList.map(({ name, id, number }) => {
        const handleDelete = () => {
          dispatch(deleteContact(id))
            .then(() => {
              toast.success(`Contact with name "${name}" is deleted`);
            })
            .catch(() => {
              toast.error(`Failed to delete contact with name "${name}"`);
            });
        };
  
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

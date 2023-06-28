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
        return (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
                toast.success(`Contact with name "${name}" is deleted`);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

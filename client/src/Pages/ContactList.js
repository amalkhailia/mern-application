import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from '../JS/actions/contacts';

import  "./ContactList.css";
import Contact from '../Components/Contact/Contact';


const ContactList = () => {
    const contactList = useSelector((state) => state.contactReducer.contactList)
    const loadContact = useSelector((state)=> state.contactReducer.loadContact)
    const dispatch = useDispatch()
 useEffect(() => {
     dispatch (getContacts())
     }, [])
    return (
        <div className="contact">
        {loadContact?(<h2>loading...</h2>): (contactList.map((el)=> <Contact contact={el} key= {el._id}/>))}        
       </div>
    )
}

export default ContactList

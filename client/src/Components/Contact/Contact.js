import React from 'react'
import { useDispatch } from "react-redux";

import { deleteContact, getContacts } from "../../JS/actions/contacts";
import { toggleEdit } from '../../JS/actions/edit';
import {Link} from  "react-router-dom"
const Contact = ({contact}) => {
    const dispatch = useDispatch()
    const handleEdit =(id)=> {
        dispatch(toggleEdit());
        dispatch (getContacts(id))
    }
    return (
        <div style={{  margin:"5%", border: "1px solid black", padding:"2%"}}>
            <h2>{contact.name}</h2>
            <h2>{contact.email}</h2>
            <h2>{contact.phone}</h2>
            <button onClick={()=>dispatch(deleteContact(contact._id))}>Delete</button>
           <Link to="/edit">
            <button onClick={() =>handleEdit(contact._id)}>Edit</button>
            </Link>
        </div>
    )
}

export default Contact

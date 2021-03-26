import { FAIL_CONTACT, GET_CONTACTS, LOAD_CONTACT,GET_CONTACT} from "../actionTypes/contacts";
import axios from "axios";

export const getContacts = ()=> async (dispatch)=>{
    dispatch({type:LOAD_CONTACT});
try {
    let result = await axios.get("/api/contacts");
    dispatch({ type: GET_CONTACTS, payload:result.data});
} catch (error) {
    dispatch({type:FAIL_CONTACT, payload:error.responce});

}
}

export const postContact=(newUser)=> async(dispatch)=>{
    try {
        await axios.post("/api/contacts",newUser)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type:FAIL_CONTACT, payload:error.responce});
        
    }
}

export const deleteContact=(id)=> async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getContacts());

    } catch (error) {
        dispatch({type:FAIL_CONTACT, payload:error.responce});
    }
}

export const editContact=(id,newContact)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type:FAIL_CONTACT, payload:error.responce});

    }
}

export const getContact = (id) => async (dispatch) => {
    try {
      let result = await axios.get(`/api/contact/${id}`);
      dispatch({ type: GET_CONTACT, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CONTACT, payload: error.response.data });
    }
  };
import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleAdd } from '../JS/actions/edit';

const Home = () => {
     const dispatch = useDispatch()
    return (
        <div>
           <Link to ="/add"><button onClick ={()=> dispatch(toggleAdd())}>Add contact</button></Link> 
            <Link to="/"><button>Contact list</button></Link>
        </div>
    )
}

export default Home

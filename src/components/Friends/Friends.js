import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    console.log(name);

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show details of {id}</Link>
        </div>
    );
};

export default Friends;
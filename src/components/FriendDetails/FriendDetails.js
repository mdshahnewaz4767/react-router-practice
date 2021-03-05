import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h2>This is Friend Details Component: {friendId}</h2>
        </div>
    );
};

export default FriendDetails;
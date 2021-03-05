import { useEffect, useState } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';

function App() {
  const [friends, setFriend] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
  }, [])
  return (
    <div>
      {
        friends.map(friend => <Friends friend={friend} key={friend.id}></Friends>)
      }
    </div>
  );
}

export default App;

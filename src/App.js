import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
  }, [])
  return (
    <div>
      {
        console.log(friend)
      }
    </div>
  );
}

export default App;

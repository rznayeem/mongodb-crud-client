import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          alert('successfully deleted');
          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <div>
        {users.map(user => (
          <li key={user._id}>
            {user.name} {user.email}{' '}
            <Link to={`/users/${user._id}`}>
              <button>Update</button>
            </Link>
            <button
              onClick={() => handleDelete(user._id)}
              className="p-6 border"
            >
              X
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Users;

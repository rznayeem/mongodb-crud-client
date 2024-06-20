import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('added successfully');
          form.reset();
        }
      });
  };

  return (
    <>
      <Link to={'/users'}>Users</Link>
      <h1 className="">Simple Crud</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add User" id="" />
      </form>
    </>
  );
}

export default App;

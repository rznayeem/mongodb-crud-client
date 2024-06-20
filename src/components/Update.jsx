import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser.name} id="" />{' '}
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser.email}
          id=""
        />{' '}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;

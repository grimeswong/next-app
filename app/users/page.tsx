import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  { cache: 'no-store'}); // to keep use fetch fresh data
  // { next: {revalidate: 10 } });   // to get fresh data form backend every 10 seconds
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>  {/* the time only be updated for development mode, not the production mode */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;

import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  }); // to keep use fetch fresh data
  // { next: {revalidate: 10 } });   // to get fresh data form backend every 10 seconds
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* the time only be updated for development mode, not the production mode */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;

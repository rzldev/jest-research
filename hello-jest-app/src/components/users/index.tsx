import React, { useEffect, useState } from "react";
import { Data, IUser } from "../../@types/models";
import { fetchData } from "../../apis/apiHandlers";
import API from "../../constants/api";

function Users(): React.ReactElement {
  const [users, setUsers] = useState<IUser[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!users && !error) {
      fetchData(
        API.API_ROUTE + API.USERS_ENDPOINT,
        (data: Data[]) => setUsers(data as IUser[]),
        (errorMessage: string) => setError(errorMessage)
      );
    }
  }, [users, error]);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users && users.map((user) => <li key={user.name}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    const getUsers = () => {
      const res = dispatch(fetchUsers());
      console.log(res);
    };

    void getUsers();
  }, [dispatch]);

  return (
    <div>
      <h2>List of Users </h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

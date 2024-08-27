import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Hi Welcome {user.displayName ? user.displayName : "back"}!</h1>
      <h2>I am still working on user home....</h2>
    </div>
  );
};

export default UserHome;

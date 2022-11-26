import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export function Profile() {
  const naviagte = useNavigate();
  const { user, logout } = useAuth();
  const { email, name, username } = user || {};
  return (
    <>
      {!user ? (
        <div className="mt-20">
          <Spinner />
        </div>
      ) : (
        <div className="w-96 max-w-md mt-10	m-auto p-4 border-2 border-black rounded-md text-lg font-bold text-black">
          <p>{name}</p>
          <p>{username}</p>
          <p>{email}</p>
          <button
            className="bg-primary text-white text-lg font-bold py-2 px-4 mt-3 hover:bg-btn_hover rounded"
            onClick={() => {
              logout();
              naviagte("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

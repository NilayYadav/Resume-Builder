import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Spinner } from "../components";

export function Login() {
  const { loginUserWithCredentials, spinner } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputClass =
    "border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  function loginHandler() {
    loginUserWithCredentials(email, password);
  }

  return (
    <div className="w-11/12 max-w-md m-auto mt-20 py-4 px-6 text-center border-2 border-coolGray rounded shadow-xl ">
      <h2 className="text-2xl font-bold text-grey mb-1">LogIn</h2>
      <div className="flex align-center flex-col">
        <input
          className={inputClass}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className={inputClass}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        className="w-full mt-3 bg-primary text-white text-lg font-bold py-2 px-10 hover:bg-btn_hover rounded"
        onClick={loginHandler}
      >
        {spinner ? <Spinner /> : "Login"}
      </button>
      <div className="mt-2 text-grey font-bold">
        <small>
          Don't have an account.
          <Link to="/signup" className="text-primary">
            SignUp
          </Link>
        </small>
      </div>
    </div>
  );
}

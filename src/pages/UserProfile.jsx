import { useContext, useRef, useState } from "react";

import AuthContext from "../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const UserProfile = function () {
  const authCtx = useContext(AuthContext);
 const navigate=useNavigate();
  const enteredPasswordRef = useRef();

  const [isLoading, setLoading] = useState(false);

  const profileFormHandler = async (e) => {
    e.preventDefault();

    const enteredPassword = enteredPasswordRef.current.value;

    if (enteredPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setLoading(false);
        alert("Password Changed")
        navigate('/home')
       
      } else {
        const data = await response.json();
        let errMessage = "Authentication failed";

        if (data && data.error && data.error.message) {
          errMessage = data.error.message;
        }

        alert(errMessage);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-1 mb-44 ">
        <div className="flex items-center justify-center mt-44 mr-44 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
             Set new password
            </h2>

            <form onSubmit={profileFormHandler} className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      className="text-base font-medium text-gray-900"
                      htmlFor="password"
                    >
                      {" "}
                      New Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="New Password"
                      ref={enteredPasswordRef}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {!isLoading && <p>Confirm</p>}
                    {isLoading && <p>Loading...</p>}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;

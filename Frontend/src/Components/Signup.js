import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [re_password, setre_password] = useState("");
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mb-20">
            <h1 className="text-indigo-600 text-4xl font-bold">Signup</h1>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="rounded-md  -space-y-px">
              <div>
                <label htmlFor="First-Name" className="sr-only">
                  First Name
                </label>
                <input
                  id="First-Name"
                  name="firstName"
                  type="text"
                  required
                  onChange={(e) => setfirst_name(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label htmlFor="Last-Name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="Last-Name"
                  name="lastName"
                  type="text"
                  required
                  onChange={(e) => setlast_name(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email-address"
                  type="email"
                  required
                  onChange={(e) => setemail(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email address"
                />
              </div>
              <div>
                <label htmlFor="PhoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="PhoneNumber"
                  name="PhoneNumber"
                  type="text"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email address"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  id="password"
                  name="Password"
                  type="password"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  confirm password
                </label>
                <input
                  id="confirm-password"
                  name="Confirm-Password"
                  type="password"
                  required
                  onChange={(e) => setre_password(e.target.value)}
                  className="appearance-none relative block mb-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="confirm password"
                />
              </div>
            </div>
            {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-xs sm:text-sm">
              <Link to="/reset" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>                        */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Signup
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="text-sm">
                  Already have an account ?<span> </span>
                  <Link
                    to="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log to your account here.
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

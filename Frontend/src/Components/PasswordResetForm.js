import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

export default function PasswordReset() {
  const [seconds, setSeconds] = useState();
  let [isOpen, setIsOpen] = useState(false);

  const submissionHandler = (e) => {
    e.preventDefault();
    openModal();
    document.querySelector("#countdown").classList.remove("hidden");
    document.querySelector("#reset-Link").classList.add("pointer-events-none");
    document.querySelector("#reset-Link").innerHTML = "Send link again";
    document.querySelector("#reset-Link").classList.add("opacity-50");
    setSeconds(30);
    setTimeout(() => {
      document
        .querySelector("#reset-Link")
        .classList.remove("pointer-events-none");
      document.querySelector("#reset-Link").classList.remove("opacity-50");
      document.querySelector("#countdown").classList.add("hidden");
    }, 30000);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("");
    }
  }, [seconds]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mb-20">
            <h1 className="text-indigo-600 text-4xl font-bold">
              Password Reset{" "}
            </h1>
          </div>
          <div className="mb-20">
            <p className="text-center text-md ">
              please enter your email to send the reset link
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="/newpassword"
            onSubmit={(e) => {
              submissionHandler(e);
            }}
          >
            <div className="rounded-md  -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                id="reset-Link"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Send link
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm mb-2">
                <h3 id="countdown" className="hidden">
                  {seconds}
                </h3>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  you don't have an account ? <span> </span>
                  <Link
                    to="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Create your account here.
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Reset Link sent with success
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Check your email for more instructions on how to reset your
                    password, if you didn't get the link press send link again
                    after the timer is completed.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

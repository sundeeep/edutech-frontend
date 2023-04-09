import React from "react";
import {Link, useNavigate} from 'react-router-dom';
export const SignIn = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    Sign in
                    </h2>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/signup"
                        title="Sing Up Page"
                        className="font-medium text-[rgb(196,130,252)] transition-all duration-200 hover:text-[rgb(196,130,252,0.8)] hover:underline focus:text-[rgb(196,130,252,0.5)]"
                    >
                        Create a free account
                    </Link>
                    </p>

                    <form action="#" method="POST" className="mt-8">
                    <div className="space-y-5">
                        <div>
                        <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                        >
                            {" "}
                            Email address{" "}
                        </label>
                        <div className="mt-2.5">
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[rgb(196,130,252,0.8)] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:text-gray-50 dark:focus:ring-[rgb(196,130,252,0.5)] dark:focus:ring-offset-[rgb(196,130,252,0.8)]"
                            type="email"
                            placeholder="Email"
                            ></input>
                        </div>
                        </div>

                        <div>
                        <div className="flex items-center justify-between">
                            <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900 dark:text-gray-200"
                            >
                            {" "}
                            Password{" "}
                            </label>

                            <a
                            href="#"
                            title=""
                            className="text-sm font-medium text-[rgb(196,130,252)] hover:underline hover:[rgb(196,130,252,0.8)] focus:text-[rgb(196,130,252,0.6)]"
                            >
                            {" "}
                            Forgot password?{" "}
                            </a>
                        </div>
                        <div className="mt-2.5">
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[rgb(196,130,252,0.8)] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:text-gray-50 dark:focus:ring-[rgb(196,130,252,0.5)] dark:focus:ring-offset-[rgb(196,130,252,0.8)]"
                            type="password"
                            placeholder="Password"
                            ></input>
                        </div>
                        </div>

                        <div>
                        <button onClick={()=>{
                            navigate('/')
                        }}
                        className="w-full inline-flex items-center justify-center rounded-md bg-[rgb(196,130,252)] px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[rgb(196,130,252,0.8)]">
                            Get started
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 ml-2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                    </form>

                    <div className="mt-3 space-y-3">
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 dark:text-gray-400 transition-all duration-200 bg-white border border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                            className="w-6 h-6 text-rose-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                        </div>
                        Sign in with Google
                    </button>

                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 dark:text-gray-400 transition-all duration-200 bg-white border border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                    >
                        <div className="absolute inset-y-0 left-0 p-4">
                        <svg
                            className="w-6 h-6 text-[#2563EB]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                        </div>
                        Sign in with Facebook
                    </button>
                    </div>
                </div>
                </div>

                <div className="w-full h-full">
                <img
                    className="w-full h-full mx-auto object-cover"
                    src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt=""
                />
                </div>
            </div>
        </section>
    );
};

export default SignIn;

import React from 'react';

const Form = () => {
    return (
        <form>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary_btn focus:outline-none focus:ring-0 focus:border-primary_btn peer"
                    placeholder=" "
                    required
                    autoComplete="off"
                />
                <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary_btn peer-focus:dark:text-primary_btn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Full Name
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary_btn focus:outline-none focus:ring-0 focus:border-primary_btn peer"
                    placeholder=" "
                    required
                    autoComplete="off"
                />
                <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary_btn peer-focus:dark:text-primary_btn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary_btn focus:outline-none focus:ring-0 focus:border-primary_btn peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary_btn peer-focus:dark:text-primary_btn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Phone number (123-456-7890)
                </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <textarea
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary_btn focus:outline-none focus:ring-0 focus:border-primary_btn peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary_btn peer-focus:dark:text-primary_btn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Message
                </label>
            </div>

            <button
                type="submit"
                className="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black md:w-fit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;

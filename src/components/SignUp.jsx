

const SignUp = () => {
  return (
    <div className=" md:flex justify-around py-10 bg-[#FBFCFD]">
      <div>
        <h1 className="text-center md:text-left text-[#5C6874] text-[32px]">
          Sign up and get exclusive <br /> special deals
        </h1>
      </div>
      <div>
        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-none focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder=""
              className="flex-1 h-[52px] md:w-[445px] px-4 py-2 m-1 text-gray-700 placeholder-white rounded border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="button"
              className="h-[52px] md:w-[97px] rounded-l-none rounded-r-xl px-4 py-2 m-1 text-white transition-colors text-[14px] duration-300 transform bg-[#1B88F4] rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
             Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
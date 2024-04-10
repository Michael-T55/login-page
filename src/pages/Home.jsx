function Home() {
  return (
    <>
      <div className="bg-[#041644] w-[25rem] h-[40rem] rounded-[2rem] shadow-2xl p-10 gap-[2rem] place-content-center md:flex md:w-[60rem] md:gap-[15rem]">
        <div className=" text-center md:text-left ">
          <div className="mb-[2rem]">
            <h2 className="text-[2em]">circles</h2>
          </div>
          <div className="pt-20 pb-5">
            <h1>
              Login to <br /> your account
            </h1>
            <p className="text-gray-500">Let us make the circle bigger!</p>
          </div>
        </div>

        <div className="block relative">
          <form className="bg-white w-[20rem] h-[20rem] rounded-[0.5rem] p-5 py-[2rem]  px-[30px] pt-[2rem] mt-[1rem] md:mt-[10rem] relative">
            <div className="pb-[0.51rem]">
              <p className="text-black pb-[0.5rem]">Email</p>
              <input
                type="email"
                name=""
                id=""
                className="bg-white border-2 border-black-200 p-2 w-[100%] rounded-[5px]"
                placeholder="name@example.com"
              />
            </div>

            <button className="text-black absolute right-10 top-5 bg-white">
              <h2>X</h2>
            </button>

            <div className="">
              <label className="text-black pb-[0.51rem]">Password</label>
              <input
                type="password"
                name=""
                id=""
                className="bg-white border-2 border-black-200 p-2 w-[100%] rounded-[5px]"
                placeholder="Your password"
              />
            </div>

            <div className="items-center pt-[1rem] justify-between">
              <button className="bg-blue-600 p-[0.2rem] pr-[2rem] pl-[2rem] w-[100%] mt-2 ">
                Login
              </button>
              <div className="flex justify-center pt-[1rem]">
                <p className="text-black text-sm">Dont have an account?</p>
                <p className="flex text-blue-500 cursor-pointer text-sm pl-2 hover:underline">
                  Sign up
                </p>
              </div>
            </div>
          </form>

          <form className="bg-white w-[20rem] h-[22rem] rounded-[0.5rem] p-5 py-[2rem] px-[30px] pt-[2rem] mt-[1rem] md:mt-[10rem] relative">
            <div className="pb-[0.51rem]">
              <p className="text-black pb-[0.5rem]">Username</p>
              <input
                type="email"
                name=""
                id=""
                className="bg-white border-2 border-black-200 p-2 w-[100%] rounded-[5px]"
                placeholder="Username"
              />
            </div>

            <button className="text-black absolute right-10 top-5 bg-white">
              <h2>X</h2>
            </button>

            <div className="pb-[0.51rem]">
              <p className="text-black pb-[0.5rem]">Email</p>
              <input
                type="email"
                name=""
                id=""
                className="bg-white border-2 border-black-200 p-2 w-[100%] rounded-[5px]"
                placeholder="name@example.com"
              />
            </div>

            <div className="">
              <label className="text-black pb-[0.51rem]">Password</label>
              <input
                type="password"
                name=""
                id=""
                className="bg-white border-2 border-black-200 p-2 w-[100%] rounded-[5px]"
                placeholder="Your password"
              />
            </div>

            <div className="items-center pt-[1rem] justify-between">
              <button className="bg-blue-600 p-[0.2rem] pr-[2rem] pl-[2rem] w-[100%] mt-2 ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;

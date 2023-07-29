function Navbar() {
    return (
      <div className="w-[396px] md:w-full py-6 px-16 bg-green-900">
        <div className="flex justify-between">
          
          <div className="text-green text-base">
            <a
              href="#"
              className="px-4 py-2 mr-4"
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-2"
            >
              Projects
            </a>
            <a
              href="#"
              className="px-4 py-2"
            >
              Log in
            </a>
            <button className="bg-yellow rounded-md px-9 py-4 font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
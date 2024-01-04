import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 gap-3 text-black mb-3 shadow-sm">
        <div className="flex items-center gap-10">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <button className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full relative">
          <BsCart3 />
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -bottom-1 -right-1">
            3
          </span>
        </button>
      </div>
    </>
  );
};

export default Navbar;

import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full mt-4 flex items-center justify-center">
      <div className="flex px-2 h-[50px] items-center justify-center w-[90%] sm:w-[60%] border-4 border-amber-400">
        <input className="outline-none w-[90%]" type="text" placeholder="Search..." />
        <BiSearchAlt className="cursor-pointer w-[10%] h-full bg-sky-300" size={20} />
      </div>
    </div>
  );
};

export default Search;

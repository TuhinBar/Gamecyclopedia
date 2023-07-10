import { BiSearchAlt } from "react-icons/bi";
import { FormEvent, FormEventHandler, useRef, useState,useEffect } from "react";
import useSWR  from "swr";

const Search: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR("/api/games", fetcher);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const submitSearchHandler: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchInputRef.current?.value);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [scrollPosition]);
  return (
    <div
      className={`w-full mt-4 flex items-center justify-center fixed top-16 ${
        scrollPosition > 80 ? "hidden" : ""
      }`}
    >
      <form onSubmit={submitSearchHandler} className="flex h-[50px] items-center justify-center w-[90%] sm:w-[60%] border-[5px] border-amber-400 rounded-tl-lg rounded-br-lg">
        <input className=" px-2 outline-none w-[90%] h-full rounded-tl-sm" type="text" placeholder="See if your favorite game is on the list" ref={searchInputRef}/>
        <button className="cursor-pointer w-[10%] h-full text-center bg-sky-300 hover:bg-green-500 transition ease-in-out duration-500">
        <BiSearchAlt className="mx-auto" size={30} />
          </button>
      </form>
    </div>
  );
};

export default Search;

import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="relative border px-2 py-2 rounded-full">
      <input
        type="text"
        name="q"
        className="w-48 ps-2  "
        placeholder="search"
      />
      <button type="submit bg-white">
        <IoIosSearch className=" text-xl translate-y-1 " />
      </button>
    </div>
  );
};

export default SearchBar;

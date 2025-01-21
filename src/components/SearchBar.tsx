import { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");
  return (
    <div className="bg-customGrey py-5 px-10">
      <h1 className="font-bold font-Mali text-2xl text-center">Kpop Group</h1>

      <form action="" className="mt-4 flex flex-row gap-10 justify-center flex-wrap">

        <div className="flex flex-col">
        <label htmlFor="search" className="font-Mali font-semibold">SearchName</label>
        <input id='search' className="border border-gray-500 rounded-md py-1 px-2"
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        </div>
      
        <div className="flex flex-col">
        <label htmlFor="search">SearchName</label>
        <input id='search' className="border border-gray-500 rounded-md py-1 px-2"
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        </div>


         <div className="flex flex-col">
        <label htmlFor="search">SearchName</label>
        <input id='search' className="border border-gray-500 rounded-md py-1 px-2"
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

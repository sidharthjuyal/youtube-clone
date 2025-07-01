import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_URL,
  USER_ICON,
  YOUTUBE__LOGO_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchQuery(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      // debouncing
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={handleMenuClick}
          className="h-10 hover:cursor-pointer"
          alt="Menu"
          src={HAMBURGER_URL}
        />
        <a href="/">
          <img className="h-14 mx-2" alt="Logo" src={YOUTUBE__LOGO_URL} />
        </a>
      </div>

      <div className="col-span-10 flex items-center justify-center">
        <div className="relative w-1/2">
          <input
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border w-full border-gray-400 rounded-l-full px-5 py-1 text-sm"
            type="text"
          />
          {showSuggestions && (
            <div className="absolute top-8 left-0 w-full bg-white p-2 rounded-md shadow-2xl">
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    title={result}
                    key={result + index}
                    className="truncate shadow-xs cursor-pointer p-1.5 hover:bg-gray-50"
                  >
                    <span className="mr-2">🔍︎</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="border border-gray-400 rounded-r-full px-5 py-1 text-sm hover:cursor-pointer bg-gray-100 hover:bg-black hover:text-white hover:border-black">
          🔍︎
        </button>
      </div>

      <div className="col-span-1 flex justify-end items-center">
        <img className="h-8" alt="User Avatar" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;

import React, { useState ,useRef ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { searchAction } from '../redux/actions'; // Assuming you have an action called 'searchAction'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAction(searchQuery));
    history.push(`/user-details/${searchQuery}`);
    setSearchQuery('');
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const renderLinks = () => {
    const pathname = window.location.pathname;
    return (
      <>
        <Link
          to="/home"
          onClick={() => setMenuOpen(false)}
          className={`block py-4 pl-3 pr-4 ml-5 text-md ${pathname === '/home' ? 'text-blue-700' : 'text-gray-800 dark:text-white'}  hover:bg-gray-700 `}
        >
          Home
        </Link>
        <Link
          to="/profile-details"
          onClick={() => setMenuOpen(false)}
          className={`block py-4 pl-3 pr-4 text-md ${ pathname === '/profile-details' || String(pathname).includes('user-details') ? 'text-blue-700' : 'text-gray-800 dark:text-white'}  hover:bg-gray-700 `}
        >
          Profile
        </Link>
      </>
    );
  };

  const renderLinks2 = () => {
    const pathname = window.location.pathname;
    console.log(pathname)
    return (
      <>
        <Link
          to="/home"
          onClick={() => setMenuOpen(false)}
          className={`block py-2 pl-3 pr-4 ml-5 text-md ${pathname === '/home' ? 'text-blue-400' : 'text-gray-800 dark:text-white'}  hover:bg-gray-700 `}
        >
          Home
        </Link>
        <Link
          to="/profile-details"
          onClick={() => setMenuOpen(false)}
          className={`block py-2 pl-3 pr-4 text-md ${ pathname === '/profile-details' || String(pathname).includes('user-details') ? 'text-blue-400' : 'text-gray-800 dark:text-white'}  hover:bg-gray-700 `}
        >
          Profile
        </Link>
      </>
    );
  };

  return (
    // <nav>
    //   <form onSubmit={handleSearch}>
    //     <input
    //       type="text"
    //       placeholder="Search GitHub user"
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //       required
    //     />
    //     <button type="submit">Search</button>
    //   </form>
    //   <button onClick={handleProfileClick}>Your Profile</button>
    // </nav>

 <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex-shrink-0 text-xl font-semibold text-gray-800 dark:text-white">
              Git Exploration App
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex">
              <input
                type="text"
                placeholder="Search GitHub user"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="search-navbar"
                className="block w-full px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button onClick={handleSearch} className="ml-3 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
              </button>
              {renderLinks2()}
            </div>
            <div ref={menuRef} className="ml-3  md:hidden">
              <button onClick={() => setMenuOpen(!isMenuOpen)} className="flex items-center justify-center p-2 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4h16v1H2V4zm0 6h16v1H2v-1zm0 6h16v1H2v-1z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4h16v1H2V4zm0 5h16v1H2V9zm0 5h16v1H2v-1z"
                    />
                  )}
                </svg>
              </button>
              {isMenuOpen && (
                <div  className="absolute right-0 z-10 w-full mt-2 origin-top bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-900 dark:border-gray-600">
                  <div className="">
                    <div className='flex py-2 pl-3 pr-4 '>
                    <input
                      type="text"
                      placeholder="Search GitHub user"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      id="search-navbar"
                      className="block w-full px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button onClick={handleSearch} className="ml-3 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Search
                    </button>
                    </div>
                    {renderLinks()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>


  
  );
};

export default Navbar;

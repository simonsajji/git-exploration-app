import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <h2>User Details</h2>
    //   <div>
    //     <img src={user.avatar_url} alt={user.login} />
    //     <h3>{user.login}</h3>
    //     <p>Name: {user.name}</p>
    //     <p>Location: {user.location}</p>
    //     <p>Public Repos: {user.public_repos}</p>
    //     <p>Followers: {user.followers}</p>
    //     <p>Following: {user.following}</p>
    //   </div>
    // </div>
    <div className='w-full flex flex-col flex flex-wrap items-center  bg-gray-200 min-h-screen '>
  
    <div class="w-full mt-4 max-w-sm bg-white border text-center justify-center border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
          <span class="sr-only">Open dropdown</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10 ">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.avatar_url} alt={user?.login} />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.login}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{user?.html_url}</span>
        <div class="flex flex-wrap mt-4 space-x-3 md:mt-6 ">
          <div class="inline-flex items-center px-4 py-2  mb-2  text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800   dark:bg-blue-400 dark:hover:bg-blue-400 ">{user?.public_repos} Repos</div>
          <div class="inline-flex items-center px-4 py-2  mb-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400   dark:bg-yellow-400 dark:hover:bg-blue-400">{user?.followers} Followers</div>
          <div class="inline-flex items-center px-4 py-2 mb-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400   dark:bg-yellow-400 dark:hover:bg-blue-400">{user?.following} Following</div>

        </div>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a type="button" href={user?.repos_url} class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View GitHub</a>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default UserDetailsPage;
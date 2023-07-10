import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProfileDetailsPage = () => {
  const loggedInUser = useSelector(state => state.user); // Assuming you have a user state in Redux
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${loggedInUser.user?.login}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${loggedInUser.user?.login}/repos?per_page=5&sort=stars`);
        const repositoriesData = await response.json();
        setRepositories(repositoriesData);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    if (loggedInUser) {
      fetchUserDetails();
      fetchRepositories();
    }
  }, [loggedInUser]);

  if (!user || repositories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex flex-col flex flex-wrap items-center  bg-gray-200 min-h-screen'>
      <h2 className='mt-2 mb-2'>{loggedInUser?.user?.id === user?.id ? 'My GitHub Profile' : ''}</h2>
      <div class="w-full max-w-sm bg-white border text-center justify-center border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
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
        <div class="flex flex-col items-center pb-10">
          <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.avatar_url} alt={user?.login} />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.login}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{user?.html_url}</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800   dark:bg-blue-400 dark:hover:bg-blue-400 ">{user?.public_repos} Repos</div>
            <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400   dark:bg-yellow-400 dark:hover:bg-blue-400">{user?.followers} Followers</div>
            <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400   dark:bg-yellow-400 dark:hover:bg-blue-400">{user?.following} Following</div>

          </div>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a type="button" href={user?.repos_url} class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View GitHub</a>
          </div>
        </div>
      </div>
      <ul class='w-10/12 items-center flex flex-col p-4  mt-4'>
        {repositories.map(repo => (
          <div key={repo.id} className='w-full flex mt-2 mb-2 bg-gray-400 p-5 rounded-xl'>
            <div className='w-full flex'>
              <div className='flex flex-col w-1/2 flex-1'>
                <div className='text-lg font-semibold'><a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a></div>
                <span className="bg-yellow-100 w-min text-yellow-700 text-xs font-medium mr-2 px-2 py-1 rounded-full dark:bg-yellow-600 dark:text-yellow-300">{repo?.language}</span>
                <div className='text-sm'>{repo?.size} KB</div>
              </div>
              <div className='w1/2 flex-1 flex items-center justify-end'> <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-2 rounded mr-2 dark:bg-gray-400 dark:text-gray-900 border border-gray-800">
                View Page
              </span></div>
            </div>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDetailsPage;
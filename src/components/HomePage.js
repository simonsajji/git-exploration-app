import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleTileClick = (username) => {
    history.push(`/user-details/${username}`);
  };

  return (
    <div>
      <div className="tiles-container bg-gray-500  p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {users.map(user => (
          <div key={user.id} class=" flex min-w-full cursor-pointer rounded-lg hover:bg-gray-100 bg-gray-300" onClick={() => handleTileClick(user.login)}>
            <img class=" p-1 rounded-t-md  h-48 lg:h-auto lg:w-48 w-30 flex-none bg-cover  lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={user.avatar_url} alt={user?.login}  title="Mountain" />
            <div class=" p-1 border-r border-b border-l w-70 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal overflow-hidden">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">{user?.login}</div>
                <p class="text-gray-700 text-base">{user?.html_url}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
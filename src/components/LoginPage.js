import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions'; // Assuming you have an action called 'loginAction'
import '../index.css'
import './LoginPage.css'
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [githubPassword, setGithubPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
        headers: {
          Authorization: `Basic ${btoa(`${githubUsername}:${githubPassword}`)}`,
        },
      });

      if (response.ok) {
        const user = await response.json();
        dispatch(loginAction(user));
        history.push('/home');
      } else {
        setError('Invalid GitHub credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 login-page">
      <div className="max-w-lg w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Login</h2>
        {/* {error && <p>{error}</p>} */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="githubUsername">
              GitHub UserName
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            id="githubUsername"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="githubPassword">
             GitHub Password:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="githubPassword"
              value={githubPassword}
              onChange={(e) => setGithubPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2  bg-blue-300 rounded-xl text-white font-semibold text-lg border-gray-50 " >
              Login
            </button>
          </div>
          <div class="show_info text-sm mb-4 w-max text-red-400">{error && error}</div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
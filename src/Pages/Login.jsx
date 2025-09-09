import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import inventoryImage from '../assets/inventoryImage.jpg';
import bgImg from '../assets/bgImg.png';
import userData from '../data/userData.json';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    setLoading(true); 
    setError(""); 

    setTimeout(() => {
      if (username === userData.username && password === userData.password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
        setLoading(false); 
      }
    }, 2000);
  };

  return (
    <div className='relative grid grid-cols-2 h-full'>
      <div
        style={{ backgroundImage: `url(${inventoryImage})` }}
        className='bg-cover bg-center bg-no-repeat'
      ></div>

     <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className='bg-cover bg-center bg-no-repeat flex items-center justify-center h-[739px]'
      >
        <div className='bg-white border-[5px] border-[#5b99c2] rounded-[15px] flex flex-col items-center justify-center gap-[30px] py-[30px] px-[15px]'>
          <p className='text-[30px] text-[#1a4870] font-semibold'>LOG IN</p>

          <div className='flex flex-col gap-[15px]'>
            <div>
              <p>Username:</p>
              <input
                className='rounded-full p-[2px] border-[2px] border-[#1f316f] w-[350px] pl-[10px]'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p>Password:</p>
              <input
                className='rounded-full p-[2px] border-[2px] border-[#1f316f] w-[350px] pl-[10px]'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button 
            onClick={handleLogin} 
            className='bg-[#1f316f] text-white font-semibold px-[50px] py-[10px] rounded-md'
          >
            LOG IN
          </button>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Login;

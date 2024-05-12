import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface LoginData {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const router = useRouter();
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginData: LoginData = { username: usernameOrEmail, password };
      const response = await axios.post('http://localhost:5000/api/v1/users/login', loginData);
      console.log(response.data);
      router.push("/");
      setTimeout(() => {
        alert("User logged in Succesfully !")
      }, 1500);
      setError('');
    } catch (error) {
      console.error(error);
      alert(error);
      setError(error.response?.data.message || 'An error occurred during sign-in');
    }
  };

  return (
    <div className="flex justify-end w-full h-full mt-5 pr-10">
      <div className="w-[30%] shadow-lg py-8 px-6">
        <p className="text-sm font-semibold">
          Welcome to <span className="text-blue-500">Abhyudaya Club Management site</span>
        </p>
        <h1 className="text-[3rem] pl-2 font-[500]">Sign in</h1>
        {/* ... */}
        <div className="mt-7">
          <p className="text-sm">Enter your username or email address</p>
          <input
            type="text"
            placeholder="Username or email address"
            className="w-full outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <p className="text-m">Enter your Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-xs text-blue-500 flex justify-end">
            Forgot Password
          </a>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex justify-evenly my-6">
          <button
            className="text-m bg-blue-500 outline-none py-3 px-12 rounded-[8px] text-white"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </div>
        <p>Not Have an Account ? <Link href="/signout" className="text-blue-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Signin;
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';


interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  type: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [userType, setUserType] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData: SignupFormData = {
        fullName: fullname,
        email: usernameOrEmail,
        password : password,
        username : username,
        phoneNumber: contactNumber,
        type: userType,
      };

      const response = await axios.post('http://localhost:5000/api/v1/users/registerUser', formData);
      console.log(response.data);
      setError('');
      router.push('/');
      setTimeout(() => {
        alert("User registered Succesfully !")
      }, 1500);
    } catch (error) {
      console.error(error);
      setError(error.response.data.message || 'An error occurred during sign-up');
    }
  };

  return (
    <>
      <div className="flex justify-end w-full h-full mt-5 pr-10">
        <div className="w-[30%] shadow-lg py-8 px-6">
          <p className="text-sm font-semibold">
            Welcome to <span className="text-blue-500">Abhyudaya Club Management site</span>
          </p>
          <h1 className="text-[3rem] pl-2 font-[500]">Sign up</h1>
          <div className="mt-5">
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
            <p className="text-sm">Enter your Full Name</p>
            <input
              type="text"
              placeholder="Full name"
              className="w-full outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mt-5 flex justify-between">
            <div>
              <p className="text-sm">User name</p>
              <input
                type="text"
                placeholder="User name"
                className="outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2 w-[95%]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="text-sm">Contact Number</p>
              <input
                type="text"
                placeholder="Contact Number"
                className="outline-none border border-blue-300 rounded-[5px] py-2 px-2 mt-2 w-[100%]"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center py-2 mt-2">
            <span>Type:</span>
            <div>
              <label className="flex gap-1">
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Admin
              </label>
            </div>
            <div>
              <label className="flex gap-1">
                <input
                  type="radio"
                  name="userType"
                  value="member"
                  checked={userType === 'member'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Member
              </label>
            </div>
          </div>
          <div className="mt-1">
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
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
          <p>Already Have an Account ? <Link href="/signin" className="text-blue-500">Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
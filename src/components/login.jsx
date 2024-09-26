import React from "react";
import login_image from "../assets/login.png";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export function Login() {
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };
  //show or hide password logic
  const handleClickShowPassword = () =>
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  const [rememberME, setRememberME] = useState(false);
  const navigate = useNavigate();
  //function to handle the login logic
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col md:flex-row ">
      <figure className="w-full md:w-1/2 lg:w-full">
        <img
          className="w-full h-auto object-cover rounded-l-lg"
          src={login_image}
          alt="image"
        />
      </figure>
      <div className="pt-7 pr-6 pl-6 sm:pt-[73px] sm:pr-[48px] sm:pl-[48px] w-full md:w-1/3">
        <h2 className="text-[#2489D3] text-2xl xl:text-[30px] 2xl:text-[42px]  font-bold font-roboto">
          Think Study Learn
        </h2>
        <p className="text-[#2489D3] text-5 sm:mt-10 mt-4 font-semibold">
          Nice to see you again
        </p>

        <div className="w-full max-w-full  mt-6 sm:mt-2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="phoneNumber"
            >
              Login
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="number"
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="mb-6 relative -z-10 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ml-4"
              htmlFor="password"
            >
              Password
            </label>
            <div className="eye_div ">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={passValue.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={passValue.password}
                id="password"
                placeholder="Enter password"
              />
              <div
                className="icon_button absolute right-4 top-9"
                onClick={handleClickShowPassword}
              >
                {passValue.showPassword ? (
                  <FiEye className="h-6 font-extralight" />
                ) : (
                  <FiEyeOff className="h-6 font-extralight" />
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex  items-center -z-10">
              <Switch
                checked={rememberME}
                label="Remember me"
                onChange={() => setRememberME(!rememberME)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span className="text-[12px] ">Remember me</span>
            </div>
            <Link
              className="inline-block align-baseline  text-[12px] text-[#007AFF] hover:text-blue-800"
              to="/"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="pt-[10px] pb-[10px] pl-6 pr-6 bg-gradient-to-r from-[#3A3AED] to-[#1616D1] text-[#FFFFFF] mt-8 w-full rounded-md"
        >
          Login
        </button>
        <p className="text-center mt-7 justify-center md:mt-[50px] ">
          <span className="text-[12px] ">
            Don't have an account? &nbsp; &nbsp;
          </span>{" "}
          <span className="text-[12px] text-[#007AFF] hover:text-blue-800">
            {/* change the actual signUp link */}
            <Link to="/">Sign up now</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

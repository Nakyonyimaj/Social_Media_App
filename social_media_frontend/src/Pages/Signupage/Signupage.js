import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import validation from "../../Components/Validation/validation";
import { getError } from "../../utils";

export default function Signup(props) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setRadio] = useState("");
  const [values, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnchange = (e) => {
    setData({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSuccess = async (res) => {
    //console.log(res)
    const client_id = res.clientId;
    const userobj = jwt_decode(res.credential);
    //console.log(userobj);
    const { data } = await axios.post("/api/google", {
      first_name: userobj.family_name,
      last_name: userobj.given_name,
      yor_email: userobj.email,
      client_id,
    });
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setErrors(validation(values));
    const birthday = day + "-" + month + "-" + year;

    try {
      const result = await axios.post("/api/users/signup", {
        values,
        gender,
        birthday,
      });
      toast.success('Account Successfully created',{
        position: toast.POSITION.TOP_RIGHT
    });
    } catch (err) {git 
      toast.error(getError(err),{
        position: toast.POSITION.TOP_RIGHT
    });

      //if (
      //error.response &&
      //error.response.status >= 400 &&
      // error.response.status <= 500
      // ) {
      //console.log(error.response.data.message);
    }
  };
  return (
    <div>
        <ToastContainer limit={1}/>
      <div className="w-full flex justify-center pt-16">
        <div className=" shadow mx-auto">
          <div className=" py-2 px-4 border-b-2 border-gray">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-200">It's quick and easy</p>
          </div>
          <form
            className="w-[95%] max-w-lg item-center py-3 px-4"
            onSubmit={onsubmitHandler}
          >
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full md:w-1/2 sm:w-1/2 px-3  md:mb-0">
                <input
                  className="input appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleOnchange}
                />
                <div className="flex items-center">
                  {errors.firstname && (
                    <p className="error">{errors.firstname}</p>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 sm:w-1/2 px-3">
                <input
                  className="input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Surname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleOnchange}
                />
                <div className="flex items-center">
                  {errors.lastname && (
                    <p className="error">{errors.lastname}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full px-3">
                <input
                  className="input block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Mobile Number or Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleOnchange}
                />
                <div className="flex items-center">
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="w-full px-3">
                <input
                  className="input block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="New password"
                  name="password"
                  value={values.password}
                  onChange={handleOnchange}
                />
                <div className="flex items-center">
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="flex items-center">
                Date of birth <AiFillQuestionCircle />
              </p>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 sm:w-1/3 px-3 mb-6 md:mb-0">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 sm:w-1/3 px-3 mb-6 md:mb-0">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                  >
                    <option value="January">January</option>
                    <option value="Feburary">Feburary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 sm:w-1/3 px-3  md:mb-0">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={day}
                    onChange={(e) => {
                      setDay(e.target.value);
                    }}
                  >
                    <option value="31">31</option>
                    <option value="30">30</option>
                    <option value="29">29</option>
                    <option value="28">28</option>
                    <option value="27">27</option>
                    <option value="26">26</option>
                    <option value="25">25</option>
                    <option value="24">24</option>
                    <option value="23">23</option>
                    <option value="22">22</option>
                    <option value="21">21</option>
                    <option value="20">20</option>
                    <option value="19">19</option>
                    <option value="18">18</option>
                    <option value="17">17</option>
                    <option value="16">16</option>
                    <option value="15">15</option>
                    <option value="14">14</option>
                    <option value="13">13</option>
                    <option value="12">12</option>
                    <option value="11">11</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="flex items-center">
                Gender
                <AiFillQuestionCircle />
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className=" flex space-x-8 w-full md:w-1/3 px-3  md:mb-0">
                <div className="relative flex items-center pl-4 px-10 rounded border border-gray-200 dark:border-gray-700">
                  <label
                    htmlFor="bordered-radio-1"
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Female
                  </label>
                  <input
                    checked={gender === "female"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                    id="bordered-radio-1"
                    type="radio"
                    value="female"
                    name="bordered-radio"
                    className="w-4 h-4  focus:outline-none  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="relative flex items-center pl-4 px-10 rounded border border-gray-200 dark:border-gray-700">
                  <label
                    htmlFor="bordered-radio-2"
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Male
                  </label>
                  <input
                    checked={gender === "male"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                    id="bordered-radio-2"
                    type="radio"
                    value="male"
                    name="bordered-radio"
                    className="w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                <div className="relative flex items-center pl-4 px-10 rounded border border-gray-200 dark:border-gray-700">
                  <label
                    htmlFor="bordered-radio-2"
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Custom
                  </label>
                  <input
                    checked={gender === "custom"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                    id="bordered-radio-2"
                    type="radio"
                    value="custom"
                    name="bordered-radio"
                    className="w-4 h-4 focus:outline-none bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-xs mb-3 ">
              <p>
                People who use our service may have uploaded your contact
                information to
              </p>
              <p>Facebook Learn more</p>
            </div>
            <div className="relative text-xs">
              <p>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
              <p>
                You may receive SMS notifications from us and can opt out at any
                time.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green p-2 px-16 rounded text-white font-bold mt-4"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={onSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";
export default function Login() {
  let validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .trim()
      .email("Invalid email format"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .matches(
        /^[A-Z][a-z]{5,10}$/,
        "Password must start with a capital letter followed by 5–10 lowercase letters."
      ),
  });
  const [apiError, setapiError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();
  let { setuserLogin } = useContext(UserContext);
  async function handleLogin(formValues) {
    setapiError("");
    setisLoading(true);
    try {
      let apiResponse = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        formValues
      );
      if (apiResponse?.data?.message) {
        localStorage.setItem("userToken", apiResponse.data.token);
        navigate("/");
        setuserLogin(apiResponse.data.token);
        console.log(apiResponse.data);
      }
    } catch (apiResponse) {
      setapiError(apiResponse?.data?.message);
      console.log("error");
    } finally {
      setisLoading(false);
    }
    console.log(formValues);
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="container max-w-md mx-auto"
      >
        {apiError ? (
          <div
            className="p-3 m-2 text-sm text-red-700 rounded-lg bg-red-100"
            role="alert"
          >
            {apiError}
          </div>
        ) : null}
        <h2 className="font-bold text-3xl mb-8 text-orange-600 text-center">
          Login Now
        </h2>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Email:
          </label>
          {formik.errors.email && formik.touched.email && (
            <div
              className="p-3 m-2 text-sm text-red-700 rounded-lg bg-red-100"
              role="alert"
            >
              <span className="font-medium">{formik.errors.email}</span>
            </div>
          )}
        </div>

        <div className="relative z-0 w-full mb-8 group">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Password:
          </label>
          {formik.errors.password && formik.touched.password && (
            <div
              className="p-3 m-2 text-sm text-red-700 rounded-lg bg-red-100"
              role="alert"
            >
              <span className="font-medium">{formik.errors.password}</span>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
        </button>
        <p className="mt-2">
          Don't have an account? 👉
          <span className="font-bold">
            <Link to={"/register"}>Sign up</Link>
          </span>
        </p>
      </form>
    </>
  );
}

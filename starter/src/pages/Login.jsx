import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customInstance } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customInstance.post("auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in");
      return redirect("/");
    } catch (error) {}
    console.log(store);
    return null;
  };

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGuestUser = async () => {
    try {
      const response = await customInstance.post("auth/local", {
        identifier: "james@gmail.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      navigate("/");
    } catch (error) {
      toast.error("not working");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 py-8 px-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
          <button
            type="button"
            className="btn btn-secondary btn-block mt-4"
            onClick={handleGuestUser}
          >
            guest user
          </button>
          <p className="text-center">
            Not a member yet?{" "}
            <Link to="/register" className="ml-2 link link-hover link-primary">
              Register
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
}

export default Login;

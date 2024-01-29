import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customInstance } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customInstance.post("/auth/local/register", data);
    toast.success("registered");
    return redirect("/login");
  } catch (error) {
    console.log(error.message);
  }
  return null;
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 py-8 px-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="register" />
          <p className="text-center mt-4">
            Already a member?{" "}
            <Link to="/register" className="ml-2 link link-hover link-primary">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
}

export default Register;

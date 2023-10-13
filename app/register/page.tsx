"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(postData: FieldValues) {
  const res = await fetch("/api/register", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const resData = await res.json();
  return NextResponse.json({ resData });
}

const RegisterPage = () => {
  // 1. Create schema
  const schema = z.object({
    email: z.string().email({ message: "must be a valid email" }),
    password: z
      .string()
      .min(5, { message: "password at least 5 characters or digit long" }),
  });
  // 2. Define type, so that typescript know the datatype
  //  options: use "interface" or use z function infer the datatype
  //  option 1
  //   interface FormData {
  //     email: string;
  //     password: string;
  //   }
  //  option 2
  type FormData = z.infer<typeof schema>; // infer the type so that we don't need to type the interface by hand like above

  // 3. Define form require details
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  // register - register the input field to a ref hook, handleSubmit - handle submission event, formState - store the form data status like error

  // For understanding the processes
  //   console.log("register email", register("email"));
  //   console.log("register password", register("password"));
  console.log("formState", errors);
  //   const onSubmit = (data: FieldValues) => console.log(data);

  // 4. Process submission
  const onSubmit = (data: FieldValues) => {
    const validation = schema.safeParse(data);
    console.log("validation", validation);
    console.log("success?", validation.success);
    if (validation.success) {
      const result = POST(data);
      console.log(result);
      // redirect the page and login
      redirect('/');
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)} // process next step when form is submitted
            className="form-control card-body"
          >
            <label className="label">Email</label>
            <input
              {...register("email")}
              id="email"
              className="input input-bordered"
              placeholder="email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <label className="label">password</label>
            <input
              {...register("password")}
              id="password"
              className="input input-bordered"
              type="password"
              placeholder="password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <button className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

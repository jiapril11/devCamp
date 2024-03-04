"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

const userSchema = z.object({
  userName: z.string().min(3).max(25),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-96 border p-3 box-border">
          <h1 className="font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="my-3">
              <label htmlFor="userName" className="mb-1">
                name
              </label>
              <Input
                id="userName"
                type="text"
                placeholder="type your name."
                {...register("userName", { required: true, maxLength: 20 })}
              />
              <p
                className={`mt-1 pl-2 min-h-5 text-sm font-light text-red-500`}
              >
                {errors.userName?.message
                  ? errors.userName?.message.toString()
                  : ""}
              </p>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
      <DevTool control={control} />
    </>
  );
}

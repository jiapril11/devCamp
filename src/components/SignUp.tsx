"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";

const userNameSchema = z.string().min(3).max(25);

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      userNameSchema.parse(userName);
      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(`🚫 ${err.errors[0].message}`);
      }
    }
  };
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-96 border p-3 box-border">
        <h1 className="font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="userName" className="mb-1">
              name
            </label>
            <Input
              id="userName"
              type="text"
              placeholder="type your name."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className={`mt-1 pl-2 min-h-5 text-sm font-light text-red-500`}>
              {error ? error : ""}
            </p>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}

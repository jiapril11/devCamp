import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SignUp() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-lg border p-3">
        <h1 className="font-bold">Sign Up</h1>
        <form>
          <div className="my-3">
            <label htmlFor="userName">name</label>
            <Input id="userName" type="text" placeholder="type your name." />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </section>
  );
}

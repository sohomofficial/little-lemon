import { CogIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function OrderOnline() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="flex justify-center">
          <CogIcon className="h-10 w-10 animate-spin" />
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Under Mainteinance
        </h1>
        <p className="mt-6 text-xl leading-7">
          The ordering online feature will be available soon.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md bg-[#f4ce14] duration-200 delay-100 px-3.5 py-2.5 text-sm font-semibold text-[#495e57] shadow-xl hover:bg-black hover:text-white"
          >
            Go back home
          </NavLink>
          <p href="#" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default OrderOnline;

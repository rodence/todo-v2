import * as FA from "react-icons/fa";
import * as PI from "react-icons/pi";
import * as BI from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { OngoingTask } from "./ongoingTask";
import { CompletedTask } from "./completedTask";
import { CancelledTask } from "./cancelled";

export const AllTask = () => {
  const nav = [
    {
      name: "All Task",
      path: "/",
      icon: <FA.FaTasks />,
      element: <AllTask />,
    },

    {
      name: "Ongoing",
      path: "/ongoing",
      icon: <PI.PiClockFill />,
      element: <OngoingTask />,
    },

    {
      name: "Completed",
      path: "/completed",
      icon: <BI.BiTask />,
      element: <CompletedTask />,
    },

    {
      name: "Cancelled",
      path: "/cancelled",
      icon: <BI.BiTaskX />,
      element: <CancelledTask />,
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center ">
      <div className="navbar bg-base-100 flex flex-col items-center justify-center">
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">TodoList App</a>
        </div>
        <div>
          <form
            className="text-neutral-800 relative overflow-hidden flex flex-col justify-around w-96 border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6"
          >
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content['']  ">
                <input
                  placeholder="Add task here..."
                  className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                  type="text"
                  required
                  
                  
                />
              </div>
              <button
                className="btn btn-outline btn-info0  p-2 rounded-lg-400 text-xs"
                type="submit"
              >
                click here to add
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center gap-11 mt-6">
          {nav.map(({ name, icon, path }) => (
            <Link to={path} key={name}>
              <div className="flex flex-row items-center gap-2">
                {name}
                {icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

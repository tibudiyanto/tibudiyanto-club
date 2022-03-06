import { NavLink } from "remix";

export function Header() {
  return (
    <div className="flex flex-row content-between border-b-2 border-solid border-black pb-2">
      <div className="container font-bold">
        <h1 className="border-0">TIBUDIYANTO.CLUB</h1>
        <h2 className="border-0">codes, posts, and Core Dumps</h2>
      </div>
      <div className="flex flex-col justify-end text-right">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-sm font-bold" : "text-sm";
          }}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-sm font-bold" : "text-sm";
          }}
          to="/posts"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}

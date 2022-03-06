import { NavLink } from "remix";

export function Footer() {
  return (
    <div className="flex flex-row content-between border-t-2 border-solid border-black py-8 mt-2">
      <div className="container font-bold">
        <h1 className="border-0">MADE FROM SUB 🇮🇩</h1>
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

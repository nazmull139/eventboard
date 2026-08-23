import { Bookmark, CalendarDays } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  



  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-black text-indigo-600"
        >
          <CalendarDays />
          EventBoard
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            Discover
          </NavLink>
          <NavLink
            to="/saved"
            className="relative rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            <Bookmark className="mr-1 inline h-4 w-4" />
            My Schedule{" "}
            
              <span className="ml-1 rounded-full bg-indigo-600 px-1.5 py-0.5 text-xs text-white">
                2
              </span>
           
          </NavLink>
          <NavLink
            to="/about"
            className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

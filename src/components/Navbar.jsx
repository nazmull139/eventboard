import { Bookmark, LogIn, LogOut, Menu, Ticket, User, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useScheduleContext } from "../context/ScheduleContext";

const navLinkClass = ({ isActive }) =>
  `relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "text-white" : "text-white/60 hover:text-white"
  }`;

export default function Navbar() {
  const { saved } = useScheduleContext();
  const { isLoggedIn, user, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 font-display text-xl font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-ink">
              <Ticket className="h-5 w-5" strokeWidth={2.25} />
            </span>
            Event<span className="text-gold">Board</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Discover
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[17px] h-0.5 bg-gold" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/saved" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <Bookmark className="mr-1 inline h-4 w-4" />
                  My Schedule
                  <span className="ml-1.5 rounded-full bg-gold px-1.5 py-0.5 font-mono text-[11px] font-semibold text-ink">
                    {saved.length}
                  </span>
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[17px] h-0.5 bg-gold" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[17px] h-0.5 bg-gold" />
                  )}
                </>
              )}
            </NavLink>

            <div className="ml-2 flex items-center gap-2 border-l border-line-dark pl-3">
              {isLoggedIn ? (
                <>
                  <span className="hidden items-center gap-1.5 text-xs font-semibold text-white/60 lg:flex">
                    <User className="h-3.5 w-3.5" />
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className="flex items-center gap-1.5 rounded-lg bg-gold px-3 py-2 text-sm font-bold text-ink transition hover:bg-gold-dark"
                >
                  <LogIn className="h-4 w-4" />
                  Log in
                </NavLink>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-line-dark py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                Discover
              </NavLink>

              <NavLink
                to="/saved"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                <span className="flex items-center">
                  <Bookmark className="mr-2 h-4 w-4" />
                  My Schedule
                </span>
                <span className="rounded-full bg-gold px-2 py-0.5 font-mono text-xs font-semibold text-ink">
                  {saved.length}
                </span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                About
              </NavLink>

              <div className="mt-2 border-t border-line-dark pt-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out ({user.email})
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-lg bg-gold px-3 py-3 text-sm font-bold text-ink"
                  >
                    <LogIn className="h-4 w-4" />
                    Log in
                  </NavLink>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

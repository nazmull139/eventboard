import { CalendarDays, Mail, MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div >
            <div className="flex items-center gap-2 text-xl font-black text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
                <CalendarDays className="h-5 w-5" />
              </div>

              EventBoard
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Discover upcoming events, find interesting activities, and
              organize your personal schedule in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white">Explore</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="transition hover:text-white"
                >
                  All Events
                </a>
              </li>

              <li>
                <a
                  href="/saved"
                  className="transition hover:text-white"
                >
                  My Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="font-bold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="transition hover:text-white"
                >
                  Upcoming Events
                </a>
              </li>

              <li>
                <a
                  href="/saved"
                  className="transition hover:text-white"
                >
                  Saved Events
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">Contact</h3>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />

                <span className="sm:hidden">
    hello@event<br />board.com
  </span>

  <span className="hidden sm:inline">
    hello@eventboard.com
  </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />

                <span>Dhaka, Bangladesh</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            © {new Date().getFullYear()} EventBoard. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
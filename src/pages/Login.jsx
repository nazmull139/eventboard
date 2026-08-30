import { Lock, LogIn, Mail, Ticket } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { DEMO_EMAIL, DEMO_PASSWORD, useAuthContext, } from "../context/AuthContext";

export default function Login() {
  const { login, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectTo = location.state?.from || "/";

  if (isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.ok) {
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.error);
    }
  };

  const fillDemoCreds = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError("");
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-10">
      <div className="mb-8 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-ink">
          <Ticket className="h-6 w-6" strokeWidth={2.25} />
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Log in to save events and register your schedule.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-line bg-paper p-6 shadow-sm"
      >
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Email
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-line bg-paper-2 px-3 py-2.5">
            <Mail className="h-4 w-4 shrink-0 text-ink-muted" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm outline-none"
              autoComplete="username"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Password
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-line bg-paper-2 px-3 py-2.5">
            <Lock className="h-4 w-4 shrink-0 text-ink-muted" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent text-sm outline-none"
              autoComplete="current-password"
              required
            />
          </div>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="stamp-btn-wide flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition"
        >
          <LogIn className="h-4 w-4" />
          Log in
        </button>
      </form>

      <div className="mt-5 rounded-2xl border border-dashed border-line bg-paper-2 p-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
          Demo access
        </p>
        <p className="mt-1.5 text-sm text-ink-muted">
          This is a demo login — no account needed. Use:
        </p>
        <p className="mt-1 font-mono text-sm">
          {DEMO_EMAIL} <span className="text-ink-muted">/</span> {DEMO_PASSWORD}
        </p>
        <button
          onClick={fillDemoCreds}
          className="mt-3 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-cobalt transition hover:bg-cobalt-tint"
        >
          Autofill demo credentials
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-ink-muted">
        <Link to="/" className="font-semibold text-cobalt hover:underline">
          ← Back to Discover
        </Link>
      </p>
    </main>
  );
}

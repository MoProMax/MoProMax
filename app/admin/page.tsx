"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function AdminLogin() {
  const router = useRouter();
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/admin/dashboard");
    } catch {
      setError("Onjuist e-mailadres of wachtwoord.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a1e] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-white font-black text-2xl">Mo Pro Max</p>
          <p className="text-purple-400 text-sm mt-1">Admin inloggen</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div>
            <label className="block text-sm text-white/70 mb-1.5">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 text-sm"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1.5">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl font-bold text-white text-sm transition-opacity disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
          >
            {loading ? "Inloggen…" : "Inloggen"}
          </button>
        </form>
      </div>
    </div>
  );
}

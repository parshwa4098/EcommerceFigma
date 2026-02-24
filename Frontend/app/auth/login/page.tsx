/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { isAuthenticated } from "../../_utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const router = useRouter();
  const API_URL = "http://localhost:5000";

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/landing");
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/landing");
    } catch {
      setError("Server error");
    }
  };

  if (isCheckingAuth) return null;

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-8">Log In</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="border-b py-3 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border-b py-3 mb-6 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-red-500 text-white py-3 rounded w-full mb-4"
        >
          Log In
        </button>

        <p className="text-center mt-6 text-sm">
          Don&apos;t have an account?
          <span
            onClick={() => router.push("/auth/signup")}
            className="underline ml-2 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>

      <Footer />
    </>
  );
}
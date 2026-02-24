/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { isAuthenticated } from "../../_utils/auth";


export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const router = useRouter();
  const API_URL = "http://localhost:5000";

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/landing");
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  const handleSignup = async () => {
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
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
        <h1 className="text-3xl font-bold mb-8">Create Account</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          className="border-b py-3 mb-4 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignup}
          className="bg-red-500 text-white py-3 rounded w-full mb-4"
        >
          Create Account
        </button>

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const res = await fetch(`${API_URL}/auth/google`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                idToken: credentialResponse.credential,
              }),
            });

            const data = await res.json();

            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user", JSON.stringify(data.user));

            router.push("/landing");
          }}
          onError={() => alert("Google Login Failed")}
        />

        <p className="text-center mt-6 text-sm">
          Already have an account?
          <span
            onClick={() => router.push("/auth/login")}
            className="underline ml-2 cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>

      <Footer />
    </>
  );
}
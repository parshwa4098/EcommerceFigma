"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Category from "../_components/Categories";
import Featured from "../_components/Featured";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Products from "../_components/Products";
import SideBar from "../_components/SideBar";

const getUser = () => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("user");
  if (!raw || raw === "undefined") return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const getToken = () => {
  if (typeof window === "undefined") return null;
  const t = localStorage.getItem("token");
  return t && t !== "undefined" ? t : null;
};

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken() || !getUser()) {
      router.replace("/auth"); 
    }
  }, [router]);

  return (
    <div>
      <Navbar />
      <SideBar />
      <Category />
      <Products />
      <Featured />
      <Footer />
    </div>
  );
}
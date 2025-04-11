"use client";
import React from "react";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { useRouter } from "next/navigation";

export default function ReturnIcon() {
  const router = useRouter();

  return (
    <div>
      <FaArrowLeft onClick={() => router.push("/")} />
    </div>
  );
}

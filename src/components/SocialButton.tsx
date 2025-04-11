"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SocialButtonProps {
  label: string;
  direction: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ label, direction }) => {
  const router = useRouter();

  return (
    <a onClick={() => router.push(direction)} className="background-gray-200 font-semibold py-2 px-4 text-gray-600 shadow flex rounded-2xl items-center gap-2 transition duration-300 hover:bg-gray-300 hover:border-gray-500 hover:text-black cursor-pointer">
      {label}
    </a>
  );
};

export default SocialButton;

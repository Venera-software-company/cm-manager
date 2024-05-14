import Image from "next/image";
import React from "react";

import logo from "../../../assets/icons/caio-moveis-logo-black-no-bg.png";

type Props = {
  handleAddNewOrder: () => any;
};

export default function navbar({ handleAddNewOrder }: Props) {
  const handleChangeTheme = (value: boolean) => {
    const rootEl = document.documentElement;
    const htmlElementHasDarkClass = rootEl.classList.contains("dark");

    if (!value && htmlElementHasDarkClass) {
        document.documentElement.classList.remove("dark");
        document.getElementById("logo-navbar")?.classList.remove("invert-color");
    } else {
        rootEl.classList.add("dark");
        document.getElementById("logo-navbar")?.classList.add("invert-color");
    }
  };

  return (
    <nav className="fixed z-50 w-full dark:bg-black bg-white flex justify-between md:px-12 xxs:px-4 sm:px-4 py-1 items-center border border-transparent border-b-gray-900 dark:border-b-gray-600">
      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          className="toggle theme-controller"
          onChange={({ currentTarget }) => handleChangeTheme(currentTarget.checked)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
      <Image
        src={logo}
        alt="logo"
        id="logo-navbar"
        className="w-[83px] ml-[50px]"
        draggable={false}
      />
      <button
        className="px-3 py-2 hover:bg-gray-200/60 dark:hover:bg-[#1d232a] transition-colors duration-300 ease-in-out text-black dark:text-white tracking-wide rounded-full border border-gray-600 uppercase text-sm xxs:text-xs"
        onClick={() => handleAddNewOrder()}
      >
        Adicionar pedido
      </button>
    </nav>
  );
}

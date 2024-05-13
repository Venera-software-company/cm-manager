"use client"

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

import { toastAlert } from "../components/Alert";
import api from "../services/api";

import logo from "../assets/icons/caio-moveis-logo-white-no-bg.png";
import Image from "next/image";

export default function App() {
  const [loader, setLoader] = useState(false);

  const { handleSubmit, register, formState, control, reset } = useForm();
  const { errors } = formState;

  const handleSignIn = async (formData: FieldValues) => {
    const { user, password } = formData;
    setLoader(true);

    try {
      const { data: { message } } = await api.post("/sign-in", { user, password });

      toastAlert({ icon: "success", title: message, timer: 2000 });
    } catch (err: any) {
      console.log(err);
      toastAlert({ icon: "error", title: err.message, timer: 2000 });
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="bg-[#0f1011] h-screen flex justify-center items-center">
      <div className={`
        shadow-2xl shadow-slate-600 w-[60%] h-[70%] min-w-[400px] min-h-[300px] max-w-[500px] max-h-[500px] rounded-2xl px-6 border border-[#3b3b3b]
        ${(errors.user?.message || errors.password?.message) && "!max-h-[550px]"}
      `}>
        <Image
          className="mx-auto mt-10"
          src={logo.src}
          alt="logo"
          width={140}
          height={140}
        />
        <p className="text-center text-3xl font-thin my-8 text-white">Entrar</p>
        <form noValidate onSubmit={handleSubmit(handleSignIn)} className="px-3">
          <div className="flex flex-col space-y-4">
            {errors.user?.message && (
              <p className="text-red-500 ml-1 uppercase text-xs tracking-widest">
                {errors.user?.message as string}
              </p>
            )}
            <input
              type="text"
              className="sign-text-inputs"
              placeholder="Usuário"
              {...register("user", {
                required: "Por favor, insira um usuário válido!",
              })}
            />
            {errors.password?.message && (
              <p className="text-red-500 ml-1 uppercase text-xs tracking-widest">
                {errors.password?.message as string}
              </p>
            )}
            <input
              type="password"
              className="sign-text-inputs"
              placeholder="Senha"
              {...register("password", {
                required: "Por favor, insira uma senha válida!"
              })}
            />
            <button className="trasition-all duration-200 hover:bg-green-700/80 uppercase rounded-full text-sm w-full bg-green-700 text-white py-3 tracking-widest">
              {loader ? (
                  <div className="flex flex-row space-x-3">
                    <span className="loading loading-spinner loading-md"/>
                    Loading...
                  </div>
                ) : "Entrar"}
            </button>
          </div>
        </form>
        <div className="text-[15px] flex flex-row text-white mt-6 justify-center">
          Designed by
          <p className="text-red-600 ml-1 uppercase tracking-widest hover:text-red-700 transition-colors duration-300 ease-in-out cursor-pointer">Venera</p>
        </div>
      </div>
    </div>
  );
}
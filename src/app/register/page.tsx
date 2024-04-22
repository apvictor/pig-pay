"use client";

import Link from "next/link";
import Image from "next/image";

import { useFormik } from "formik";

import { CircleNotch } from "@phosphor-icons/react";

import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";

import { initialValues, validationSchema } from "./_validation";

export default function Register() {
  const formik = useFormik({
    onSubmit: async (values, { resetForm }) => {
      // await AuthService.login(values)
      //   .then((data) => {
      //     const { token } = data.data;
      //     signIn(token);
      //     resetForm();
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    initialValues,
    validationSchema,
  });

  return (
    <main className="min-h-screen w-screen flex flex-col justify-between p-5">
      <div className="py-3">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Cadastre-se no <br /> PigPay
        </h1>
        <p className="text-gray-500">para acessar nossos serviços</p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full pt-16 flex-1 flex flex-col gap-6"
      >
        <Input
          name="name"
          placeholder="Nome"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && formik.errors.name}
        />

        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
        />

        <Button
          size="lg"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting && (
            <>
              <CircleNotch
                weight="bold"
                className="mr-2 h-4 w-4 animate-spin"
              />
              Por favor, aguarde
            </>
          )}
          {!formik.isSubmitting && "Confirmar"}
        </Button>

        <span className="w-full text-center text-sm">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="text-pig hover:text-pig/80 transition-all duration-300 font-bold"
          >
            Entrar
          </Link>
        </span>
      </form>
    </main>
  );
}

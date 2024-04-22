"use client";

import Link from "next/link";
import Image from "next/image";

import { CaretRight } from "@phosphor-icons/react";

import { Button } from "../_components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col justify-between p-5">
      <div className="py-3">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Gerencie suas <br /> finanças
        </h1>
        <p className="text-gray-500">
          Controle suas finanças com o melhor App de gerenciamento
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/illustration.svg"
          alt="illustration"
          height={300}
          width={300}
        />
      </div>

      <Link href="/login">
        <Button size="lg" className="w-full flex justify-between items-center">
          Iniciar
          <CaretRight />
        </Button>
      </Link>
    </main>
  );
}

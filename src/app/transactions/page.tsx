"use client";

import { Header } from "./components/header";
import { EmptyData } from "./components/empty-data";
import { formatDate } from "../_libs/formatDate";
import { CardTransaction } from "./components/card-transaction";
import { Fab } from "../_components/fab";
import { Separator } from "../_components/ui/separator";

export default function Transactions() {
  return (
    <main className="relative flex flex-col gap-6 p-5">
      <Header />

      grafico

      <Separator className="bg-gray-500" />

      <div className="flex flex-1 flex-col gap-4">
        {/* <EmptyData /> */}

        <div className="flex flex-col items-center gap-3">
          <span className="text-gray-500">{formatDate("22/04/2024")}</span>
          <CardTransaction />
        </div>
      </div>

      <Fab />
    </main>
  );
}

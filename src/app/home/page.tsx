"use client";

import {
  ArrowDown,
  ArrowUp,
  PlusCircle,
  SquaresFour,
  Wallet,
} from "@phosphor-icons/react";
import { useState } from "react";

import { Fab } from "../_components/fab";
import { Header } from "./components/header";
import { Button } from "../_components/ui/button";
import { CardTotal } from "./components/card-total";
import { CardAccount } from "./components/card-account";
import { CardBalance } from "./components/card-balance";
import { CardCostCenter } from "./components/card-cost-center";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../_components/ui/carousel";
import { cn } from "../_libs/utils";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFilterMonth, setOpenFilterMonth] = useState(false);

  const accounts = [];
  const costCenters = [{}, {}, {}];

  return (
    <main className="p-6 flex flex-col gap-6">
      <Header
        openMenu={() => setOpenMenu(!openMenu)}
        openModalFilterMonth={() => setOpenFilterMonth(!openFilterMonth)}
      />

      <section className="flex flex-col gap-4">
        <CardTotal value={100} />

        <div className="flex items-center gap-4">
          <CardBalance
            title="Receita"
            icon={<ArrowUp size={16} />}
            value={100}
            className="text-green-400 bg-green-900"
          />
          <CardBalance
            title="Despesa"
            icon={<ArrowDown size={16} />}
            value={0}
            className="text-red-400 bg-red-900"
          />
        </div>
        <div className="flex items-center gap-4">
          <CardBalance
            title="Pago"
            icon={<ArrowUp size={16} />}
            value={100}
            className="text-green-500 bg-green-950"
          />
          <CardBalance
            title="Projetado"
            icon={<ArrowDown size={16} />}
            value={0}
            className="text-red-400 bg-red-900"
          />
        </div>
      </section>

      <section className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={24} />
            <span className="font-light">Minhas contas</span>
          </div>

          <Button className="bg-transparent">
            <PlusCircle size={24} />
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          {accounts.length == 0 ? (
            <>
              <CardAccount name="Nubank" expenseTotal={100} incomeTotal={200} />
              <CardAccount name="Will" expenseTotal={100} incomeTotal={200} />
            </>
          ) : (
            <Button className="bg-slate-900 flex items-center gap-2">
              <PlusCircle size={16} />
              Criar conta
            </Button>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SquaresFour size={24} />
            <span className="font-light">Meus centros de custo</span>
          </div>

          <Button className="bg-transparent">
            <PlusCircle size={24} />
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          {costCenters.length > 0 ? (
            <Carousel>
              <CarouselContent className="">
                {costCenters.map((_, i) => (
                  <CarouselItem
                    key={i}
                    className={cn(costCenters.length > 1 && "basis-[85%]")}
                  >
                    <CardCostCenter
                      limit={10}
                      title="Educação"
                      total={100}
                      value={2}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <Button className="bg-slate-900 flex items-center gap-2">
              <PlusCircle size={16} />
              Criar centro de custo
            </Button>
          )}
        </div>
      </section>

      <Fab />

      {/*
      <Menu open={openMenu} onClose={() => setOpenMenu(false)} />

        <FilterMonth
          open={openFilterMonth}
          onClose={() => setOpenFilterMonth(false)}
          onFilter={({ month }) => setMonth(month)}
        />

        <CreateIncome
          open={openCreateIncome}
          onClose={() => setOpenCreateIncome(false)}
        />
        <CreateExpense
          open={openCreateExpense}
          onClose={() => setOpenCreateExpense(false)}
        />
        <CreateAccounts
          account={account}
          open={openCreateAccounts}
          onClose={() => setOpenCreateAccounts(false)}
        />
        <CreateCostCenters
          costCenter={costCenter}
          open={openCreateCostCenters}
          onClose={() => setOpenCreateCostCenters(false)}
          total={transactionTotal.income - transactionTotal.expense}
        /> 
        */}
    </main>
  );
}

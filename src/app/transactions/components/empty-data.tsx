import Image from "next/image";

export function EmptyData() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-[30%]">
        <Image
          width={280}
          height={280}
          src="/transactions.svg"
          alt="transactions"
        />
        <span className="text-gray-400">Nenhuma transação cadastrada</span>
      </div>
    </>
  );
}

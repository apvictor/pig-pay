export function getBank(name: string) {
  let bank = ""
  switch (name.toLocaleLowerCase()) {
    case "c6 bank":
      bank = "/banks/c6.png"
      break;
    case "bradesco":
      bank = "/banks/bradesco.png"
      break;
    case "caixa":
      bank = "/banks/caixa.png"
      break;
    case "inter":
      bank = "/banks/inter.png"
      break;
    case "itau":
      bank = "/banks/itau.png"
      break;
    case "next":
      bank = "/banks/next.png"
      break;
    case "nubank":
      bank = "/banks/nubank.png"
      break;
    case "nuinvest":
      bank = "/banks/nubank.png"
      break;
    case "pan":
      bank = "/banks/pan.png"
      break;
    case "santander":
      bank = "/banks/santander.png"
      break;
    case "will":
      bank = "/banks/will.png"
      break;
  }

  return bank
}

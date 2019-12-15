import { logPropsDeep, logProps } from "../utils"

interface Amount {
  withDecimals: number;
  plainNumber: number;
  formatted: string;
}

interface BankAccount {
  balance: Amount;
  iBan: string;
  allowOverdraft: boolean;
  isActive: boolean;
}

type SimpleAccount = Pick<BankAccount, "balance" | "iBan">
type AccountSettings = Omit<BankAccount, "balance" | "iBan">

const runPick = (): void => {
  const simpleAccount: SimpleAccount = {
    balance: {
      withDecimals: 20.00,
      plainNumber: 20,
      formatted: "20.0 DKK"
    },
    iBan: "DK123456789"
  }
  const accountSettings: AccountSettings = {
    allowOverdraft: true,
    isActive: false
  }

  logPropsDeep(simpleAccount);
  logProps(accountSettings);
}

export default runPick;
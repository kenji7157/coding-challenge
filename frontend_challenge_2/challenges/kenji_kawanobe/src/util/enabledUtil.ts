import { ISimulation } from "@/types";
import {
  isValidZipCode,
  isValidCompany,
  isValidPlan,
  isValidAmps,
} from "@/util/validationUtil";

// ** 各入力フォームの活性状態を判定する関数 **//

// 支払い金額
export function isEnabledPayInput(simulationData: ISimulation): boolean {
  return (
    isValidZipCode(simulationData.firstZipCode, simulationData.secondZipCode) &&
    isValidCompany(simulationData.company) &&
    isValidPlan(simulationData.plan) &&
    isValidAmps(simulationData)
  );
}

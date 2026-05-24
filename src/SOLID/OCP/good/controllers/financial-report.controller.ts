import type { FinancialReportRequester } from "../interfaces/financial-interfaces.js";

export class FinancialReportController {
  constructor(private readonly interactor: FinancialReportRequester) {}

  run(): void {
    this.interactor.generateReport();
  }
}

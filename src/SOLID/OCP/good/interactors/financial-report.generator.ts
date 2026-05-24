import type { FinancialReportRequester, FinancialDataGateway, FinancialReportPresenter } from "../interfaces/financial-interfaces.js";
import type { FinancialReportDS } from "../entities/financial-entities.js";

// Use Case Interactor
export class FinancialReportGenerator implements FinancialReportRequester {
    constructor(
        private readonly database: FinancialDataGateway,
        private readonly presenter: FinancialReportPresenter
    ) {}

    generateReport(): void {
        const transactions = this.database.getTransactions();
        
        // Lógica de Negocio: Calcular balance
        let totalBalance = 0;
        for (const t of transactions) {
            if (t.type === "income") {
                totalBalance += t.amount;
            } else {
                totalBalance -= t.amount;
            }
        }

        const reportData: FinancialReportDS = {
            totalBalance,
            transactions,
        };

        // Pasar datos al presentador (sin saber si es Web o Print)
        this.presenter.present(reportData);
    }
}


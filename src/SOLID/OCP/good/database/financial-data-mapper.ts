import type { FinancialDataGateway } from "../interfaces/financial-interfaces.js";
import type { Transaction } from "../entities/financial-entities.js";

export class FinancialDataMapper implements FinancialDataGateway {
    getTransactions(): Transaction[] {
        // Simulación de base de datos
        return [
            { amount: 1000, type: "income", date: new Date() },
            { amount: 200, type: "expense", date: new Date() },
            { amount: 50, type: "expense", date: new Date() },
        ];
    }
}


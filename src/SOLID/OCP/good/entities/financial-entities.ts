// 1. Entities: Objetos de negocio puros (sin dependencias).
export type Transaction = {
    amount: number;
    type: "income" | "expense";
    date: Date;
};

// Data Structure para transferir datos entre Interactor y Presenter
export type FinancialReportDS = {
    totalBalance: number;
    transactions: Transaction[];
};


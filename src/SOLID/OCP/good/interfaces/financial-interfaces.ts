import type { Transaction, FinancialReportDS } from "../entities/financial-entities.js";

// Input Boundary: Interfaz que implementará el Interactor.
// El Controller la usa para comunicarse con el Interactor.
export interface FinancialReportRequester {
    generateReport(): void;
}

// Output Boundary (Presentation): Interfaz que implementarán los Presenters.
// El Interactor la usa para enviar datos a la vista.
export interface FinancialReportPresenter {
    present(data: FinancialReportDS): void;
}

// Output Boundary (Data): Interfaz para acceder a los datos.
// El Interactor la usa para obtener las entidades.
export interface FinancialDataGateway {
    getTransactions(): Transaction[];
}

// ViewModel: Estructura de datos lista para la vista.
// (Definimos un tipo genérico, pero cada vista podría tener el suyo propio)
export type ViewModel = {
    content: string; // Simplificación: el contenido renderizado o listo para renderizar
};

// View Interface: Contrato que deben cumplir las Vistas (Web, PDF, etc)
export interface View {
    display(viewModel: ViewModel): void;
}


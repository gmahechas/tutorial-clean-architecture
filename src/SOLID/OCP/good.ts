import { FinancialDataMapper } from "./good/database/financial-data-mapper.js";
import { FinancialReportGenerator } from "./good/interactors/financial-report.generator.js";
import {
  WebPresenter,
  PrintPresenter,
} from "./good/presenters/financial-presenters.js";
import { WebView, PDFView } from "./good/views/report-views.js";
import { FinancialReportController } from "./good/controllers/financial-report.controller.js";

export function runGoodExample() {
  console.log("\n=== GOOD OCP ===");

  // Configuración de Dependencias (Wiring)
  const database = new FinancialDataMapper();

  // Caso 1: Reporte Web
  // Solo cambiamos el Presenter y la View. El Interactor y las Entidades NO cambian.
  console.log("-> Generating Web Report...");
  const webView = new WebView();
  const webPresenter = new WebPresenter(webView);
  const webInteractor = new FinancialReportGenerator(database, webPresenter);
  const webController = new FinancialReportController(webInteractor);
  webController.run();

  // Caso 2: Reporte para Impresión (PDF)
  // Reutilizamos el mismo Interactor. Open for extension (new presenters), Closed for modification (Interactor doesn't change).
  console.log("\n-> Generating Print Report...");
  const pdfView = new PDFView();
  const printPresenter = new PrintPresenter(pdfView);
  // El interactor es el mismo, pero inyectamos un presentador diferente.
  const printInteractor = new FinancialReportGenerator(database, printPresenter);
  const printController = new FinancialReportController(printInteractor);
  printController.run();
}

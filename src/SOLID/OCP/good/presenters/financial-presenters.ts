import type {
  FinancialReportPresenter,
  View,
  ViewModel,
} from "../interfaces/financial-interfaces.js";
import type { FinancialReportDS } from "../entities/financial-entities.js";

// Web Presenter: Formatea para HTML, rojos para negativos.
export class WebPresenter implements FinancialReportPresenter {
  constructor(private readonly view: View) {}

  present(data: FinancialReportDS): void {
    let html = "<html><body><h1>Financial Report (Web)</h1><ul>";

    for (const t of data.transactions) {
      const color = t.type === "income" ? "green" : "red";
      const sign = t.type === "income" ? "+" : "-";
      html += `<li style="color: ${color}">${sign}${t.amount}</li>`;
    }

    const balanceColor = data.totalBalance >= 0 ? "black" : "red";
    html += `</ul><h3 style="color: ${balanceColor}">Total: ${data.totalBalance}</h3></body></html>`;

    this.view.display({ content: html });
  }
}

// Print Presenter: Formatea para impresión (B/N), negativos entre paréntesis.
export class PrintPresenter implements FinancialReportPresenter {
  constructor(private readonly view: View) {}

  present(data: FinancialReportDS): void {
    let text = "FINANCIAL REPORT (PRINT)\n========================\n";

    for (const t of data.transactions) {
      const amountStr = t.type === "expense" ? `(${t.amount})` : `${t.amount}`;
      text += `Entry: ${amountStr}\n`;
    }

    const totalStr =
      data.totalBalance < 0
        ? `(${Math.abs(data.totalBalance)})`
        : `${data.totalBalance}`;
    text += `========================\nTOTAL: ${totalStr}\n`;

    this.view.display({ content: text });
  }
}

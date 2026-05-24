// Violación de OCP: La lógica de negocio está acoplada a la presentación (HTML).
// Si queremos añadir soporte para impresión (PDF/Texto plano), tenemos que modificar esta clase.

export class FinancialReport {
  constructor(private transactions: { amount: number; type: string }[]) {}

  generateReport(): string {
    let html = "<html><body><h1>Financial Report</h1><ul>";
    let total = 0;

    for (const t of this.transactions) {
      // Lógica de negocio mezclada con presentación
      if (t.type === "income") {
        total += t.amount;
        html += `<li style="color: green">Income: ${t.amount}</li>`;
      } else {
        total -= t.amount;
        // Requisito web: números negativos en rojo
        html += `<li style="color: red">Expense: ${t.amount}</li>`;
      }
    }

    html += `</ul><h3>Total: ${total}</h3></body></html>`;
    return html;
  }
}

export function runBadExample() {
  console.log("=== BAD OCP ===");
  const transactions = [
    { amount: 1000, type: "income" },
    { amount: 200, type: "expense" },
    { amount: 50, type: "expense" },
  ];
  // Esta clase tiene la lógica y la presentación acopladas.
  // Si queremos imprimir en PDF, tenemos que modificarla o crear otra clase casi idéntica.
  const badReport = new FinancialReport(transactions);
  console.log(badReport.generateReport());
}

import { Employee as BadEmployee } from "./bad/employee.js";
import { createEmployee } from "./good/employee.js";
import { EmployeeFacade } from "./good/employee-facade.js";

// bad: una sola clase con múltiples responsables
const badEmployee = new BadEmployee({
    id: "EMP-1",
    name: "Ana",
    hoursWorked: 45,
    hourlyRate: 20,
    email: "ana@example.com",
});

console.log("BAD (clase monolítica)");
console.log("Nómina:", badEmployee.calculatePay());
console.log("Reporte de horas:", badEmployee.reportHours());
badEmployee.save();

// good: entidad de dominio + servicios separados y fachada
const goodEmployee = createEmployee("EMP-2", "Luis", 38, 25, "luis@example.com");
const facade = new EmployeeFacade(goodEmployee);

console.log("\nGOOD: Finanzas y Operaciones usan sus propias reglas");
console.log("Nómina (Finanzas):", facade.calculatePay());      // usa PayCalculator + FinanceHoursPolicy
console.log("Reporte (Operaciones):", facade.reportHours());    // usa HourReporter + OpsHoursPolicy
facade.save();


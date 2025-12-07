import { Employee } from "./employee.js";
import { PayCalculator } from "./pay-calculator.js";
import { HourCalculator } from "./hours-calculator.js";
import { EmployeeSaver } from "./employee-saver.js";

// Fachada: coordina a los colaboradores sin mezclar reglas.
export class EmployeeFacade {
    constructor(
        private readonly employee: Employee,
        private readonly payCalculator = new PayCalculator(),
        private readonly hourCalculator = new HourCalculator(),
        private readonly saver = new EmployeeSaver()
    ) { }

    calculatePay(): number {
        return this.payCalculator.calculatePay(this.employee);
    }

    reportHours(): string {
        return this.hourCalculator.reportHours(this.employee);
    }

    save(): void {
        this.saver.save(this.employee);
    }
}


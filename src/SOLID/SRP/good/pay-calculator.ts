import type { Employee } from "./employee.js";
import { FinanceHoursPolicy } from "./hours-policies.js";
import type { PayPolicy } from "./pay-policies.js";
import { StandardPayPolicy } from "./pay-policies.js";

// Finanzas
export class PayCalculator {
    constructor(
        private hoursPolicy = new FinanceHoursPolicy(),
        private payPolicy: PayPolicy = new StandardPayPolicy()
    ) { }

    calculatePay(employee: Employee): number {
        const { regular, overtime } = this.hoursPolicy.breakdown(employee.getHoursWorked());
        return this.payPolicy.calculate(regular, overtime, employee.getHourlyRate());
    }
}


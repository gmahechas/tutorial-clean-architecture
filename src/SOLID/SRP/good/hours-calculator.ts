import type { Employee } from "./employee.js";
import { OpsHoursPolicy } from "./hours-policies.js";

// Operaciones / RRHH
export class HourCalculator {
    constructor(private policy = new OpsHoursPolicy()) { }

    reportHours(employee: Employee): string {
        const { regular, overtime } = this.policy.breakdown(employee.getHoursWorked());
        return `${employee.getName()}: ${regular}h reg + ${overtime}h extra`;
    }
}


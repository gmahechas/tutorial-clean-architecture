// Ejemplo "bad": una clase con varias responsabilidades (nómina, reporte y persistencia).
export type EmployeeData = {
    id: string;
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    email: string;
};

export class Employee {
    constructor(private data: EmployeeData) { }

    // Finanzas: calcula pago y reglas de horas extra.
    calculatePay(): number {
        const overtimeHours = Math.max(0, this.data.hoursWorked - 40);
        const regularHours = this.data.hoursWorked - overtimeHours;
        return (
            regularHours * this.data.hourlyRate +
            overtimeHours * this.data.hourlyRate * 1.5
        );
    }

    // Operaciones/RRHH: genera el reporte de horas trabajadas.
    reportHours(): string {
        const overtimeHours = Math.max(0, this.data.hoursWorked - 40);
        const regularHours = this.data.hoursWorked - overtimeHours;
        return `${this.data.name}: ${regularHours}h reg + ${overtimeHours}h extra`;
    }

    // TI: decide cómo y dónde se persiste el registro.
    save(): void {
        // Simula una operación de persistencia.
        console.log(`Guardando empleado ${this.data.id} en la base de datos...`);
    }
}
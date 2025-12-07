import type { Employee } from "./employee.js";

// TI / Persistencia
export class EmployeeSaver {
    save(employee: Employee): void {
        const snap = employee.toSnapshot();
        console.log(`Guardando empleado ${snap.id} en la base de datos...`);
    }
}


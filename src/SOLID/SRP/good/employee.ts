export type EmployeeSnapshot = {
    id: string;
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    email: string;
};

export class Employee {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private hoursWorked: number,
        private readonly hourlyRate: number,
        private readonly email: string,
    ) { }

    // Getters para exponer solo lo necesario a los servicios.
    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getHoursWorked(): number { return this.hoursWorked; }
    public getHourlyRate(): number { return this.hourlyRate; }
    public getEmail(): string { return this.email; }

    public toSnapshot(): EmployeeSnapshot {
        return {
            id: this.id,
            name: this.name,
            hoursWorked: this.hoursWorked,
            hourlyRate: this.hourlyRate,
            email: this.email,
        };
    }
}


const ensureValidHours = (hours: number): void => {
    if (hours < 0) throw new Error("Las horas no pueden ser negativas");
};

const ensureValidRate = (rate: number): void => {
    if (rate <= 0) throw new Error("La tarifa debe ser positiva");
};

// Factory: valida y crea instancias protegidas por invariantes.
export function createEmployee(
    id: string,
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    email: string,
): Employee {
    ensureValidHours(hoursWorked);
    ensureValidRate(hourlyRate);
    return new Employee(id, name, hoursWorked, hourlyRate, email);
}

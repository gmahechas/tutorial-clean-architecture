export interface PayPolicy {
    calculate(regularHours: number, overtimeHours: number, rate: number): number;
}

// Política estándar: 1.5x en horas extra.
export class StandardPayPolicy implements PayPolicy {
    calculate(regularHours: number, overtimeHours: number, rate: number): number {
        return regularHours * rate + overtimeHours * rate * 1.5;
    }
}

// Ejemplo de política con bono: aplica un bono fijo por hora regular.
export class BonusPayPolicy implements PayPolicy {
    constructor(private readonly bonusPerRegularHour: number) { }

    calculate(regularHours: number, overtimeHours: number, rate: number): number {
        const base = regularHours * rate + overtimeHours * rate * 1.5;
        return base + regularHours * this.bonusPerRegularHour;
    }
}


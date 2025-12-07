// Estrategias de cálculo de horas según el actor.
export type HoursBreakdown = { regular: number; overtime: number };

export class FinanceHoursPolicy {
    breakdown(hours: number): HoursBreakdown {
        const overtime = Math.max(0, hours - 40);
        const regular = hours - overtime;
        return { regular, overtime };
    }
}

export class OpsHoursPolicy {
    breakdown(hours: number): HoursBreakdown {
        const overtime = Math.max(0, hours - 40);
        const regular = hours - overtime;
        return { regular, overtime };
    }
}


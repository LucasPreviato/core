import { Unit } from 'src/units/entities/unit.entity';

export interface IDepartment {
  id: number;
  name: string;
  abbreviation?: string;
  Unit: Unit;
}

import { IUnit } from 'src/units/interfaces/unit.interface';

export interface IDepartment {
  id: number;
  name: string;
  abbreviation?: string;
  unit: IUnit;
}

import { IUnit } from 'src/units/interfaces/unit.interface';
import { IDepartment } from '../interfaces/departments.interface';

export class Department implements IDepartment {
  id: number;
  name: string;
  abbreviation?: string;
  unit: IUnit;
}

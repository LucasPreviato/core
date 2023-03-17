import { Unit } from 'src/units/entities/unit.entity';
import { IDepartment } from '../interfaces/departments.interface';

export class Department implements IDepartment {
  id: number;
  name: string;
  abbreviation?: string;
  Unit: Unit;
}

import { Unit } from '../entities/unit.entity';

export class CreateUnitDto extends Unit {
  name: string;
  laboratoryId: string;
}

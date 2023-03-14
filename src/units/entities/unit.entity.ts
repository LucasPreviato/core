import { Prisma } from '@prisma/client';

export class Unit implements Prisma.UnitUncheckedCreateInput {
  id?: number;
  name: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  laboratoryId: string;
  Employee?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUnitInput;
  Department?: Prisma.DepartmentUncheckedCreateNestedManyWithoutUnitInput;
}

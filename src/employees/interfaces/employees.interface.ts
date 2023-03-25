import { IDepartment } from 'src/departments/interfaces/departments.interface';
import { IJobTitles } from 'src/jobstitles/interfaces/jobstitles.interface';
import { IUnit } from 'src/units/interfaces/unit.interface';

export enum EmployeeStatus {
  ACTIVE = 'active',
  EXPERIENCE = 'experience',
  INACTIVE = 'inactive',
}

export interface IEmployee {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: EmployeeStatus;
  hireDate: Date;
  createdAt: Date;
  updatedAt: Date;
  unit: IUnit;
  department: IDepartment;
  jobTitle: IJobTitles;
}

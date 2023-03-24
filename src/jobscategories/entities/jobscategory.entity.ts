import { IJobscategory } from '../interfaces/jobscategory.interface';

export class Jobscategory implements IJobscategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

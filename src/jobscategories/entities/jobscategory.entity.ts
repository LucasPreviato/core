import { IJobsCategory } from '../interfaces/jobscategory.interface';

export class Jobscategory implements IJobsCategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

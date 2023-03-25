import { IJobsCategory } from 'src/jobscategories/interfaces/jobscategory.interface';
import { IJobTitles } from '../interfaces/jobstitles.interface';

export class Jobstitle implements IJobTitles {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  JobCategory: IJobsCategory;
}

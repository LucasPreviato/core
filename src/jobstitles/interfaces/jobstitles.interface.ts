import { IJobsCategory } from 'src/jobscategories/interfaces/jobscategory.interface';

export interface IJobTitles {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  JobCategory: IJobsCategory;
}

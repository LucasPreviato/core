import { ILaboratory } from '../interfaces/laboratory.interface';

export class Laboratory implements ILaboratory {
  id?: string;
  name: string;
  nickname?: string;
  cgc?: string;
  IE?: string;
  IM?: string;
  email?: string;
  phone?: string;
  website?: string;
}

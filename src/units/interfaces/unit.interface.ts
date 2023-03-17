import { Laboratory } from 'src/laboratories/entities/laboratory.entity';

export interface IUnit {
  id: number;
  name: string;
  address?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  Laboratory?: Laboratory;
}

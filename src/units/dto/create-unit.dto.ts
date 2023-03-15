export class CreateUnitDto {
  name: string;
  address?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  laboratoryId: string;
}

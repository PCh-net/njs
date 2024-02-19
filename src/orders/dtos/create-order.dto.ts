import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(' ') : ''))
  client: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}

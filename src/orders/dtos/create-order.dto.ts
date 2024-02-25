import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;
}

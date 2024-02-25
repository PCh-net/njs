import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;
}

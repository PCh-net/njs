import {
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Body,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateOrderDTO } from './dtos/update-order.dto';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found, no deleted');
    await this.ordersService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  async create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: UpdateOrderDTO,
  ) {
    const order = await this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found, no edit');
    await this.ordersService.updateById(id, orderData);
    return { success: true };
  }
}

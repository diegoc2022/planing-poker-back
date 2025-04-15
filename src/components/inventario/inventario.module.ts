import { ClasificacionService } from './inventario.service';
import { ClasificacionController } from './inventario.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity])],
    controllers: [
        ClasificacionController,],
    providers: [
        ClasificacionService,],
})
export class ClasificacionModule { }

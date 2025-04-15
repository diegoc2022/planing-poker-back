import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VentasXCobrarService } from './ventas-x-cobrar.service';
import { VentasXCobrarDto } from './dto/ventas-x-cobrar.dto';

@Controller('ventas-x-cobrar')
export class VentasXCobrarController {
    constructor(
        private service:VentasXCobrarService
    ){}

    @Post(':codigoc/:codigov')
    funct_registra_ventas_x_cobrar_c(
    @Param('codigoc') codigoc: any,
    @Param('codigov') codigov: any,
    @Body() data: VentasXCobrarDto[]
    ) {
        return this.service.funct_registra_ventas_x_cobrar(codigoc, codigov, data);
    }

    @Get()
    funct_retorna_ventas_x_cobrar(){
        return this.service.funct_retorna_ventas_x_cobrar();
    }
}

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { VentasHistoricosService } from './ventashistorico.service';
import { VentasHistoricosDto } from './dto/create-ventas-historico.dto';

@Controller('ventas-historicos')
export class VentashistoricoController {
    constructor(private ventasHistoricos:VentasHistoricosService){}

    @Post()
    functCreateVentasHistoricos(@Body() data:VentasHistoricosDto){        
        return this.ventasHistoricos.functCreateVentasHistoricos(data);
    }
}

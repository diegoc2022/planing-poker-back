import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(
        private service:ClientesService
    ){}

    @Post()
    funct_registra_clientes_c(@Body() data:any){
        return this.service.funct_registra_clientes_s(data);
    }

    @Get()
    funct_retorna_clientes_c(){
        return this.service.funct_retorna_clientes_s();
    }

    @Get(':id')
    funct_retorna_one_clientes_c(@Param('id') data:any){
        return this.service.funct_retorna_one_cliente_s(data);
    }
}

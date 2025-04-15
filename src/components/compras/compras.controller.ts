/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasDto } from './dto/compras.dto';

@Controller('compras')
export class ComprasController {
    constructor(private comprasServices:ComprasService){}

    @Post()
   functCreateCompras(@Body() createComprasDto:ComprasDto ){
        return this.comprasServices.functCreateCompras(createComprasDto);
    }

    @Get()
    functRetornaCompras(){
       return this.comprasServices.functRetornaCompras();
    }

    @Delete('item/:id')
    async functEliminaItemCompras(@Param('id') id:any){        
        return await this.comprasServices.functEliminaItemCompras(id);
    }

    @Delete('fact/:id')
    async functEliminaFacturaCompras(@Param('id') id:any):Promise<void>{               
        await this.comprasServices.functEliminaFacturaCompras(id);
    }
}

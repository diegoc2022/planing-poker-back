import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClasificacionService } from './inventario.service';
import { InventariosDto } from './dto/edita-ventas-inventario.dto';


@Controller('inventario')
export class ClasificacionController {
    constructor(private inventarioService:ClasificacionService){}

    @Post('editaVentaInv')
    funtEditaVentasInventario(@Body() data:any[]):Promise<InventariosDto[]>{            
       return this.inventarioService.functEditaVentasInventario(data);
    }

    @Patch()
    funtEditaComprasInventario(@Body() data:any):Promise<any>{            
       return this.inventarioService.functEditaComprasInventario(data);
    }

    @Get()
    funct_retorna_inventario(){
        return this.inventarioService.funct_retorna_inventario();
    }
    
}

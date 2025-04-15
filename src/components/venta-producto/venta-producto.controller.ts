import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrecioVentasService } from './venta-producto.service';
import { EditaPreciosDto } from 'src/components/venta-producto/dto/edita-precios.dto';

@Controller('venta-producto')
export class PrecioVentasController {
    constructor(
        private ventasServices:PrecioVentasService, 
    ){}

    @Get(':id')
    retornaProductos(@Param('id') id:string){                 
        return this.ventasServices.retornaPrecioVentas(id);
    }

    @Get()
    retornaAllCompras(){                 
        return this.ventasServices.retornaAllPrecioventas();
    }


    @Patch(':cod')
    async functEditaVentas(@Param('cod') cod:string, @Body() updateVerntaProductos:EditaPreciosDto){    
        return await this.ventasServices.editaPrecioVenta(cod,updateVerntaProductos);
    } 
  
    @Post()
    async createProducto(@Body() data: any){            
        return this.ventasServices.createProducto(data);
    }

    @Delete(':cod')
    funct_elimina_productos_c(@Param('cod') cod:any){            
        return this.ventasServices.funct_elimina_producto_s(cod)
    }

}

import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EditaPreciosService } from './edita-precios.service';
import { EditaPreciosDto } from './dto/edita-precios.dto';
import { EditaProductosDto } from './dto/edita.dto';

@Controller('editar')
export class EditaPreciosController {

    constructor(
        private editaPreciosService:EditaPreciosService    
      ){}

    @Patch('ventas/:cod')
    async functEditaPrecios(@Param('cod') cod:string, @Body() precio:EditaPreciosDto){          
        return await this.editaPreciosService.functEditaPreciosService(cod,precio);
    }  

    @Patch('codigo/:id')
    async functEditaCodigo(@Param('id') id:string, @Body() codigo:EditaProductosDto){
        return await this.editaPreciosService.functEditaCodigosService(id,codigo);
    }  

    @Patch('cantidad/:id')
    async functEditaCantidad(@Param('id') id:any, @Body() cant:EditaProductosDto){                     
        return await this.editaPreciosService.functEditaCantidadService(id,cant);
    } 
    
    @Patch('activar/:id')
    async funct_activa_asociacion_unidad(@Param('id') id:any, @Body() check:EditaProductosDto){                        
        return await this.editaPreciosService.funct_activa_asociacion_unidad(id,check);
    } 
    
    @Patch('producto/:id')
    async functEditaNombreProducto(@Param('id') id:any, @Body() data:EditaProductosDto){                     
        return await this.editaPreciosService.funct_edita_nombre_productos(id,data);
    } 
}

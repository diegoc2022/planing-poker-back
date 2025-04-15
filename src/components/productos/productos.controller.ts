import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create_producto.dto';
import { CodigoProductoDto } from 'src/components/productos/dto/codigo_producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(
        private productoServices:ProductosService,    
        ){ }

    @Get(':id')
    retornaProductos(@Param('id') id:CodigoProductoDto){                            
        return this.productoServices.retornaProductos(id);
    }   

    @Post()
   async createProducto(@Body() createProductoDto: CreateProductoDto){            
        return this.productoServices.createProducto(createProductoDto);
    }
}

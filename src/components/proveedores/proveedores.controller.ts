import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedorDto } from 'src/components/proveedores/dto/create-proveedores.dto';

@Controller('proveedores')
export class ProveedoresController {
    constructor(private proveedorServices:ProveedoresService){}

    @Post()
    create_proveedor(@Body() newProveedor:CreateProveedorDto){
        return this.proveedorServices.create_proveedor(newProveedor);       
    }

    @Get()
    retorna_proveedor_all(){
        return this.proveedorServices.retorna_proveedores_all();       
    }

}

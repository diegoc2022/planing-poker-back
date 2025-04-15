import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentasXCobrarEntity } from './entity/ventas-x-cobrar.entity';
import { Repository } from 'typeorm';
import { VentasXCobrarDto } from './dto/ventas-x-cobrar.dto';

@Injectable()
export class VentasXCobrarService {

    constructor(
        @InjectRepository(VentasXCobrarEntity)
        private repository:Repository<VentasXCobrarEntity>
    ){}

   async funct_registra_ventas_x_cobrar(codigoc:any,codigov:any, data:VentasXCobrarDto[]){            
        for (let index = 0; index < data.length; index++) {
           await this.repository.save({
            codigo_cliente_v:codigoc,
            codigo_venta:codigov,
            id_caja:data[index].id_caja,  
            id_venta:data[index].id_venta,   
            codProd:data[index].codProd,    
            descripcion:data[index].descripcion,   
            existencia:data[index].existencia,    
            cantidad:data[index].cantidad, 
            precio_compra:data[index].precio_compra,  
            precio_venta:data[index].precio_venta,  
            origen_venta:data[index].origen_venta,
            subtotal:data[index].subtotal,
            vendedor:'APV',
            estado:'Cerrado',
            factura:data[index].factura,
            venta_por_und:data[index].venta_por_und,
            estado_venta:'PENDIENTE',
            fecha_registro:data[index].fecha_registro,    
            hora_registro:data[index].hora_registro  
           });
            
        }       
        return true;
    }

    funct_retorna_ventas_x_cobrar(){
        return this.repository.find();
    }
}

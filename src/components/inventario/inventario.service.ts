import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventariosDto } from './dto/edita-ventas-inventario.dto';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { format } from 'date-fns';

@Injectable()
export class ClasificacionService {
    result:any;
    fecha_actual = new Date();
    constructor(
        @InjectRepository(VentaProductoEntity)
        private repository:Repository<VentaProductoEntity>
    ){}
   
   async functEditaVentasInventario(data:any[]):Promise<InventariosDto[]>{
    const fecha = format(this.fecha_actual,'yyyy-MM-dd HH:mm');        
        for (let index = 0; index < data.length; index++) {            
            const result = await this.repository.findOne({            
                where:{
                    codProd:data[index].codProd.toUpperCase()
                }          
            });
            
            if (result) {
                const cant = result.existencia - data[index].cantidad;              
                this.result = await this.repository.update({codProd:result.codProd},{existencia:cant,createAt:fecha})         
            }            
        }       
        return this.result
    }

    async functEditaComprasInventario(data:any[]):Promise<any[]>{                    
        const fecha = format(this.fecha_actual,'yyyy-MM-dd HH:mm');              
        for (let index = 0; index < data.length; index++) {                               
            const result = await this.repository.findOne({            
                where:{
                    codProd:data[index].cod_producto.toUpperCase()
                }          
            });

            if (result) {                             
                let cant = result.existencia + data[index].cantidad; 
                this.result = await this.repository.update({codProd:data[index].cod_producto},{
                    descripcion:data[index].descripcion,
                    precio_compra:data[index].costo_unidad,      
                    precio_venta:data[index].precio_venta,      
                    existencia:cant,  
                    iva:data[index].iva,     
                    icui:data[index].icui,     
                    utilidad:data[index].utilidad,                   
                    createAt:fecha                   
                })                       
            }                       
        }       
        return this.result;
    }

    funct_retorna_inventario(){
      return this.repository.find();
    }
}
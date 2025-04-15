import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { EditaPreciosDto } from './dto/edita-precios.dto';
import { EditaProductosDto } from './dto/edita.dto';
import { format } from 'date-fns';

@Injectable()
export class EditaPreciosService {
    fecha_actual = new Date();
    constructor(
        @InjectRepository(VentaProductoEntity)                
        private ventasRepository:Repository<VentaProductoEntity>         
        ){ }

        
        async functEditaPreciosService(id:string,precio:EditaPreciosDto){                        
                return this.ventasRepository.update({codProd:id},precio);
            }


        async functEditaCantidadService(id:any,cant:EditaProductosDto){           
            const fecha = format(this.fecha_actual,'yyyy-MM-dd HH:mm'); 
            const result = await this.ventasRepository.findOne({            
                where:{
                    codProd:id.toUpperCase()
                }          
            }); 
            
            if (result) {
                let total_unds = result.existencia + cant.existencia;              
                return await this.ventasRepository.update({codProd:result.codProd},
                    {existencia:total_unds,createAt:fecha})         
            }   
            
        }
        
        async functEditaCodigosService(id:string,codigo:EditaProductosDto){                  
            const existeproducto = await this.ventasRepository.findOneBy({
                codProd:id
            })           
            
            if (existeproducto) {
                return this.ventasRepository.update({codProd:id},{codProd:codigo.codProd});              
            } else {
               return({
                status:409,
                msg:'Ya existe en base de datos un producto registrado con este código: '+ codigo.codProd       
               }) 
            }      
            
        } 

        async funct_activa_asociacion_unidad(id:any,check:EditaProductosDto){            
            const existeproducto = await this.ventasRepository.findOneBy({
                codProd:id
            }) 
            
            if (existeproducto) {
                return this.ventasRepository.update({codProd:id},{venta_por_und:check.venta_por_und});              
            } else {
               return({
                status:409,
                msg:'El producto inicial con código: '+ id + ' no existe en base de datos'   
               }) 
            }      
                                                            
            
        }

        async funct_edita_nombre_productos(id:any,data:EditaProductosDto){
            console.log("data: ",data.descripcion);
                                                 
            return this.ventasRepository.update({codProd:id},{descripcion:data.descripcion});
        }
}

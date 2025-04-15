
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditaPreciosDto } from 'src/components/venta-producto/dto/edita-precios.dto';
import { Repository } from 'typeorm';
import { VentaProductoEntity } from './entity/create_venta_producto.entity';

@Injectable()
export class PrecioVentasService {
    constructor(
        @InjectRepository(VentaProductoEntity) 
        private ventasRepository: Repository<VentaProductoEntity> 
    ){}

    retornaPrecioVentas(id:string){        
        return this.ventasRepository.findOne({
           where:{
            codProd:id
            }
        })      
    }

    retornaAllPrecioventas(){
        return this.ventasRepository.find();
    }

    async editaPrecioVenta(cod:string,updateVentasDto:EditaPreciosDto ){        
        return await this.ventasRepository.update({codProd:cod},{precio_venta:updateVentasDto.precio_venta});
    }

    async createProducto(data:any){         
        const result = await this.ventasRepository.find({
            where:{codProd:data.codProd}
        })   
        
        if (result.length > 0) {
            return{
                "code":409,
                "msg":'Error: El producto con id: '+ data.codProd + ' ya se encuentra registrado en base de datos'      
            };                            
        } else {
            const newProduct = this.ventasRepository.create(data);   
            return await this.ventasRepository.save(newProduct); 
        }       
        
    }

    async funct_elimina_producto_s(data:any){                
        return this.ventasRepository.delete({codProd:data})        
    }


}

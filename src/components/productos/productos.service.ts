import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosEntity } from './entity/productos.entity';
import { CreateProductoDto } from './dto/create_producto.dto';
import { CodigoProductoDto } from 'src/components/productos/dto/codigo_producto.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(ProductosEntity) 
        private productosRepository: Repository<ProductosEntity>        
    ) {}


    retornaProductos(id:CodigoProductoDto){        
        const existeproducto = this.productosRepository.findOneBy({
            codProd:id.codProd.toUpperCase()
        })       
        return existeproducto;         
    }


  async createProducto(data:CreateProductoDto){     
    const result = await this.productosRepository.find({
        where:{codProd:data.codProd}
    })   
    
    if (result.length > 0) {
        return{
            "code":409,
            "msg":'Error al guardar el producto con id: '+ data.codProd      
        }          
    } else {
        const newProduct = this.productosRepository.create(data);            
        return await this.productosRepository.save(newProduct);      
    }    
    
   }
  
}

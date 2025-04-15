import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateVinculosDTO } from 'src/components/viculos/dto/create_vinculos.dto';
import { VinculosEntity } from './entity/create-vinculos.entity';


@Injectable()
export class VinculosService {   
    constructor(
        @InjectRepository(VinculosEntity) private vinculosRepository: Repository<VinculosEntity>
    ) { }

 async getVinculosId(id:string){                           
        const result = await this.vinculosRepository.find({            
            where:{
                codigoInicial:id.toUpperCase(),
           },
            relations:['producto']
        }) 
        
        if (result.length > 0) {
            return result;
        }else{
            return{
                "code":200,
                "msg":"El producto que intenta vender no existe o no se encuentra asociado"
            }
        }
    }

  async functCreateVinculos(data:CreateVinculosDTO) {             
        const result = await this.vinculosRepository.find({            
            where:{
                codigoInicial:data.codigoInicial.toUpperCase(),
                codigoVinculo:data.codigoVinculo.toUpperCase()
           },
            relations:['producto']
        })
        
        if (result.length > 0) {                 
            return{
                "code":409,
                "msg":"Ya existe un registro con esas mismas caracteristicas"
            } 
        }else{            
            return this.vinculosRepository.save({
                codigoInicial:data.codigoInicial.toUpperCase(),
                codigoVinculo:data.codigoVinculo.toUpperCase()
            });    
        } 
               
    }

    getVinculos(){
        return this.vinculosRepository.find();
    }

   async eliminaVinculos(codInic:string,codVinc:string){        
        const result = await this.vinculosRepository.find({            
            where:{
                codigoInicial:codInic.toUpperCase(),
                codigoVinculo:codVinc.toUpperCase()
        },
            relations:['producto']
        })
    
        if (result.length > 0) {                 
            return await this.vinculosRepository.delete({codigoInicial:codInic,codigoVinculo:codVinc});
        }else{
            return{
                "code":409,
                "msg":"Ya existe un registro con esas mismas caracteristicas"
            }        
        }       
       
    }

}

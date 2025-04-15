import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedoresEntity } from 'src/components/proveedores/entity/proveedores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
    
    constructor(
        @InjectRepository(ProveedoresEntity)
        private repositoryProveedor: Repository<ProveedoresEntity>        
        ){}

   async create_proveedor(data:any){       
        const result = await this.repositoryProveedor.find({
            where:{
                nit:data.nit
            }
        })

        if (result.length > 0) {
            return{
                "msg":"El Nit que intenta registrar, ya existe en base de datos",
                "code":409
            }             
        }else{
            return this.repositoryProveedor.save(data);           
        }
            
    }


    retorna_proveedores_all(){
        return this.repositoryProveedor.find();        
    }
}

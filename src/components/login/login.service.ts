import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { AutLoginDto } from './dto/autLogin.dto';
import { Token } from 'src/jwt/token';
import { CreateLoginDto } from './dto/createLogin.dto';

@Injectable()
export class LoginService {   
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService:Token,        
    ){}

    async createUser(createLoginDto:CreateLoginDto){
        const { user, clave } = createLoginDto;         
        const result = await this.userRepository
        .createQueryBuilder('user')
        .where("user.user = :user",{user:user})
        .andWhere("user.clave = :clave",{clave:clave})
        .getOne()        
    }
   
    async funValidaUsuario(autLoginDto:AutLoginDto){                       
        const user =  await this.userRepository.findOne({
            where:{ 
            user:autLoginDto.user,
            clave:autLoginDto.clave
            }
        })           

        if (!user) {
            return { status: 401, message: 'Credenciales incorrectas' };
        }  
        const toke =  this.jwtService.func_retorna_token(user);
        return { status:200, result:user, toke: toke};                
    }       
}       


   


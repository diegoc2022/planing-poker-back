import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Token } from 'src/jwt/token';
import { TblOrqEntity } from './entity/orq.entity';


@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity,TblOrqEntity])         
    ],
    controllers:[LoginController],
    providers:[LoginService,Token]
})
export class LoginModule {
    
}

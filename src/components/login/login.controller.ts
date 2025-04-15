import { Controller, Post, Body } from '@nestjs/common';
import { AutLoginDto } from './dto/autLogin.dto';
import { LoginService } from './login.service';


@Controller('login')
export class LoginController {

  constructor(private loginService:LoginService){}

  @Post('user')
  async loginData(@Body() loginDto: AutLoginDto){    
    return await  this.loginService.funValidaUsuario(loginDto);       
  }
   
}

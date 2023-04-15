import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async loginWithEmail(user: User){
        const userInDB = await this.usersService.findByEmail(user.email);
        const userData = userInDB[0];
        console.log( userData)
        if(userInDB.length == 0) throw new NotFoundException('Email no encontrado');
        if(userInDB[0].password == user.password){
            const dataToEncrypt = {email: userInDB[0].email, id: userInDB[0].id, name: userInDB[0].name}
            const token = await this.jwtService.signAsync(dataToEncrypt);
            return { name: userInDB[0].name, imgUrl: userInDB[0].imgUrl, id: userInDB[0].id  ,token};
        }
        else{
            return false;
        }
    }

    async validateToken(header: any){
        try {
          const token = this.getTokenOfHeader(header);
          if(!token) throw new NotFoundException('No envió un token válido');
          const userData = this.jwtService.decode(token);
          if(!userData) throw new NotFoundException('Envió un token inválido');
          return true;
        } catch (error) {
          return false
        }
        
      }
    
    
      getTokenOfHeader(header: any): string | undefined {
        const [type, token] = header.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
      }

}

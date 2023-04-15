import { Controller, Get, Param, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller()
export class UsersController {

    constructor(
        private userServices: UsersService
    ){}
    // @UseGuards(AuthGuard)
    // @Get('users')
    // getAll(){
    //     return 'F';
    // }
    // @UseGuards(AuthGuard)
    // @Get('users/:id')
    // getById(@Param('id') id: string){
    //     return this.userServices.findById(id);
    // }

    // @UseGuards(AuthGuard)
    // @Get('users/name/:name')
    // getByName(@Param('name') name: string){
    //     return this.userServices.findByName(name);
    // }
    
    @UseGuards(AuthGuard)
    @Get('info')
    getDataUser(@Headers() header: any){
        return this.userServices.getUserInfo(header);
    }
}

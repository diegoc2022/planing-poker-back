import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { TblOrqEntity } from "./orq.entity";


@Entity({name:'tbl_user'})
export class UserEntity {
  
   @PrimaryGeneratedColumn('increment')    
   id_user:number;

   @Column({type:'varchar',length:20, nullable:true })
   user:string;

   @Column({type:'varchar',length:20, nullable:true,select:false})   
   clave:string; 

   @Column({type:'varchar',length:20, nullable:true })
   code:string;

   @Column({type:'varchar',length:200, nullable:true })
   token:string;

}




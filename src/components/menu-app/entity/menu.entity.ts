import { SubMenuEntity } from "src/components/submenu/entity/subMenu.entity";
import { Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tbl_menu'})
export class MenuEntity {
    
@PrimaryGeneratedColumn()
id_menu:number;

@Column()
nombre_menu:string

@OneToMany(() => SubMenuEntity, (cod) => cod.id_submenu)   
id_submenu: SubMenuEntity;

}

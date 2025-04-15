
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { MenuEntity } from "src/components/menu-app/entity/menu.entity";


@Entity({name:'tbl_orq'})
export class TblOrqEntity {
    @PrimaryGeneratedColumn('increment')
    id_menu_orq:number

    @Column()
    acceso_menu:boolean

    @Column()
    acceso_submenu:boolean

}

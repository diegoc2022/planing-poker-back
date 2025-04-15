import { MenuEntity } from "src/components/menu-app/entity/menu.entity";
import { SubMenuEntity } from "src/components/submenu/entity/subMenu.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_grupos'})
export class GruposEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    cod_user:number

    @Column()
    user:string

    @Column()
    acceso_submenu:boolean;

    @Column()
    acceso_menu:number;

    @ManyToOne((type) => MenuEntity, (cod) => cod.id_menu)
    @JoinColumn({name:'id_menu'})
    cod_menu: MenuEntity[]; //Usuario relaciona
    
    @ManyToOne((type) => SubMenuEntity, (cod) => cod.id_submenu)
    @JoinColumn({name:'id_submenu'})
    cod_submenu: SubMenuEntity[]; //Usuario relaciona

}
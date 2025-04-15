
import { MenuEntity } from "src/components/menu-app/entity/menu.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({name:'tbl_submenu'})
export class SubMenuEntity {
    @PrimaryGeneratedColumn('increment')
    id_submenu:number;

    @Column()
    nombre_submenu:string

    @ManyToOne((type) => MenuEntity, (cod) => cod.id_menu)
    @JoinColumn({name:'id_menu'})
    cod_menu: MenuEntity[]; //Usuario relaciona

    @Column()
    router:string

    
}

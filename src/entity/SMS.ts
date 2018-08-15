import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Address} from "./Address";

@Entity()
export class SMS {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Address, address => address.sms)
    address: string;

    @Column()
    content: string;



}

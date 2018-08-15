import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {SMS} from "./SMS"

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @OneToMany(type => SMS, sms => sms.address)
    sms: SMS[];
  }

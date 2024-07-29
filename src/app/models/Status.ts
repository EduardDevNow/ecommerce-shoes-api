import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'statuses' })
export class Status {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    model: string;

    @Column({ type: 'varchar', comment: 'Only hexadecimal colors are accepted'})
    color_status: string;

    @Column({type: 'varchar', comment: 'The traduction in spanish language.'})
    translation_status: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date = new Date()

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date = new Date()
}
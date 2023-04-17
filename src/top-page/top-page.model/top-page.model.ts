import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

class HeadHunter {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

class Advantages {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface TopPageModel extends Base {}

export class TopPageModel extends TimeStamps {
    @prop({ enum: TopLevelCategory })
    firstLevelCategory: TopLevelCategory;

    @prop()
    secondCategory: string;

    @prop()
    title: string;

    @prop()
    category: string;

    @prop({ unique: true })
    alias: string;

    @prop({ type: () => HeadHunter })
    headHunter?: HeadHunter;

    @prop({ type: () => [Advantages] })
    advantages: Advantages[];

    @prop()
    seoText: string;

    @prop()
    tagsTitle: string;

    @prop({ type: () => [String] })
    tags: string[];
}

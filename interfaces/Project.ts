import { Skill } from "../utils/skills";

export default interface Project {
    title: string;
    img: string;
    desc: string;
    width: string;
    height: string;
    url: string;
    github: string;
    skills: Skill[]
}
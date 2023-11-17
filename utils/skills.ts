export class Skill {
constructor(
    public name: string,
    public backgroundColor: string,
    public icon: string | null,
    public isFontAwesome: boolean = true
) {}
}

interface SkillObject {
    html: Skill;
    css: Skill;
    javascript: Skill;
    react: Skill;
    angular: Skill;
    sass: Skill;
    bootstrap: Skill;
    nodejs: Skill;
    typescript: Skill;
    nextjs: Skill;
    firebase: Skill;
    redux: Skill;
    mongodb: Skill;
    express: Skill;
    jest: Skill;
}
  
export const skills: SkillObject = {
    html: new Skill('HTML', '#DD4B25', 'fab fa-html5'),
    css: new Skill('CSS', '#254BDD', 'fab fa-css3-alt'),
    javascript: new Skill('JavaScript', '#EFD81D', 'fab fa-js'),
    react: new Skill('React', '#5ED3F3', 'fab fa-react'),
    angular: new Skill('Angular', '#D6002F', 'fab fa-angular'),
    sass: new Skill('Sass', '#C76494', 'fab fa-sass'),
    bootstrap: new Skill('Bootstrap', '#7A11F3', 'fab fa-bootstrap'),
    nodejs: new Skill('NodeJS', '#73AB63', 'fab fa-node-js'),
    typescript: new Skill('TypeScript', '#2F74C0', null),
    nextjs: new Skill('NextJS', '#000', null),
    firebase: new Skill('Firebase', '#FFCB2B', null),
    redux: new Skill('Redux', '#7247B5', null),
    mongodb: new Skill('MongoDB', '#03E461', null),
    express: new Skill('Express', '#EFD81D', null),
    jest: new Skill('Jest', '#99425B', null),
};
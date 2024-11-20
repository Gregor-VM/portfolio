export enum PageSectionEnum {
    PROJECTS = "projects",
    SKILLS = "skills",
    GITHUB = "github",
    CONTACT = "contact"
}

export const sections = [
    {key: PageSectionEnum.PROJECTS, icon: 'far fa-lightbulb'},
    {key: PageSectionEnum.SKILLS, icon: 'fas fa-laptop-code'},
    {key: PageSectionEnum.GITHUB, icon: 'fab fa-github'},
    {key: PageSectionEnum.CONTACT, icon: 'fas fa-paper-plane'},
]
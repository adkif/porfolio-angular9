import { Social } from './social';
import { Project } from './project';
import { Skill } from './skill';

export class Porfolio {
  private name: string;
  private lastname: string;
  private surname: string;
  private description: string;
  private about: string;
  private skills: Skill[] = [];
  private medias: Social[] = [];
  private projects: Project[] = [];

  constructor(
    name: string,
    lastname: string,
    surname: string,
    description: string,
    about: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.surname = surname;
    this.description = description;
    this.about = about;
  }

  public addSkill(skill: Skill): void {
    this.skills.push(skill);
  }

  public addMedia(media: Social): void {
    this.medias.push(media);
  }

  public addProject(project: Project): void {
    this.projects.push(project);
  }

  public getSkills(): Skill[] {
    return this.skills;
  }

  public getMedias(): Social[] {
    return this.medias;
  }

  public getProjects(): Project[] {
    return this.projects;
  }

  public getName(): string {
    return this.name;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public getSurname(): string {
    return this.surname;
  }

  public getDescription(): string {
    return this.description;
  }

  public getAbout(): string {
    return this.about;
  }
}

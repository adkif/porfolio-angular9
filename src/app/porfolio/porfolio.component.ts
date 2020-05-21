import { Component, OnInit } from '@angular/core';
import { Porfolio } from '../classes/porfolio';
import { Social } from '../classes/social';
import { Skill } from '../classes/skill';
import { ProjectService } from '../services/project.service';
import { Project } from '../classes/project';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {

  porfolio: Porfolio = new Porfolio(
    'BIKANABA',
    'KIFUNGO',
    'Adolphe',
    'Hello, I\'m Adkif, a Researcher in Artificial Intelligence, Engineering Information & Technologies and Over 5 years in freelance,' +
    ' I\'ve solid experience in IT, I contribute to build a better world for all.',
    'Thanks for stopping by, I grew up in eastern of Democratic Republique of Congo, and I live in Goma now.' +
    'I studied Electrical and Computer Engineering at the Université Libre des Pays des Grands Lacs, and currently work in freelancing.' +
    'You can reach me by email at akifungo@gmail.com​ Or on twitter @Adolphekifungo Or simply on my Whatsapp I love answering questions'
  );

  isLoading = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.init();
  }

  public initPorfolio(): void {
    this.porfolio.addMedia(
      new Social(
        'LinkedIn',
        'https://www.linkedin.com/in/adolphe-kifungo-242305131/',
        './assets/images/linkedin.svg'
      )
    );

    this.porfolio.addMedia(
      new Social(
        'Twitter',
        'https://twitter.com/AdolpheKifungo/',
        './assets/images/twitter.svg'
      )
    );

    this.porfolio.addMedia(
      new Social(
        'Github',
        'https://github.com/adkif',
        './assets/images/github.svg'
      )
    );

    this.porfolio.addMedia(
      new Social(
        'WhatsApp',
        'https://wa.me/243979049362',
        './assets/images/whatsapp.svg'
      )
    );

    this.porfolio.addMedia(
      new Social(
        'WhatsApp',
        'mailto:akifungo@gmail.com',
        './assets/images/google.svg'
      )
    );

    this.porfolio.addSkill(
      new Skill(
        'Analysis capacity',
        90
      )
    );

    this.porfolio.addSkill(
      new Skill(
        'Programming',
        80
      )
    );

    this.porfolio.addSkill(
      new Skill(
        '3D Modeling',
        70
      )
    );
  }

  public init() {
    this.projectService
      .getProjects()
      .subscribe(
        projects => {
          this.initPorfolio();
          projects.map(project => {
            this.porfolio.addProject(new Project(
              project.name,
              project.description,
              project.forks_count,
              project.stargazers_count,
              project.html_url,
              project.language));
          });
          this.isLoading = true;
        }
      );
  }
}

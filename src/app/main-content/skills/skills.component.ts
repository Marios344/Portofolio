import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    {
      name: "Angular",
      img: "angular_icon.png",
    },
    {
      name: "TypeScript",
      img: "ts_icon.png",
    },
    {
      name: "JavaScript",
      img: "js_icon.png",
    },
    {
      name: "HTML",
      img: "html_icon.png",
    },
    {
      name: "CSS",
      img: "css_icon.png",
    },
    {
      name: "Firebase",
      img: "firebase_icon.png",
    }, {
      name: "Git",
      img: "git_icon.png",
    },
    {
      name: "Scrum",
      img: "scrum_icon.png",
    }, {
      name: "REST-API",
      img: "api_icon.png",
    },
    {
      name: "Material Design",
      img: "design_icon.png",
    },
  ]
}

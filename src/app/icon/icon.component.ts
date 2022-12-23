import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input()
  name!: string;

  path!: string;

  ngOnInit(): void {
    this.path = `./assets/${this.name}.png`;
  }
}

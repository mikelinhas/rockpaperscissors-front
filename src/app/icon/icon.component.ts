import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input()
  name!: string | null;

  path: string | null = null;

  ngOnInit(): void {
    if (this.name) {
      this.path = `./assets/${this.name.toLowerCase()}.png`;
    }
  }
}

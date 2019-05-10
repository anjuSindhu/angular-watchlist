import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mediaItem;
  
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }

}

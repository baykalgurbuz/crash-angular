import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TASK} from '../../mock-task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks?:Task[]=TASK;
  constructor() { }

  ngOnInit(): void {
  }

}

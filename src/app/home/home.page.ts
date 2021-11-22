import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: Task[]=[];
  constructor(private taskService: TaskService) {
    
  }
  ngOnInit() {
    this.taskService.getAllTasks()
    .subscribe(tasks=>{
    console.log(tasks);
    this.tasks=tasks;
    });
  }

}

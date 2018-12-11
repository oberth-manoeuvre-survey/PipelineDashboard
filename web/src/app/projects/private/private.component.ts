import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ProjectModel } from '../../../models/index.model';

@Component({
    selector: 'dashboard-projects-private',
    templateUrl: './private.component.html',
})
export class PrivateProjectsComponent implements OnInit {

    public projects: ProjectModel[] = [];

    constructor(
        private projectService: ProjectService
    ) {
    }

    ngOnInit(): void {
        this.projectService
            .findMyProjects()
            .subscribe((projects: ProjectModel[]) => this.projects = projects);
    }
}
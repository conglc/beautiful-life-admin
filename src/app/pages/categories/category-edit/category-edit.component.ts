import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../../../models/category';
import { CategoriesService } from '../../../Service/categories.service';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  model = new Category();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getById(id).subscribe(response => {
      this.model = response;      
    }, error => {
      console.log("Error");
    });
  }

  save() {
    this.categoriesService.update(this.model).subscribe(response => {
      this.router.navigateByUrl('/categories');
    }, error => {
      console.log("Cannot update data");
    })
  }

  cancel() {
    this.location.back();
  }
}
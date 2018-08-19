import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category } from '../../../models/category';
import { CategoriesService } from '../../../Service/categories.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  model = new Category();

  constructor(
    private router: Router,
    private location: Location,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
  }

  save() {
    this.categoriesService.add(this.model).subscribe(response => {
      this.router.navigateByUrl('/categories');
    }, error => {
      console.log("Cannot add data");
    })
  }

  cancel() {
    this.location.back();
  }
}

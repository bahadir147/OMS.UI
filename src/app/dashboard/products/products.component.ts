import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ProductService,
  Customer
} from "../../services/product/product.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  sCollectionList = null;
  dataSource = new MatTableDataSource(this.sCollectionList);
  displayedColumns = ["Name", "Price", "Unit", "DiscountRate"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      data => {
        this.sCollectionList = data;
        this.dataSource.data = this.sCollectionList;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {}
    );
  }

  ngOnInit() {}
}

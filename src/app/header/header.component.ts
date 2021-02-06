import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  saveData() {
    this.dataStorageService.storeRecipes();
  }

  fetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}

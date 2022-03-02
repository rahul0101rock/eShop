import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText= ""; 

  constructor(private searchService: SearchService,private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.searchService.search.next(this.searchText);
  }

}

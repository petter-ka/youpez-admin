import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  public products = [
    {content: "On Prem", id: "1"},
    {content: "Private cloud", id: "2"},
    {content: "Hybrid cloud", id: "3"},
    {content: "Platform trial", id: "4"},
  ]

  public purchased = [
    {content: "Store 1", id: "1"},
    {content: "Store 2", id: "2"},
    {content: "Store 3", id: "3"},
    {content: "Store 4", id: "4"},
  ]

  public server = [
    {content: "full l", id: "1"},
    {content: "full 2", id: "2"},
    {content: "normal", id: "3"},
    {content: "basic", id: "4"},
  ]

  public countries = [

  ]
  public usStates = []

  constructor() { }

  ngOnInit(): void {
  }

}

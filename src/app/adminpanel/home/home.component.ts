import {
  Component,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  @ViewChild('application', { read: ViewContainerRef })
  applicationRef: ViewContainerRef;

  // TreeGrid  settings
  public allowDrag: boolean = true;
  public allowDrop: boolean = true;
  public columns: Array<any>;
  public rows: Array<any>;

  // TreeGrid  settings
  public allowDrag2: boolean = true;
  public allowDrop2: boolean = true;
  public columns2: Array<any>;
  public rows2: Array<any>;

  // Both TreeGrid have the same CSS settings
  public treegridStyle: any = {
    general: {
      normal: 'treegrid-ddtg-normal',
    },
  };

  constructor() {
    // Add columns and rows for the TreeGrid
    this.columns = [
      { id: 1, headerText: 'Header1', footerText: 'Footer1', width: 150 },
      { id: 2, headerText: 'Header2', footerText: 'Footer2', width: 180 },
    ];

    this.rows = [
      {
        id: 1,
        text: 'Item1',
        cells: [
          { cid: 1, text: 'Item11' },
          { cid: 2, text: 'Item12' },
        ],
        rows: [
          {
            id: 11,
            pid: 1,
            text: 'Item11',
            cells: [
              { cid: 1, text: 'Item111' },
              { cid: 2, text: 'Item112' },
            ],
          },
        ],
      },
      {
        id: 2,
        text: 'Row2',
        cells: [
          { cid: 1, text: 'Item21' },
          { cid: 2, text: 'Item22' },
        ],
      },
    ];

    // Add columns and rows for the TreeGrid
    this.columns2 = [
      { id: 1, headerText: 'Header1', footerText: 'Footer1', width: 150 },
      { id: 2, headerText: 'Header2', footerText: 'Footer2', width: 180 },
    ];

    this.rows2 = [
      {
        id: 4,
        text: 'Item41',
        cells: [
          { cid: 1, text: 'Item41' },
          { cid: 2, text: 'Item42' },
        ],
        rows: [
          {
            id: 41,
            pid: 4,
            text: 'Item411',
            cells: [
              { cid: 1, text: 'Item411' },
              { cid: 2, text: 'Item412' },
            ],
          },
          {
            id: 42,
            pid: 4,
            text: 'Item421',
            expanded: false,
            cells: [
              { cid: 1, text: 'Item421' },
              { cid: 2, text: 'Item422' },
            ],
            rows: [
              {
                id: 421,
                pid: 42,
                text: 'Item4211',
                cells: [
                  { cid: 1, text: 'Item4211' },
                  { cid: 2, text: 'Item4212' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        text: 'Item51',
        cells: [
          { cid: 1, text: 'Item51' },
          { cid: 2, text: 'Item52' },
        ],
        rows: [
          {
            id: 51,
            pid: 5,
            text: 'Item511',
            cells: [
              { cid: 1, text: 'Item511' },
              { cid: 2, text: 'Item512' },
            ],
          },
        ],
      },
    ];
  }
}

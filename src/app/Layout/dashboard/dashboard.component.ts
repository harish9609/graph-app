import { Component } from '@angular/core';

// third party

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



  // eslint-disable-next-line
  chartDB: any;

  // graph color change with theme color mode change
  preset = ['#4680FF'];
  monthlyColor = ['#4680FF', '#8996a4'];
  incomeColors = ['#4680FF', '#E58A00', '#2CA87F', '#b5ccff'];

  // public method
  project = [
    {
      title: 'Invoice Generator'
    },
    {
      title: 'Package Upgrades'
    },
    {
      title: 'Figma Auto Layout'
    }
  ];

  List_transaction = [
    {
      icon: 'AI',
      name: 'Apple Inc.',
      time: '#ABLE-PRO-T00232',
      amount: '$210,000',
      amount_position: 'ti ti-arrow-down-left',
      percentage: '10.6%',
      amount_type: 'text-warn-500'
    },
    {
      icon: 'SM',
      tooltip: '10,000 Tracks',
      name: 'Spotify Music',
      time: '#ABLE-PRO-T10232',
      amount: '- 10,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '30.6%',
      amount_type: 'text-success-500'
    },
    {
      icon: 'MD',
      bg: 'text-primary-500 bg-primary-50',
      tooltip: '143 Posts',
      name: 'Medium',
      time: '06:30 pm',
      amount: '-26',
      amount_position: 'ti ti-arrows-left-right',
      percentage: '5%',
      amount_type: 'text-warning-500'
    },
    {
      icon: 'U',
      tooltip: '143 Posts',
      name: 'Uber',
      time: '08:40 pm',
      amount: '+210,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '10.6%',
      amount_type: 'text-success-500'
    },
    {
      icon: 'OC',
      bg: 'text-warning-500 bg-warning-50',
      tooltip: '143 Posts',
      name: 'Ola Cabs',
      time: '07:40 pm',
      amount: '+210,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '10.6%',
      amount_type: 'text-success-500'
    }
  ];

  income_card = [
    {
      background: 'bg-primary-500',
      item: 'Income',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-warning-500',
      item: 'Rent',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-success-500',
      item: 'Download',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-primary-200',
      item: 'Views',
      value: '$23,876',
      number: '+$763,43'
    }
  ];
  // @ViewChild('customGraph', { static: false }) svgRef!: ElementRef<SVGSVGElement>;

  // ngAfterViewInit(): void {
  //   const svg = this.svgRef.nativeElement;

  //   const incomeData = [20, 68, 40, 70, 70, 90, 50, 55, 45, 60, 50, 65];
  //   const expenseData = [10, 40, 20, 38, 50, 70, 80, 28, 15, 30, 90, 30];
  //   const months = 12;

  //   const width = 1000;
  //   const height = 300;
  //   const padding = 40;

  //   const scaleY = (value: number): number =>
  //     height - padding - (value / 100) * (height - 2 * padding);
  //   const scaleX = (index: number): number =>
  //     padding + (index * (width - 2 * padding)) / (months - 1);

  //   const generatePath = (data: number[]): string => {
  //     return data
  //       .map((value, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(value)}`)
  //       .join(' ');
  //   };

    // Draw Income Line
    // const incomePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // incomePath.setAttribute('d', generatePath(incomeData));
    // incomePath.setAttribute('fill', 'none');
    // incomePath.setAttribute('stroke', 'royalblue');
    // incomePath.setAttribute('stroke-width', '3');
    // incomePath.setAttribute('stroke-linecap', 'round');
    // svg.appendChild(incomePath);

    // Draw Expense Line
  //   const expensePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  //   expensePath.setAttribute('d', generatePath(expenseData));
  //   expensePath.setAttribute('fill', 'none');
  //   expensePath.setAttribute('stroke', 'gray');
  //   expensePath.setAttribute('stroke-width', '3');
  //   expensePath.setAttribute('stroke-linecap', 'round');
  //   svg.appendChild(expensePath);
  // }

  tableData = [
    { name: 'John', class: '10-A', rollNo: 1, subject: 'Math', fee: 250455550 },
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 120000},
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 2000},
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 2000},
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 2000},
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 2000},
    { name: 'Sara', class: '10-B', rollNo: 2, subject: 'Science', fee: 2000},
  ];


earningChart = {
  series: [
    {
      name: 'Earnings',
      data: [20, 40, 60, 30, 50, 70, 90]  // Values as percentage of 100
    }
  ]
};
selectedItem: number | null = null;
  selectedIndex: number | null = null;
openModal(item: number, index: number): void {
  this.selectedItem = item;
  this.selectedIndex = index;
}


}

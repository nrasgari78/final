import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";
import {Chart} from "../../data-table-model/data-chart";
import {DataTableService} from "../../data-table-service/data-table.service";

@Component({
  selector: 'tamin-chart-modal',
  templateUrl: './chart-modal.page.html',
  styleUrls: ['./chart-modal.page.scss'],
})
export class ChartModalPage implements OnInit {
  @Input() chart!: Chart;
  option!: EChartsOption;

  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
    this.option = {
      title : {
        text: this.chart.title,
        subtext: this.chart.subtitle,
      },
      color: '#57a1ab',
      textStyle: {
        fontSize: 10,
        fontWeight: 'normal',
        fontFamily: 'IRANSans'
      },
      toolbox: {
        showTitle: false,
        show : true,
        feature : {
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true, name: 'tamin'}
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '5px',
        right: '0',
        bottom: '0',
        top: '18%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: this.chart.label,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: 100
        }
      ],
      series: [
        {
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: '#44aab8'
          },
          type: 'bar',
          barWidth: '60%',
          data: this.chart.data,
        }
      ]

    };

  }

  close() {
    this.dataTableService.dismissModal();
  }


}

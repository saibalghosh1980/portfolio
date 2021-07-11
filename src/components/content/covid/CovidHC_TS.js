import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from "react-bootstrap/DropdownButton";

export default function CovidHC_TS(props) {
  //const [daysToShow, setDaysToShow] = useState(90);

  //------------------------HighChart Options--------------------------------------------------
  const highchart_options = {
    title: {
      text: "Covid cases India",
    },

    subtitle: {
      text: "Last 90 days",
    },

    yAxis: {
      title: {
        text: "Number",
      },
    },

    xAxis: {
      categories: props.hcData.map((item) => {
        return item.date;
      }),
      accessibility: {
        rangeDescription: "Dates",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        //pointStart: 2010,
      },
    },

    series: [
      {
        name: "Daily Confirmed",
        data: props.hcData.map((item) => {
          return parseInt(item.dailyconfirmed);
        }),
      },
      {
        name: "Daily recovered",
        data: props.hcData.map((item) => {
          return parseInt(item.dailyrecovered);
        }),
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  //-------------------------------------------------------------------------------------------
  const noOfDaysChangeHandler=(event)=>{
    console.log(event.target.innerHTML);
    props.onChangeDaysToShow(parseInt(event.target.innerHTML));
  }
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title={`No of days...[`+props.days+`]`} subtitle={props.days}>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>90</Dropdown.Item>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>60</Dropdown.Item>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>30</Dropdown.Item>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>15</Dropdown.Item>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>10</Dropdown.Item>
        <Dropdown.Item  onClick={noOfDaysChangeHandler}>5</Dropdown.Item>
      </DropdownButton>
      <br/>
      <HighchartsReact highcharts={Highcharts} options={highchart_options} />
    </div>
  );
}

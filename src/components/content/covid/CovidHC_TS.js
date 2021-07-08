import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CovidHC_TS(props) {
  
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
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={highchart_options} />
    </div>
  );
}

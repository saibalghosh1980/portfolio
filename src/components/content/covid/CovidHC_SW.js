import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CovidHC_SW(props) {
  //------------------------HighChart Options--------------------------------------------------
  const highchart_options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "State wise data",
    },
    xAxis: {
      categories: props.hcData.map((item) => {
        return item.state;
      }),
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "Confirmed [Delta]",
        data: props.hcData.map((item) => {
          return parseInt(item.deltaconfirmed);
        }),
      },
      {
        name: "Deaths [Delta]",
        data: props.hcData.map((item) => {
          return parseInt(item.deltadeaths);
        }),
      },
      {
        name: "Recovered [Delta]",
        data: props.hcData.map((item) => {
          return parseInt(item.deltarecovered);
        }),
      },
    ],
  };
  //-------------------------------------------------------------------------------------------

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={highchart_options} />
    </div>
  );
}

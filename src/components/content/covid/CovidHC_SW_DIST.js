import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";
highcharts3d(Highcharts);

export default function CovidHC_SW_DIST(props) {
  
  //------------------------HighChart Options--------------------------------------------------
  const highchart_options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: "State wise covid cases",
    },
    subtitle: {
      text: "Confirmed cases",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
      },
    },
    series: [
      {
        name: "Covid Cases",
        data: props.hcData.map((item) => {
          return [item.state,parseInt(item.confirmed)];
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

import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function CovidHC_TS() {
  const { isLoading, error, isError, data } = useQuery(
    "covid-india-daily-hc",
    () =>
      axios(
        `https://api.covid19india.org/data.json?timestamp=${new Date().getTime()}`
      ),
    {
      staleTime: 300000,
    }
  );
  console.log(data);
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const dataToShow = data.data.cases_time_series.filter((item) => {
    var dateToCompare = new Date(item.dateymd);
    //console.log(date2);
    //console.log(new Date());
    var Difference_In_Days = (new Date() - dateToCompare) / (1000 * 3600 * 24);
    //console.log(Difference_In_Days);
    return Difference_In_Days < 90;
  });

  /*const datatest=dataToShow.map((item) => {
    return item.dailyconfirmed;
  });

  console.log(datatest);*/
  const dataStateWise = data.data.statewise.filter((item) => {
    return item.state != "Total";
  });
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
      categories: dataToShow.map((item) => {
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
        data: dataToShow.map((item) => {
          return parseInt(item.dailyconfirmed);
        }),
      },
      {
        name: "Daily recovered",
        data: dataToShow.map((item) => {
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

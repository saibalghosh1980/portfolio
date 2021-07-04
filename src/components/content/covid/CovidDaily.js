import axios from "axios";
import React from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CovidDaily() {
  const { isLoading, error, isError, data } = useQuery(
    "covid-india-daily",
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
  const dataStateWise = data.data.statewise.filter((item) => {
    return item.state != "Total";
  });
  //console.log(dataToShow);
  return (
    <div>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          width={500}
          height={750}
          data={dataToShow}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[
              0,
              1000 +
                Math.max.apply(
                  Math,
                  dataToShow.map(function (o) {
                    return o.dailyrecovered;
                  })
                ),
            ]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="dailyconfirmed"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="dailyrecovered" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          width={500}
          height={300}
          layout="horizontal"
          data={dataStateWise}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis
            domain={[
              0,
              1000 +
                Math.max.apply(
                  Math,
                  dataStateWise.map(function (o) {
                    return Number(o.deltaconfirmed) + Number(o.deltadeaths);
                  })
                ),
            ]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="deltaconfirmed" stackId="a" fill="#8884d8" />
          <Bar dataKey="deltadeaths" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CovidHC_SW from "./CovidHC_SW";
import CovidHC_SW_DIST from "./CovidHC_SW_DIST";
import CovidHC_TS from "./CovidHC_TS";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export default function CovidPage() {
  
 
  const [tabshow, setTabToShow] = useState("TS");
  const [daysToShow, setDaysToShow] = useState(90);
  const chooseTab = (event) => {
    setTabToShow(event.target.value);
  };
  //====================Fetch data=============================================
  const { isLoading, error, isError, data } = useQuery(
    "covid-india-daily-hc",
    () =>
      axios(
        `https://api.covid19india.org/data.json?timestamp=${new Date().getTime()}`
      ),
    {
      //staleTime: 300000,
    }
  );
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
    return Difference_In_Days < daysToShow;
  });

  /*const datatest=dataToShow.map((item) => {
    return item.dailyconfirmed;
  });

  console.log(datatest);*/
  const dataStateWise = data.data.statewise.filter((item) => {
    return item.state != "Total";
  });
  //===========================================================================
  return (
    <div>
      <ButtonGroup size="sm">
        <Button onClick={chooseTab} value="TS">
          Time Series
        </Button>
        <Button onClick={chooseTab} value="SW">
          State-Delta
        </Button>
        <Button onClick={chooseTab} value="SW_DIST">
          State-Total
        </Button>
      </ButtonGroup>
      <div>&nbsp;</div>
      
        <ReactQueryDevtools initialIsOpen={false} />
        {tabshow === "TS" ? (
          <CovidHC_TS hcData={dataToShow} onChangeDaysToShow={setDaysToShow} days={daysToShow}/>
        ) : tabshow === "SW" ? (
          <CovidHC_SW hcData={dataStateWise}/>
        ) : (
          <CovidHC_SW_DIST hcData={dataStateWise}/>
        )}
      
    </div>
  );
}

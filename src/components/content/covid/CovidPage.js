import React, { useState } from "react";
import CovidDaily from "./CovidDaily";
import CovidHC_TS from "./CovidHC_TS";
import CovidHC_SW from "./CovidHC_SW";
import CovidHC_SW_DIST from "./CovidHC_SW_DIST";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function CovidPage() {
  const [tabshow, setTabToShow] = useState("TS");
  const queryClient = new QueryClient();
  const chooseTab = (event) => {
    setTabToShow(event.target.value);
  };
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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {tabshow === "TS" ? (
          <CovidHC_TS />
        ) : tabshow === "SW" ? (
          <CovidHC_SW />
        ) : (
          <CovidHC_SW_DIST />
        )}
      </QueryClientProvider>
    </div>
  );
}

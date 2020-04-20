import * as React from "react";

import columns from "./columns";
import localData from "./localData";
import { DataGrid } from "tubular-react";

const DataGridSample: React.FunctionComponent = () => {
  return (
    <DataGrid
      gridName="Tubular-React"
      columns={columns}
      //dataSource="https://tubular.azurewebsites.net/api/orders/paged"
      dataSource={localData}
    />
  );
};

export default DataGridSample;

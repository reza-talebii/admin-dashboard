import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  // CoumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from "../components";

const Orders = () => {
  return (
    <section>
      <Header title="Orders" category="page" />
    </section>
  );
};

export default Orders;

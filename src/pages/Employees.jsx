import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";

const Employees = () => {
  return (
    <section className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </section>
  );
};

export default Employees;

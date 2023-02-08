import React from "react";
import Layout from "../components/Layout";
import ProjectMenu from "../components/Project/Index";
import MobileBreadcrumb from "../components/Project/MobileBreadCrumb";
import TaskBody from "../components/task/Index";

export default function Example() {
  return (
    <>
      <Layout>
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
            <MobileBreadcrumb />

            <TaskBody />
          </main>
          <ProjectMenu />
        </div>
        ;
      </Layout>
    </>
  );
}

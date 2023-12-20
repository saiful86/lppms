"use client";

import { Layout } from "antd";

// import Header from "../Header";
const { Content } = Layout;

const Contents = ({
  sidebarOpen,
  setSidebarOpen,
  children,
}: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  children: any;
}) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {children}
    </Content>
  );
};

export default Contents;

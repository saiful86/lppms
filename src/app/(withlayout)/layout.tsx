"use client";

import Contents from "../../components/ui/Contents";
import SideBar from "../../components/ui/SideBar";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../../services/auth.service";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const userLoggedIn = isLoggedIn();

  // state and other stuffs for collapse sidebar
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/super_admin/calendar");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="loading" size="large" />
        </Space>
      </Row>
    );
  }

  return (
    <Layout hasSider>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Contents sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;

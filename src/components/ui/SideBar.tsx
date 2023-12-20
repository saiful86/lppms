"use client";
// import { sideBarItems } from "@/constants/sidebaritems";
import { Layout, Menu } from "antd";
import Image from "next/image";
// import styles from "../../app/styles/SideBar.module.css";
// import DarazLogo from "../../assets/daraz-logo.png";
import { useManuPropsQuery } from "../../redux/api/navApi";
import { sideBarMenus } from "../../redux/api/navBarMenu";
const { Sider } = Layout;

const customStyles = {
  backgroundColor: "#ff5100",
  color: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  padding: "5px",
};
const SideBar = (props: {
  sidebarOpen: boolean;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  // const { role } = getUserInfo() as any;
  // console.log(role);
  const role = "super_admin";

  const { data } = useManuPropsQuery({});


  const sideBarData = sideBarMenus;
  // const sideBarData = data?.result;
  
  return (
    <Sider
      collapsed={props.sidebarOpen}
      onCollapse={(value) => props.setSidebarOpen(value)}
      width={270}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      className={styles.addBg}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: "white",
          paddingTop: "5px",
        }}
        className="flex items-center justify-between"
      >
        <Image
          src={DarazLogo}
          width={`${props.sidebarOpen === true ? 60 : 85}`}
          alt="Daraz Logo"
        ></Image>

        {/* <MenuOutlined
          onClick={toggleCollapsed}
          style={customStyles}
          className="text-2xl"
        /> */}
      </div>
      <Menu
        style={{
          backgroundColor: "#ff5100",
          marginTop: "10px",
          color:"white"
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sideBarItems(role,sideBarData)}
      />
    </Sider>
  );
};

export default SideBar;

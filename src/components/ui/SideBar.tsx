"use client";
import { sideBarItems } from "../../constants/sidebaritems";
import { Layout, Menu } from "antd";
// import Image from "next/image";
// import styles from "../../app/styles/SideBar.module.css";
// import DarazLogo from "../../assets/daraz-logo.png";
import { useManuPropsQuery } from "../../redux/api/navApi";
import { sideBarMenus } from "../../redux/api/navBarMenu";
import { useRouter } from "next/navigation";
const { Sider } = Layout;

// const customStyles = {
//   backgroundColor: "#ff5100",
//   color: "white",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//   cursor: "pointer",
//   padding: "5px",
// };
const SideBar = (props: {
  sidebarOpen: boolean;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const router = useRouter();
  const role = "super_admin";
  const { data } = useManuPropsQuery({});


  const sideBarData = sideBarMenus;
  const currentRoute = router.pathname; // Get the current route
  
  return (
    <Sider
     className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
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
        {/* <Image
          src={DarazLogo}
          width={`${props.sidebarOpen === true ? 60 : 85}`}
          alt="Daraz Logo"
        /> */}

        {/* <MenuOutlined
          onClick={toggleCollapsed}
          style={customStyles}
          className="text-2xl"
        /> */}
      </div>
      <Menu
        style={{
          backgroundColor: "#001529",
          marginTop: "10px",
          color: "red",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sideBarItems(role, sideBarData)}
        theme="dark"
      >
        {/* {sideBarItems(role, sideBarData).map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() => handleMenuClick(item.key)}
            style={{
              color: "white",
              backgroundColor:
                currentRoute === item.route ? "#1890ff" : undefined, // Set background color for the selected route
            }}
          >
            {item.label}
          </Menu.Item>
        ))} */}
      </Menu>
    </Sider>
  );
};

export default SideBar;


import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";
import React from "react";




export const sideBarItems = (role: string, sideBarData: any) => {
  const labelStyle = { color: "white", fontWeight: "bold" };

  function mapSidebarData(data: any, role: string) {
    if (!data) {
      return [];
    }

    return data.map((item: any) => {
      const children = item.childs && item.childs.length > 0 ? mapSidebarData(item.childs, role) : undefined;

      const label = item.routeUrl ? (
        <Link href={`/${role}/${item.routeUrl}`}>
          <span style={labelStyle}>
            {/* {item.icon && React.createElement(item.icon)}  */}
            {item.menuName}
          </span>
        </Link>
      ) : (
        <span style={labelStyle}>
          {/* {item.icon && React.createElement(item.icon)}  */}
          {item.menuName}
        </span>
      );

      return {
        label: label,
        key: item.routeUrl || item.menuName,
        children: children,
      };
    });
  }

  if (role === USER_ROLE.SUPER_ADMIN) {
    const superAdminSidebarItems: MenuProps["items"] = mapSidebarData(sideBarData, role);
    return superAdminSidebarItems;
  }
  return []; // Return an empty array for other roles or handle it as needed.
};

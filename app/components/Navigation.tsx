"use client";
import React from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { SubMenu } = Menu;

const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/signin") {
    return <></>;
  } else
    return (
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="1">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/users">User</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/add-user">Add User</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Button
            onClick={() => {
              router.push("/signin");
            }}
          >
            Logout
          </Button>
        </SubMenu>
      </Menu>
    );
};

export default Navigation;

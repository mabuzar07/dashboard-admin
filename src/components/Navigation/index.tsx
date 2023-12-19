import React from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const { SubMenu } = Menu;

const Navigation: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">
          <Link to="/users">User</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/blank">blank</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Button
          onClick={() => {
            signOut();
            navigate("/signin");
          }}
        >
          Logout
        </Button>
      </SubMenu>
    </Menu>
  );
};

export default Navigation;

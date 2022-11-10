
import { Navbar, Link, Text, Dropdown, User } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";

import avatar from './logo.jpg'

export default function Barra() {

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            All Cleaner
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="/especificaciones">Especificaciones</Navbar.Link>
          <Navbar.Link isActive href="/">Quienes somos</Navbar.Link>
          <Navbar.Link href="/productos">Productos</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <User
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={avatar}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="success"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Si deseas comprar nuestros productos, por favor, envianos un correo
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider color="primary">
                allcleaner@hotmail.com
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>





        <Navbar.Collapse disableAnimation>
          <Navbar.CollapseItem key="About me" activeColor="primary">
            <Link color="primary" css={{ minWidth: "100%", }} href="/" >
              Quienes somos
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Tecnologies" activeColor="primary">
            <Link color="primary" css={{ minWidth: "100%", }} href="/especificaciones" >
              Especificaciones
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Contact" activeColor="primary">
            <Link color="primary" css={{ minWidth: "100%", }} href="/productos" >
              Productos
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
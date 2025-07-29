import type { JSX } from "react/jsx-dev-runtime";
import SideMenu from "../components/admin/SideMenu";
import MobileNavBar from "../components/MobileNavBar";

export default function DefaultAdminLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <MobileNavBar />
      <SideMenu />
      {children}
    </>
  );
}

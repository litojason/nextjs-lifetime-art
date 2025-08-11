import DesktopNavBar from "./desktop-nav-bar";
import MobileNavBar from "./mobile-nav-bar";

const menus = ["About", "Services", "Our Work", "FAQs", "Contact"];

export default function NavBar() {
  return (
    <div className="w-full bg-foreground">
      <DesktopNavBar menus={menus} />

      <MobileNavBar menus={menus} />
    </div>
  );
}

import Logo from "./logo";

type DesktopNavBarProps = {
  menus: string[];
};

export default function DesktopNavBar({ menus }: DesktopNavBarProps) {
  return (
    <nav className="hidden lg:flex items-center justify-between w-full py-10 px-7.5">
      <Logo />

      <ul className="flex gap-7.5">
        {menus.map((menu) => (
          <NavItem key={menu} name={menu} />
        ))}
      </ul>
    </nav>
  );
}

type NavItemProps = {
  name: string;
};
function NavItem({ name }: NavItemProps) {
  return <li className="text-lg text-background p-2.5">{name}</li>;
}

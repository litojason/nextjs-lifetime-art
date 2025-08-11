import Logo from "./logo";

const navItems = ["About", "Services", "Our Work", "FAQs", "Contact"];

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full py-10 px-7.5 bg-foreground">
      <Logo />

      <ul className="flex gap-7.5">
        {navItems.map((item) => (
          <NavItem key={item} name={item} />
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

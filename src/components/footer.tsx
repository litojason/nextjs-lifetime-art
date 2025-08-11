import data from "@/data/footer-data.json";
import Logo from "@/components/logo";
import Separator from "@/components/separator";

const { quickLink, copyrightDesc } = data;

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="flex flex-col max-w-[90rem] w-full px-5 gap-2">
        <div className="py-15 px-5 space-y-10 rounded-tl-xl rounded-tr-xl bg-foreground">
          <div className="flex flex-col items-start lg:flex-row lg:justify-between gap-10">
            <Logo />

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-background">
                {quickLink.title}
              </h3>

              <div className="grid grid-cols-2 lg:min-w-80">
                {quickLink.data.map((item, i) => (
                  <ul key={i} className="space-y-3">
                    {item.map((link) => (
                      <li key={link.name} className="text-lg text-hero-desc">
                        {link.name}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <span className="text-lg font-semibold text-background">
              {copyrightDesc}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

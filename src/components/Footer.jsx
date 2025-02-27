import {Typography} from "@material-tailwind/react";

const links = [
    {name: "Preguntas Frecuentes", href: "Preguntas"},
    {name: "Blockchain", href: "Blockchain"},
    {name: "Team", href: "#"},
    {
        name: "Instagram",
        href: "https://www.instagram.com/swappiswap?igsh=MWI5bmg5MmR4NW8xeQ==",
    },
    {
        name: "Figma",
        href: "https://www.figma.com/proto/VgMJVz0a5cCWnNjFUL5AZq/Untitled-(Copy)?node-id=1-2&t=NIPoTQMrLODQN90w-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2060%3A416",
    },
];
const currentYear = new Date().getFullYear();

export function SimpleFooter() {
    return (
      <footer className="px-8 py-28 bg-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
            {links.map((link, index) => (
              <ul key={index}>
                <li>
                  <Typography
                    as="a"
                    href={link.href}
                    className="font-medium text-blue-500 hover:text-blue-900"
                  >
                    {link.name}
                  </Typography>
                </li>
              </ul>
            ))}
          </div>
          <Typography
            className="mt-6 text-blue-500 !text-sm !font-normal"
          >
            swappiswapapp@gmail.com
          </Typography>
          <Typography
            className="mt-6 text-blue-500 !text-sm !font-normal"
          >
            Copyright &copy; {currentYear} Material Tailwind
          </Typography>
        </div>
      </footer>
    );
}

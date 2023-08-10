import { navLinks } from "constants/navLinks";

export function getIndexFromLink(pathname: string) {
  pathname = pathname.slice(1);
  if (pathname === "") return 0;
  const index = navLinks.findIndex((link) => link.href !== "" && pathname.includes(link.href));
  return index !== -1 ? index : false;
}

export function getLinkFromIndex(index: number) {
  return navLinks[index].href;
}

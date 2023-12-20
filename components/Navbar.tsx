import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/vic-tours.svg" alt="vic logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="LogIn" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image
        src='menu.svg'
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;



{/* <ul className="hidden h-full gap-12 lg:flex">
        <li>
          <Link
            href="/"
            key="home"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            'Home'
          </Link>
        </li>
        <li>
          <Link
            href="/"
            key="how_viclink_work"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            'How VicTours Work?'
          </Link>
        </li>
        <li>
          <Link
            href="/"
            key="services"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            'Services'
          </Link>
        </li>
        <li>
          <Link
            href="/"
            key="pricing"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            'Pricing'
          </Link>
        </li>
        <li>
          <Link
            href="/"
            key="contact_us"
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            'Contact Us'
          </Link>
        </li>
      </ul> */}
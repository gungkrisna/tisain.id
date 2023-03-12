import classNames from "classnames";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Icons/Logo";

export const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-3" /> Tisain.id
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            isHamburgerMenuOpen ? "visible" : "invisible delay-300"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[100vh] w-full overflow-auto bg-background transition-opacity duration-500",
              "md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              isHamburgerMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-[calc(100vh_-_var(--navigation-height))] flex-col ease-in",
                "md:h-full md:flex-row md:items-center",

                "[&_li]:mx-6 [&_li]:border-b [&_li]:border-zinc-800",
                "md:[&_li]:mr-0 md:[&_li]:border-none",

                "[&_a:hover]:text-gray-300 [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color, transform] [&_a]:duration-300",
                "md:[&_a]:text-sm md:[&_a]:transition-colors md:[&_a]:translate-y-0 ",

                isHamburgerMenuOpen
                  ? "[&_a]:translate-y-0"
                  : "[&_a]:translate-y-8"
              )}
            >
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Produk</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Template</Link>
              </li>
              <li>
                <Link href="#">Testimoni</Link>
              </li>
              <li>
                <Link href="#">Harga</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Tentang Kami</Link>
              </li>
            </ul>
            <div
              className={classNames(
                "w-full flex items-end md:hidden",
                isHamburgerMenuOpen ? "sticky bottom-0" : ""
              )}
            >
              <Button href="#" variant="whatsapp-mobile-menu" size="large">
                <div className="w-full text-center">Hubungi WhatsApp</div>
              </Button>
            </div>
          </nav>
        </div>

        <div
          className="ml-auto h-full hidden items-center md:flex"
          onClick={() => console.log(isHamburgerMenuOpen)}
          >
          <Button href="#" variant="whatsapp" size="medium">
            WhatsApp
          </Button>
        </div>

        <div
          className="ml-auto md:hidden"
        >
          <Hamburger
            size={20}
            label="Toggle menu"
            toggled={isHamburgerMenuOpen}
            toggle={setIsHamburgerMenuOpen}
          />
        </div>
      </Container>
    </header>
  );
};

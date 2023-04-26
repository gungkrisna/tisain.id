import classNames from "classnames";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Button } from "./Button";
import { Container } from "./Container";
import TisainLogo from "./Icons/TisainLogo";

interface HeaderProps {
  bgColor?: string;
}

export const Header = ({ bgColor }: HeaderProps) => {
  const headerRef = useRef(null);

  const defaultBackgroundColor = 'bg-background/[.7]';
  const [backgroundColor, setBackgroundColor] = useState(bgColor ? bgColor : defaultBackgroundColor);
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[id^="section-"]');
    const handleScroll = () => {
      sections.forEach((section: HTMLElement) => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 90;
        const sectionBottom = sectionTop + section.clientHeight;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          setBackgroundColor(section.dataset.color || defaultBackgroundColor);
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      {!isHamburgerMenuOpen && (
        <AnnouncementBar message="Tisain.id hadir di acara Bali Startup Expo 2023! Jangan lupa kunjungi booth kami." link="https://balistartup.com/expo-2023/" />
      )}
      <header className={`z-20 sticky top-0 left-0 w-full border-b font-regular text-white ${backgroundColor !== defaultBackgroundColor ? 'md:text-white' : 'md:text-black'} border-white/[0.08] backdrop-blur-md ${backgroundColor} `}>
        <Container className="flex h-navigation-height">
          <Link className="flex justify-start items-center" href="/">
            <TisainLogo
              className="w-md h-md mr-3"
              size={4}
              dark={backgroundColor !== defaultBackgroundColor ? false : true}
            />
          </Link>

          <div
            className={classNames(
              "transition-[visibility] md:visible md:flex md:justify-center md:flex-1",
              isHamburgerMenuOpen ? "visible" : "invisible delay-300"
            )}
          >
            <nav
              className={classNames(
                "fixed top-navigation-height left-0 h-[100vh] w-full overflow-auto bg-zinc-900 transition-opacity duration-500",
                "md:block md:relative md:top-0 md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                isHamburgerMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100vw] opacity-0"
              )}
            >
              <ul
                className={classNames(
                  "flex h-[calc(100vh_-_var(--navigation-height)_-_4.8rem)] flex-col ease-in",
                  "md:h-full md:flex-row md:items-center",

                  "[&_li]:mx-6 [&_li]:border-b [&_li]:border-zinc-800",
                  "md:[&_li]:mx-2 md:[&_li]:border-none md:[&_li]:h-auto ",

                  "[&_a:hover]:text-gray-300 [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color, background-color, transform] [&_a]:duration-300",
                  "md:[&_a]:rounded-lg md:[&_a]:text-lg md:[&_a]:transition-colors md:[&_a]:translate-y-0 md:[&_a]:h-auto md:[&_a]:px-4 md:[&_a]:py-1",
                  backgroundColor !== defaultBackgroundColor ? "md:[&_a:hover]:bg-[#333333] md:[&_a:hover]:text-white" : "md:[&_a:hover]:bg-[#f2f2f2] md:[&_a:hover]:text-zinc-800",

                  isHamburgerMenuOpen
                    ? "[&_a]:translate-y-0"
                    : "[&_a]:translate-y-8"
                )}
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="template/">Template</Link>
                </li>
                <li>
                  <Link href="#">Testimoni</Link>
                </li>
                <li>
                  <Link href="pricing/">Pricing</Link>
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

          <div className="h-full hidden md:flex items-center justify-end">
            <Button href="#" variant="get-started-light" size="medium">
              <div className="font-strong">Get Started</div>
            </Button>
          </div>

          <div className="ml-auto md:hidden flex items-center">
            <Hamburger
              color={backgroundColor !== defaultBackgroundColor ? "white" : "black"}
              size={20}
              label="Toggle menu"
              toggled={isHamburgerMenuOpen}
              toggle={setIsHamburgerMenuOpen}
            />
          </div>
        </Container>
      </header>
    </>
  );
};

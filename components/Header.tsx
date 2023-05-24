import classNames from "classnames";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Button } from "./Button";
import { Container } from "./Container";
import HeaderCard from "./HeaderCard";
import TisainLogo from "./Icons/TisainLogo";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Image from "next/image";

interface HeaderProps {
  bgColor?: string;
}

export const Header = ({ bgColor }: HeaderProps) => {
  const defaultBackgroundColor = "bg-background/[.7]";
  const [backgroundColor, setBackgroundColor] = useState(bgColor ? bgColor : defaultBackgroundColor);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[id^="section-"], [id^="page-"]');
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

  const [isPricingExpandVisible, setIsPricingExpandVisible] = useState(false);
  const [isMobilePricingExpandVisible, setIsMobilePricingExpandVisible] = useState(false);

  const handlePricingOnMouseEnter = () => {
    const isMobileBreakpoint = window.innerWidth < 768;
    if (!isMobileBreakpoint) {
      setIsPricingExpandVisible(true);
    } else {
      setIsPricingExpandVisible(false);
    }
  }

  const handlePricingOnClick = () => {
    const isMobileBreakpoint = window.innerWidth < 768;
    if (isMobileBreakpoint) {
      setIsMobilePricingExpandVisible(!isMobilePricingExpandVisible);
    } else {
      setIsPricingExpandVisible(true)
    }
  }


  useEffect(() => {
    const handleClickOutside = (event: TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsPricingExpandVisible(false)
      }
    };

    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);
  return (

    <>
      {!isHamburgerMenuOpen && (
        <AnnouncementBar message="Tisain.id hadir di acara Bali Startup Expo 2023! Jangan lupa kunjungi tenant kami." link="https://balistartup.com/expo-2023/" />
      )}
      <header
        ref={headerRef}
        className={`z-20 sticky top-0 left-0 w-full border-b font-regular text-white ${backgroundColor !== defaultBackgroundColor ? 'md:text-white' : 'md:text-black'} border-white/[0.08] backdrop-blur-md ${backgroundColor} `}>
        <Container className="flex h-navigation-height ">
          <Link className="flex justify-start items-center" href="https://tisain.id/" aria-label="Tisain website URL">
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
                  "flex h-[calc(100vh_-_var(--navigation-height)_-_4.8rem)] overflow-auto flex-col ease-in",
                  "md:h-full md:flex-row md:items-center",

                  "[&_li]:mx-6 [&_li]:border-b [&_li]:border-zinc-800",
                  "md:[&_li]:mx-2 md:[&_li]:border-none md:[&_li]:h-auto ",

                  "[&_a:hover]:text-gray-300 [&_a]:flex [&_a]:min-h-[9rem] [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color, background-color, transform] [&_a]:duration-300",
                  "md:[&_a]:rounded-lg md:[&_a]:text-lg md:[&_a]:transition-colors md:[&_a]:translate-y-0 md:[&_a]:h-auto md:[&_a]:min-h-0 md:[&_a]:px-4 md:[&_a]:py-1",
                  backgroundColor !== defaultBackgroundColor ? "md:[&_a:hover]:bg-[#333333] md:[&_a:hover]:text-white" : "md:[&_a:hover]:bg-[#f2f2f2] md:[&_a:hover]:text-zinc-800",

                  isHamburgerMenuOpen
                    ? "[&_a]:translate-y-0"
                    : "[&_a]:translate-y-8"
                )}
              >
                <li>
                  <Link href="/"
                    onMouseEnter={() => setIsPricingExpandVisible(false)}
                  >Home</Link>
                </li>
                <li>
                  <Link href="/templates/"
                    onMouseEnter={() => setIsPricingExpandVisible(false)}
                  >Templates</Link>
                </li>
                <li>
                  <Link href="/#section-testimonial"
                    onMouseEnter={() => setIsPricingExpandVisible(false)}
                    onClick={() => {
                      if (isHamburgerMenuOpen) {
                        setIsHamburgerMenuOpen(false);
                      }
                    }}>Testimoni</Link>
                </li>
                <li>

                  <div
                    className={`cursor-pointer ${backgroundColor !== defaultBackgroundColor ? 'md:hover:bg-[#333333] md:hover:text-white' : 'md:hover:bg-[#f2f2f2] md:hover:text-zinc-800'} ${backgroundColor !== defaultBackgroundColor ? 'text-white' : ''} flex min-h-[9rem] w-full items-center text-lg transition-[color, background-color, transform] duration-300 md:rounded-lg md:text-lg md:transition-colors md:translate-y-0 md:h-auto md:min-h-0 md:px-4 md:py-1`}
                    onMouseEnter={handlePricingOnMouseEnter}
                    onClick={handlePricingOnClick}
                  >
                    <div className="flex flex-row w-full items-center gap-1 justify-between">
                      Pricing
                      {isMobilePricingExpandVisible ? <FiChevronUp size={18} /> : <FiChevronDown size={18} className="opacity-50" />}
                    </div>
                  </div>

                </li>

                {isMobilePricingExpandVisible && (
                  <li className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden py-4">
                    <HeaderCard
                      href="/pricing/presentation-design-service"
                      onClick={() => {
                        setIsPricingExpandVisible(false);
                        if (isHamburgerMenuOpen) {
                          setIsHamburgerMenuOpen(false);
                        }
                      }}
                      image="/images/products/presentation-design.png"
                      title="Desain Presentasi"
                      shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'}
                    />

                    <HeaderCard
                      href="/pricing/writing-service"
                      onClick={() => {
                        setIsPricingExpandVisible(false);
                        if (isHamburgerMenuOpen) {
                          setIsHamburgerMenuOpen(false);
                        }
                      }}
                      image="/images/products/writing-service.jpg"
                      title="Jasa Pengetikan"
                      shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'}
                    />

                    <HeaderCard
                      href="https://wa.me/+62881038352544"
                      onClick={() => {
                        setIsPricingExpandVisible(false);
                        if (isHamburgerMenuOpen) {
                          setIsHamburgerMenuOpen(false);
                        }
                      }}
                      newTab
                      image="/images/products/event-organizer.png"
                      title="Event Organizer"
                      shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'} />
                  </li>
                )}

                <li className="md:hidden lg:block">
                  <Link href="/about-us"
                    onMouseEnter={() => setIsPricingExpandVisible(false)}
                  >Tentang Kami</Link>
                </li>
              </ul>
              <div
                className={classNames(
                  "w-full flex items-end md:hidden",
                  isHamburgerMenuOpen ? "sticky bottom-0" : ""
                )}
              >
                <Button href="https://wa.me/+62881038352544?text=Halo,%20saya%20mau%20tanya%20mengenai%20layanan%20Tisain." newTab variant="whatsapp-mobile-menu" size="large">
                  <div className="w-full text-center">Hubungi Tisain</div>
                </Button>
              </div>
            </nav>
          </div>

          <div className="h-full hidden md:flex items-center justify-end">
            <Button href="https://wa.me/+62881038352544?text=Halo,%20saya%20mau%20tanya%20mengenai%20layanan%20Tisain." newTab variant="get-started-light" size="medium">
              <div className="font-strong">Get Started</div>
            </Button>
          </div>

          <div className="ml-auto md:hidden flex items-center">
            <Hamburger
              color={backgroundColor !== defaultBackgroundColor ? "white" : "black"}
              label="Toggle menu"
              toggled={isHamburgerMenuOpen}
              toggle={setIsHamburgerMenuOpen}
              rounded
            />
          </div>
        </Container>
        <div className={`absolute top-navigation-height w-full p-8 shadow-md ease-in-out transition-all ${isPricingExpandVisible ? "opacity-100 duration-150" : "opacity-0 pointer-events-none duration-50"} ${backgroundColor !== defaultBackgroundColor ? "bg-[#121212]" : "bg-background"}`}
          onMouseLeave={() => setIsPricingExpandVisible(false)}>
          <Container className="flex flex-row gap-8">
            <HeaderCard href="/pricing/presentation-design-service" onClick={() => setIsPricingExpandVisible(false)} image="/images/products/presentation-design.png" title="Desain Presentasi" shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'} />
            <HeaderCard href="/pricing/writing-service" onClick={() => setIsPricingExpandVisible(false)} image="/images/products/writing-service.jpg" title="Jasa Pengetikan" shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'} />
            <HeaderCard href="https://wa.me/+62881038352544?text=Halo, saya tertarik dengan layanan Event Organizer Tisain." onClick={() => setIsPricingExpandVisible(false)} newTab image="/images/products/event-organizer.png" title="Event Organizer" shadowColor={backgroundColor !== defaultBackgroundColor ? 'hover:shadow-white/20' : 'hover:shadow-black/50'} />
          </Container>
        </div>
      </header>
    </>
  );
};

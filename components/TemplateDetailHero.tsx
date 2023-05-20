import { HiOutlineCheckCircle } from "react-icons/hi";
import { Button } from "./Button";
import { Container } from "./Container";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type TemplateDetailHeroProps = {
    slug: string;
    title: string;
    author: string;
    tags: {
        name: string;
    }[];
};

export const TemplateDetailHero = ({
    slug, title, tags, author
}: TemplateDetailHeroProps) => {
    return (
        <section id="section-template-detail-hero" className="bg-background h-auto">
            <div className="bg-gradient-to-t from-tisain/25 to-white ">
                <Container className="flex flex-col items-start py-[calc(var(--navigation-height)_/_2)]">
                    <div className="inline-block pb-8">
                        <div className="inline-block bg-gradient-to-r from-tisain/10 to-tisain/25 rounded-full py-1 px-3 md:py-2 md:px-4">
                            <p className="font-strong text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-tisain/60 to-tisain">
                                Presentation Template
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-12">


                        <div className="flex flex-col gap-6 md:w-3/4">
                            <h2 className="font-nunito font-bold text-zinc text-6xl md:text-7xl">
                                {title}
                            </h2>
                            <p className="text-lg font-normal text-gray-600 font-nunito">
                                {tags.map((tag, index) => (`${tag.name}${index < tags.length - 1 ? ", " : ""}`))}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 md:w-1/4 mt-8 md:mt-0">

                            <Button href={`https://wa.me/+62881038352544?text=Halo saya mau pesan jasa desain presentasi dengan template ini https://tisain.id/templates/${slug}`} newTab className="inline-flex px-4 py-2 w-full" variant="use-template" size="large">
                                <div className="flex items-center justify-center md:justify-between w-full gap-1 text-md text-white font-nunito font-bold">
                                    <span>Gunakan Template</span>
                                    <span>
                                        <BsArrowRight size={18} />
                                    </span>
                                </div>
                            </Button>
                            <p className="text-sm text-center md:text-start text-gray-500 font-nunito font-bold ml-1">Template by {author}</p>

                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

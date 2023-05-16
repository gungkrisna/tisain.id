import { BsArrowRight } from "react-icons/bs";
import { Container } from "./Container";
import CustomTemplateCTA from "./CustomTemplateCTA";
import TemplateCard from "./TemplateCard";
import Link from "next/link";

interface Template {
    thumbnail: string;
    title: string;
    slug: string;
}

interface TemplateGridProps {
    templates: Template[];
    header?: string;
}

export const TemplateGrid = ({ templates, header }: TemplateGridProps) => {
    return (
        <section id="section-template-highlight" className="bg-background h-auto">
            <Container>
                <div className="flex flex-col w-full justify-center gap-4 py-16">
                    {header && (
                        <Link href="/templates" className="flex flex-row justify-between items-center">
                            <h3 className="font-nunito font-bold text-3xl">{header}</h3>
                            <div className="flex flex-row  gap-2 items-center font-nunito font-medium text-lg cursor-pointer hover:text-tisain">
                                <h3>
                                    Jelajahi
                                </h3>
                                <span>
                                    <BsArrowRight size={18} />
                                </span></div>
                        </Link>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map((template, index) => (
                            <TemplateCard
                                key={index}
                                thumbnail={template.thumbnail}
                                title={template.title}
                                slug={template.slug}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

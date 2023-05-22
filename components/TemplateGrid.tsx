import { BsArrowRight } from "react-icons/bs";
import { Container } from "./Container";
import CustomTemplateCTA from "./CustomTemplateCTA";
import TemplateCard from "./TemplateCard";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Template {
    thumbnail: string;
    title: string;
    slug: string;
}

interface TemplateGridProps {
    templates: Template[];
    templatesLength: number;
    header?: string;
    isLoading?: boolean;
    className?: string;
}

export const TemplateGrid = ({
    templates,
    templatesLength,
    header,
    isLoading,
    className,
}: TemplateGridProps) => {
    return (
        <section id="section-template-grid" className={`bg-background h-auto ${className}`}>
            <Container>
                <div className="flex flex-col w-full justify-center gap-4 py-16">
                    {header && (
                        <Link href="/templates" className="flex flex-row justify-between items-center gap-4">
                            <h3 className="font-nunito font-bold text-2xl md:text-3xl">{header}</h3>
                            <div className="flex flex-row gap-2 items-center font-nunito font-medium text-md cursor-pointer text-tisain hover:text-tisain/80">
                                <p>Jelajahi</p>
                                <span>
                                    <BsArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    )}

                    

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                        {isLoading ? (
                            Array.from({ length: templatesLength }).map((_, index) => (
                                <TemplateCard key={index} />
                            ))
                        ) : (
                            templates.map((template, index) => (
                                <div className="relative" key={index}>
                                    <TemplateCard
                                        thumbnail={template.thumbnail}
                                        title={template.title}
                                        slug={template.slug}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

import { Container } from "./Container";
import TemplateCard from "./TemplateCard";

type Template = {
    image: string;
    name: string;
}

const templates: Template[] = [
    { "image": "/images/templates/highlighted/101.jpeg", "name": "Startup Pitch Deck" },
    { "image": "/images/templates/highlighted/102.jpeg", "name": "Client Presentation - Digital Marketing Agency Example" },
    { "image": "/images/templates/highlighted/103.jpeg", "name": "New User Onboarding" },
    { "image": "/images/templates/highlighted/104.jpeg", "name": "Proposal" },
    { "image": "/images/templates/highlighted/105.jpeg", "name": "Event Microsite - Tech Example 2" },
    { "image": "/images/templates/highlighted/106.jpeg", "name": "Event Microsite - Tech Example" },
    { "image": "/images/templates/highlighted/107.jpeg", "name": "Event Microsite - Picnic Example" },
    { "image": "/images/templates/highlighted/108.jpeg", "name": "Personal Portfolio Site" },
    { "image": "/images/templates/highlighted/109.jpeg", "name": "One-Page Site - Travel Example" },
    { "image": "/images/templates/highlighted/110.jpeg", "name": "One-Page Site - Executive Coach Example" },
    { "image": "/images/templates/highlighted/111.jpeg", "name": "One-Page Site - PR Agency Example" },
    { "image": "/images/templates/highlighted/112.jpeg", "name": "Webinar" },
    { "image": "/images/templates/highlighted/113.jpeg", "name": "Quarterly Investor Report" },
    { "image": "/images/templates/highlighted/114.jpeg", "name": "Guide" },
    { "image": "/images/templates/highlighted/115.jpeg", "name": "Sales Presentation" },
    { "image": "/images/templates/highlighted/116.jpeg", "name": "Sales Deck" },
    { "image": "/images/templates/highlighted/117.jpeg", "name": "Personal Portfolio" },
    { "image": "/images/templates/highlighted/118.jpeg", "name": "Quarterly Business Review" },
    { "image": "/images/templates/highlighted/119.jpeg", "name": "Project Kickoff" },
    { "image": "/images/templates/highlighted/120.jpeg", "name": "Launch Briefing" }
]


export const TemplateHighlight = () => {
    return (
        <section id="section-template-highlight" className="bg-white h-auto">
            <Container>
                <div className="flex w-full justify-center py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map((template, index) => (
                            <TemplateCard
                                key={index}
                                imgUrl={template.image}
                                title={template.name}
                            />
                        ))}
                    </div>
                </div>
            </Container>

        </section>
    )
}
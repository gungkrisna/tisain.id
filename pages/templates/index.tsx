import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { TemplateHero } from "@/components/TemplateHero";
import { TemplateGrid } from "@/components/TemplateGrid";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import CustomTemplateCTA from "@/components/CustomTemplateCTA";
import { Container } from "@/components/Container";

interface TemplateData {
  thumbnail: string;
  title: string;
  slug: string;
}


export async function getStaticProps() {
  return { props: { bgColor: "bg-black" } };
}

const Templates = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [templates, setTemplates] = useState<TemplateData[]>([]);
  const perPage = 9;

  useEffect(() => {
    const page = router.query.page ? parseInt(router.query.page as string) : 1;
    setCurrentPage(page);
    fetchTemplates(page);
  }, [router.query.page]);

  const fetchTemplates = async (page: number) => {
    try {
      const response = await fetch(`/api/templates/getPaginatedTemplates/?page=${page}&perPage=${perPage}`);
      const data = await response.json();
      setTemplates(data.templates);
    } catch (error) {
      console.error("Error fetching templates:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        <TemplateHero />
        <TemplateGrid templates={templates} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(152 / perPage)}
          onPageChange={(page: any) => {
            router.push(`/templates/?page=${page}`);
          }}
        />
        <Container>
          <CustomTemplateCTA />
        </Container>
      </main>
      <FloatingWhatsappButton />
      <FooterCTABlock>
        Let&apos;s Making<br />Something Great.
      </FooterCTABlock>
      <Footer />
    </>
  );
};

export default Templates;

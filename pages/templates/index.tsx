import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { TemplateHero } from "@/components/TemplateHero";
import { TemplateGrid } from "@/components/TemplateGrid";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import CustomTemplateCTA from "@/components/CustomTemplateCTA";
import { Container } from "@/components/Container";
import Head from "next/head";

interface TemplateData {
  thumbnail: string;
  title: string;
  slug: string;
}

export async function getStaticProps() {
  return { props: { bgColor: "bg-[#212121]" } };
}

const Templates = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [templates, setTemplates] = useState<TemplateData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const perPage = 9;

  useEffect(() => {
    if (router.query.page) {
      const templateGridSection = document.getElementById("section-template-grid");
      if (templateGridSection) {
        const navigationHeightRem = 9;
        const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const navigationHeight = navigationHeightRem * baseFontSize; const templateGridSectionTop =
          templateGridSection.getBoundingClientRect().top + window.pageYOffset;
        const scrollPosition = templateGridSectionTop - navigationHeight;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }
  }, [router.query.page]);

  useEffect(() => {
    const page = router.query.page ? parseInt(router.query.page as string) : 1;
    setCurrentPage(page);
    fetchTemplates(page);
  }, [router.query.page]);

  const fetchTemplates = async (page: number) => {
    setIsLoading(true)
    const response = await fetch(`/api/templates/getPaginatedTemplates/?page=${page}&perPage=${perPage}`);
    const data = await response.json();
    setTemplates(data.templates);
    setIsLoading(false)
  };

  const totalPages = Math.ceil(152 / perPage);

  return (
    <div id="page-templates" data-color="bg-[#121212]/60">
      <Head>
        <title>Templates Tisain</title>
        <meta content="Templates Tisain" property="og:title" />
        <meta content="https://tisain.id/images/meta-templates-image.png" property="og:image" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />

        <meta name="twitter:image" content="https://tisain.id/images/meta-templates-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Templates Tisain" />
        <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />

        <link href="https://tisain.id/templates" rel="canonical" />
      </Head>
      <Header bgColor="bg-[#121212]/60" />
      <main className="bg-background">
        <TemplateHero />
        <TemplateGrid templates={templates} templatesLength={perPage} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => {
            router.push({ pathname: `/templates/`, query: { page: page } });
          }}
        />
        <CustomTemplateCTA />
      </main>
      <FloatingWhatsappButton />
      <FooterCTABlock>
        Let&apos;s Making<br />Something Great.
      </FooterCTABlock>
      <Footer />
    </div>
  );
};

export default Templates;

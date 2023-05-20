import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { TemplateGrid } from "@/components/TemplateGrid";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import { useRouter } from "next/router";
import { TemplateDetailHero } from "@/components/TemplateDetailHero";
import { TemplatePreview } from "@/components/TemplatePreview";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface TemplateDetail {
  slug: string;
  title: string;
  author: string;
  images: {
    imageUrl: string;
  }[];
  tags: {
    name: string;
  }[];
}

interface RelatedTemplate {
  thumbnail: string;
  title: string;
  slug: string;
}

export async function getStaticProps({ params }: { params: { templateSlug: string } }) {
  const { templateSlug } = params;

  try {
    const template = await prisma.template.findUnique({
      where: {
        slug: templateSlug,
      },
      include: {
        images: true,
        tags: true
      },
    });

    const templatesDetail: TemplateDetail | null = template
      ? {
        slug: template.slug,
        title: template.title,
        author: template.author,
        images: template.images.map((image) => ({
          imageUrl: image.imageUrl,
        })),
        tags: template.tags.map((tag) => ({
          name: tag.name,
        })),
      }
      : null;

    const relatedTag = await prisma.template.findMany({
      where: {
        tags: {
          some: {
            name: {
              in: template?.tags.map((tag) => tag.name) || [],
            },
          },
        },
        slug: {
          not: template?.slug,
        },
      },
      take: 3,
    });

    const relatedTemplates = relatedTag.map((related) => ({
      thumbnail: related.thumbnail,
      title: related.title,
      slug: related.slug,
    }));


    return {
      props: {
        templateDetail: templatesDetail,
        relatedTemplates: relatedTemplates,
        bgColor: "bg-background",
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const templates = await prisma.template.findMany();

  const paths = templates.map((template) => ({
    params: { templateSlug: template.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

type TemplateDetailProps = {
  templateDetail: TemplateDetail | null;
  relatedTemplates: RelatedTemplate[];
  bgColor: string;
};

export default function TemplateDetail({ templateDetail, relatedTemplates, bgColor }: TemplateDetailProps) {
  const router = useRouter();

  if (router.isFallback || !templateDetail) {
    // Render a loading state while the page is being generated
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <TemplateDetailHero title={templateDetail.title} author={templateDetail.author} tags={templateDetail.tags} slug={templateDetail.slug} />
        <TemplatePreview images={templateDetail.images} />
        <TemplateGrid templates={relatedTemplates} templatesLength={3} header="Template Serupa"/>
      </main>
      <FloatingWhatsappButton />
      <FooterCTABlock>
        Let&apos;s Making<br />Something Great.
      </FooterCTABlock>
      <Footer />
    </>
  );
}

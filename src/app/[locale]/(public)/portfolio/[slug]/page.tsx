import type { IPortfolioDetailProps } from '@/types/portfolio.d.ts';
import { PortfolioDetailPage } from '@/pages/portfolio/components/Detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: IPortfolioDetailProps) {
  const { locale, slug } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: t('meta_title', { slug }),
    description: t('meta_description', { slug }),
  };
}

export default async function PortfolioDetail(props: IPortfolioDetailProps) {
  return (
    <PortfolioDetailPage params={props.params} />
  );
};

export const dynamicParams = false;

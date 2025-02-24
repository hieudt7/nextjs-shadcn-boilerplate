import type { IPortfolioProps } from '@/types/portfolio.d.ts';
import PortfolioPage from '@/pages/portfolio/Portfolio';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: IPortfolioProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Portfolio(props: IPortfolioProps) {
  return (
    <PortfolioPage params={props.params} />
  );
};

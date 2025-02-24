import type { IPortfolioDetailProps } from '@/types/portfolio.d.ts';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const PortfolioDetailPage = async (props: IPortfolioDetailProps) => {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'PortfolioSlug',
  });

  return (
    <>
      <h1 className="capitalize">{t('header', { slug })}</h1>
      <p>{t('content')}</p>
    </>
  );
};

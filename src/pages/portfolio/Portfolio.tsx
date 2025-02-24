import type { IPortfolioProps } from '@/types/portfolio.d.ts';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

const PortfolioPage = async (props: IPortfolioProps) => {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return (
    <>
      <p>{t('presentation')}</p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array.from({ length: 6 }).keys()).map(elt => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/portfolio/${elt}`}
          >
            {t('portfolio_name', { name: elt })}
          </Link>
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;

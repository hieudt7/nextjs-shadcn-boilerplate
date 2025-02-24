export type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

export type IPortfolioDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { OrganizationCard } from './OrganizationCard';

const organizations = [
  {
    id: 'webveda',
    name: 'Webveda',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/76579646c7ca5c346a17146ad4c8401a0f507868?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.07]',
    logoWidth: 'w-24',
    marginTop: 'mt-[18px]'
  },
  {
    id: 'uniathena',
    name: 'Uniathena',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/6bd1dde1064edd35556f771e2fa086c388457d18?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.09]',
    logoWidth: 'w-[105px]',
    marginTop: 'mt-[11px]'
  },
  {
    id: 'apni-kaksha',
    name: 'Apni Kaksha',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/7085d8df0f31198c8424de93f5d041213c37800d?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.09]',
    logoWidth: 'w-[105px]',
    marginTop: 'mt-[11px]'
  },
  {
    id: 'iim-sambalpur',
    name: 'IIM Sambalpur',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/d8912270bd64b6bc004f4e2ed0850a007e5bf2ae?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.12]',
    logoWidth: 'w-[111px]',
    marginTop: 'mt-[9px]'
  },
  {
    id: 'finance-wallah',
    name: 'Finance Wallah',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/3a3bec00b48463622b6ddbd38fca04157341319b?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.09]',
    logoWidth: 'w-[105px]',
    marginTop: 'mt-[11px]'
  },
  {
    id: 'education-10x',
    name: 'Education 10x',
    logo: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/cf8c3eef7e20ff0e79a0c3517e6a56fba7ea2228?placeholderIfAbsent=true',
    logoAspectRatio: 'aspect-[1.08]',
    logoWidth: 'w-[100px]',
    marginTop: 'mt-[15px]'
  }
];

export const TrustedBySection: React.FC = () => {
  const titleContent = (
    <>
      <span style={{ fontWeight: 400, color: 'rgba(46,114,101,1)' }}>
        Trusted by
      </span>{' '}
      <br />
      <span style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(53,115,105,1)' }}>
        Notable Organisations
      </span>
    </>
  );

  return (
    <section 
      className="flex max-w-[962px] flex-col items-center text-black text-center mx-auto"
      aria-labelledby="trusted-by-heading"
    >
      <SectionHeader
        icon="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/83007f3850cda2a91d1fffef50a58ffe7bd64ca6?placeholderIfAbsent=true"
        iconAlt="Trust indicator icon"
        title={titleContent}
      />
      
      <div 
        className="flex w-full items-center gap-[40px_68px] text-[11px] font-semibold flex-wrap mt-[33px] max-md:max-w-full justify-center"
        role="list"
        aria-label="Trusted organizations"
      >
        {organizations.map((org) => (
          <div key={org.id} role="listitem">
            <OrganizationCard
              logo={org.logo}
              name={org.name}
              logoAspectRatio={org.logoAspectRatio}
              logoWidth={org.logoWidth}
              marginTop={org.marginTop}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

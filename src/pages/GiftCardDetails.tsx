import SkeletonLoader from 'components/atoms/SkeletonLoader/SkeletonLoader';
import TextBanner from 'components/atoms/TextBanner/TextBanner';
import BeneficiariesCard from 'components/gift-cards/BeneficiariesCard/BeneficiariesCard';
import ConsumptionByBeneficiaryCard from 'components/gift-cards/ConsumptionByBeneficiaryCard/ConsumptionByBeneficiaryCard';
import ConsumptionCard from 'components/gift-cards/ConsumptionCard/ConsumptionCard';
import LinkWithIcon from 'components/molecules/LinkWithIcon/LinkWithIcon';
import HeaderBlock from 'components/organisms/HeaderBlock/HeaderBlock';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useGiftCard } from 'hooks/useGiftCard';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { BeneficiaryTypes } from 'types/gift-card/GiftCard';

dayjs.locale('en');
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const GiftCardDetails = () => {
  const { t, i18n } = useTranslation('gift-cards');

  const { id } = useParams<{ id: string }>();
  const { data: giftCard, isLoading } = useGiftCard(
    id ? parseInt(id) : undefined,
  );

  const { cardValidityPeriod, cardClosingDelay } = useMemo(() => {
    if (!giftCard || !giftCard.openingDate || !giftCard.closingDate) {
      return { cardValidityPeriod: null, cardClosingDelay: null };
    }

    const now = dayjs();
    const cardOpeningDate = dayjs(giftCard.openingDate);
    const cardClosingDate = dayjs(giftCard.closingDate);

    return {
      cardValidityPeriod: `${cardOpeningDate.format('D MMM YYYY')} - ${cardClosingDate.format('D MMM YYYY')}`,
      cardClosingDelay: cardClosingDate.isBefore(now)
        ? t('closedCard')
        : t('cardClosing', { delay: cardClosingDate.from(now) }),
    };
  }, [giftCard, t]);

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-10">
      <div className="flex">
        <LinkWithIcon to="/" icon="arrow-left" label={t('backToCardsList')} />
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-6">
          <SkeletonLoader height={132} width={400} />
          <SkeletonLoader height={56} width={470} />
          <SkeletonLoader height={84} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SkeletonLoader height={216} />
            <SkeletonLoader height={216} />
          </div>
        </div>
      ) : null}

      {!isLoading && giftCard ? (
        <div className="flex flex-col gap-6">
          <HeaderBlock
            icon="gift-card"
            title={giftCard.name}
            metaInfo={
              cardValidityPeriod && cardClosingDelay
                ? [
                    { icon: 'calendar', label: cardValidityPeriod },
                    { icon: 'clock', label: cardClosingDelay },
                  ]
                : []
            }
          />

          <ConsumptionCard
            allowedAmount={giftCard.allowedAmount}
            consumedAmount={giftCard.consumedAmount}
          />

          <TextBanner
            title={t('cardDescription')}
            text={giftCard.description}
          />

          {giftCard.beneficiaries.some(
            ({ type }) =>
              type === BeneficiaryTypes.COMPANION ||
              type === BeneficiaryTypes.CHILD,
          ) ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <BeneficiariesCard beneficiaries={giftCard.beneficiaries} />
              <ConsumptionByBeneficiaryCard
                beneficiaries={giftCard.beneficiaries}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {!isLoading && !giftCard ? (
        <TextBanner text="La carte que vous recherchez n'existe pas" />
      ) : null}
    </div>
  );
};

export default GiftCardDetails;

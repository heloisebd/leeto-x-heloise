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
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BeneficiaryTypes } from 'types/gift-card/GiftCard';
dayjs.locale('fr');
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const GiftCardDetails = () => {
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
        ? 'Carte clôturée'
        : `Se clôture ${cardClosingDate.from(now)}`,
    };
  }, [giftCard]);

  if (isLoading) return <div className="p-10">Chargement de la carte...</div>;

  return (
    <div className="flex flex-col gap-6 p-10">
      <LinkWithIcon
        to="/"
        icon="arrow-left"
        label="Retour vers les cartes cadeaux"
      />
      {giftCard ? (
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
            title="Description de la carte-cadeau"
            text={giftCard.description}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {giftCard.beneficiaries.some(
              ({ type }) =>
                type === BeneficiaryTypes.COMPANION ||
                type === BeneficiaryTypes.CHILD,
            ) ? (
              <>
                <BeneficiariesCard beneficiaries={giftCard.beneficiaries} />
                <ConsumptionByBeneficiaryCard
                  beneficiaries={giftCard.beneficiaries}
                />
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <TextBanner text="La carte que vous recherchez n'existe pas" />
      )}
    </div>
  );
};

export default GiftCardDetails;

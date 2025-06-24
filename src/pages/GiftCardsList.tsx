import SkeletonLoader from 'components/atoms/SkeletonLoader/SkeletonLoader';
import TextBanner from 'components/atoms/TextBanner/TextBanner';
import { useGiftCards } from 'hooks/useGiftCards';
import { useTranslation } from 'react-i18next';

const GiftCardsList = () => {
  const { t } = useTranslation('gift-cards');
  const { data: giftCards, isLoading } = useGiftCards();

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-10">
      <h1 className="text-2xl font-semibold">{t('giftCards')}</h1>
      {isLoading ? (
        <div className="flex flex-col gap-2">
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const width = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
              return <SkeletonLoader key={index} height={24} width={width} />;
            })}
        </div>
      ) : null}

      {!isLoading && giftCards && giftCards.length > 0 ? (
        <ul className="flex list-disc flex-col gap-2 pl-4">
          {giftCards.map(({ id, name }) => (
            <li key={id}>
              <a href={`/gift-cards/${id}`}>{name}</a>
            </li>
          ))}
        </ul>
      ) : null}

      {!isLoading && (!giftCards || giftCards.length === 0) ? (
        <TextBanner text="Aucune carte à afficher" />
      ) : null}
    </div>
  );
};

export default GiftCardsList;

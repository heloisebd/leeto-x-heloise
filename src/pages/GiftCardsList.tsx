import TextBanner from '../components/atoms/TextBanner/TextBanner';
import { useGiftCards } from '../hooks/useGiftCards';

const GiftCardsList = () => {
  const { data: giftCards, isLoading } = useGiftCards();

  if (isLoading) return <div className="p-10">Chargement des cartes...</div>;

  return (
    <div className="flex flex-col gap-6 p-10">
      <h1 className="text-2xl font-semibold">Cartes cadeaux</h1>
      {giftCards && giftCards.length > 0 ? (
        <ul className="flex list-disc flex-col gap-2 pl-4">
          {giftCards.map(({ id, name }) => (
            <li key={id}>
              <a href={`/gift-cards/${id}`}>{name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <TextBanner text="Aucune carte à afficher" />
      )}
    </div>
  );
};

export default GiftCardsList;

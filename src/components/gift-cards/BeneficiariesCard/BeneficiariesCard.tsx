import { useMemo } from 'react';
import { BeneficiaryTypes, type Beneficiary } from 'types/gift-card/GiftCard';
import BeneficiaryTypeCircle from 'components/gift-cards/BeneficiariesCard/BeneficiaryTypeCircle/BeneficiaryTypeCircle';
import classNames from 'classnames';
import DataCard from 'components/organisms/DataCard/DataCard';

interface Props {
  beneficiaries: Array<Beneficiary>;
}

const BeneficiariesCard = ({ beneficiaries = [] }: Props) => {
  const { hasUser, hasCompanion, hasChild, typesCount } = useMemo(() => {
    const { hasSomeUser, hasSomeCompanion, hasSomeChild } =
      beneficiaries.reduce(
        (acc, { type }) => {
          if (type === BeneficiaryTypes.USER) acc.hasSomeUser = true;
          if (type === BeneficiaryTypes.COMPANION) acc.hasSomeCompanion = true;
          if (type === BeneficiaryTypes.CHILD) acc.hasSomeChild = true;
          return acc;
        },
        {
          hasSomeUser: false,
          hasSomeCompanion: false,
          hasSomeChild: false,
        },
      );

    const count = [hasSomeUser, hasSomeCompanion, hasSomeChild].filter((type) =>
      Boolean(type),
    ).length;

    return {
      hasUser: hasSomeUser,
      hasCompanion: hasSomeCompanion,
      hasChild: hasSomeChild,
      typesCount: count,
    };
  }, [beneficiaries]);

  const beneficiariesNames = useMemo(() => {
    const displayedNames = beneficiaries.map((beneficiary) => {
      return beneficiary.type === BeneficiaryTypes.USER
        ? 'Vous-même'
        : beneficiary.firstName;
    });

    if (displayedNames.length === 1) {
      return `${displayedNames[0]} est éligible.`;
    }
    if (displayedNames.length === 2) {
      if (hasUser) {
        return `${displayedNames.join(' et ')} êtes éligibles.`;
      }
      return `${displayedNames.join(' et ')} sont éligibles.`;
    }

    const all = displayedNames.slice(0, -1).join(', ');
    const last = displayedNames[displayedNames.length - 1];
    if (hasUser) {
      return `${all} et ${last} êtes éligibles.`;
    }
    return `${all} et ${last} sont éligibles.`;
  }, [beneficiaries, hasUser]);

  return (
    <DataCard
      title="Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?"
      icon="family"
    >
      <div className="flex items-center gap-4">
        <div
          className="flex"
          style={
            typesCount > 1
              ? { marginRight: `calc(-8px * ${typesCount - 1})` }
              : undefined
          }
        >
          {hasUser ? <BeneficiaryTypeCircle type="user" name="You" /> : null}

          {hasCompanion ? (
            <div
              className={classNames({
                '-translate-x-2': typesCount > 1 && hasUser,
              })}
            >
              <BeneficiaryTypeCircle type="companion" name="Companion" />
            </div>
          ) : null}

          {hasChild ? (
            <div
              className={classNames({
                '-translate-x-4': typesCount > 1 && hasCompanion && hasUser,
                '-translate-x-2': typesCount > 1 && (!hasCompanion || !hasUser),
              })}
            >
              <BeneficiaryTypeCircle type="child" name="Child" />
            </div>
          ) : null}
        </div>
        <p className="text-sm text-slate-600">{beneficiariesNames}</p>
      </div>
    </DataCard>
  );
};

export default BeneficiariesCard;

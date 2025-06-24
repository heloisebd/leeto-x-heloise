import classNames from 'classnames';
import BeneficiaryTypeCircle from 'components/gift-cards/BeneficiariesCard/BeneficiaryTypeCircle/BeneficiaryTypeCircle';
import DataCard from 'components/organisms/DataCard/DataCard';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BeneficiaryTypes, type Beneficiary } from 'types/gift-card/GiftCard';

interface Props {
  beneficiaries: Array<Beneficiary>;
}

const BeneficiariesCard = ({ beneficiaries = [] }: Props) => {
  const { t } = useTranslation('gift-cards');

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
    const displayedNames = beneficiaries.map((beneficiary) =>
      beneficiary.type === BeneficiaryTypes.USER
        ? t('eligibility.you')
        : beneficiary.firstName,
    );

    const joinNames = (names: string[]) => {
      if (names.length === 1) return names[0];
      return (
        names.slice(0, -1).join(', ') +
        ` ${t('common.and')} ` +
        names[names.length - 1]
      );
    };

    if (displayedNames.length === 1) {
      return t('eligibility.single', { name: displayedNames[0] });
    }

    const namesString = joinNames(displayedNames);

    if (displayedNames.length === 2) {
      return hasUser
        ? t('eligibility.two.withYou', { names: namesString })
        : t('eligibility.two.withoutYou', { names: namesString });
    }

    return hasUser
      ? t('eligibility.multiple.withYou', { names: namesString })
      : t('eligibility.multiple.withoutYou', { names: namesString });
  }, [beneficiaries, hasUser]);

  return (
    <DataCard title={t('beneficiaries.wichBenefitFrom')} icon="family">
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

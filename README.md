# Leeto - Test technique développeur front-end

## Introduction

Dans l'application Leeto, nos utilisateurs peuvent consulter différentes cartes cadeaux mises à leur disposition par leur CSE.

Ta mission consiste à créer une page web qui permettra de consulter ces cartes cadeaux ainsi qu'une page détail pour chacune d'entre elles.

Le périmètre concerne uniquement la consultation et non la consommation de la carte cadeau.

## Technos à utiliser

- [React](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TanStack Query](https://tanstack.com/query)

## Spécifications

- Une carte cadeau est composée des informations suivantes :
  - un titre
  - une description
  - une date de création
  - une date d'expiration
  - un état de consommation (en euros)
  - une liste de bénéficiaires (moi-même, mon/ma conjoint(e) et/ou mes enfants)
- La page de listing doit pouvoir afficher les cartes cadeaux actives ou archivées via un système d'onglets

## Ressources

### Maquettes

_TODO_

### API

#### GiftCard Type

```typescript
type GiftCard = {
  id: number;
  name: string;
  openingDate: string;
  closingDate: string;
  state: "active" | "archived";
  allowedAmount: number;
  consumedAmount: number;
  grantables: {
    id: number;
    type: "user" | "companion" | "child";
    firstName: string;
    consumption: {
      allowedAmount: number;
      consumedAmount: number;
    };
  }[];
};
```

#### Endpoints

- Liste des cartes cadeaux actives : `GET /gift-cards?state=active`
- Liste des cartes cadeaux archivées : `GET /gift-cards?state=archived`
- Détail d'une carte cadeau : `GET /gift-cards/:id`

## Bonus

- Bonus n°1 : Ajouter des tests unitaires
- Bonus n°2 : Ajouter un [Storybook](https://storybook.js.org) pour présenter les composants

## Livrable

Le code devra être accessible sur un repository GitHub public.

> 📒 Nos guidelines sont accessibles en ligne si tu souhaites t'en inspirer : https://leeto-front-end-guidelines.netlify.app

> ✉️ Si tu as la moindre question, n'hésite pas à me contacter : kevin@leeto.co

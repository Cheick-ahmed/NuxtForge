# NuxtForge Architecture Guide

Bienvenue dans l'architecture de **NuxtForge**, un boilerplate Nuxt 3 minimaliste, élégant et scalable, pensé pour une organisation claire et modulaire.

---

## ✨ Pourquoi cette architecture ?

- **Lisibilité** : tout est à sa place, aucun dossier fourre-tout
- **Scalabilité** : chaque feature ou domaine a son espace
- **Modularité** : les composants et la logique sont réutilisables
- **Performance développeur** : on sait où chercher, où créer, où maintenir

---

## 📂 Structure générale

```txt
src/
├── components/         # Composants UI (common & modules)
├── composables/        # Hooks globaux ou spécifiques (useXXX)
├── core/               # Types, config, services partagés
├── features/           # Unités fonctionnelles ou métiers
├── layouts/            # Layouts Nuxt
├── middleware/         # Middleware Nuxt (auth, guard...)
├── pages/              # Pages Nuxt
├── plugins/            # Plugins Nuxt (e.g. dayjs, i18n...)
├── server/             # API, logic back-end (routes, utils...)
├── stores/modules/     # Modules Pinia par feature
├── tests/              # tests unit/integration/e2e
└── utils/              # formatters, helpers, validators
```

---

## 🧰 Comment ajouter une nouvelle **feature** ?

Ex : une feature "newsletter"

```bash
src/
├── features/newsletter/
│   ├── NewsletterForm.vue
│   ├── useNewsletter.ts         # logique (API, validation, etc.)
│   └── types.ts                 # types liés

stores/modules/
└── newsletter.store.ts          # state & actions
```

Si besoin :
- Ajoute les tests dans `tests/unit/newsletter/`
- Ajoute un endpoint dans `server/api/newsletter.post.ts`

---

## 🔄 Recap : où mettre quoi ?

| Besoin                                      | Emplacement                           |
|---------------------------------------------|----------------------------------------|
| 📊 Composant réutilisable                | `components/common/`                  |
| 🔗 Composant lié à une feature          | `components/modules/maFeature/`       |
| 🪛 Hook réutilisable (useXXX)           | `composables/`                        |
| 🖊️ Type global ou config           | `core/types/` ou `core/config/`       |
| 🔍 Format, validation, helper           | `utils/` (formatters/helpers/validators) |
| 🏗þ Store Pinia                      | `stores/modules/`                     |
| 🏢 Logic métier ou fonctionnelle        | `features/`                           |
| 🌐 API back-end                        | `server/api/`                         |
| 🔧 Middleware                         | `middleware/`                         |
| 🗃 Test unit / intégration / e2e       | `tests/`                              |

---

## 📖 Convention & style

- Composants : `PascalCase.vue`
- Fichiers : `kebab-case.ts`
- Hooks : `useCamelCase.ts`
- Stores : `xxx.store.ts`
- Feature : tout regroupé dans `features/maFeature`

---

## 📘 Bonnes pratiques

- Garder chaque dossier **focus** (pas de composants + logique dans un seul fichier)
- Préférer des **composables** pour isoler la logique
- Ajouter les tests dès que possible, même minimalistes
- Utiliser les **alias** (ex: `@/features/user`) pour plus de clarté dans les imports

---

## 🎉 Ready to scale
Cette structure est prête pour :
- Des projets à long terme
- Des équipes multiples
- Une factorisation optimale des composants et logiques
- Des tests, du SSR, du typage solide


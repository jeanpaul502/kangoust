# Kangoust — Cahier des charges fonctionnel complet

> **Document de référence produit — Version 1.0**
> Créé le : 24 août 2026 — Statut : Référence

---

## Table des matières

| # | Section |
|---|---------|
| 1 | Vision générale |
| 2 | Types de comptes |
| 3–5 | Landing page · Création de compte · Onboarding |
| 6–9 | Parcours hors Australie · Visa · Besoins · Déjà en Australie |
| 10–13 | Profil · Biographie · Profil pro · Certifications |
| 14–17 | Dashboard dynamique |
| 18–23 | Parcours Australie · Opérateurs · Banques · Guides |
| 24–37 | Module Logement complet |
| 38–46 | Module Véhicules complet |
| 47–59 | Événements · Messagerie |
| 60–65 | Communauté · Travail |
| 66–74 | Comptes professionnels |
| 75–79 | Messagerie · Notifications |
| 80–83 | Recherche · Favoris |
| 84–93 | CV · Intelligence artificielle |
| 94–101 | Documents · Sécurité · Rappels |
| 102–106 | Multilingue · Administration · Modération |
| 107–115 | Monétisation · Paiements |
| 116–123 | Roadmap |
| 124–132 | UX · Vision · Résumé |

---

## 1. Vision générale

Kangoust est une plateforme web et mobile destinée aux personnes qui :

- préparent leur départ vers l'Australie
- arrivent prochainement en Australie
- viennent d'arriver en Australie
- vivent déjà en Australie depuis plusieurs mois ou plusieurs années
- recherchent un logement
- proposent un logement
- recherchent ou vendent un véhicule
- souhaitent rencontrer une communauté
- créent ou rejoignent des événements
- recherchent plus tard des opportunités professionnelles
- ont besoin d'être accompagnées dans leurs démarches d'installation

Kangoust n'est pas une simple marketplace.

> **L'utilisateur explique sa situation et ses besoins, puis Kangoust l'accompagne, lui propose des solutions et lui permet également de chercher lui-même.**

Le système fonctionne selon trois modes :

| Mode | Description |
|------|-------------|
| **Je cherche** | L'utilisateur parcourt les offres disponibles |
| **Les autres peuvent me trouver** | Le profil est visible et suggéré |
| **Kangoust recommande automatiquement** | Le moteur de matching propose des solutions |

---

## 2. Les grandes catégories de comptes

### 2.1 Particulier

Deux situations :

- **Futur arrivant** — encore hors d'Australie
- **Résident / utilisateur déjà en Australie**

### 2.2 Organisation professionnelle

> Disponible dans une version ultérieure.

entreprise · agence immobilière · agence d'intérim · agence de recrutement · concessionnaire automobile · hôtel · restaurant · société de construction · société minière · ferme · association · autre entreprise

> Les agences de migration ne font pas partie des premières versions.

### 2.3 Administrateur

Gère l'ensemble de la plateforme.

### 2.4 Modérateur

Gère : contenus signalés · utilisateurs · annonces · événements · comportements abusifs

---

## 3. Première arrivée sur Kangoust

Un nouveau visiteur arrive sur la landing page. Il peut :

- découvrir Kangoust
- voir comment fonctionne l'application
- consulter certains contenus publics
- créer un compte / se connecter

**CTA principal : Commencer maintenant**

---

## 4. Création de compte

| Champ | Obligatoire |
|-------|------------|
| Prénom | OUI |
| Nom | OUI |
| Email | OUI |
| Mot de passe | OUI |
| Confirmation mot de passe | OUI |
| Acceptation des conditions | OUI |

Possibilités futures : Google · Apple

> Une vérification email est effectuée après l'inscription.

---

## 5. Première grande question après inscription

**Où êtes-vous actuellement ?**

| Option | Description |
|--------|-------------|
| Option 1 | Je suis encore hors d'Australie |
| Option 2 | Je suis déjà en Australie |

> Cette réponse détermine le reste de l'onboarding.

---

## 6. Parcours d'un utilisateur hors d'Australie

*Exemple : Marie vit en France et prépare son voyage.*

Questions principales :

- pays actuel · nationalité · âge · langues parlées
- type de projet · visa envisagé
- date d'arrivée · heure d'arrivée (facultative)
- ville d'arrivée · aéroport (éventuellement)
- ville d'installation prévue
- seule / couple / groupe / famille
- durée prévue · besoins principaux

---

## 7. Type de visa / projet

- Working Holiday · Étudiant · Visa de travail
- Sponsor employeur · Skilled / qualifié
- Partenaire / famille · Autre · Je ne sais pas encore

> **Important :** Les catégories doivent être administrables. Elles ne doivent pas être figées définitivement dans le code.

---

## 8. Questionnaire des besoins

**Que recherchez-vous ?** (plusieurs réponses possibles)

logement · véhicule · accompagnement administratif · communauté · événements · travail plus tard · préparation professionnelle · autres besoins

---

## 9. Utilisateur déjà en Australie

*Exemple : Pierre vit à Brisbane depuis deux ans.*

Questions posées : ville actuelle · État · nationalité · âge · langues · situation actuelle · type de visa / statut · besoins

**Que souhaitez-vous faire ?**

- trouver / proposer un logement
- acheter / vendre une voiture
- rencontrer des gens · participer / organiser un événement
- partager une opportunité professionnelle · utiliser les guides

> Pierre ne doit pas refaire toutes les étapes réservées aux nouveaux arrivants.

---

## 10. Profil personnel

| Champ | Visibilité |
|-------|-----------|
| Photo | Publique |
| Prénom | Publique |
| Nom | Configurable |
| Âge | Configurable |
| Nationalité | Configurable |
| Ville / Pays actuel | Configurable |
| Date d'arrivée | Configurable |
| Langues parlées | Configurable |
| Biographie | Configurable |
| Centres d'intérêt | Configurable |
| Profession · Expérience | Facultatifs |
| Certifications | Facultatives |
| Statut de vérification | Publique |

Certaines informations pourront être : **publiques** · **privées** · **visibles uniquement pendant certaines mises en relation**

---

## 11. Biographie

L'utilisateur pourra se présenter librement : personnalité · projet · centres d'intérêt · type de vie recherchée · ce qu'il recherche en Australie.

> Très utile notamment pour les colocations et événements.

---

## 12. Profil professionnel facultatif

métier · expériences professionnelles · compétences · années d'expérience · certifications · permis · disponibilités · secteurs recherchés

> Ces informations deviennent importantes lorsque le module emploi est activé.

---

## 13. Certifications

Exemples : White Card · RSA · First Aid · Forklift · Working at Heights · Confined Spaces · Permis · Autres

| Statut | Label |
|--------|-------|
| not_obtained | Non obtenu |
| in_progress | En cours |
| obtained | Obtenu |

---

## 14. Dashboard dynamique

> Le dashboard change selon la situation de l'utilisateur.

---

## 15. Dashboard avant arrivée

```
Bonjour Marie
Sydney dans 37 jours
```

| Section | Contenu |
|---------|---------|
| Mon arrivée | 15 novembre 2026 |
| Ma préparation | 60 % terminée |
| Logement | 12 suggestions — 4 propriétaires intéressés |
| Véhicule | 8 vans correspondent à la recherche |
| À préparer | logement · assurance · documents · arrivée |
| Événements | Événements autour de la date d'arrivée |

---

## 16. Dashboard après arrivée

```
Bienvenue à Sydney
```

Suggestions : obtenir une SIM · ouvrir un compte bancaire · demander le TFN · comprendre la superannuation · finaliser le logement · préparer son CV · certifications professionnelles

---

## 17. Dashboard utilisateur déjà installé

Pierre voit : nouvelles suggestions logement · personnes intéressées par son véhicule · événements autour de lui · publications actives · communauté · conversations · recherches actives

---

## 18. Module Mon parcours Australie

Parcours progressif qui dépend de : la situation · le visa · la ville · le projet · le secteur professionnel

---

## 19. Parcours avant départ

Exemples : préparer ses documents · assurance · billet · budget · logement temporaire · informations essentielles · préparation administrative

| Statut | Label |
|--------|-------|
| todo | À faire |
| in_progress | En cours |
| done | Terminé |

---

## 20. Parcours arrivée

| Étape | Description |
|-------|-------------|
| Téléphone | Choisir une SIM australienne |
| Banque | Comparer et choisir une banque |
| TFN | Explications et démarches |
| Superannuation | Comprendre son fonctionnement |
| Transport | Informations adaptées à la ville |
| Logement | Continuer sa recherche |

---

## 21. Recommandation opérateurs mobiles

Kangoust compare : prix · data · couverture · eSIM · réseau · prepaid · couverture zones rurales

> Les recommandations peuvent dépendre du projet de l'utilisateur.

---

## 22. Recommandation bancaire

La plateforme présente : banques principales · frais · comptes · cartes · applications · démarches

L'utilisateur peut indiquer : **Étape terminée**

---

## 23. Guides australiens

Bibliothèque administrable :

avant le départ · visa · arrivée · téléphone · banque · TFN · superannuation · logement · travail · CV · certifications · transport · voiture · assurance · santé · taxes · vie quotidienne · retour · autres

> Les guides doivent être gérés depuis l'administration, sans modifier le code.

---

## 24. Concept fondamental : besoins et offres

**Besoin** — Ce que recherche quelqu'un.
*Exemple : Marie recherche une chambre.*

**Offre** — Ce que propose quelqu'un.
*Exemple : Raoul possède une chambre.*

```
BESOIN  <-->  OFFRE
               |
          SUGGESTIONS
```

---

## 25. Matching automatique

> Le matching **n'empêche jamais** l'utilisateur de rechercher manuellement. Il complète la recherche.

---

## 26. Module logement

Deux actions principales :

- **Je cherche un logement**
- **Je propose un logement**

---

## 27. Recherche logement

| Champ | Obligatoire |
|-------|------------|
| Ville | OUI |
| Quartier | NON |
| Date souhaitée | OUI |
| Budget min / max | OUI |
| Type (chambre / appartement / colocation) | OUI |
| Durée | OUI |
| Nombre de personnes | OUI |
| Préférences | NON |

> Cette recherche devient une **Recherche active**. Elle n'est pas une annonce classique.

---

## 28. Offre logement

Raoul publie : photos · description · ville · quartier · prix/semaine · disponibilité · chambre privée ou partagée · caution · durée · équipements · règles · nombre de colocataires · informations complémentaires

---

## 29. Suggestions automatiques logement

Kangoust compare : ville · dates · prix · type · disponibilité · durée · critères compatibles

> 14 logements correspondent à votre recherche.

---

## 30. Suggestion envoyée au propriétaire

Raoul reçoit : Marie arrive à Sydney le 15 novembre et recherche une chambre correspondant à la vôtre.

| Action | Description |
|--------|-------------|
| **Je suis intéressé** | Notification envoyée à Marie |
| **Pas intéressé** | Suggestion ignorée |
| **Ma chambre n'est plus disponible** | Annonce mise à jour |

---

## 31. Marie peut également agir elle-même

Marie parcourt les logements, trouve celui de Raoul, clique **Je suis intéressée** — Raoul reçoit la notification.

---

## 32. Matching logement bidirectionnel

**Scénario A — Raoul commence**

```
Raoul --> intéressé par Marie
Marie reçoit la proposition
Marie --> intéressée
              |
           MATCH
```

**Scénario B — Marie commence**

```
Marie --> intéressée par le logement
Raoul reçoit son profil
Raoul --> intéressé
              |
           MATCH
```

---

## 33. Après le match

> La conversation privée est **automatiquement ouverte**.
> Pas besoin d'une nouvelle demande de message.
> Le double intérêt constitue déjà le consentement.

---

## 34. États du matching

| État | Description |
|------|-------------|
| suggested | Kangoust a proposé la mise en relation |
| seeker_interested | Le chercheur a exprimé son intérêt |
| owner_interested | Le propriétaire a exprimé son intérêt |
| matched | Intérêt mutuel confirmé |
| declined | L'une des parties a refusé |
| unavailable | Le logement n'est plus disponible |
| expired | La suggestion a expiré |

---

## 35. Durée des annonces logement

Une annonce reste active jusqu'à : **Ce logement n'est plus disponible.**

---

## 36. Vérification périodique logement

> Votre chambre est-elle toujours disponible ?

| Réponse | Action |
|---------|--------|
| Oui | Annonce maintenue |
| Non | Annonce fermée |
| Pas de réponse | Annonce désactivée après plusieurs rappels |

---

## 37. Favoris logement

Un utilisateur peut enregistrer des logements dans ses favoris.

---

## 38. Module véhicules

Deux actions :

- **Je recherche un véhicule**
- **Je vends un véhicule**

---

## 39. Recherche véhicule

| Critère | Type |
|---------|------|
| Ville | Texte |
| Type | voiture / van / campervan / 4x4 |
| Budget | Min / Max |
| Année | Min / Max |
| Kilométrage | Max |
| Transmission | Manuel / Auto |
| Véhicule aménagé | Oui / Non |

---

## 40. Vente véhicule

photos · marque · modèle · année · kilométrage · prix · état · transmission · carburant · registration · ville · description · équipements · véhicule aménagé ou non

---

## 41. Matching véhicule

Même logique que le logement. Kangoust peut suggérer des véhicules à Marie et le profil de Marie aux vendeurs correspondants.

---

## 42. Recherche manuelle véhicule

Marie parcourt les véhicules et clique : **Je suis intéressée** ou **Faire une offre**

---

## 43. Offres financières véhicule

```
Prix affiché : 12 000 AUD
Marie propose : 10 500 AUD
     |
Raoul reçoit : Marie vous propose 10 500 AUD
```

| Option | Description |
|--------|-------------|
| Accepter | Offre acceptée |
| Refuser | Offre refusée |
| Contre-offre | Nouvelle proposition |

---

## 44. Contre-offres

```
Pierre propose : 11 500 AUD
Marie peut : Accepter / Refuser / Proposer 11 000 AUD
```

> L'historique complet des offres doit être conservé.

---

## 45. États des offres

| État | Description |
|------|-------------|
| pending | En attente de réponse |
| countered | Contre-offre envoyée |
| accepted | Offre acceptée |
| rejected | Offre refusée |
| withdrawn | Offre retirée |
| expired | Offre expirée |

---

## 46. Vente terminée

**Marquer comme vendu** — L'annonce disparaît des recherches.

---

## 47. Événements

Créés principalement par les utilisateurs :

soirée · plage · randonnée · barbecue · road trip · pizza · sport · sortie · networking · rencontre communautaire

---

## 48. Création événement

| Champ | Obligatoire |
|-------|------------|
| Titre | OUI |
| Description | OUI |
| Photo | NON |
| Catégorie | OUI |
| Communauté | NON |
| Ville | OUI |
| Adresse | OUI |
| Date | OUI |
| Heure de début | OUI |
| Heure de fin | NON |
| Nombre max de participants | NON |
| Gratuit / payant | OUI |
| Informations complémentaires | NON |

---

## 49. Intéressé et participant

| Statut | Signification |
|--------|---------------|
| **Intéressé** | Suit l'événement, ne confirme pas encore |
| **Je participe** | Confirme réellement sa présence |

Exemple : 32 intéressés · 18 participants / 25 places

---

## 50. Liste des participants

L'organisateur voit : participants confirmés · personnes intéressées · personnes ayant annulé

Pour chaque personne : photo · prénom · profil · statut

---

## 51. Contacter un participant

L'organisateur clique **Envoyer un message** — utilise le système de demande de conversation.

---

## 52. Demande de conversation

Raoul envoie un premier message à Marie. Marie reçoit : Nouvelle demande de conversation.

Options : **Accepter** · **Refuser**

---

## 53. Limite avant acceptation

> Raoul ne peut envoyer **qu'un seul message** avant acceptation.

---

## 54. États d'une demande de message

| État | Description |
|------|-------------|
| sent | Message envoyé |
| delivered | Message reçu |
| seen | Message lu |
| accepted | Demande acceptée |
| declined | Demande refusée |

> Raoul peut voir si Marie a lu sa demande.

---

## 55. Après acceptation

La conversation devient ACTIVE. Raoul et Marie peuvent envoyer : texte · images · fichiers éventuels · éléments Kangoust partagés

---

## 56. Si Marie n'a pas répondu mais accepte

L'acceptation suffit pour ouvrir la conversation.

---

## 57. Si Marie refuse

La demande est fermée. Le système doit limiter la possibilité de renvoyer immédiatement une nouvelle invitation.

---

## 58. Chat automatique après match

| Contexte | Demande requise ? |
|----------|-------------------|
| Match logement | Non — Chat ouvert automatiquement |
| Offre véhicule acceptée | Non — Chat possible |
| Événement | Oui — Demande nécessaire |

---

## 59. Chat collectif d'événement

> Fonction future recommandée. Tous les participants confirmés rejoignent une discussion liée à l'événement.

---

## 60. Communautés

**Par langue / nationalité** : Français · Italiens · Espagnols · etc.

**Par ville** : Sydney · Perth · Melbourne · Brisbane

**Par activité** : backpackers · construction · FIFO · étudiants · road trips · surf · sport

> Un utilisateur peut appartenir à plusieurs communautés.

---

## 61. Publications communautaires

> Disponible dans une version ultérieure.

Types : question · conseil · bon plan · recherche de partenaire · trajet · demande d'aide · informations locales

Actions : commenter · réagir · enregistrer · signaler

---

## 62. Module travail — première phase

Au début : **partage communautaire d'opportunités**

*Pierre apprend que son entreprise cherche deux personnes. Il publie l'information sur Kangoust.*

---

## 63. Formulaire opportunité communautaire

| Champ | Obligatoire |
|-------|------------|
| Titre | OUI |
| Métier | OUI |
| Secteur | OUI |
| Ville | OUI |
| Description | OUI |
| Expérience requise | NON |
| Certifications | NON |
| Permis | NON |
| Véhicule requis | NON |
| Date de début | NON |
| Date limite | OUI |
| Contact | OUI |
| Entreprise | NON |

> **Mention obligatoire :** Opportunité partagée par un membre de la communauté.

---

## 64. Expiration obligatoire des offres de travail

```
Publication : 10 septembre
Expiration  : 15 septembre
Le 16       : EXPIRED --> l'offre disparaît
```

---

## 65. Matching travail futur

Kangoust comparera : métier · ville · certifications · disponibilité · visa / droits au travail · expérience · permis

---

## 66. Comptes professionnels

> Disponible dans une version ultérieure.

Lors de la création : **Particulier** ou **Professionnel / Organisation**

---

## 67. Onboarding professionnel

Une entreprise sélectionne son type : agence immobilière · agence d'intérim · entreprise · restaurant / hôtel · construction / mines / agriculture · concessionnaire · association · autre

---

## 68. Profil organisation

| Champ | Obligatoire |
|-------|------------|
| Nom commercial | OUI |
| Raison sociale | OUI |
| Logo | NON |
| Description | OUI |
| Catégorie | OUI |
| ABN | NON |
| Adresse · Ville | OUI |
| Téléphone · Email | OUI |
| Site web | NON |
| Personne de contact | OUI |

---

## 69. Vérification professionnelle

| Statut | Badge |
|--------|-------|
| unverified | Aucun |
| pending | En attente |
| verified | Organisation vérifiée |
| suspended | Suspendu |

---

## 70. Agence immobilière

Une agence peut : créer son profil · publier plusieurs logements · gérer ses annonces · recevoir des intérêts et matchs · communiquer avec les candidats

> Les logements sont intégrés au même moteur de recherche que ceux des particuliers.

---

## 71. Agence d'intérim

> Disponible dans une version ultérieure.

Capacités : publier plusieurs offres · gérer les candidatures · rechercher des profils · recevoir des suggestions

---

## 72. Entreprises

Une entreprise peut publier directement ses offres.

> Offre publiée par une entreprise vérifiée.

---

## 73. Concessionnaires

> Disponible dans une version ultérieure. Des professionnels de l'automobile pourront publier plusieurs véhicules.

---

## 74. Architecture professionnelle à prévoir dès le début

> **Règle d'architecture :** Le backend doit prévoir les organisations dès la V1.

Une annonce peut appartenir à **un utilisateur** ou à **une organisation**.

Cela évite de reconstruire l'architecture plus tard.

---

## 75. Messagerie générale

| Type | Description |
|------|-------------|
| Demande de conversation | Premier contact |
| Conversation active | Après acceptation |
| Conversation automatique | Après certains matchs |
| Discussion événement | Groupe lié à un événement (futur) |

---

## 76. Fonctions chat

texte · photos · statut envoyé / livré / vu · blocage · signalement · partage d'annonce logement · partage événement · partage véhicule

---

## 77. Notifications

| Catégorie | Exemples |
|-----------|---------|
| Logement | Nouvelles suggestions, matchs |
| Véhicules | Offres reçues, matchs |
| Événements | Nouveaux participants |
| Messages | Nouvelles demandes, messages |
| Matching | Intérêts mutuels |
| Parcours | Rappels d'étapes |
| Travail | Nouvelles opportunités |
| Communauté | Publications, commentaires |
| Système | Vérification, sécurité |

---

## 78. Exemples de notifications

| Type | Message |
|------|---------|
| Logement | Un nouveau logement correspond à votre recherche. |
| Intérêt | Marie est intéressée par votre chambre. |
| Match | Vous êtes tous les deux intéressés. |
| Véhicule | Pierre vous propose 9 500 AUD. |
| Événement | Simon participe à votre événement. |
| Message | Nouvelle demande de conversation. |
| Parcours | Votre arrivée est dans 7 jours. |

---

## 79. Gestion des notifications

L'utilisateur peut choisir : **Push** · **Email** · **Notification interne**

Et désactiver certaines catégories.

---

## 80. Recherche globale

L'utilisateur peut rechercher : logement · véhicule · événement · utilisateur · communauté · guide · opportunité professionnelle (plus tard)

---

## 81. Recherches enregistrées

Une recherche peut être sauvegardée. Exemple : Chambre privée Sydney, max 320 AUD.

Kangoust continue de surveiller les nouvelles offres correspondantes.

---

## 82. Mes activités

| Section | Description |
|---------|-------------|
| Mes recherches | Recherches actives et sauvegardées |
| Mes annonces | Logements et véhicules publiés |
| Mes intérêts | Éléments marqués comme intéressants |
| Mes matchs | Matchs en cours et passés |
| Mes offres | Offres financières véhicules |
| Mes événements | Événements créés et auxquels je participe |
| Mes favoris | Éléments sauvegardés |

---

## 83. Favoris

Possibilité d'enregistrer : logement · véhicule · événement · guide · offre professionnelle · autres éléments

---

## 84. Générateur de CV australien

**Créer mon CV australien**

> Le design du CV est déjà préparé par Kangoust. L'utilisateur ne crée pas lui-même la mise en page.

---

## 85. Formulaire CV

| Section | Contenu |
|---------|---------|
| Coordonnées | nom, téléphone, email, ville, LinkedIn (facultatif) |
| Résumé professionnel | Texte libre |
| Expériences | Entreprise, poste, dates, description |
| Formations | Diplômes, établissements |
| Certifications | White Card, RSA, etc. |
| Compétences | Liste |
| Langues | Avec niveau |
| Références | Coordonnées (facultatif) |

---

## 86. Réutilisation du profil

Les données du profil **préremplissent automatiquement** le CV : métier · langues · certifications · expériences

---

## 87. Modèles CV

**V1** : Classic Australia · Trades / Construction

**Plus tard** : autres modèles sectoriels

---

## 88. Génération

```
Remplir  -->  Prévisualiser  -->  Générer PDF  -->  Télécharger
```

---

## 89. Intelligence artificielle

> L'IA ne doit pas être un gadget séparé. Elle doit **améliorer des fonctions existantes**.

---

## 90. IA pour le CV

L'utilisateur écrit : Installation électrique, prises, câblage.

Bouton **Améliorer pour mon CV** — L'IA transforme cela en formulation professionnelle.

---

## 91. Traduction professionnelle

Bouton : **Traduire en anglais professionnel**

> Très utile pour les nouveaux arrivants.

---

## 92. IA pour les descriptions

*(Version ultérieure)* améliorer une annonce · rédiger une bio · améliorer une description véhicule · améliorer un événement · expliquer certaines démarches

---

## 93. IA d'accompagnement

*(Version ultérieure)*

> Que dois-je faire avant mon arrivée ?

> Les informations réglementaires sensibles doivent toujours être basées sur des sources fiables.

---

## 94. Coffre de documents

*(Fonction future)* **Mes documents Australie** : CV · White Card · RSA · licences · certificats · autres

> Être particulièrement prudent avec les documents d'identité sensibles.

---

## 95. Vérification utilisateur

| Niveau | Description |
|--------|-------------|
| Email vérifié | À l'inscription |
| Téléphone vérifié | Optionnel |
| Identité vérifiée | Version ultérieure |

---

## 96. Système anti-spam

limitation des demandes · blocage · signalement · rate limiting · détection des comportements abusifs · modération

---

## 97. Signalements

L'utilisateur peut signaler : profil · annonce · véhicule · événement · message · publication

Motifs : fraude · spam · harcèlement · contenu inapproprié · fausse annonce · autre

---

## 98. Blocage

Si Marie bloque Raoul, Raoul ne peut plus : lui envoyer de message · lui envoyer de demande · interagir directement avec elle

---

## 99. Statuts des besoins

| Module | Action | Résultat |
|--------|--------|---------|
| Logement | J'ai trouvé mon logement | Recherche COMPLETED |
| Véhicule | J'ai trouvé mon véhicule | Recherche COMPLETED |

Les notifications liées cessent automatiquement.

---

## 100. État des annonces

| État | Description |
|------|-------------|
| draft | Brouillon |
| active | En ligne |
| paused | Mise en pause |
| completed | Besoin satisfait |
| expired | Expirée |
| closed | Fermée manuellement |
| reported | Signalée |
| removed | Supprimée par modération |

---

## 101. Rappels automatiques

| Déclencheur | Message |
|-------------|---------|
| Annonce logement ancienne | Votre logement est-il toujours disponible ? |
| Événement proche | Votre événement commence demain. |
| Offre travail proche expiration | Votre offre de travail expire dans 24 heures. |
| Recherche ancienne | Votre recherche est-elle toujours active ? |

---

## 102. Multilingue

Kangoust doit être conçu multilingue **dès le début**.

| Langue | Priorité |
|--------|---------|
| Français | V1 |
| Anglais | V1 |
| Italien | V2 |
| Espagnol | V2 |

> Les contenus système doivent utiliser un système de traduction centralisé.

---

## 103. Administration

Le back-office gère : Utilisateurs · Organisations · Vérifications · Logements · Véhicules · Événements · Opportunités · Communautés · Guides · Signalements · Notifications · Types de visas · Certifications · Catégories · Paramètres

---

## 104. Administration des guides

L'équipe Kangoust doit pouvoir : créer · modifier · publier · archiver · mettre à jour

**Sans modifier le code.**

---

## 105. Administration des catégories

Même principe pour : catégories logement · véhicules · emplois · événements · visas · certifications · communautés

---

## 106. Modération

Les administrateurs peuvent : suspendre · bannir · supprimer · fermer une annonce · traiter un signalement · vérifier une organisation

---

## 107. Monétisation

> Kangoust reste principalement **gratuit**. Les fonctions essentielles ne doivent **pas** être bloquées.

Gratuit : compte · recherche logement · participation communauté · événements · fonctions essentielles de mise en relation

---

## 108. Première monétisation : CV

| Option | Description |
|--------|-------------|
| Création | Gratuite |
| Export PDF premium | Payant |
| Optimisation IA | Payant |
| Pack CV + lettre | Payant |

---

## 109. Packs

| Pack | Contenu |
|------|---------|
| Pack CV | CV + export PDF |
| Pack recherche emploi | CV + optimisation + traduction + lettre de motivation |

---

## 110. Comptes professionnels payants

*(Version ultérieure)*

| Plan | Fonctionnalités |
|------|----------------|
| Business Free | Nombre limité d'annonces |
| Business Pro | Davantage d'annonces · analytics · profil avancé |
| Business Plus | Équipe · annonces nombreuses · statistiques · outils pro |

---

## 111. Mise en avant

*(Fonction future)*

> Une annonce sponsorisée doit rester pertinente par rapport aux critères de l'utilisateur.
> **Le paiement ne doit jamais casser le matching.**

---

## 112. Partenariats

opérateurs téléphoniques · assurances · formations · cours d'anglais · auberges · services financiers · transferts d'argent · location · partenaires spécialisés

> Les partenariats doivent toujours être **clairement identifiés**.

---

## 113. Commissions

*(Version ultérieure)* Kangoust pourrait toucher une commission sur : formations · activités · services · réservations

---

## 114. Kangoust Plus

*(Version ultérieure)*

| Fonctionnalité | Description |
|---------------|-------------|
| IA avancée | Accompagnement intelligent |
| Plusieurs CV | Multi-modèles |
| Alertes avancées | Critères fins |
| Traductions | Documents et CV |
| Outils professionnels | Personnels |

> **Ne pas bloquer le coeur communautaire.**

---

## 115. Système de paiement à prévoir

Même si peu utilisé au lancement, prévoir techniquement :

produits · commandes · paiements · abonnements · factures · transactions · coupons · remboursements

---

## 116. Roadmap

### V1 — Fondation

authentification · profils · onboarding · situation en / hors Australie · visas / projets · dashboard dynamique · parcours · guides · notifications de base

---

## 117. V2 — Logement

recherche logement · offre logement · matching · suggestions · intérêt bidirectionnel · matchs · chat · favoris · recherches sauvegardées

---

## 118. V3 — Véhicules

vente · recherche · suggestions · intérêt · offres · contre-offres · chat · marquer vendu

---

## 119. V4 — Communautés

communautés · publications · profils · interactions · entraide

---

## 120. V5 — Événements

création utilisateur · intéressés · participants · capacité · demandes de conversation · discussion événement (plus tard)

---

## 121. V6 — Opportunités professionnelles

opportunités communautaires · dates d'expiration · profil professionnel · certifications · recommandations

---

## 122. V7 — Professionnels

entreprises · agences immobilières · agences d'intérim · concessionnaires · comptes professionnels · vérification · publications multiples · outils professionnels

---

## 123. Versions suivantes

IA plus avancée · outils professionnels · partenaires · formations · services · migration (éventuellement) · premium · API partenaires

---

## 124. Navigation mobile envisagée

| Onglet | Description |
|--------|-------------|
| Accueil | Dashboard personnalisé |
| Annonces | Logement · véhicules · opportunités |
| Guide | Parcours et guides australiens |
| Messages | Conversations |
| Profil | Mon compte |

---

## 125. Philosophie UX

Kangoust ne doit pas donner l'impression :
> Voici 50 000 annonces. Débrouille-toi.

Il doit donner l'impression :
> Nous connaissons votre situation et nous allons vous montrer ce qui est pertinent pour vous.

---

## 126. Règle produit principale

Chaque fonctionnalité doit répondre **au moins à l'un** de ces objectifs :

| Objectif |
|----------|
| M'aider à **préparer** mon Australie |
| M'aider à **m'installer** |
| M'aider à **trouver** quelque chose |
| M'aider à **rencontrer** quelqu'un |
| M'aider à **accéder à une information** fiable |
| M'aider à **avancer** dans mon parcours |

---

## 127. Ce que Kangoust ne doit jamais devenir

- un clone de Facebook
- un clone de Gumtree
- un clone de Seek
- un marketplace généraliste
- un énorme catalogue d'annonces
- un réseau social sans objectif

---

## 128. Ce qui différencie Kangoust

```
Profil + Situation + Projet + Besoins
              +
          Matching
              +
      Recherche manuelle
              +
          Communauté
              +
       Accompagnement
              +
       Outils pratiques
```

---

## 129. Architecture conceptuelle finale

```
UTILISATEUR
    |
PROFIL -- Qui est-il ?
    |
CONTEXTE -- Où ? Quand arrive-t-il ? Quel projet ? Quel visa ?
    |
BESOINS -- Que cherche-t-il ?
    |
PARCOURS -- Que doit-il faire ?
    |
OFFRES DISPONIBLES -- Qu'existe-t-il ?
    |
MATCHING -- Qu'est-ce qui correspond ?
    |
SUGGESTIONS
    |
INTERET
    |
MATCH / OFFRE / PARTICIPATION
    |
MESSAGERIE
    |
ACTION REALISEE
    |
PARCOURS MIS A JOUR
```

---

## 130. Exemple complet de Marie

Marie vit en France.

1. Elle crée son compte.
2. Elle indique : France · Working Holiday · arrivée à Sydney · 15 novembre.
3. Elle renseigne : chambre privée, budget 320 AUD · souhaite acheter un van.
4. Kangoust construit son dashboard : préparation, logements, vans, guides, événements.
5. Raoul possède une chambre → Kangoust lui suggère Marie → Raoul est intéressé.
6. Marie est notifiée → elle consulte la chambre → elle est intéressée.
7. **MATCH → Chat ouvert.**
8. Marie clique : J'ai trouvé mon logement. → Recherche arrêtée.
9. Elle arrive en Australie → Dashboard évolue.
10. Kangoust l'accompagne : SIM → Banque → TFN → préparation pro.
11. Elle crée son CV australien.
12. Elle rejoint un événement → rencontre la communauté.
13. Elle achète un van via le système d'offres.
14. Quelques mois après, Marie peut elle-même **proposer une chambre** ou **aider un nouveau membre**.

**La boucle Kangoust est complète.**

---

## 131. Vision finale

> Kangoust doit progressivement construire un écosystème dans lequel ceux qui arrivent aujourd'hui deviennent les membres qui aideront ceux qui arriveront demain.
>
> Le véritable produit n'est donc pas uniquement le logement, le véhicule ou les événements.

## L'ACCOMPAGNEMENT DU PARCOURS AUSTRALIEN

*avec une communauté et un moteur intelligent de mise en relation autour de ce parcours.*

---

## 132. Résumé final en une phrase

> **Kangoust accompagne les personnes avant et après leur arrivée en Australie, comprend leur situation et leurs besoins, leur recommande les démarches, logements, véhicules, événements et opportunités pertinents, facilite des mises en relation sécurisées avec les particuliers et professionnels et leur fournit progressivement les outils nécessaires pour construire leur vie en Australie.**

---

*Document de référence Kangoust — Version 1.0 — Aout 2026*
*Ce document est le cahier des charges fonctionnel de référence pour toutes les équipes de développement.*

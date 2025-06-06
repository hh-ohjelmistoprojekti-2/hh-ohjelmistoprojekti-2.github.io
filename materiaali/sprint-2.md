---
layout: page
title: Sprint 2
permalink: /sprint-2
nav_order: 5
---

# Sprint 2

Sprintin tavoitteet projektille:

- Samat tavoitteet kuin [edellisellä sprintillä](/sprint-1).
- Sprintin user storyille on tehty työmääräarviot ja ne on jollain tavalla nähtävillä backlogista.
- Ainakin joissain feature-haarojen pull requesteissa on tehty [koodikatselmointeja](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ja ne on mergattu päähaaraan vasta koodikatselmoinnin jälkeen. [How to Review a Pull Request in GitHub the RIGHT Way](https://www.youtube.com/watch?v=lSnbOtw4izI) -video esittelee GitHubin koodikatselmointiprosessia.
- Sovellukselle on toteutettu joitain testejä ja ne suoritetaan onnistuneesti jatkuvan integraation avulla.
- Sovellus on julkaistu tuotantoympäristössä.
- Projektin dokumentaatiota on edistetty.

## Viikko 1

- Valitkaa sprintille uusi [scrum master](https://www.scrum.org/resources/what-is-a-scrum-master).
- Järjestäkää [retrospektiivi](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten.
- Suunnitelkaa user storyt sprinttiä varten ja lisätkää ne sprint backlogille.
- Muodostakaa user storyille [työmääräarviot](https://activecollab.com/blog/project-management/t-shirt-sizing) hyödyntämällä esim. [planning poker](https://www.mountaingoatsoftware.com/agile/planning-poker) -tekniikkaa. Merkatkaa työmääräarviot (esim. "t-shirt size"-skaalalla) backlogin user storyihin (esim. [labeleina](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)).
  - [Planning poker online](https://planningpokeronline.com/) on eräs työkalu planning poker -session järjestämiseen.
- Alkakaa toteuttamaan sprint backlogin user storyja.

![Planning](/assets/planning.png){: width="500" }

## Viikko 2

- Julkaiskaa sovellus tuotantoympäristössä. Tässä ohjeite julkaisuun:
  - [Spring Boot backend sovelluksen julkaisu](https://software-development-project-1.github.io/backend-deployment)
  - [Vite frontend sovelluksen julkaisu](https://software-development-project-1.github.io/frontend-deployment)
- Lisätkää linkit sovelluksen julkaistuihin versioihin repositorion `README.md`-tiedostoon.
- Edistäkää projektin dokumentaatiota. Ainakin sovelluksen tekinen käyttöohje (sovelluksen käynnistäminen, testien suoritus, jne.) ja toteutuksessa käytetyt ohjelmointikielet, sovelluskehykset ja tärkeät kirjastot on dokumentointu tarkasti.
  - REST API:en dokumentaatiossa kannattaa hyödyntää [Swagger](https://www.baeldung.com/spring-rest-openapi-documentation)-työkalua. [Esimerkkisoveluksesta](https://github.com/Kaltsoon/spring-boot-vite-example) lötyy esimerkkejä Swaggerin käytöstä.
- Toteuttakaa sovelluksen joitain automatisoituja testejä. [Esimerkkisovelluksesta](https://github.com/Kaltsoon/spring-boot-vite-example) projektista voi ottaa mallia REST API:en integraatiotestaukseen.
- Jatkakaa projektin edistämistä.

## Viikko 3

- Ottakaa käyttöön jatkuva integraatio esim. [GitHub Actionsin](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) avulla. Jatkuvan integraation tulee ainakin suorittaa testit ja varmistaa, että ohjelma kääntyy (esim. JAR:in muodostus Maven-projektissa `./mvnw package`-komennolla). [Esimerkkisovelluksessa](https://github.com/Kaltsoon/spring-boot-vite-example/blob/main/.github/workflows/ci.yml) workflow-esimerkki GitHub Actionsissa.
- Lisätkää GitHub Actions workflow [status badge](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/adding-a-workflow-status-badge) `README.md`-tiedoston alkuun.
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminallisuuksista.
- Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen sprintin katselmointia. Jos mahdollista, esitelkää katselmoinnissa sovelluksen toiminallisuuksia tuotantoympäristössä.

![Pull request](/assets/compiling.png)

---
layout: page
title: Sprint 0
permalink: /sprint-0
nav_order: 3
---

# Sprint 0

Sprintin tavoitteet projektille:

- Projektin aihe ja tärkeimmät toiminallisuudet on pääpirteittäin suunniteltu.
- Projektilla on GitHub-repositorio.
- Repositoriossa on `README.md`-tiedosto, jossa on projektin alustava kuvaus.
- Projektille on tehty backlog.
- Ensimmäistä sprinttiä varten on muodostettu user storyt ja ne on lisätty sprint backlogille.
- Projektin koodirunko on alustettu.

## Viikko 1

- [Opetustilaisuuden kalvot](../kalvot/johdanto/johdanto.pdf)
- Kurssin käytäntöjen ja tavoitteiden käsittely.
- Ketterä ohjelmistokehitys ja Scrum.
- Jakautuminen tiimeihin. Tiimin tavoitekoko on 4-5 henkilöä.
- [Palvelujen kehittämisen menetelmät (haaga-helia.fi)](https://www.haaga-helia.fi/fi/tool-factory-menetelmat-palvelujen-kehittamiseen)
- Projektiaiheiden pohtiminen tiimin kesken.
  - Pitäkää aiheen laajuus kurissa ja lähtekää liikkeelle [MVP](https://tuotejohtaminen.fi/mita-tarkoittaa-mvp-ja-mita-ei/)-toteutuksella. Kurssilla toteutetaan ohjelmistoa sillä ajatuksella, että se tulisi oikeasti käyttöön.
  - Projektissa voi hyödyntää oman tietokannan lisäksi [avoimen rajapinnan tarjoavia palveluita](/avoimet-rajapinnat).
  - Jos ette keksi aihetta tiimin kesken, ideoikaa aiheita opettajan kanssa.
- Avoimen datan lähteisiin ja avoimen lähdekoodin projekteihin tutustuminen.
- Tehkää alustava MVP-suunnitelma projektista:
  - Projektin tarkoitus tiivistettynä muutamaan virkkeeseen.
  - Joitain oleellisimpia toiminallisuuksia listattuna ja mahdollisesti priorisoituna, esimerkiksi "Käyttäjänä haluan pystyä lisäämään arvostelun kurssista".
  - Suunnitelma ei ole "sitova", se voi muuttua projektin edetessä.
  - Suunnitelmaa ei tarvitse palauttaa, mutta sitä käydään opettajan kanssa läpi ensi viikolla.

## Viikko 2

- Luokaa projektille [GitHub-repositorio](https://docs.github.com/en/get-started/quickstart/create-a-repo).
- Lisätkää projektin kuvaus GitHub-repositorion [README.md-tiedostoon](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes). Kuvauksesta tulee tässä vaiheessa tulla ilmi ainakin seuraavat asiat:
  - Alustava kuvaus projektista, jossa vastataan ainakin seuraaviin kysymyksiin:
    - Mikä on projektin nimi?
    - Mikä on toteuttavan sovelluksen tarkoitus?
    - Mitkä ovat sovelluksen tärkeimmät ominaisuudet, eli mitä sovelluksen käyttäjä voi sillä tehdä?
    - Mitä toteutusteknologioita (esim. ohjelmointikieltä, tai sovelluskehystä kuten Spring Boot, tai Django) projektin toteutuksessa tullaan käyttämään. Teknologioita ei tarvitse lukita tässä vaiheessa, ne voivat muuttua projektin edetessä.
  - Tiimin jäsenten nimet ja linkit tiimiläisten GitHub-profiileihin.
- `README.md`-tiedostossa käytettävään Markdown-syntaksiin voi tutusta tarkemmin [täällä](https://www.markdownguide.org/basic-syntax/).
- [Awesome README](https://github.com/matiassingers/awesome-readme) on kuratoitu lista hyvistä `README.md`-tiedostoista GitHub-repositorioissa, jota voi käyttää inspiraationa.
- Luokaa projektille backlog. Backlog-alustaksi suositellaan [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)-alustaa. User storyt voi toteuttaa [GitHub issueina](https://github.com/features/issues). Lisätkää linkki backlogiin `README.md`-tiedostoon.
  - [Tämä video](https://www.youtube.com/watch?v=fFrq28RY1SQ) esittelee GitHub Projectsin ja Issueiden käyttöä.
  - [Tämä video](https://www.youtube.com/watch?v=F42FN6cZmA4) esittelee GitHubin sub-issueiden käyttöä, joita voi hyödyntää mm. selkeyttämään user storien ja taskien hierarkiaa
- Määritelkää ja valitkaa user storyt ensimmäiselle sprintille ja lisätkää ne sprint backlogille.
  - [User stories with examples and a template](https://www.atlassian.com/agile/project-management/user-stories)
- Lisätkää linkki backlogiin GitHub-reposiorion `README.md`-tiedostoon
- Varmistakaa, että _GitHub-repositorio ja backlog ovat julkisia_, jotta opettaja voi tarkastella niitä.
- Tehkää projektin koodille runko. Toteutusteknologioista riippuen voitte alustaa projektin esim. [Spring Initializerin](https://start.spring.io/), tai [Viten](https://vite.dev/) avulla.

{: .highlight }
> Lisätkää Moodlen "Projektin GitHub repositorio"-palautukseen linkki projektinne GitHub-repositorioon ennen seuraavan viikon opetuskertaa. Riittää, että yksi tiimiläisistä tekee palautuksen.

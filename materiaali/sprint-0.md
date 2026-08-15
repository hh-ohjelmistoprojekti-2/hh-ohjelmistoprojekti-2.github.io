---
layout: page
title: Sprint 0
permalink: /sprint-0
nav_order: 3
---

# Sprint 0

Sprintin tavoitteet projektille:

- Projektisuunnitelmaan on kirjattu projektin aiheen kuvaus ja tärkeimmät toiminallisuudet.
- Tiimin jäsenet on lisätty GitHub organisaatioon ja projektille on tehty GitHub-repositorio.
- Repositoriossa on `README.md`-tiedosto, jossa on projektin alustava kuvaus.
- Projektille on tehty backlog.
- Ensimmäistä sprinttiä varten on muodostettu user storyt ja ne on lisätty backlogille.
- Projektin koodirunko on alustettu.

## Viikko 1

- [Ensimmäisen opetuskerran kalvot](https://github.com/hh-ohjelmistoprojekti-2/hh-ohjelmistoprojekti-2.github.io/blob/main/kalvot/johdanto.pdf):
  - Kurssin käytäntöjen ja tavoitteiden käsittely.
  - Ketterä ohjelmistokehitys ja Scrum-viitekehys kurssin kontekstissa.
- Jakaudutaan tiimeihin, jossa tiimi alkaa suunnittelemaan projektiaan. Tiimin tavoitekoko on 4-5 henkilöä.
- Keskustelkaa tiimin kesken opettajan ohjauksessa projektinne aiheesta.
  - Pitäkää aiheen laajuus kurissa ja lähtekää liikkeelle mahdollisimman karsitusta, [MVP](https://tuotejohtaminen.fi/mita-tarkoittaa-mvp-ja-mita-ei/)-toteutuksesta. Kurssilla toteutetaan ohjelmistoa sillä ajatuksella, että se tulisi oikeasti käyttöön.
  - Projektissa voi hyödyntää oman tietokannan lisäksi [avoimen rajapinnan tarjoavia palveluita](/avoimet-rajapinnat). Esimerkiksi GitHub-repositorioiden arvostelusovellus voi yhdistää [GitHub API:n](https://docs.github.com/en/rest) tarjoamaa dataa ja erillistä tietokantaa.
  - Jos ette keksi aihetta tiimin kesken, ideoikaa aiheita yhdessä opettajan kanssa.
- **Tehkää alustava projektisuunnitelma projektistanne:**
  - Kuvailkaa lyhyesti, mikä ongelma tai tarve projektilla ratkaistaan, kenelle ratkaisu on tarkoitettu ja mitä projektissa ollaan tekemässä. Kuvailkaa myös, mikä on projektin tavoiteltu lopputulos.
  - Listatkaa lisäksi vähintään viisi oleellista toiminnallisuutta, esimerkiksi _"Käyttäjänä haluan pystyä lisäämään arvostelun kurssista"_.
  - Suunnitelma ei ole sitova, vaan se voi muuttua projektin edetessä.
  - Suunnitelmaa käydään läpi yhdessä tiimin ja opettajan kesken seuraavalla opetuskerralla.

{: .highlight }

> Lisätkää Moodlen "Projektisuunnitelma"-palautukseen edellä mainitun mukainen suunnitelma ennen seuraavan viikon opetuskertaa. Riittää, että yksi tiimiläisistä tekee palautuksen.


## Viikko 2

- Luokaa tiimillenne [GitHub-organisaatio](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ja organisaatioon projektille [GitHub-repositorio](https://docs.github.com/en/get-started/quickstart/create-a-repo). Lisätkää kaikki tiimiläiset [organisaation jäseniksi](https://docs.github.com/en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
- Lisätkää projektin kuvaus GitHub-repositorion [`README.md`-tiedostoon](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes). Kuvauksesta tulee tässä vaiheessa tulla ilmi ainakin seuraavat asiat:
  - Alustava kuvaus projektista, jossa vastataan ainakin seuraaviin kysymyksiin:
    - Mikä on projektin nimi?
    - Mikä on toteutettavan sovelluksen tarkoitus?
    - Mitkä ovat sovelluksen tärkeimmät ominaisuudet, eli mitä sovelluksen käyttäjä voi sillä tehdä?
    - Mitä toteutusteknologioita (esim. ohjelmointikieltä tai sovelluskehystä kuten Spring Boot, tai Django) projektin toteutuksessa tullaan käyttämään? Teknologioita ei tarvitse lukita tässä vaiheessa, ne voivat muuttua projektin edetessä.
  - Tiimin jäsenten GitHub-käyttäjätunnukset ja linkit tiimiläisten GitHub-profiileihin.
- `README.md`-tiedostossa käytettävään Markdown-syntaksiin voi tutustua tarkemmin [täällä](https://www.markdownguide.org/basic-syntax/).
- [Awesome README](https://github.com/matiassingers/awesome-readme) on kuratoitu lista hyvistä `README.md`-tiedostoista GitHub-repositorioissa, jota voi käyttää inspiraationa.
- Luokaa projektille backlog. Backlog-alustaksi suositellaan [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)-alustaa. User storyt kannattaa toteuttaa [GitHub issueina](https://github.com/features/issues). Lisätkää linkki backlogiin `README.md`-tiedostoon.
  - [Tämä video](https://www.youtube.com/watch?v=fFrq28RY1SQ) esittelee GitHub Projectsin ja Issueiden käyttöä.
- Muodostakaa [user storyja](https://www.atlassian.com/agile/project-management/user-stories) (käyttäjätarinoita) ensimmäiselle sprintille ja lisätkää ne backlogille. Tehkää user storyista backlogille myös sopivissa määrin [taskeja](https://www.mountaingoatsoftware.com/blog/the-difference-between-a-story-and-a-task), jotka ovat teknisen toteutuksen tehtäviä, kuten _"REST API blogien listaamiselle"_.
  - User storyn formaation voi pitää lyhyenä, ilman perinteistä _"so that"_-osaa. Esimerkiksi _"Lukijana haluan nähdä listan blogeista"_.
  - [Tämä video](https://www.youtube.com/watch?v=F42FN6cZmA4) esittelee GitHubin sub-issueiden käyttöä, joita voi hyödyntää mm. selkeyttämään user storyjen ja taskien hierarkiaa. 
- Lisätkää linkki backlogiin GitHub-repositorion `README.md`-tiedostoon
- Varmistakaa, että _GitHub-repositorio ja backlog ovat julkisia_, jotta opettaja voi tarkastella niitä.
- Tehkää projektin koodille runko. Toteutusteknologioista riippuen voitte alustaa projektin esim. [Spring Initializerin](https://start.spring.io/), tai [Viten](https://vite.dev/) avulla.

{: .highlight }

> Lisätkää Moodlen "Projektin GitHub-repositorio"-palautukseen linkki projektinne GitHub-repositorioon ennen seuraavan viikon opetuskertaa. Riittää, että yksi tiimiläisistä tekee palautuksen.

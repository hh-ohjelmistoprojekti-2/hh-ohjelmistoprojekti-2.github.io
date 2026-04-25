---
layout: page
title: Sprint 4
permalink: /sprint-4
nav_order: 7
---

# Sprint 4

Sprintin tavoitteet projektille:

- Samat tavoitteet kuin [edellisellä sprintillä](/sprint-3).
- Uusien toiminnallisuuksien sijaan on keskitytty olemassa olevien toiminnallisuuksien viimeistelyyn ja mahdollisten bugien korjaamiseen.
- Projektille on määritelty [lisenssi](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
- `README.md`-tiedoston dokumentaatio on päivitetty vastaamaan projektin lopullista tilaa.
- Projektille on valmisteltu esitys loppudemoa varten.

## Viikko 1

- Valitkaa sprintille uusi [scrum master](https://www.scrum.org/resources/what-is-a-scrum-master).
- Järjestäkää [retrospektiivi](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten.
- Muodostakaa sprinttiä varten user storyja sekä niihin liittyviä taskeja ja lisätkää ne backlogille. Keskustelkaa tiimin kesken user storyjen [työmääräarvioista](https://activecollab.com/blog/project-management/t-shirt-sizing). Merkitkää työmääräarviot (esim. "t-shirt size"-skaalalla) backlogin user storyihin (esim. [labeleina](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)).
- Alkakaa toteuttamaan backlogin user storyja.

## Viikko 2

- Jatkakaa projektin edistämistä.

## Viikko 3

{: .highlight }
> Projektin deadline on {{site.project_deadline}}, jolloin pidetään loppudemot.

- Tehkää viimeisiä viimeistelyjä projektiin.
- Varmistakaa, että `README.md`-tiedostossa on dokumentoitu vähintään seuraavat:
  - Projektin nimi ja kuvaus (mm. mikä on projektin tarkoitus ja mitä toiminallisuuksia siitä löytyy).
  - Linkki backlogiin, esim. GitHub Projects -backlog.
  - Linkit tuotantoympäristöön julkaistuihin sovelluksiin (esim. backend ja frontend sovellukset).
  - Linkki [Swagger](https://www.baeldung.com/spring-rest-openapi-documentation)-dokumentaation (Rahti-sovelluksessa muotoa <https://nameofyourrahtiapp.2.rahtiapp.fi/swagger-ui/index.html>), jos REST API endpointteja on toteutettu.
  - Toteutusteknologiat (ohjelmointikielet, sovelluskehykset ja olennaisimmat kirjastot).
  - Tekniset käyttöohjeet (esim. sovelluksen käynnistys ja testien suoritus komentoriviltä).
  - Tietomallin kuvaus, mielellään esim. [ER-kaaviota](https://mermaid.ai/open-source/syntax/entityRelationshipDiagram.html) hyödyntäen.
  - Projektin [lisenssi](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminnallisuuksista.
- ⚠️ Valmistelkaa projektille _10-15 minuutin_ esitys ensi viikon loppudemoa varten. "Demoefektien" välttämiseksi on suositeltavaa tehdä toiminnallisuuksien esittelystä videonauhoite etukäteen. Käsitelkää loppudemossa ainakin seuraavat asiat:
  - Minkä on sovelluksenne tarkoitus? Minkä ongelman se ratkaisee?
  - Millä toteutusteknologioilla (ohjelmointikielet, sovelluskehykset, tärkeät kirjastot) sovellus on toteutettu?
  - Mikä on sovelluksen arkkitehtuuri pääpiirteisesti (sovelluksen eri osien kommunikointi, esim. frontend, backend, tietokanta)? Tässä ei tarvitse mennä liiallisiin teknisiin yksityiskohtiin (esim. lähdekoodin näyttämiseen).
  - Minkälainen oli ohjelmistotuotantoprosessinne? Miten toteutitte backlogit? Miten käytitte versionhallintaa (esim. branchit)? Miten käytitte jatkuvaa integraatiota?
  - Mitä käyttäjä voi tehdä sovelluksella? Esitelkää tärkeimmät toiminnallisuudet.
  - Mitä puutteita projektiin jäi?
- **Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen loppudemoa**. Esitelkää loppudemossa sovelluksen toiminnallisuuksia tuotantoympäristössä.

## Viikko 4 - lopputoimenpiteet

{: .highlight }
> Loppuraportin ja vertaisarvioinnin deadline on {{site.final_deadline}}. Molemmat ovat pakollisia kurssisuorituksen kannalta.

Ennen kurssin päättymistä jokaisen tiimiläisen tulee vielä suorittaa seuraavat lopputoimenpiteet:

- _Jokaisen tiimiläisen_ tulee kirjoittaa loppuraportti, jossa reflektoit omaa ja tiimisi työskentelyä. Palauta Moodlen "Loppuraportti"-palautukseen PDF-muotoinen loppuraportti, jossa käsittelet seuraavia teemoja:
  - Kuvaile tiiminne prosessia projektin kehittämisessä (Scrumin mukaiset tapahtumat, versionhallinnan ja jatkuvan integraation käyttö, backlogin hyödyntäminen, ym.). Mitä hyviä ja huonoja puolia prosessissa mielestäsi oli? Mitä kehittäisit prosessianne?
  - Mikä on projektinne tarkoitus? Miten hyvin toteutuksenne vastaa tätä tarkoitusta? Mitkä osat toteutuksesta on toteutettu mielestäsi erityisen hyvin? Entä missä on mahdollisesti puutteita?
  - Missä osa-alueissa onnistuitte _tiiminä_? Missä osa-alueissa jäi parantamisen varaa?
  - Missä osa-alueissa onnistuit _henkilökohtaisesti_? Missä osa-alueissa jäi parantamisen varaa?
  - Mitä opit kurssilla? Mistä olisit halunnut oppia enemmän?
- _Jokaisen tiimiläisen_ tulee tehdä itse- ja vertaisarviointi. Linkki arviointilomakkeeseen lähetetään sähköpostitse. Ota yhteyttä opettajaan, jos et saa linkkiä lomakkeeseen.
- Jotta projekti päätyy GitHub-portfolioosi, [forkkaa](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) projektinne repositorio omalle GitHub-profiilillesi. Parhaat repositoriot kannattaa "pinnata" profiiliin [tämän ohjeen](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile) mukaisesti.

## Arviointi

Oman arvioinnin tiedot löytyvät Moodlen "Loppuraportti"-palautuksesta arvioinnin valmistuttua kurssin päättymisen jälkeen.

---
layout: page
title: Sprint 2
permalink: /sprint-2
nav_order: 5
---

# Sprint 2

Sprintin tavoitteet projektille:

- Samat tavoitteet kuin [edellisellä sprintillä](/sprint-1).
- Ainakin osalle sprintin user storyista on tehty työmääräarviot ja ne on jollakin tavalla nähtävillä backlogissa.
- Ainakin osassa feature-haarojen pull requesteissa on tehty [koodikatselmointeja](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ja ne on mergattu päähaaraan vasta koodikatselmoinnin jälkeen. [How to Review a Pull Request in GitHub the RIGHT Way](https://www.youtube.com/watch?v=lSnbOtw4izI) -video esittelee GitHubin koodikatselmointiprosessia.
- ⭐ Bonus: Voitte halutessanne hyödyntää joissakin koodikatselmoinneissa [GitHubin Copilot-tekoälyagenttia](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review). Tämä vaatii [GitHub Education](https://docs.github.com/en/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student) -lisenssin aktivointia.
- Sovellukselle on toteutettu joitain testejä ja ne suoritetaan onnistuneesti jatkuvan integraation avulla.
- Sovellus on julkaistu tuotantoympäristössä ja linkki julkaistuun sovellukseen on lisätty `README.md`-tiedostoon.
- `README.md`-tiedostossa on dokumentoitu toteutusteknologiat (ohjelmointikielet, sovelluskehykset ja olennaisimmat kirjastot) ja tekniset käyttöohjeet (esim. sovelluksen käynnistäminen komentoriviltä).

## Viikko 1

- Valitkaa sprintille uusi [scrum master](https://www.scrum.org/resources/what-is-a-scrum-master).
- Järjestäkää [retrospektiivi](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten. Ottakaa retrospektiivistä talteen muistiinpanoja seuraavaa retrospektiiviä varten. Voitte hyödyntää retrospektiivin järjestämisessä esimerkiksi [Flinga](https://edu.flinga.fi/)-työkalua.
- Muodostakaa sprinttiä varten user storyja sekä niihin liittyviä taskeja ja lisätkää ne backlogille.
- Keskustelkaa tiimin kesken user storyjen toteutuksen suhteellisesta työmäärästä ja muodostakaa ainakin osalle niistä [työmääräarviot](https://activecollab.com/blog/project-management/t-shirt-sizing). Merkitkää työmääräarviot (esim. "t-shirt size"-skaalalla) backlogin user storyihin (esim. [labeleina](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)).
- Alkakaa toteuttamaan backlogin user storyja.

![Planning](/assets/planning.png){: width="500" }

## Viikko 2

- Julkaiskaa sovellus tuotantoympäristössä. Tässä ohjeita julkaisuun:
  - [Spring Boot backend sovelluksen julkaisu](https://software-development-project-1.github.io/backend-deployment)
  - [Vite frontend sovelluksen julkaisu](https://software-development-project-1.github.io/frontend-deployment)
- Lisätkää linkki julkaistuun sovellukseen `README.md`-tiedostoon.
- Dokumentoikaa `README.md`-tiedostossa toteutusteknologiat (ohjelmointikielet, sovelluskehykset ja olennaisimmat kirjastot) ja tekniset käyttöohjeet (esim. sovelluksen käynnistäminen komentoriviltä).
- Hyödyntäkää REST API endpointtien dokumentoinnissa [Swagger](https://www.baeldung.com/spring-rest-openapi-documentation)-työkalua. [Esimerkkisovelluksesta](https://github.com/hh-ohjelmistoprojekti-2/spring-boot-vite-example/blob/main/src/main/java/fi/haagahelia/messenger/controller/MessageRestController.java) löytyy esimerkkejä Swaggerin käytöstä. Lisätkää `README.md`-tiedostoon linkki Swagger dokumentaatioon (esim. <http://localhost:8080/swagger-ui/index.html> Spring Boot -sovelluksessa).
- Toteuttakaa sovelluksen joitakin automatisoituja testejä. [Esimerkkisovelluksesta](https://github.com/hh-ohjelmistoprojekti-2/spring-boot-vite-example/blob/main/src/test/java/fi/haagahelia/messenger/controller/MessageRestControllerTest.java) voi ottaa mallia REST API endpointtien integraatiotestaukseen.

## Viikko 3

- **Valmistelkaa lyhyt demo sprintin tuotoksista seuraavan opetuskerran sprintin katselmointia varten**. Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen sprintin katselmointia. Jos mahdollista, esitelkää katselmoinnissa sovelluksen toiminnallisuuksia tuotantoympäristössä.
- _Jatkuva integraatio_ mahdollistaa automatisoidun laadunhallinnan ohjelmistoprojekteissa. Lukekaa GitHubin [Continuous integration](https://docs.github.com/en/actions/get-started/continuous-integration) -ohje ja ottakaa projektissanne käyttöön jatkuva integraatio [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) -palvelun avulla. Jatkuvan integraation tulee ainakin suorittaa testit ja varmistaa, että ohjelma kääntyy (esim. JARin muodostus Maven-projektissa `./mvnw package`-komennolla). [Esimerkkisovelluksesta](https://github.com/hh-ohjelmistoprojekti-2/spring-boot-vite-example/blob/main/.github/workflows/ci.yml) löytyy GitHub Actions workflow-esimerkki.
- Lisätkää GitHub Actions workflow [status badge](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/adding-a-workflow-status-badge) `README.md`-tiedoston alkuun.
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminnallisuuksista.

![Pull request](/assets/compiling.png)

---
layout: page
title: Sprint 3
permalink: /sprint-3
nav_order: 6
---

# Sprint 3

Sprintin tavoitteet projektille:

- Samat tavoitteet kuin [edellisellä sprintillä](/sprint-2).
- Testausta on laajennettu. Jatkuva integraatio suorittaa testit onnistuneesti. Halutessanne voitte myös tarkastella projektin testikattavuutta testikattavuustyökaluilla.
- Projektin dokumentaatio on pidetty ajantasalla. Dokumentaatioon on lisätty sovelluksen tietomallin ja arkkitehtuurin kuvaus. Kaavioissa kannattaa hyödyntää GitHubin tukemaa [Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)-syntaksia.
- Fullstack-projektissa (frontend kutsuu backendin REST API -rajapintoja), voitte halutessanne toteuttaa [Token-pohjaisen autentikaation](https://medium.com/@extio/understanding-json-web-tokens-jwt-a-secure-approach-to-web-authentication-f551e8d66deb). [Esimerkkisovelluksesta](https://github.com/Kaltsoon/spring-boot-vite-example) löytyy esimerkki frontend- ja backend-toteutuksesta.

## Viikko 1

- Valitkaa sprintille uusi [scrum master](https://www.scrum.org/resources/what-is-a-scrum-master).
- Järjestäkää [retrospektiivi](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Voitte halutessanne käyttää eri Retrospektiivi-tekniikkaa, kuten [Start, Stop, Continue](https://www.teamretro.com/retrospectives/start-stop-continue-retrospective). Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten.
- Suunnitelkaa user storyt sprinttiä varten ja lisätkää ne sprint backlogille.
 Muodostakaa user storyille [työmääräarviot](https://activecollab.com/blog/project-management/t-shirt-sizing) hyödyntämällä esim. [planning poker](https://www.mountaingoatsoftware.com/agile/planning-poker) -tekniikkaa. Merkatkaa työmääräarviot (esim. "t-shirt size"-skaalalla) backlogin user storyihin (esim. [labeleina](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)).
- Alkakaa toteuttamaan sprint backlogin user storyja.

## Viikko 2

{: .highlight }

> Tämän viikon aikana vertaisryhmät tekevät toisilleen katselmointipyynnöt _ennen seuraavaa opetuskertaa_, jossa ovat rajanneet omasta projektistaan katselmoitavan osan. Lukekaa katselmointipyynnön ohjeet [täältä](/koodikatselmointi).

- Toteuttakaa sovelluksella lisää testejä. Lukekaa [Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html) -artikkeli ja miettikää, minkälaisista erilaisista testeistä voisi olla hyötyä projektinne testauksessa.
- Voitte myös tarkastella projektinne [testikattavuutta](https://www.simform.com/blog/test-coverage/) testikattavuustyökaluilla, kuten [JaCoCo](https://www.baeldung.com/jacoco) (Java), tai [Vitest](https://vitest.dev/guide/coverage) (JavaScript).
- Testikattavuuden voi ottaa myös osaksi jatkuvaa integraatiota esim. [Codecov](https://docs.codecov.com/docs/quick-start)-alustan avulla. [Esimerkkisovelluksen](https://github.com/Kaltsoon/spring-boot-vite-example/blob/main/.github/workflows/ci.yml) GitHub Actions -workflowssa on esimerkki, miten testikattavuusraportin saa lähetettyä Codecoviin.
- Jatkakaa projektin edistämistä.

## Viikko 3

{: .highlight }

> Tämän viikon aikana vertaisryhmät tekevät toisilleen koodikatselmoinnin edellisen viikon katselmointipyynnön pohjalta ja toimittavat sen _ennen seuraavaa opetuskertaa_. Lukekaa koodikatselmoinnin ohjeet [täältä](/koodikatselmointi).

- Jatkakaa projektin edistämistä.
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminallisuuksista.
- Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen sprintin katselmointia. Esitelkää katselmoinnissa sovelluksen toiminallisuuksia tuotantoympäristössä.

---
layout: page
title: Sprint 3
permalink: /sprint-3
nav_order: 6
---

# Sprint 3

Sprintin tavoitteet projektille:

- Samat tavoitteet kuin [edellisellä sprintillä](/sprint-2).
- Testausta on laajennettu. Jatkuva integraatio suorittaa testit onnistuneesti.
- Projektin dokumentaatio on pidetty ajantasalla. Dokumentaatioon on lisätty sovelluksen tietomallin ja arkkitehtuurin kuvaus. Kaavioissa kannattaa hyödyntää GitHubin tukemaa [Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)-syntaksia.

## Viikko 1

- Järjestäkää [retrospektiivi](https://www.teamretro.com/retrospectives/mad-sad-glad-retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Voitte halutessanne käyttää eri Retrospektiivi-tekniikkaa, kuten [Start, Stop, Continue](https://www.teamretro.com/retrospectives/start-stop-continue-retrospective). Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten.
- Suunnitelkaa user storyt sprinttiä varten ja lisätkää ne sprint backlogille.
 Muodostakaa user storyille [työmääräarviot](https://activecollab.com/blog/project-management/t-shirt-sizing) hyödyntämällä esim. [planning poker](https://www.mountaingoatsoftware.com/agile/planning-poker) -tekniikkaa. Merkatkaa työmääräarviot (esim. "t-shirt size"-skaalalla) backlogin user storyihin (esim. [labeleina](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)).
- Jakakaa user storyt taskeihin ja lisätkää ne sprint backlogille.
- Alkakaa toteuttamaan sprint backlogin taskeja.

## Viikko 2

{: .highlight }

> Tämän viikon aikana vertaisryhmät tekevät toisilleen katselmointipyynnöt _ennen seuraavaa opetuskertaa_, jossa ovat rajanneet omasta projektistaan katselmoitavan osan. Lukekaa katselmointipyynnön ohjeet [täältä](/koodikatselmointi).

- Toteuttakaa sovelluksella lisää testejä. Tarkastelkaa projektinne [testikattavuutta](https://www.simform.com/blog/test-coverage/) testikattavuustyökaluilla, kuten [JaCoCo](https://www.baeldung.com/jacoco), tai [Vitest]([https://vitest.dev/](https://vitest.dev/guide/coverage)).
- Testikattavuuden voi ottaa myös osaksi jatkuvaa integraatiota esim. [Codecov](https://docs.codecov.com/docs/quick-start)-alustan avulla. [Tässä](https://github.com/Kaltsoon/spring-boot-vite-example/blob/main/.github/workflows/ci.yml) GitHub Actions -workflowssa on esimerkki, miten testikattavuusraportin saa lähetettyä Codecoviin.
- Jatkakaa projektin edistämistä.

## Viikko 3

{: .highlight }

> Tämän viikon aikana vertaisryhmät tekevät toisilleen koodikatselmoinnin edellisen viikon katselmointipyynnön pohjalta ja toimittavat sen _ennen seuraavaa opetuskertaa_. Lukekaa koodikatselmoinnin ohjeet [täältä](/koodikatselmointi).

- Jatkakaa projektin edistämistä.
- Tehkää sprintin päätteeksi sprintille GitHub release. Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminallisuuksista.
- Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen sprintin katselmointia. Esitelkää katselmoinnissa sovelluksen toiminallisuuksia tuotantoympäristössä.

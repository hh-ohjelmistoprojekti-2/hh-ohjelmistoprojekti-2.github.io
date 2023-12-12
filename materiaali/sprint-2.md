---
layout: page
title: Sprint 2
permalink: /sprint-2
nav_order: 5
---

# Sprint 2

Sprintin tavoitteet projektille:

- Sprintille on _oma sprint backlog_.
- Sprintille on valittu user storyt, jotka löytyvät product backlogilta.
- Valituille user storyille on tehty työmääräarviot story pointseina.
- Sprintille valitut user storyt on jaettu teknisiksi taskeiksi ja lisätty sprint backlogiin.
- User storyjen tai taskien toteutus on tehty omissa haaroissaan ja ne on yhdistetty repositorion päähaaraan.
- Sovellukselle on toteutettu joitain testejä ja ne suoritetaan jatkuvan integraation avulla.
- Suunnitellut user storyt on toteutettu sprintin aikana.
- Sovellus on julkaistu tuotantoympäristössä.
- Projektin dokumentaatiota on edistetty. Ainakin sovelluksen käyttöohje (sovelluksen käynnistäminen, testien suoritus, jne.) ja toteutuksessa käytetyt ohjelmointikielet, sovelluskehykset ja tärkeät kirjastot on dokumentointu tarkasti. REST API:en dokumentaatiossa voi hyödyntää [Swagger](https://software-development-project-1.github.io/sprint-2#rest-api-documentation-with-swagger)-työkalua.
- Sprintille on tehty GitHub release.
- Sprintin katselmointia varten on valmisteltu lyhyt demo sprintin aikana toteutetuista toiminallisuuksista.

## Viikko 1

- Järjestäkää [retrospektiivi](https://software-development-project-1.github.io/sprint-2#retrospective), jossa käsittelette edellisen sprintin onnistumisia ja haasteita. Keksikää konkreettisia parannusehdotuksia prosessillenne tulevaa sprinttiä varten.
- Suunnitelkaa user storyt sprinttiä varten ja lisätkää ne product backlogille.
- Muodostakaa user storyille [työmääräarviot](https://software-development-project-1.github.io/sprint-2#estimation) hyödyntämällä esim. [planning poker](https://software-development-project-1.github.io/sprint-2#planning-poker) -tekniikkaa. Käyttäkää arvioissa story pointseja ja merkatkaa työmääräarviot product backlogin user storyihin.
- Jakakaa user storyt taskeihin ja lisätkää ne sprint backlogille.
- Alkakaa toteuttamaan sprint backlogin taskeja.

## Viikko 2

{: .highlight }
> Tämän viikon aikana vertaisryhmät tekevät toisilleen katselmointipyynnöt _ennen seuraavaa opetuskertaa_, jossa ovat rajanneet omasta projektistaan katselmoitavan osan. Lukekaa katselmointipyynnön ohjeet [täältä](/koodikatselmointi).

- Julkaiskaa sovellus tuotantoympäristössä, esim. [Render](https://render.com/)-alustalla. Ohjeita Spring Boot -sovelluksen tuotantonvientiin löytyy [täältä](https://software-development-project-1.github.io/sprint-1-todo#deployment).
- Jatkakaa projektin edistämistä.

## Viikko 3

{: .highlight }
> Tämän viikon aikana vertaisryhmät tekevät toisilleen koodikatselmoinnin edellisen viikon katselmointipyynnön pohjalta ja toimittavat sen _ennen seuraavaa opetuskertaa_. Lukekaa koodikatselmoinnin ohjeet [täältä](/koodikatselmointi).

- Toteuttakaa sovelluksen joitain automatisoituja testejä. [Tästä](https://github.com/Kaltsoon/spring-boot-vite-example) projektista voi ottaa mallia REST API:en integraatiotestaukseen.
- Ottakaa käyttöön jatkuva integraatio esim. [GitHub Actionsin](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) avulla. Jatkuvan integraation tulee ainakin suorittaa testit ja varmistaa, että ohjelma kääntyy (esim. JAR:in muodostus Maven-projektissa `/.mvnw package`-komennolla). [Tässä](https://github.com/Kaltsoon/spring-boot-vite-example/blob/main/.github/workflows/ci.yml) esimerkki workflow GitHub Actionsissa.
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://software-development-project-1.github.io/sprint-1#github-release). Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminallisuuksista.
- Varmistakaa, että tuotantoympäristössä on sovelluksen toimiva versio ennen sprintin katselmointia. Esitelkää katselmoinnissa sovelluksen toiminallisuuksia tuotantoympäristössä.

---
layout: page
title: Sprint 1
permalink: /sprint-1
nav_order: 4
---

# Sprint 1

Sprintin tavoitteet projektille:

- Sprintille on määritelty ja valittu user storyt, jotka löytyvät sprint backlogista.
- Sprint backlog on pidetty ajantasalla koko sprintin ajan ja sitä on hyödynnetty sprintin edistymisen seuraamiseen.
- Versionhallinnassa on käytetty päähaarasta erillistä kehityshaaraa. Valmis toiminallisuus on yhdistetty repositorion päähaaraan, eikä päähaarassa ole keskeneräistä koodia.
- Suunnitellut user storyt on pääosin toteutettu sprintin aikana.
- Sprintille on tehty GitHub release.
- Sprintin katselmointia varten on valmisteltu lyhyt demo sprintin aikana toteutetuista toiminallisuuksista.

## Viikko 1

- Viimeistelkää sprint backlog sprintin aloitusta varten.
- Päättäkää sprintin alustavasta työnjaosta ja alkakaa toteuttamaan user storyja. Pitäkää sprint backlog ajantasalla koko sprintin ajan ja hyödyntäkää sitä sprintin edistymisen seuraamisessa.
- Kerratkaa tarvittaessa versionhallinnan ja Git:in käyttöä esimerkiksi [tämän](https://tkt-lapio.github.io/git/) materiaalin avulla.

## Viikko 2

- Pitäkää ensimmäinen [daily scrum](https://www.mountaingoatsoftware.com/agile/scrum/meetings/daily-scrum) -palaveri, jossa seuraatte sprintin edistymistä. Hyödyntäkää tapaamisessa sprint backlogia. Aloittakaa jatkossa jokainen tiimin tapaaminen daily scrum -palaverilla.
- Jatkakaa projektin edistämistä.

## Viikko 3

- Lukekaa [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) -ohje.
- Tehkää päähaarasta (`main`-haara) erillinen kehityshaara (esim. `dev`-haara) keskeneräistä koodia varten, johon teette committeja (päähaaraan ei siis tehdä suoraan committeja). Yhdistäkää valmiit toiminallisuudet päähaaraan esimerkiksi [pull requestin](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) avulla. Jos haarassa on konflikteja päähaaraan kanssa, ne voi ratkaista [tämän](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) ohjeen mukaisesti. Jatkossa, yhdistäkää kehityshaara päähaaraan mahdollisimman usein, _ei ainoastaan sprintin päätteeksi_.
- Tehkää sprintin päätteeksi sprintille [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Releasen voi nimetä sprintin numeron perusteella, esim. "Sprint 1". Lisätkää releasen kuvaukseen lyhyt kuvaus sprintin aikana toteutetuista toiminallisuuksista.
- Valmistelkaa lyhyt demo sprintin tuotoksista sprintin katselmointia varten. Kertokaa lyhyesti projektistanne ja esitelkää sprintin aikana toteutettu toiminallisuus.

![Pull request](/assets/pr.webp){: width="500" }

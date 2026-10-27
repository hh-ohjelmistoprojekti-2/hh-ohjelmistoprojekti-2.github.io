---
layout: page
title: Tiimien välinen katselmointi
permalink: /katselmointi
nav_exclude: true
---

# Tiimien välinen katselmointi

Kurssilla hyödynnetään demojen lisäksi tiimien välistä katselmointia vertaispalautteen saamiseksi. Katselmoitte kurssilla itse vertaistiimin projektia ja saatte vastavuoroisesti vertaistiimiltänne palautetta omasta projektistanne. Samalla opimme katselmoimaan projektin eri osa-alueita ja antamaan rakentavaa palautetta sekä kehitysehdotuksia. Katselmointi tehdään kahdessa vaiheessa. Ensin tiimi tekee vertaistiimilleen katselmointipyynnön, jonka pohjalta itse katselmointi tehdään.

## Katselmointipyyntö

Itse katselmointia edeltää katselmointipyynnön tekeminen, jossa annatte tietoa projektistanne ja esitätte toiveita palautteen kohteista. Tehkää katselmointipyyntö seuraavasti:

1. Kuvailkaa vertaistiimille käyttäjän näkökulmasta jokin **konkreettinen tavoite**, jonka haluat heidän suorittavan sovelluksessanne. Esimerkiksi elokuvasovelluksessa tavoite voisi olla seuraava: _"Olet katsonut jonkin elokuvan ja haluat tallentaa sovellukseen arvosanasi 9/10 sekä lyhyen arvostelun siitä, miksi pidit elokuvasta"_. 
    - Pyrkikää valitsemaan tavoite jostain olennaisesta käyttäjäpolusta, josta haluatte palautetta. Tavoitteen pitäisi myös olla laajempi kuin esimerkiksi yksittäisen sivun avaaminen, tai napin painaminen.
    - Kuvailkaa tavoite selkeästi, mutta välttäkää tarkkojen ohjeiden antamista, jotta saatte palautetta käytettävyydestä.
2. Varmistakaa, että tuotantoympäristöön on julkaistu toimiva versio, jossa mainitun tavoitteen voi saavuttaa.
3. Tehkää katselmointipyyntö vertaistiimillenne luomalla GitHub-repositorioonne [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue), jonka otsikko on "Katselmointipyyntö". [Pinnatkaa issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/pinning-an-issue-to-your-repository), jotta se on helppo löytää. Käyttäkää issuen kuvauksessa alta löytyvää pohjaa.

```md
# Katselmointipyyntö

Lisätkää linkit projektin README.md-tiedostoon (ja tarvittaessa muuhun dokumentaatioon) sekä projektin julkaistuun versioon, jossa käyttäjä voi käyttää sovellustanne tavoitteenne saavuttamiseksi.

[Linkki projektin README.md-tiedostoon](LAITA_LINKKI_TÄNNE)
[Linkki projektin julkaistuun versioon](LAITA_LINKKI_TÄNNE)

## Tavoite

Olet katsonut jonkin elokuvan ja haluat tallentaa sovellukseen arvosanasi 9/10 sekä lyhyen arvostelun siitä, miksi pidit elokuvasta.
```

## Katselmointi

Tiimi tekee vertaistiimin projektille katselmoinnin heidän katselmointipyyntönsä perusteella. Tehkää katselmointi seuraavasti:

1. Avatkaa vertaistiiminne "Katselmointipyyntö"-issue GitHubissa ja lukekaa se.
2. Tehkää sen jälkeen katselmointi ja kirjatkaa havaintonne alla olevan pohjan mukaisesti. Korvatkaa pohjasta alaotsikoiden osiot omilla kommenteillanne.
3. Lisätkää alla olevan pohjan mukainen katselmointi "Katselmointipyyntö"-issuen kommentiksi.

```md
# Katselmointi

## Projektin yleiskuva

Lukekaa projektin README.md-tiedosto ja mahdolliset muut siinä mainitut olennaiset ohjeet. Sen jälkeen vastatkaa seuraaviin kysymyksiin:

- Mikä on projektin tarkoitus?
- Millä toteutusteknologioilla projekti on toteutettu?
- Pystyisittekö käynnistämään sovelluksen, tai suorittamaan sen testit ohjeiden perusteella?
- Miten projektin toimivuus on testattu?
- Olivatko edellä mainittuihin kysymyksiin helppo vastata README.md-tiedoston perusteella? Mitä puutteita siinä oli? Miten parantaisitte ohjeita?

## Käytettävyys

Pyrkikää saavuttamaan katselmointipyynnössä esitetty tavoite sovelluksessa. Linkki sovellukseen pitäisi olla katselmointipyynnössä. Kun olette saavuttaneet tavoitteen (tai pyrkineet saavuttamaan sen), vastatkaa seuraaviin kyysymyksiin:

- Oliko käyttäjäpolun suorittaminen helppoa ja sujuvaa?
- Olivatko sovelluksen toiminnot ja käyttöliittymäelementit ymmärrettäviä?
- Oliko tavoitteeseen pääseminen selkeää?
- Mitkä asiat toimivat hyvin?
- Mitkä asiat olivat epäselviä tai aiheuttivat vaikeuksia?
- Mitä parannusehdotuksia antaisit sovellukseen?
```
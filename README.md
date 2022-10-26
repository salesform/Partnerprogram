# Partnerprogram
Ha szeretnél partnerprogramot futtatni és nem egyből a SalesForm rendelési űrlapra küldenéd a látogatókat, akkor ez a script megjegyzi, hogy melyik partner 
ajánlásával jött és amíg él a látogató gépén a süti, addig tudni fogja rendeléskor, hogy kihez kötődött.


# urlapra.js

Ezt akkor használd, ha rendelési gomb van az oldalon, ami a SalesForm rendelési űrlapra visz

Mindig a </body> záró tag elé kell rakni.

A kód elmenti sütibe az utm_source taget és hozzáfűzi minden olyan linkhez aminek a class része tartalmazza ezt: aff-link

Így a OPT-In oldalra viszed és feliratkozik egy e-mail sorozatra és csak később (napok múlva) vásárol, akkor is meg tudni fogja melyik parter hozta a vásárlást.
Mindig az első érinté számít vagyis, hiába kattint később másik partneri linkre, mindig az elsőhöz írja jóvá a vásárlást.


## Használata:
- nyisd meg a js fájlt
- A tartalmát másold be a megfelelő oldal (vagy mindegyik oldal) záró body tag elé
- Ha rendelési gomb van az oldalon, ami a rendelési űrlapra visz, akkor a gomb class tartalmazza ezt: aff-link
 
 
 # beagyazva.js

Ezt akkor használd, ha beágyaztad a rendelési űrlapot a honlapodba.

A kód hozzáfűzi az Iframe-hez a partneri azonosítót, ha az Iframe ID tartalmazza ezt: aff



## Használata:
- nyisd meg a js fájlt
- A tartalmát másold be a megfelelő oldal (vagy mindegyik oldal) záró body tag elé
- Az Iframe ID tartalmazza ezt: aff



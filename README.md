[![Deploy to Heroku](https://github.com/lucasish/weatherfrontend/actions/workflows/main.yml/badge.svg)](https://github.com/lucasish/weatherfrontend/actions/workflows/main.yml)

# weatherfrontendnew

#Funktionsweise

Die Navigation über die Seiten geschieht über die Navbar oben rechts. 

Unter Home: Bekommt der User eine kurze Einweisung in unsere App. 

Unter Über uns: Bekommt er Informationen zu den Glücklichen die das Vergnügen hatten dieses Projekt zu programmieren. 

Unter Wetter: Bekommt der User vordefinierte Cards mit Wetterinformationen. Der User kann hier eine neue Stadt anlegen die dann in der Datenbank 
gespeichert wird. Die Wetterdaten werden aus einer Wetterdatenbank gefetched. 
Falls die Tempratur größer als 22 Grad ist bekommt der User den Text "Yay, heute ist es recht warm in". Andernfalls sieht der User den Text "Brrr, heute ist es eher kühl in".
Weiterhin erhält er den Text "Dafür ist es jedoch nicht so windig." wenn die Windgeschwindigkeit unter 5 ist oder "Außerdem ist es sehr stürmisch" wenn sie über 5 ist.
Von der Wetterdatenbank erhalten wir eine Id die wir dann in einen Link einbauen und so für jede Stadt das passende Wettericon erhalten. 
Die App ist nur valide vom Backend her, dass heißt wenn die Stadt mindestens 3 Buchstaben hat und nicht leer ist, wird die Eingabe akzeptiert.
Eine Validierung, ob die eingegebene Stadt existiert, geschieht nicht. Weiterhin können alle benutzerdefinierten Städte durch einen Button gelöscht werden. 
Tooltips an den jeweiligen Buttons geben genauere Auskunft. Man kann über die Navbar das Wort "Wetter" wieder zur Home Seite wechseln.

# Port: 
http://localhost:300/
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

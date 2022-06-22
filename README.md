[![Deploy to Heroku](https://github.com/lucasish/weatherfrontend/actions/workflows/main.yml/badge.svg)](https://github.com/lucasish/weatherfrontend/actions/workflows/main.yml)

# weatherfrontendnew

#Funktionsweise

Die Navigation über die Seiten geschieht über die Navbar oben rechts. 

Unter Home: Bekommt der User eine kurze Einweisung in unsere App. 

Unter Über uns: Bekommt er Informationen zu den glücklichen die dies programmiert haben. 

Unter Wetter: Bekommt der User vordefinierte Cards mit Wetterinformationen. Der User kann hier eine neue Stadt anlegen die dann in der Datenbank 
gespeichert wird. Die Wetterdaten werden aus einer Wetterdatenbank gefetched. 
Falls die Tempratur größer als 22 Grad ist bekommt der User den Text "Yay, heute ist es recht warm in". Andernfalls sieht der User den Text "Brrr, heute ist es eher kühl in".
Von der Wetterdatenbank erhalten wir eine Id die wir dann in einen Link einbauen und so für jede Stadt das passende Wettericon erhalten. 
Die App ist nur valide vom Backend her, dass heißt wenn die Stadt mindestens 3 Buchstaben hat und nicht leer ist, wird die Eingabe akzeptiert.
Eine Validierung ob die eingegebene Stadt existiert geschieht nicht. 

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

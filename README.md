
# Demo
demo: [https://eatsjobs.github.io/mastermind](https://eatsjobs.github.io/mastermind)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Mastermind
Conosci il gioco Master Mind? 

Consiste nel cercare di dedurre per tentativi un codice segreto. 

Ecco qualche indicazione per realizzare il gioco:

·  ad ogni partita bisogna scoprire un codice che consiste in una sequenza di tre cifre nel range 0-9

·  ad ogni turno il giocatore fa un tentativo proponendo una sequenza di tre cifre

·  se la sequenza proposta ad un turno corrisponde al codice segreto allora il giocatore ha vinto

·  altrimenti il giocatore ottiene un indizio che consiste in due numeri: 

o il numero di cifre che egli ha indovinato essere nel codice segreto ma che ha collocato in una posizione errata della sequenza (aka “numero giusto posto sbagliato”)

o il numero di cifre che egli ha indovinato essere nel codice segreto e che sono anche nel posto giusto della sequenza (aka “numero giusto posto giusto”)

·  in qualsiasi momento il giocatore si può arrendere e in quel caso gli viene rivelata la combinazione segreta

Ulteriori sviluppi (facoltativo)

Se hai del tempo da impiegare e vuoi arricchire il programma con altre funzionalità, considera i seguenti desiderata che potrei avere come utente:

·  duello: due giocatori si sfidano, ciascuno stabilisce un codice segreto e cerca di indovinare il codice segreto dell’altro, alternandosi a turno nei tentativi

·  configurazione: potrei voler regolare la difficoltà del gioco stabilendo di quante cifre consiste la sequenza del codice segreto, oppure ampliando o restringendo il numero di simboli ammessi

·  top ten: ad ogni partita il gioco potrebbe darmi un punteggio per la risoluzione, basato sul tempo che ci metto a scoprire una combinazione o sul numero di tentativi che ho a disposizione. Come giocatore vorrei che il programma mi desse la top ten dei giocatori migliori.
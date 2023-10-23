# Projet 9 : Billed :bookmark_tabs:



## Organiser son espace de travail :
Pour une bonne organization, 
vous pouvez créer un dossier `bill-app` dans lequel vous allez cloner le projet backend et par la suite, le projet frontend:


### :red_circle: Clonez le projet backend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
```

```
bill-app/
   - Billed-app-FR-Back
```

### :red_circle: Clonez le projet frontend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git
```

```
bill-app/
   - Billed-app-FR-Back
   - Billed-app-FR-Front
```

## Comment lancer l'application en local ?

### Etape :one: - Lancer le backend :

- Accédez au répertoire du back-end : `cd Billed-app-FR-Back`
- Installez les dépendances : ` npm install `
- Lancez le serveur back-end : ` npm run run:dev `

:arrow_right: L'api est accessible sur le port `5678` en local, c'est à dire `http://localhost:5678`

### Etape :two: - Lancer le frontend :

- Accédez au répertoire du front-end : `cd Billed-app-FR-Front`
- Installez les packages : ` npm install `
- Installez live-server pour lancer un serveur local : `npm install -g live-server`
- Lancez le front-end : ` npm start `

:arrow_right: Puis allez à l'adresse : `http://127.0.0.1:8080/`

--- 

## Comment lancer tous les tests en local avec Jest ?

```
$ npm run test
```

## Comment lancer un seul test ?

### Installez jest-cli :

```
$npm i -g jest-cli
$jest src/__tests__/your_test_file.js
```

## Comment voir la couverture de test ?

`http://127.0.0.1:8080/coverage/lcov-report/`


---

### Comptes et utilisateurs :

Vous pouvez vous connecter en utilisant les comptes:

#### :woman:    Administrateur : 
```
utilisateur : admin@test.tld 
mot de passe : admin
```
#### :man:    Employé :
```
utilisateur : employee@test.tld
mot de passe : employee
```

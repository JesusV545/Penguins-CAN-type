# Penguins CAN type [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
In this progressive web application, the user has the capability to use a text editor straight from the browser. The user is able to use this application offline. Features such as service workers and indexedDB are used to make the application experience smoother and more efficient.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## How to use
Once the code has loaded, simply open up the intergrated terminal and type the command `npm i` to install the app dependecies. Secondly, type the command `npm run build` to build the application. Lastly, type the command `npm run start:dev` to initiate the server.

## At a Glance
![2023-05-01](https://user-images.githubusercontent.com/117941643/235572765-9f8ddbc3-cb54-4744-9dfa-1849ef30dbf8.png)
![2023-05-01 (3)](https://user-images.githubusercontent.com/117941643/235572800-7f6f5c52-be88-419b-b7b2-623a88119a80.png)

## Tools and Technology Used
      "@babel/core": "^7.15.0",
      "@babel/plugin-transform-runtime": "^7.15.0",
      "@babel/preset-env": "^7.15.0",
      "@babel/runtime": "^7.15.3",
      "babel-loader": "^8.2.2",
      "css-loader": "^6.2.0",
      "html-webpack-plugin": "^5.3.2",
      "http-server": "^0.11.1",
      "style-loader": "^3.2.1",
      "webpack": "^5.51.1",
      "webpack-cli": "^4.8.0",
      "webpack-dev-server": "^4.0.0",
      "webpack-pwa-manifest": "^4.3.0",
      "workbox-webpack-plugin": "^6.2.4"


### Links
https://github.com/JesusV545/Penguins-CAN-type

https://penguins-can-type.herokuapp.com/


#### Developer's Note
It's always nice to know that even birds with flippers can type.

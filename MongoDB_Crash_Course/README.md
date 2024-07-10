[Home](/) \| [e4c Training](/e4cTraining)

# MongoDB & Mongoose Tutorials

## Comments

...

P.S.  The guy in the Mongoose video needs to switch to Decafe and decide it's okay to have an hour long video instead of just 30 minutes.  The rapid fire speaking
actually made me quesy and made it impossible to follow along in any reasonable manner.  I had to go back and take it in micro-chunks and pause a lot which
totally defeats the purpose of speeding up the video in the first place... 

## Training Materials

The e4c basic NodeJS training uses the following videos: 

[MongoDB Crash Course 2022](https://www.youtube.com/watch?v=2QQGWYe7IDU) by Traversy Media<br>
[Mongoose Crash Course - Beginner Through Advanced](https://www.youtube.com/watch?v=DZBGEVgL2eE) by Web Dev Simplified

## Setup

- IDE used was VSCode.  
- [MongoDB v7.0.12 for Windows x64](https://www.mongodb.com/try/download/community) was installed locally.  Additionally, MongoDB Compass was installed by leaving the checkbox
selected.
- [MongoDB Shell v2.2.10 for Windows x64](https://www.mongodb.com/try/download/shell).  Usage statistics were disabled using disableTelemetry() at the command prompt.
- MongoDB for VS Code v1.6.0 (telemetry disabled in extension settins)
- JSDoc was used to document it with a README.md used by GitPgaes.  
```sh
jsdoc -c .\conf.json . 
```
- Added ESLint to the mix.  Installed via 
```sh
npm i -D eslint
```
- MongoDB Driver for NodeJS.  Installed via
```sh
npm i mongodb
```

## ToDo

 - Create a build process to automatically run JSDoc since I keep forgetting it.

## Documentation

[Documentation](./docs)<br>
[ScreenShots](./screenshots.md)

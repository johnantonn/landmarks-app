# landmarks-app

A MEAN application displaying information about famous landmarks!

## Prerequisites

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22 and it is implemented with the MEAN stack. The following packages need to be installed to run this project:

- Node.js
- Angular CLI

## Application

Information about the application.

### General

Landmarks application displays information about famous landmarks! It provides a typical guest functionality that involves a list of the landmarks, as well as a page with more details about an individual landmark. Furthermore, it provides an administration panel, where an authenticated adiministrator can update information about landmarks, upload images of them etc.

### Technology stack

The application (front-end module) is composed of different components written using the following technologies:

- HTML
- CSS
- Bootstrap
- Angular
- Parse

More details about the various frameworks/packages utilized by the app can be found in *package.json*.

### Components

The application consists of models, components and services. More specifically, the basic component tree structure is as below:

- header
- homepage
- guest
  - landmarkList
  - landmarkDetails
- admin
  - login
  - dashboard
  - dashboardDetails
  - image-upload
- page-not-found

## How to run the application

This repo is the front-end application of a full-stack MEAN project. In order to run, it requires a back-end server which has been developed in a separate repo. In order to run the code successfully, follow the steps below:

- Clone the back-end repo [https://github.com/johnantonn/landmarks-server](https://github.com/johnantonn/landmarks-server) and start the server. See more details in the repo's README.md.
- Clone this repo (front-end Angular application) and install its dependencies by running `npm install`.
- Start the app by executing `ng serve`. Navigate to `http://localhost:4200/` where the web app environment is available.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

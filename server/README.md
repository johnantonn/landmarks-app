# landmarks-server

This is the back-end server repo of the Landmarks MEAN application.

## About

The project is forked from [parse-server-example](https://github.com/parse-community/parse-server-example) and uses the [parse-server](https://github.com/ParsePlatform/parse-server) module on Express.

The forked repo was enhanced with functionality to support the API requests of the Landmark application front-end module. The main functionality of the back-end is to serve landmark-based requests, such as the retrieval and update of landmark documents from a MongoDB instance, via the Parse server SDK, the authorization/authentication of users, the upload of images on the server etc.

The particular versions used are:
* Parse server v2.7.4
* Parse SDK 1.1.1

More details on the utilized packages can be found in package.json.

## Prerequisites

Make sure you have at least Node 4.3. `node --version`

## Start the server

* Clone this repo and change directory to it
* Install dependencies by running `npm install`
* Have a MongoDB installation locally or remotely (e.g. MongoDB Atlas)
* Set a .env file with the appropriate environmental variables (sample provided):
  * MONGODB_URI
  * APP_ID
  * MASTER_KEY
  * SERVER_URL
* Run the server with: `npm start`

After startup, the server is able to listen and respond to incoming requests, either from the front-end module or from an external source such as POSTMAN.

## Sample data

Sample data, including json landmark objects and respective photos, can be found inside the directory *sample-data*.

## References

The below guides/tutorials were found to be valuable in the process of familiarizing with Parse:

* [https://www.youtube.com/playlist?list=PL-TLnxxt_AVFEOlCFBHBG_BbpaF3UX-EU](https://www.youtube.com/playlist?list=PL-TLnxxt_AVFEOlCFBHBG_BbpaF3UX-EU)
* [https://docs.parseplatform.org/js/guide/](https://docs.parseplatform.org/js/guide/)

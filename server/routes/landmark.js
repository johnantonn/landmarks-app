const express = require("express");
const router = express.Router();
const Parse = require('parse/node');

/**
* @api {get} /landmarks/ Get all landmarks
* @apiVersion 1.0.0
* @apiName GetLandmarks
* @apiGroup Landmarks
* @apiHeader {String="APP_ID"} X-Parse-Application-Id Application's unique identifier.
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Array[Object]} landmarks Array of Landmark objects including fields {title, short_info, photo, photo_thumb}.
* @apiSuccessExample {json} Success-Response:
*     HTTP 200 OK
*     {
*      [
*       {
*         "title": "Mall of the Emirates",
*         "short_info": "Mall of the Emirates (Arabic: مول الإمارات‎) is a shopping mall in Dubai..",
*         "createdAt": "2020-01-23T16:34:08.807Z",
*         "updatedAt": "2020-01-29T17:28:06.659Z",
*         "photo": {
*           "__type": "File",
*           "name": "0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg",
*           "url": "http://localhost:1337/parse/files/app/0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg"
*         },
*         "photo_thumb": {
*           "__type": "File",
*           "name": "5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg",
*           "url": "http://localhost:1337/parse/files/app/5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg"
*         },
*         "objectId": "aiJp3Nzzv3"
*       },
*       {
*         "title": "Ski Dubai",
*         "short_info": "Ski Dubai is an indoor ski resort with 22,500 square meters of indoor ski area..",
*         "createdAt": "2020-01-23T16:32:52.908Z",
*         "updatedAt": "2020-01-29T17:28:48.745Z",
*         "photo": {
*           "__type": "File",
*           "name": "466d9db090fb4f678d90547057132907_SkiDubai7176.jpg",
*           "url": "http://localhost:1337/parse/files/app/466d9db090fb4f678d90547057132907_SkiDubai7176.jpg"
*          },
*         "photo_thumb": {
*           "__type": "File",
*           "name": "62e1be5057fd7a165a968ff13a8bccee_thumbSkiDubai7176.jpg",
*           "url": "http://localhost:1337/parse/files/app/62e1be5057fd7a165a968ff13a8bccee_thumbSkiDubai7176.jpg"
*         },
*         "objectId": "aHsMEXYSBA"
*       },
*       ...
*      ]
*     }
*/
router.get("/landmarks/", async (req, res) => {
  try {
    const Landmark = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmark);
    query.select("_id", "title", "short_info", "photo", "photo_thumb");
    query.ascending("order");
    const landmarksList = await query.find();
    return res.status(200).json(landmarksList);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

/**
* @api {get} /landmarks/:LANDMARK_ID Get landmark by id
* @apiVersion 1.0.0
* @apiName GetLandmarkById
* @apiGroup Landmarks
* @apiHeader {String="APP_ID"} X-Parse-Application-Id Application's unique identifier.
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Object} landmark Landmark object including all fields.
* @apiSuccessExample {json} Success-Response:
*     HTTP 200 OK
*     {
*       {
*         "title": "Mall of the Emirates",
*         "short_info": "Mall of the Emirates (Arabic: مول الإمارات‎) is a shopping mall in Dubai..",
*         "description": "The multi-level shopping mall currently features more than 630 retail outlets..",
*         "url": "http://www.malloftheemirates.com/",
*         "order": 8,
*         "createdAt": "2020-01-23T16:34:08.807Z",
*         "updatedAt": "2020-01-29T17:28:06.659Z",
*         "photo": {
*           "__type": "File",
*           "name": "0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg",
*           "url": "http://localhost:1337/parse/files/app/0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg"
*         },
*         "photo_thumb": {
*           "__type": "File",
*           "name": "5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg",
*           "url": "http://localhost:1337/parse/files/app/5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg"
*         },
*         "objectId": "aiJp3Nzzv3"
*       }
*     }
*/
router.get("/landmarks/:LANDMARK_ID", async (req, res) => {
  try {
    const Landmark = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmark);
    const landmark = await query.get(req.params.LANDMARK_ID);
    return res.status(200).json(landmark);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

/**
* @api {put} /landmarks/:LANDMARK_ID Update landmark
* @apiVersion 1.0.0
* @apiName UpdateLandmark
* @apiGroup Landmarks
* @apiHeader {String="APP_ID"} X-Parse-Application-Id Application's unique identifier.
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Boolean} ok Boolean indicating if the request succeeded.
* @apiSuccess {String} message Indicative success message.
* @apiSuccessExample {json} Success-Response:
*     HTTP 200 OK
*     {
*       "ok": true,
*       "message": "Updated PjqimEr2kQ"
*     }
*/
router.put("/landmarks/:LANDMARK_ID", async (req, res) => {
  try {
    const Landmark = Parse.Object.extend("Landmark");
    const query = new Parse.Query(Landmark);
    const landmark = await query.get(req.params.LANDMARK_ID);
    if(req.body.landmark.title) landmark.set("title", req.body.landmark.title);
    if(req.body.landmark.short_info) landmark.set("short_info", req.body.landmark.short_info);
    if(req.body.landmark.description) landmark.set("description", req.body.landmark.description);
    if(req.body.landmark.url) landmark.set("url", req.body.landmark.url);
    await landmark.save(null, { sessionToken: req.body.sessionToken });
    return res.status(200).json({ ok: true, message: `Updated ${req.params.LANDMARK_ID}`});
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Parse = require('parse/node');
const multer = require('multer');
const sharp = require('sharp');

// Use multer memory storage
const storage = multer.memoryStorage()

// Multer filters
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer upload config
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5242880
  },
  fileFilter: fileFilter
});

/**
* @api {put} /landmarks/:LANDMARK_ID Upload image to a Landmark object
* @apiVersion 1.0.0
* @apiName UploadLandmarkImage
* @apiGroup Landmarks
* @apiHeader {String="APP_ID"} X-Parse-Application-Id Application's unique identifier.
* @apiHeader {String="multipart/form-data"} Content-Type Content type of the request.
* @apiSuccess {Boolean} ok Boolean indicating if the request succeeded.
* @apiSuccess {String} message Indicative success message.
* @apiSuccessExample {json} Success-Response:
*     HTTP 200 OK
*     {
*       "ok": true,
*       "message": "Uploaded image for PjqimEr2kQ"
*     }
*/router.post("/landmarks/:LANDMARK_ID/image", upload.single("landmarkImage"), async (req, res, ) => {
  if(req.headers.sessiontoken){
    try {
      // Full and thumb images to Parse server
      const encodedFull = req.file.buffer.toString('base64');
      const parseImageFull = new Parse.File(req.file.originalname, {base64: encodedFull});
      await parseImageFull.save();
      const resized = await sharp(req.file.buffer).rotate().resize(250, 250).toBuffer();
      const encodedThumb = resized.toString('base64');
      const parseImageThumb = new Parse.File('thumb'+req.file.originalname, {base64: encodedThumb});
      await parseImageThumb.save();
      // Landmark object update
      const Landmark = Parse.Object.extend("Landmark");
      const query = new Parse.Query(Landmark);
      const landmark = await query.get(req.params.LANDMARK_ID);
      landmark.set('photo', parseImageFull);
      landmark.set('photo_thumb', parseImageThumb)
      landmark.save(null, { sessionToken: req.headers.sessiontoken });
      return res.status(200).json({ ok: true, message: `Uploaded image for ${req.params.LANDMARK_ID}`});
    } catch (error) {
      return res.status(500).json({ ok: false, message: error.message });
    } 
  } else return res.status(500).json({ ok: false, message: 'Unauthorized access' });
})

// Handle file max size error (multer)
router.use(function (err, req, res, next) {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(500).send({ ok: 'false', message: 'File is too big (up to 5mb allowed)' });
  }
})

module.exports = router;
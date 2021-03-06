define({ "api": [
  {
    "type": "get",
    "url": "/landmarks/:LANDMARK_ID",
    "title": "Get landmark by id",
    "version": "1.0.0",
    "name": "GetLandmarkById",
    "group": "Landmarks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"APP_ID\""
            ],
            "optional": false,
            "field": "X-Parse-Application-Id",
            "description": "<p>Application's unique identifier.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "landmark",
            "description": "<p>Landmark object including all fields.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  {\n    \"title\": \"Mall of the Emirates\",\n    \"short_info\": \"Mall of the Emirates (Arabic: مول الإمارات‎) is a shopping mall in Dubai..\",\n    \"description\": \"The multi-level shopping mall currently features more than 630 retail outlets..\",\n    \"url\": \"http://www.malloftheemirates.com/\",\n    \"order\": 8,\n    \"createdAt\": \"2020-01-23T16:34:08.807Z\",\n    \"updatedAt\": \"2020-01-29T17:28:06.659Z\",\n    \"photo\": {\n      \"__type\": \"File\",\n      \"name\": \"0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg\"\n    },\n    \"photo_thumb\": {\n      \"__type\": \"File\",\n      \"name\": \"5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg\"\n    },\n    \"objectId\": \"aiJp3Nzzv3\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/landmark.js",
    "groupTitle": "Landmarks"
  },
  {
    "type": "get",
    "url": "/landmarks/",
    "title": "Get all landmarks",
    "version": "1.0.0",
    "name": "GetLandmarks",
    "group": "Landmarks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"APP_ID\""
            ],
            "optional": false,
            "field": "X-Parse-Application-Id",
            "description": "<p>Application's unique identifier.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "landmarks",
            "description": "<p>Array of Landmark objects including fields {title, short_info, photo, photo_thumb}.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n [\n  {\n    \"title\": \"Mall of the Emirates\",\n    \"short_info\": \"Mall of the Emirates (Arabic: مول الإمارات‎) is a shopping mall in Dubai..\",\n    \"createdAt\": \"2020-01-23T16:34:08.807Z\",\n    \"updatedAt\": \"2020-01-29T17:28:06.659Z\",\n    \"photo\": {\n      \"__type\": \"File\",\n      \"name\": \"0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/0ba666ccd61988bbfdc548d7b41b4deb_Mall_of_the_Emirates.jpg\"\n    },\n    \"photo_thumb\": {\n      \"__type\": \"File\",\n      \"name\": \"5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/5435ac417eb9f70a66d8fdf99461193c_thumbMall_of_the_Emirates.jpg\"\n    },\n    \"objectId\": \"aiJp3Nzzv3\"\n  },\n  {\n    \"title\": \"Ski Dubai\",\n    \"short_info\": \"Ski Dubai is an indoor ski resort with 22,500 square meters of indoor ski area..\",\n    \"createdAt\": \"2020-01-23T16:32:52.908Z\",\n    \"updatedAt\": \"2020-01-29T17:28:48.745Z\",\n    \"photo\": {\n      \"__type\": \"File\",\n      \"name\": \"466d9db090fb4f678d90547057132907_SkiDubai7176.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/466d9db090fb4f678d90547057132907_SkiDubai7176.jpg\"\n     },\n    \"photo_thumb\": {\n      \"__type\": \"File\",\n      \"name\": \"62e1be5057fd7a165a968ff13a8bccee_thumbSkiDubai7176.jpg\",\n      \"url\": \"http://localhost:1337/parse/files/app/62e1be5057fd7a165a968ff13a8bccee_thumbSkiDubai7176.jpg\"\n    },\n    \"objectId\": \"aHsMEXYSBA\"\n  },\n  ...\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/landmark.js",
    "groupTitle": "Landmarks"
  },
  {
    "type": "put",
    "url": "/landmarks/:LANDMARK_ID",
    "title": "Update landmark",
    "version": "1.0.0",
    "name": "UpdateLandmark",
    "group": "Landmarks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"APP_ID\""
            ],
            "optional": false,
            "field": "X-Parse-Application-Id",
            "description": "<p>Application's unique identifier.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Boolean indicating if the request succeeded.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Indicative success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"ok\": true,\n  \"message\": \"Updated PjqimEr2kQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/landmark.js",
    "groupTitle": "Landmarks"
  },
  {
    "type": "put",
    "url": "/landmarks/:LANDMARK_ID",
    "title": "Upload image to a Landmark object",
    "version": "1.0.0",
    "name": "UploadLandmarkImage",
    "group": "Landmarks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"APP_ID\""
            ],
            "optional": false,
            "field": "X-Parse-Application-Id",
            "description": "<p>Application's unique identifier.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"multipart/form-data\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ok",
            "description": "<p>Boolean indicating if the request succeeded.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Indicative success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"ok\": true,\n  \"message\": \"Uploaded image for PjqimEr2kQ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/image.js",
    "groupTitle": "Landmarks"
  }
] });

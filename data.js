var APP_DATA = {
  "scenes": [
    {
      "id": "0-prayer-room",
      "name": "prayer room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.55489559720478,
        "pitch": 0.12688319090128708,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.8045572904792433,
          "pitch": 0.1832528172882899,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.017492079972710073,
        "pitch": 0.0017754809211236733,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.317378409586933,
          "pitch": 0.05429730905633434,
          "rotation": 4.71238898038469,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.02424757370254227,
          "pitch": 0.1691852193063248,
          "rotation": 0,
          "target": "4-wash-basin"
        },
        {
          "yaw": 0.7077461900778044,
          "pitch": 0.20898267323193487,
          "rotation": 4.71238898038469,
          "target": "5-kitchen-"
        },
        {
          "yaw": 1.2609985723988828,
          "pitch": 0.19135505557456156,
          "rotation": 1.5707963267948966,
          "target": "0-prayer-room"
        },
        {
          "yaw": 2.932170658813887,
          "pitch": 0.11956662346938884,
          "rotation": 0,
          "target": "3-cyard"
        },
        {
          "yaw": -1.111248148177875,
          "pitch": 0.1734070226703981,
          "rotation": 1.5707963267948966,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cyard",
      "name": "c.yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.789076420378933,
        "pitch": 0.11706424032916907,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.6392050749029323,
          "pitch": 0.15218622773402046,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash-basin",
      "name": "wash basin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.005370243852283352,
        "pitch": 0.012611091282062503,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.4002890264420547,
          "pitch": 0.029019970293816755,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen-",
      "name": "KITCHEN ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0058940482344454,
          "pitch": 0.14065038879391523,
          "rotation": 4.71238898038469,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

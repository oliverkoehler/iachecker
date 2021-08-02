let https = require('https')
let alerts = {
    "en":[
        {"name": "showcase.alerts.cheer", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-cheer-ia.webm"},
        {"name": "showcase.alerts.donation", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-donation-ia.webm"},
        {"name": "showcase.alerts.follower", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-follower-ia.webm"},
        {"name": "showcase.alerts.host", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-host-ia.webm"},
        {"name": "showcase.alerts.raid", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-raid-ia.webm"},
        {"name": "showcase.alerts.subscriber", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-alert-subscriber-ia.webm"}
    ],
    "de":[
        {"name": "showcase.alerts.cheer", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-cheer-ia.webm"},
        {"name": "showcase.alerts.donation", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-donation-ia.webm"},
        {"name": "showcase.alerts.follower", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-follower-ia.webm"},
        {"name": "showcase.alerts.host", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-host-ia.webm"},
        {"name": "showcase.alerts.raid", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-raid-ia.webm"},
        {"name": "showcase.alerts.subscriber", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-alert-subscriber-ia.webm"}
    ],
    "es":[
        {"name": "showcase.alerts.cheer", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-cheer-ia.webm"},
        {"name": "showcase.alerts.donation", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-donation-ia.webm"},
        {"name": "showcase.alerts.follower", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-follower-ia.webm"},
        {"name": "showcase.alerts.host", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-host-ia.webm"},
        {"name": "showcase.alerts.raid", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-raid-ia.webm"},
        {"name": "showcase.alerts.subscriber", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-alert-subscriber-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.alerts.cheer", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-cheer-ia.webm"},
        {"name": "showcase.alerts.donation", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-donation-ia.webm"},
        {"name": "showcase.alerts.follower", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-follower-ia.webm"},
        {"name": "showcase.alerts.host", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-host-ia.webm"},
        {"name": "showcase.alerts.raid", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-raid-ia.webm"},
        {"name": "showcase.alerts.subscriber", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-alert-subscriber-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.alerts.cheer", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-cheer-ia.webm"},
        {"name": "showcase.alerts.donation", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-donation-ia.webm"},
        {"name": "showcase.alerts.follower", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-follower-ia.webm"},
        {"name": "showcase.alerts.host", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-host-ia.webm"},
        {"name": "showcase.alerts.raid", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-raid-ia.webm"},
        {"name": "showcase.alerts.subscriber", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-alert-subscriber-ia.webm"}
    ]
}

let desktop = {
    "en":[
        {"name": "showcase.desktop", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-desktop-wallpaper-ia.webm"}
    ],
    "de":[
        {"name": "showcase.desktop", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-desktop-wallpaper-ia.webm"}
    ],
    "es":[
        {"name": "showcase.desktop", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-desktop-wallpaper-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.desktop", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-desktop-wallpaper-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.desktop", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-desktop-wallpaper-ia.webm"}
    ]
}

let intermission = {
    "en":[
        {"name": "showcase.intermission.ending", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-intermission-ending-ia.webm"},
        {"name": "showcase.intermission.offline", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-intermission-offline-ia.webm"},
        {"name": "showcase.intermission.pause", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-intermission-pause-ia.webm"},
        {"name": "showcase.intermission.starting", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-intermission-starting-ia.webm"}
    ],
    "de":[
        {"name": "showcase.intermission.ending", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-intermission-ending-ia.webm"},
        {"name": "showcase.intermission.offline", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-intermission-offline-ia.webm"},
        {"name": "showcase.intermission.pause", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-intermission-pause-ia.webm"},
        {"name": "showcase.intermission.starting", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-intermission-starting-ia.webm"}
    ],
    "es":[
        {"name": "showcase.intermission.ending", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-intermission-ending-ia.webm"},
        {"name": "showcase.intermission.offline", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-intermission-offline-ia.webm"},
        {"name": "showcase.intermission.pause", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-intermission-pause-ia.webm"},
        {"name": "showcase.intermission.starting", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-intermission-starting-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.intermission.ending", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-intermission-ending-ia.webm"},
        {"name": "showcase.intermission.offline", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-intermission-offline-ia.webm"},
        {"name": "showcase.intermission.pause", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-intermission-pause-ia.webm"},
        {"name": "showcase.intermission.starting", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-intermission-starting-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.intermission.ending", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-intermission-ending-ia.webm"},
        {"name": "showcase.intermission.offline", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-intermission-offline-ia.webm"},
        {"name": "showcase.intermission.pause", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-intermission-pause-ia.webm"},
        {"name": "showcase.intermission.starting", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-intermission-starting-ia.webm"}
    ]
}

let overlay = {
    "en":[
        {"name": "showcase.overlay", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-overlay-ia.webm"}
    ],
    "de":[
        {"name": "showcase.overlay", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-overlay-ia.webm"}
    ],
    "es":[
        {"name": "showcase.overlay", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-overlay-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.overlay", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-overlay-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.overlay", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-overlay-ia.webm"}
    ]
}

let talking = {
    "en":[
        {"name": "showcase.talking", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-talking-banner-ia.webm"}
    ],
    "de":[
        {"name": "showcase.talking", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-talking-banner-ia.webm"}
    ],
    "es":[
        {"name": "showcase.talking", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-talking-banner-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.talking", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-talking-banner-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.talking", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-talking-banner-ia.webm"}
    ]
}

let profile = {
    "en":[
        {"name": "showcase.profile", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-twitch-profile-ia.webm"}
    ],
    "de":[
        {"name": "showcase.profile", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-twitch-profile-ia.webm"}
    ],
    "es":[
        {"name": "showcase.profile", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-twitch-profile-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.profile", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-twitch-profile-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.profile", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-twitch-profile-ia.webm"}
    ]
}

let webcam = {
    "en":[
        {"name": "showcase.webcam", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-webcam-ia.webm"}
    ],
    "de":[
        {"name": "showcase.webcam", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-webcam-ia.webm"}
    ],
    "es":[
        {"name": "showcase.webcam", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-webcam-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.webcam", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-webcam-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.webcam", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-webcam-ia.webm"}
    ]
}

let youtube = {
    "en":[
        {"name": "showcase.youtubebanner", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-youtube-banner-ia.webm"}
    ],
    "de":[
        {"name": "showcase.youtubebanner", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/de/alphagaming-youtube-banner-ia.webm"}
    ],
    "es":[
        {"name": "showcase.youtubebanner", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/es/alphagaming-youtube-banner-ia.webm"}
    ],
    "fr":[
        {"name": "showcase.youtubebanner", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/fr/alphagaming-youtube-banner-ia.webm"}
    ],
    "pt":[
        {"name": "showcase.youtubebanner", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/pt/alphagaming-youtube-banner-ia.webm"}
    ]
}

let transition = {
    "en":[
        {"name": "showcase.transition", "type": "cdn", "src": "https://www.own3d.tv/wp-content/uploads/series/newshop/alphagaming/en/alphagaming-transition.webm"},
        {"name": "preview.transition", "type": "vimeo", "src": "337944282"}
    ]
}

const statusCode = (url, product) => {
    https.get(url, (res) => {
        if(res.statusCode !== 200)
            console.log(res.statusCode+ " " + product + " -> " + url);
    })
}

const langsS = ["en", "de", "es", "fr", "pt"]

const crawler = (cat, catName) => {
    for (let i = 0; i < langsS.length; i++) {
        for (let j = 0; j < cat[langsS[i]].length; j++) {
            const element = cat[langsS[i]][j];
            statusCode(element.src, catName);
        }
    }
}

crawler(alerts, "alerts")
crawler(desktop, "desktop")
crawler(intermission, "intermission")
crawler(overlay, "overlay")
crawler(talking, "talking")
crawler(profile, "profile")
crawler(webcam, "webcam")
crawler(youtube, "youtube")

statusCode(transition.en[0].src, "transition")
import { members } from './data/members.js'
import { albums } from './data/albums.js'
import { images } from './data/images.js'
import { videos } from './data/videos.js'

import { app } from './app.js'
import { profile } from './profile.js'
import { discography } from './discography.js'
import { gallery } from './gallery.js'
import { video } from './video.js'

import '../css/styles.css'
import '../css/index.css'
import '../css/profile.css'
import '../css/discography.css'
import '../css/gallery.css'
import '../css/video.css'

app(members, albums, images)
profile(members)
discography(albums)
gallery(images)
video(videos)
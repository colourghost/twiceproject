export const discography = albums => {
  const mountAlbums = _ => {
    let markup = ''
    albums.forEach(album => {
      markup +=
       `<div class="discography__album">
          <img class="discography__image">
          <div class="discography__info-container">
            <div class="discography__block">
              <div class="discography__title">${album.title}</div>
              <div class="discography__release-date">${album.release}</div>
            </div>
            <div class="discography__tracklist">${tracklist(album.tracklist)}</div>
          </div>
        </div>`
    })
    document.querySelector('.discography__container').innerHTML = markup
  }

  const tracklist = tracks => {
    let pos = 0
    let markup = ''
    tracks.forEach(track => {
      pos = track.indexOf('written by')
      if (pos === -1) {
        markup += `<div>${track}</div>`
      }
      else {
        markup +=
         `<div>${track.substring(0, pos)}
  	        <span class="discography__author">${track.substring(pos)}</span>
  	      </div>`
      }
    })
    return markup
  }

  mountAlbums()
}
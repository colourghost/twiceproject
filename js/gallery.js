export const gallery = images => {
  const modal = document.querySelector('.gallery__modal')
  const mainPhoto = document.querySelector('.gallery__main-photo')
  const prev = document.querySelector('.gallery__prev')
  const next = document.querySelector('.gallery__next')

  const mountThumbs = _ => {
    let markup = ''
    images.forEach(elem => {
      markup +=
       `<div class="gallery__thumb-bg">
          <img class="gallery__thumb" style="width:${180 / elem.height * elem.width}px">
        </div>`
    })
    document.querySelector('.gallery__container').innerHTML = markup
  }

  const addCloseListener = _ => {
    modal.addEventListener('click', event => {
      if (event.target != prev && event.target != next) {
        modal.classList.remove('active')
      }
    })
  }

  const addThumbListener = _ => {
    const thumbs = document.querySelectorAll('.gallery__thumb')
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', _ => {
        mainPhoto.src = `images/gallery/${images[i].title}.jpeg`
        modal.classList.add('active')
        addPrevNextListeners(i)
      })
    })
  }

  const addPrevNextListeners = i => {
    prev.addEventListener('click', _ => {
      if (i > 0) {
        mainPhoto.src = `images/gallery/${images[--i].title}.jpeg`
      }
      else {
        i = images.length - 1
        mainPhoto.src = `images/gallery/${images[i].title}.jpeg`
      }
    })
    next.addEventListener('click', _ => {
      if (i < images.length - 1) {
        mainPhoto.src = `images/gallery/${images[++i].title}.jpeg`
      }
      else {
        i = 0
        mainPhoto.src = `images/gallery/${images[i].title}.jpeg`
      }
    })
  }



  mountThumbs()
  addCloseListener()
  addThumbListener()
}
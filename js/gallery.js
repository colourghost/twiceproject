(function() {

  function Image(title, width, height) {
    this.title = title
    this.width = width
    this.height = height
  }

  const images = [
    new Image('nayeon12', '1200', '857'),
    new Image('jeongyeon12', '1000', '1400'),
    new Image('momo12', '1000', '1400'),
    new Image('sana12', '1000', '1400'),
    new Image('jihyo12', '1200', '857'),
    new Image('mina12', '1000', '1400'),
    new Image('dahyun12', '1000', '1400'),
    new Image('chaeyoung12', '1200', '857'),
    new Image('tzuyu12', '1000', '1400'),
    new Image('twice12', '1000', '1400'),
    new Image('nayeon11', '1000', '1400'),
    new Image('jeongyeon11', '1000', '1400'),
    new Image('momo11', '1000', '1400'),
    new Image('sana11', '1200', '857'),
    new Image('jihyo11', '1000', '1400'),
    new Image('mina11', '1200', '857'),
    new Image('dahyun11', '1200', '857'),
    new Image('chaeyoung11', '1200', '857'),
    new Image('tzuyu11', '1000', '1400'),
    new Image('nayeon10', '1000', '714'),
    new Image('jeongyeon10', '1000', '1400'),
    new Image('momo10', '1200', '857'),
    new Image('sana10', '1000', '1400'),
    new Image('jihyo10', '1000', '1400'),
    new Image('mina10', '1000', '1400'),
    new Image('dahyun10', '1000', '1400'),
    new Image('chaeyoung10', '1000', '1400'),
    new Image('tzuyu10', '1000', '1400'),
    new Image('twice10', '1200', '857'),
    new Image('nayeon4', '800', '1206'),
    new Image('jeongyeon4', '800', '1206'),
    new Image('momo4', '800', '1206'),
    new Image('sana4', '800', '1206'),
    new Image('jihyo4', '800', '1206'),
    new Image('mina4', '800', '1206'),
    new Image('dahyun4', '800', '1206'),
    new Image('chaeyoung4', '800', '1206'),
    new Image('tzuyu4', '800', '1206'),
    new Image('twice4', '1200', '800'),
    new Image('nayeon3', '800', '1206'),
    new Image('jeongyeon3', '800', '1206'),
    new Image('momo3', '800', '1206'),
    new Image('sana3', '800', '1206'),
    new Image('jihyo3', '800', '1206'),
    new Image('mina3', '800', '1206'),
    new Image('dahyun3', '800', '1206'),
    new Image('chaeyoung3', '800', '1206'),
    new Image('tzuyu3', '800', '1206'),
    new Image('twice3', '1200', '800'),
    new Image('nayeon1', '1000', '1500'),
    new Image('jeongyeon1', '1000', '1500'),
    new Image('momo1', '1000', '1500'),
    new Image('sana1', '1200', '800'),
    new Image('jihyo1', '1000', '1500'),
    new Image('mina1', '1000', '1500'),
    new Image('dahyun1', '1000', '1500'),
    new Image('chaeyoung1', '1000', '1500'),
    new Image('tzuyu1', '1000', '1500')
  ]

  const thumbContainer = document.querySelector('.thumb-container')
  const modal = document.querySelector('.modal')
  const mainPhoto = document.querySelector('.main-photo')
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')

  const addCloseListener = _ => {
    modal.addEventListener('click', event => {
      if (event.target != mainPhoto && event.target != prev && event.target != next) {
        modal.style.opacity = 0
        setTimeout(_ => {
          modal.style.zIndex = -1
          mainPhoto.src = ''
        }, 500);
      }
    })
  }

  const addThumbListener = _ => {
    const thumb = document.querySelectorAll('.thumb')
    thumb.forEach((elem, index) => {
      elem.addEventListener('click', _ => {
        mainPhoto.src = `images/gallery/${images[index].title}.jpeg`
        modal.style.opacity = 1
        modal.style.zIndex = 2
        addPrevNextListeners(index)
      })
    })
  }

  const addPrevNextListeners = i => {
    prev.addEventListener('click', _ => {
      if (i > 0) {
        mainPhoto.src = `images/gallery/${images[--i].title}.jpeg`
      } else {
        i = images.length - 1
        mainPhoto.src = `images/gallery/${images[i].title}.jpeg`
      }
    })
    next.addEventListener('click', _ => {
      if (i < images.length - 1) {
        mainPhoto.src = `images/gallery/${images[++i].title}.jpeg`
      } else {
        i = 0
        mainPhoto.src = `images/gallery/${images[i].title}.jpeg`
      }
    })
  }

  const renderImages = index => {
    if (index < images.length) {
      let image = document.getElementById(index)
      image.src = `images/gallery/${images[index].title}.jpeg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderImages(++index)
      })
    }
  }

  let markup = ''
  images.forEach((elem, index) => {
    markup +=
     `<div class="thumb-bg">
        <img class="thumb" id=${index} style="width:${180 / elem.height * elem.width}px">
      </div>`
  })
  thumbContainer.innerHTML = markup
  addCloseListener()
  addThumbListener()
  renderImages(0)

})()
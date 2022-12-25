(function() {

  const images = [
    'nayeon12',
    'jeongyeon12',
    'momo12',
    'sana12',
    'jihyo12',
    'mina12',
    'dahyun12',
    'chaeyoung12',
    'tzuyu12',
    'twice12',
    'nayeon11',
    'jeongyeon11',
    'momo11',
    'sana11',
    'jihyo11',
    'mina11',
    'dahyun11',
    'chaeyoung11',
    'tzuyu11',
    'nayeon10',
    'jeongyeon10',
    'momo10',
    'sana10',
    'jihyo10',
    'mina10',
    'dahyun10',
    'chaeyoung10',
    'tzuyu10',
    'twice10',
    'nayeon4',
    'jeongyeon4',
    'momo4',
    'sana4',
    'jihyo4',
    'mina4',
    'dahyun4',
    'chaeyoung4',
    'tzuyu4',
    'twice4',
    'nayeon3',
    'jeongyeon3',
    'momo3',
    'sana3',
    'jihyo3',
    'mina3',
    'dahyun3',
    'chaeyoung3',
    'tzuyu3',
    'twice3',
    'nayeon1',
    'jeongyeon1',
    'momo1',
    'sana1',
    'jihyo1',
    'mina1',
    'dahyun1',
    'chaeyoung1',
    'tzuyu1'
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
        mainPhoto.src = `images/gallery/${images[index]}.jpeg`
        modal.style.opacity = 1
        modal.style.zIndex = 2
        addPrevNextListeners(index)
      })
    })
  }

  const addPrevNextListeners = i => {
    prev.addEventListener('click', _ => {
      if (i > 0) {
        mainPhoto.src = `images/gallery/${images[--i]}.jpeg`
      } else {
        i = images.length - 1
        mainPhoto.src = `images/gallery/${images[i]}.jpeg`
      }
    })
    next.addEventListener('click', _ => {
      if (i < images.length - 1) {
        mainPhoto.src = `images/gallery/${images[++i]}.jpeg`
      } else {
        i = 0
        mainPhoto.src = `images/gallery/${images[i]}.jpeg`
      }
    })
  }

  const renderImages = index => {
    if (index < images.length) {
      let image = document.getElementById(index)
      image.src = `images/gallery/${images[index]}.jpeg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderImages(++index, images)
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
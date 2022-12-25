(function() {

  function Member(name, birth, nationality) {
    this.name = name;
    this.birth = birth;
    this.nationality = nationality
  }

  const members = [
    new Member('nayeon', '9.22.1995', 'South Korea'),
    new Member('jeongyeon', '11.1.1996', 'South Korea'),
    new Member('momo', '11.9.1996', 'Japan'),
    new Member('sana', '12.29.1996', 'Japan'),
    new Member('jihyo', '2.1.1997', 'South Korea'),
    new Member('mina', '3.24.1997', 'Japan'),
    new Member('dahyun', '5.28.1998', 'South Korea'),
    new Member('chaeyoung', '4.23.1999', 'South Korea'),
    new Member('tzuyu', '6.14.1999', 'Taiwan')
  ]

  const bioContainer = document.querySelector('.bio-container')
  const mainPhoto = document.querySelector('.main-photo')
  const closeBtn = document.querySelector('.close-btn')

  const addPhotoListener = _ => {
    const thumb = document.querySelectorAll('.thumb')
    thumb.forEach((elem, index) => {
      elem.addEventListener('click', _ => {
        renderProfile(index)
      })
    })
  }

  const renderProfile = i => {
    bioContainer.innerHTML =
     `<div class="name">${members[i].name}</div>
      <div>${members[i].birth}</div>
      <div>${members[i].nationality}</div>`

    bioContainer.style.opacity = 1

    mainPhoto.src = `images/profile/${members[i].name}.jpg`
    mainPhoto.style.opacity = 1
    mainPhoto.style.zIndex = 2

    closeBtn.style.cursor = 'pointer'
    closeBtn.style.visibility = 'visible'
    closeBtn.style.opacity = 1
    addCloseListener()
  }

  const addCloseListener = _ => {
    closeBtn.addEventListener('click', _ => {
      bioContainer.style.opacity = 0
      mainPhoto.style.opacity = 0
      closeBtn.style.opacity = 0
      closeBtn.style.cursor = 'default'
      setTimeout(_ => {
        mainPhoto.style.zIndex = -1
        mainPhoto.src = ''
      }, 500);
    })
  }

  const renderImages = index => {
    if (index < 9) {
      let image = document.getElementById(index)
      image.src = `images/profile/${members[index].name}.jpg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderImages(++index)
      })
    }
  }

  let markup = ''
  members.forEach((elem, index) => {
    markup += `<img class="thumb" id="${index}">`
  })
  document.querySelector('.thumb-container').innerHTML = markup
  addPhotoListener()
  renderImages(0)

})()
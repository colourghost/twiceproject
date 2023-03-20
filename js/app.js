export const app = (members, albums, images) => {
  const navLinks = document.querySelectorAll('nav > div > span')
  const main = document.querySelector('.main')
  const footer = document.querySelector('footer > span')
  const profileThumbContainer = document.querySelector('.profile__thumb-container')
  const discographyContainer = document.querySelector('.discography__container')
  const galleryContainer = document.querySelector('.gallery__container')

  let profile = false
  let discography = false
  let gallery = false

  const addListeners = _ => {
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', _ => {
        link.parentElement.classList.add('illumine')
      })
      link.addEventListener('mouseleave', _ => {
        link.parentElement.classList.remove('illumine')
      })
    })
    footer.addEventListener('click', _ => {
      toggleClass(0)
    })
    navLinks[0].addEventListener('click', _ => {
      toggleClass(1)
      if (!profile) {
        renderProfileImages()
        profile = true
      }
    })
    navLinks[1].addEventListener('click', _ => {
      toggleClass(2)
      if (!discography) {
        renderDiscographyImages()
        discography = true
      }
    })
    navLinks[2].addEventListener('click', _ => {
      toggleClass(3)
      if (!gallery) {
        renderGalleryImages()
        gallery = true
      }
    })
    navLinks[3].addEventListener('click', _ => {
      toggleClass(4)
    })
  }

  const toggleClass = x => {
    for (let i = 0; i < main.children.length; i++) {
      main.children[i].classList.remove('active')
    }
    main.children[x].classList.add('active')
  }

  const renderProfileImages = (i = 0) => {
    if (i < 9) {
      let image = profileThumbContainer.children[i]
      image.src = `images/profile/${members[i].name}.jpg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderProfileImages(++i)
      })
    }
  }

  const renderDiscographyImages = (i = 0) => {
    if (i < albums.length) {
      let image = discographyContainer.children[i].children[0]
      image.src = `images/discography/${albums[i].art}.jpg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderDiscographyImages(++i)
      })
    }
  }

  const renderGalleryImages = (i = 0) => {
    if (i < images.length) {
      let image = galleryContainer.children[i].children[0]
      image.src = `images/gallery/${images[i].title}.jpeg`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderGalleryImages(++i)
      })
    }
  }

  addListeners()
}
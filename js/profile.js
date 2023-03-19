export const profile = members => {
  const bioContainer = document.querySelector('.profile__bio-container')
  const mainPhoto = document.querySelector('.profile__main-photo')
  const closeBtn = document.querySelector('.profile__close-btn')

  const mountThumbs = _ => {
    let markup = ''
    members.forEach(_ => { markup += '<img class="profile__thumb">' })
    document.querySelector('.profile__thumb-container').innerHTML = markup
  }

  const addCloseListener = _ => {
    closeBtn.addEventListener('click', _ => {
      bioContainer.classList.toggle('active')
      mainPhoto.classList.toggle('active')
      closeBtn.classList.toggle('active')
    })
  }

  const addThumbListener = _ => {
    document.querySelectorAll('.profile__thumb').forEach((thumb, i) => {
      thumb.addEventListener('click', _ => {
        bioContainer.innerHTML =
         `<div class="profile__name">${members[i].name}</div>
          <div>${members[i].birth}</div>
          <div>${members[i].nationality}</div>`
        bioContainer.classList.toggle('active')

        mainPhoto.src = `images/profile/${members[i].name}.jpg`
        mainPhoto.classList.toggle('active')

        closeBtn.classList.toggle('active')
      })
    })
  }

  mountThumbs()
  addCloseListener()
  addThumbListener()
}
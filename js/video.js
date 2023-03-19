export const video = videos => {
  const url = 'https://www.youtube.com/embed/'

  const renderVideoPlayer = _ => {
    document.querySelector('.video__container').innerHTML =
     `<iframe class="video__iframe" name="xframe" src="${url + videos[0].id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="video__playlist">${videoLinks()}</div>`
  }

  const videoLinks = _ => {
    let markup = ''
    videos.forEach((video, i) => {
      markup += `<a class="${i === 0 ? 'video__active' : ''}" href="${url + video.id}" target="xframe">${video.title}</a>`
    })
    return markup
  }

  const addListeners = _ => {
    const links = document.querySelectorAll('.video__playlist > a')
    links.forEach(link => {
      link.addEventListener('click', _ => {
        document.querySelector('.video__active').classList.remove('video__active')
        link.className = 'video__active'
      })
    })
  }

  renderVideoPlayer()
  addListeners()
}
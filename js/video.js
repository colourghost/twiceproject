(function() {

  function Video(title, id) {
    this.title = title
    this.id = id
  }

  const videos = [
    new Video('SCIENTIST', 'vPwaXytZcgI'),
    new Video('The Feels', 'f5_wn8mexmM'),
    new Video('Perfect World', 'fmOEKOjyDxU'),
    new Video('Alcohol-Free', 'XA2YEHn-A8Q'),
    new Video('Kura Kura', 'BSS8Y-0hOlY'),
    new Video('BETTER', 'sLmLwgxnPUE'),
    new Video('I CAN\'T STOP ME', 'CM4CkVFmTds'),
    new Video('Fanfare', 'kRT174IdxuM'),
    new Video('More & More', 'mH0_XpSHkZo'),
    new Video('Fake & True', 'zQELp93xxfo'),
    new Video('Feel Special', '3ymwOvzhwHs'),
    new Video('Breakthrough', 'ZdKYi5ekshM'),
    new Video('HAPPY HAPPY', '3n9rDwpa6QA'),
    new Video('FANCY', 'kOHB85vDuow'),
    new Video('The Best Thing I Ever Did', 'CfUGjK6gGgs'),
    new Video('YES or YES', 'mAKsZ26SabQ'),
    new Video('STAY BY MY SIDE', '96K5RxgTfW4'),
    new Video('BDZ', 'CMNahhgR_ss'),
    new Video('Dance the Night Away', 'Fm5iP0S1z9w'),
    new Video('I WANT YOU BACK', 'X3H-4crGD6k'),
    new Video('Wake Me Up', 'DdLYSziSXII'),
    new Video('What is Love?', 'i0p1bmr0EmE'),
    new Video('BRAND NEW GIRL', 'r1CMjQ0QJ1E'),
    new Video('Candy Pop', 'wQ_POfToaVY'),
    new Video('Merry & Happy', 'zi_6oaQyckM'),
    new Video('Heart Shaker', 'rRzxEiBLQCA'),
    new Video('LIKEY', 'V2hlQkVJZhE'),
    new Video('One More Time', 'HuoOEry-Yc4'),
    new Video('SIGNAL', 'VQtonf1fv_s'),
    new Video('KNOCK KNOCK', '8A2t_tAjMz8'),
    new Video('TT', 'ePpPVE-GGJw'),
    new Video('CHEER UP', 'c7rCyll5AeY'),
    new Video('Like OOH-AHH', '0rtV5esQT6I')
  ]

  const mainContainer = document.querySelector('.main-container')
  const url = 'https://www.youtube.com/embed/'

  const addListener = _ => {
    const video = document.querySelectorAll('#video')
    video.forEach(elem => {
      elem.addEventListener('click', _ => {
        document.querySelector('.light').className = 'dark'
        elem.className = 'light'
      })
    })
  }

  const videoLinks = _ => {
    let markup = ''
    videos.forEach((elem, index) => {
      markup += `<a id="video" class="${index === 0 ? 'light' : 'dark'}" href="${url}${elem.id}" target="iframex">${elem.title}</a>`
    })
    return markup
  }

  mainContainer.innerHTML =
   `<iframe name="iframex" src="${url}${videos[0].id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="video-container">${videoLinks()}</div>`
  addListener()

})()
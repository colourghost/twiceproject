import { HTML } from './html.js'

(function() {
  const styleSheet = document.getElementById('stylesheet')
  const nav = document.querySelector('nav')
  const html = document.getElementById('html')
  const javascript = document.getElementById('javascript')
  const footer = document.querySelector('footer span')
  const routes = ['profile', 'discography', 'gallery', 'video']


  for (let i=0; i<4; i++) {
    nav.children[i].addEventListener('click', _ => {
      styleSheet.href = `css/${routes[i]}.css`
      html.innerHTML = HTML[i]
      javascript.innerHTML = ''
      const script = document.createElement('script')
      script.src = `js/${routes[i]}.js`
      javascript.appendChild(script)
    })
  }

  footer.addEventListener('click', _ => {
    styleSheet.href = 'css/index.css'
    html.innerHTML =
     `<div class="glass"></div>
      <iframe class="iframe" src="https://www.youtube.com/embed/vPwaXytZcgI?autoplay=1&mute=1" frameborder="0" allow="autoplay"></iframe>`
    javascript.innerHTML = ''
  })

})()
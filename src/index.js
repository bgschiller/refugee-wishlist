import App from './components/app'
import getWishes from './api'
import $ from 'jquery'

window.wishes = getWishes()
window.app = new App({
  collection: wishes
})


$('.app-target').html(app.render().el)

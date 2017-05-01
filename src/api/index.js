import Tabletop from 'tabletop'

function init(callback){
  Tabletop.init({
    key: '1RRCF2WUqrvvvHrOICl8ruKW7j8ydmLsSEH0p0GN5orA',
    simpleSheet: true,
    callback,
  })
}

var WishCollection = Backbone.Collection.extend({

})
var wc = new WishCollection()

export default function getWishes(){
  if (!wc.length) {
    init(data => { wc.reset(data) })
  }
  return wc;
}

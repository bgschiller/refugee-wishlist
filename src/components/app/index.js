import Backbone from 'backbone'
import template from './app.ejs'
import WishlistView from '../wishlist'
import _ from 'underscore'
window._ = _

export default Backbone.View.extend({
  initialize: function(){
    this.wishlist = new WishlistView({ collection: this.collection })
  },
  render: function(){
    this.$el.html(template({ collection: this.collection.toJSON() }))
    this.$('.wishlist').html(this.wishlist.render().el)
    return this
  },
})

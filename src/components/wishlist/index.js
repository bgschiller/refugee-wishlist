import Backbone from 'backbone'
import WishCardView from '../wishCard'
import template from './wishList.ejs'

export default Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render)
  },
  render: function(){
    this.$el.empty().append(template())

    this.$('.list-target').append(
      this.collection.map(
        function(model){
          return new WishCardView({model}).render().el
        }
      )
    )
    return this
  },
})

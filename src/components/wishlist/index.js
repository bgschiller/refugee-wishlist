import Backbone from 'backbone'
import WishCardView from '../wishCard'

export default Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.render)
  },
  render: function(){
    this.$el.empty().append(
      this.collection.map(
        function(model){
          return new WishCardView({model}).render().el
        }
      )
    )
    return this
  },
})

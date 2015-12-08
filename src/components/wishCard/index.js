import Backbone from 'backbone'
import template from './wishCard.ejs'
import ProgressBarView from '../progressBar'
import $ from 'jquery'

require('./wishCard.less')

export default Backbone.View.extend({
  initialize: function() {
    this.progress = new ProgressBarView({model: this.model})
  },
  render: function(){
    this.$el.html(template(this.model.toJSON()))

    this.$('.progress-bar').html(this.progress.render().el)
    return this
  },
  events:{
    'click .claim-button': 'instructions'
  },
  instructions: function(e){
    $('#donateInstructions').openModal()
  }
})

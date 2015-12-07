require('./progressBar.less')
import template from './progressBar.ejs'

export default Backbone.View.extend({
  render: function(){
    var pct = 100 * this.model.get('amount_collected') / this.model.get('amount_needed')
    this.$el.html(template({
      pct
    }))
    return this
  }
})

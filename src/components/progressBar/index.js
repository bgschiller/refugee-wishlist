require('./progressBar.less')
import template from './progressBar.ejs'

export default Backbone.View.extend({
  render: function(){
    var collected = +this.model.get('amount_collected').replace(/[^0-9\.]/g, ''),
        needed = +this.model.get('amount_needed').replace(/[^0-9\.]/g, ''),
        pct = 100 * collected / needed,
        isComplete = collected >= needed
    if (needed !== 0){
      this.$el.html(template({
        pct,
        isComplete
      }))
    }
    return this
  }
})

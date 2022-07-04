import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'
import 'jquery'
 
$(document).on('turbolinks:load', function() {
$('.ui.dropdown').dropdown();
})
 
Rails.start()
Turbolinks.start()
ActiveStorage.start()
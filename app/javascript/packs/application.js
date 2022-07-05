import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'
import 'jquery'
 
$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
})
 
Rails.start()
Turbolinks.start()
ActiveStorage.start()
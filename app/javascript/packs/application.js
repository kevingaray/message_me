import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'
import 'jquery'

window.scroll_bottom = function() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

window.submit_message = function () {
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
        };
    });
};

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
})
 
Rails.start()
Turbolinks.start()
ActiveStorage.start()
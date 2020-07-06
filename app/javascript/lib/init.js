import $ from 'jquery'
 
$(document).ready(function() {
    $("#new-event-btn").click(function(){
        $.post('/events')
    }); 
});

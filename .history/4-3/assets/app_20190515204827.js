var class_duration;
var break_at;
function head_set(data) {
    $.each(data, function(i, item) {
        if(i == "option") {
            class_duration = item['class_duration'];
            $("#class_duration").text(class_duration);
            return true;
        }
        $("#schedule-head-list").append("<td>"+i+"</td>");
        $("#schedule-hour-time").append("<td>"+item['time_start']+"</td>");
        
    });
  }
  function schedule_set(data) {
      var x = 0;
      var y = 0;
      var breaks = false;
    $.each(data, function(i, item) {
        if(i == "option") {
            break_at = item['break-at'];
            return true;
        };
        $("#schedule-list").append("<tr>");
        $("#schedule-list").append("<td class='text-nowrap'>"+item['th-name']+"</td>");
        $.each(item['class'], function(i, item) {
            if(x == break_at){
                if(breaks == false){
                    $("#schedule-list").append("<td class='rotate pt-auto align-items-center text-nowrap' rowspan='"+y+"'><div><span>พักเที่ยง</span></div></td>");
                    breaks = true;
                }
            }
            $("#schedule-list").append("<td class='text-nowrap'>"+item['id']+"<br>"+item['room']+"<br>"+item['name']+"</td>");
            x=x+1;
        });
        $("#schedule-list").append("/<tr>");
        y=y+1;
    });
  }
  $(document).ready(function () {
    $.getJSON('data/class.json', null, function(data) {
        head_set(data);
      });
      $.getJSON('data/4-3/schedule.json', null, function(data) {
        schedule_set(data);
      });
  });
  

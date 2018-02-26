function renderTimeline(data) {
      //'{ "name": "John" }'
      //var obj = jQuery.parseJSON(data);
      jQuery.each( data, function( key, value ) {
        var contents = $('#timeline');  //returns a jQuery Object
        if (key == 0){
          var mainEvent = '<div class="mainEvent"><h1>'+value.date+'</h1><p>'+value.content+'</p></div>';
          mainEvent = mainEvent+'<div class="timeline">';
          contents.append(mainEvent);
        }else if(key == data.length - 1){
          var mainEvent = '</div><div class="mainEvent"><h1>'+value.date+'</h1><p>'+value.content+'</p></div>';
          contents.append(mainEvent);
        }else{
          var timeline = $( ".timeline" );
          var timelineEvent = '<div class="eventContainer '+alignement(key)+'" data-year="'+value.date+'">';
          timelineEvent = timelineEvent + '<div class="animation-element slide-'+alignement(key)+' eventContent">';
          timelineEvent = timelineEvent + '<p>'+value.content+'</p>';
          timelineEvent = timelineEvent + '</div></div>';
          timeline.append(timelineEvent);
        }
      });
}
function alignement(myKey){
  if (myKey % 2 === 0){
    return "right";
  }else {
    return "left";
  }
}

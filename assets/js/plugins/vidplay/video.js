
function VideoPlay(type, src ,title) {    
    var set = '<video id="video" width="400" height="400" style="display:none;"> <source src="' + src + '" type="video/' + type + '"> </video> <a id="fullscreen" href="#">' + title + '</a>';
    $('#video-section').append(set);    
}

$(document).on("click", "#fullscreen", function () {    
    var FSVID = document.getElementById('video');
    var playButton = document.getElementById('fullscreen');
    if (FSVID.requestFullscreen) {
        FSVID.requestFullscreen();        
        FSVID.style.display = "block";
        FSVID.play();
    }
    else if (FSVID.msRequestFullscreen) {
        FSVID.msRequestFullscreen();        
        FSVID.style.display = "block";
        FSVID.play();
    }
    else if (FSVID.mozRequestFullScreen) {
        FSVID.mozRequestFullScreen();        
        FSVID.style.display = "block";
        FSVID.play();
    }
    else if (FSVID.webkitRequestFullScreen) {
        FSVID.webkitRequestFullScreen();        
        FSVID.style.display = "block";
        FSVID.play();
    }
});
if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

function exitHandler() {
    var FSVID = document.getElementById('video');
    if (document.webkitIsFullScreen ||
        document.mozFullScreen || 
        document.msFullscreenElement !== null)
        FSVID.style.display = "none";                       
}




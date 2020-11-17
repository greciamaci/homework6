var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol=document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this)
	video.volume = this.value/100;
	console.log(this.value);
	let vol=document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate *.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate *1.1;
	console.log(video.playbackRate);
	
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	let new_time = video.currentTime + 5;
	if (new_time > video.duration) {
		video.loop=true;
		console.log(video.currentTime);
	} else {
		video.currentTime = new_time;
		console.log(video.currentTime);
	}
		
});

document.querySelector("#mute").addEventListener("click", function() {
	let mewt=document.querySelector("#mute");
	if (mewt.innerHTML==="Mute") {
		console.log("Mute");
		mewt.innerHTML="Unmute";
		video.muted=true;
	} else {
		mewt.innerHTML="Mute";
		video.muted=false;
		console.log("Unmute");
	}
	
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");	
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});



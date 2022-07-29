let count = 1
let pages = ""
function clicked(page) {
	pages = page
	if (page == "page1") {
		setTimeout(changePage(page1, page2), 500)
	} else if (page == "page2") {
		setTimeout(changePage(page2, page3), 400)
	} else if (page == "page3") {
		setTimeout(changePage(page3, page4), 400)
	} else if (page == "page4") {
		setTimeout(changePage(page4, page5), 400)
	} else if (page == "page5") {
		setTimeout(changePage(page5, page6), 400)
	}
}

function changePage(start, end) {
	start.style = "display: none"
	end.style = "display: block"
	if (pages == "page1") {
		pages = "page2"
		animcake()
	} else if (pages == "page2") {
		pages = "page3"
		animwish()
	} else if (pages == "page3") {
		pages = "page4"
		animwish()
	} else if (pages == "page4") {
		pages = "page5"
		animwish()
	} else if (pages == "page5") {
		pages = "page6"
		animage()
	}
}

function animage() {
	let timeline = gsap.timeline({duration: 0.3});
	let items = gsap.utils.toArray(`#${pages} .bday-pic`)
	items.forEach(index => {
		timeline.to(index, {opacity: 1, ease: "back.out"})
	});
}

function animcake() {
	let timeline = gsap.timeline({duration: 0.3});
	timeline.fromTo('.cake-base', {yPercent: -900, opacity: 0.5}, {yPercent: 0, opacity: 1});
	timeline.fromTo('.cake-topping', {yPercent: -900, opacity: 0.5}, {yPercent: 0, opacity: 1});
	timeline.to('.candle-container', {opacity: 1});
	timeline.to('.flame-wrap', {scale: 1, ease: "back.out"});
	timeline.to('.greeting', {scale: 1, ease: "back.out"});
	timeline.to(`#${pages} .next`, {opacity: 1, ease: "back.out"});
	timeline.to('.star', {opacity: 0.5, stagger: 0.05,
		onComplete: function () {
			next = document.querySelector("#page2");
			next.setAttribute("onclick", `clicked('${pages}');`);
			gsap.to('.star', {scale: 0.25, repeat: -1, stagger: 0.1, yoyo: true, yoyoEase: "power1.out"})
		}
	})
	
}

function animwish() {
	let items = gsap.utils.toArray(`#${pages} h2`)
	let imgBg = gsap.utils.toArray(`#${pages} .img-bg`)
	let ip = gsap.utils.toArray(`#${pages} input`)
	let timeline = gsap.timeline({duration: 0.3});
	imgBg.forEach(index => {
		timeline.to(index, {opacity: .5, ease: "back.out"})
	})
	
	items.forEach(index => {
		timeline.to(index, {opacity: 1, ease: "back.out"})
	});
	ip.forEach(index => {
		timeline.to(index, {opacity: 1, ease: "back.out"})
	});
	timeline.to(`#${pages} button`, {opacity: 1, ease: "back.out"})
	timeline.to(`#${pages} .badge`, {opacity: .7, ease: "back.out"})
	timeline.to(`#${pages} .next`, {opacity: .9, ease: "back.out", 
		onComplete: function () {
			next = document.querySelector(`#${pages}`);
			next.setAttribute("onclick", `clicked('${pages}');`);
		}
	});
}

$(document).ready(function(){
	$('.btn').on('click', function(){
		$('#'+$(this).data('modal')).css('display','block');
	})
	
	$('span.close').on('click', function(){
		$('.modal').css('display','none');
	})

	$(window).on('click', function(event){
		if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
        	$('.modal').css('display','none');
    	}
	})



})
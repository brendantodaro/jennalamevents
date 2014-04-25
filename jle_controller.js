var currentView; //Current view
var currentEvt; //Current event
var manualJFlowInterval; //Manual autoslide

/*! MAIN */
$(document).ready(function() {
/*	if (window.location.host != 'www.jennalamevents.com') {
		window.location.href = 'http://www.jennalamevents.com/'+window.location.hash;
	}*/
	presentViewController();
});

/*! EVENT HANDLERS */
$(document).on('click', '.link', function(e) {
	e.preventDefault();
	var elHash = $(e.currentTarget).attr('hash');
	presentViewController(elHash);
});

$(document).on('click', '#prevNext', function(e) {
	//$('p.credit').css('display', 'none'); // Fade credit after first photo
	resetAutoInterval();
});

$(document).on('click', '#jFlowSlide', function(e) {
	if (!$(e.target).hasClass('jFlowPrev')) {
		$('.jFlowNext').trigger('click'); //Click anywhere in photo to advance slideshow
	}
})

/*! BUILD VIEW */
function presentViewController(hash) {
	var view; // Incoming view
	var evt; // Incoming evt
	var viewDidChange;

	if (hash == 'blog') {
		window.location.href = 'http://www.jennalamevents.com/blog';
		return;
	}

	 // Get and set hash
	window.location.hash = hash = (hash || window.location.hash);
	hash = hash.replace('#','');

	// Get and set currentview and currentevt
	if (typeof hash != 'undefined') {
		view = hash.split('?')[0];
		if (view != hash) {
			evt = (hash.split('?')[1].replace('evt=','').replace(/_/g, ' '));
		}
	}
	viewDidChange = (view != currentView);
	currentView = view ? view : 'home';
	//currentView = view ? view : 'weddings';
	currentEvt = evt;

	if (viewDidChange) {
		$('#view-container').addClass('faded');
	} else {
		$('#jFlow-wrap').addClass('faded');
	}

	setTimeout(function() {
		switch (currentView) {
			case 'weddings': 
				if (viewDidChange) {buildSidebar();}
				buildPhotoView(); 
				break;
			case 'events': 
				if (viewDidChange) {buildSidebar();}
				buildPhotoView(); 
				break;
			case 'corporate': 
				if (viewDidChange) {buildSidebar();}
				buildPhotoView();
				buildCorporatePreviewSidebar(); 
				break;
<<<<<<< HEAD
			case 'aboutUs': 
				if (viewDidChange) {buildSidebar();}
				buildAboutUsView(); 
=======
			case 'jenna': 
				buildMeetJennaView(); 
>>>>>>> fd5c709e8c95865f820508d124c44d1cb4892a71
				break;
			case 'seen': 
				buildAsSeenInView(); 
				break;
			case 'blog':
				//buildBlogView();
				break;
			case 'contact': 
				if (viewDidChange) {buildSidebar();}
				buildPhotoView(); 
				buildContactSidebar();
				break;
			case 'home':
				buildHomeView();
		}

		highlightLink();
		$('#view-container, #jFlow-wrap').removeClass('faded');
	}, 120); //120 ms for fade out and content switch

};

function highlightLink() {
	$('.link.evt, .link.view').removeClass('selected');

	//Highlight evt and link
	$('.link.view[hash="' + window.location.hash.replace('#', '').split('?')[0] + '"] , .link.view[hash="' + currentView + '"]').addClass('selected');

	var currEvtLink = $('.link.evt[hash="' + window.location.hash.replace('#', '') + '"]');
	if (currEvtLink.size() == 0) {
		$('.link.evt').first().addClass('selected'); // If no event specified
	} else {
		currEvtLink.addClass('selected');
	}
	
}





















/*! VIEWS SKELETON */
//HOME
function buildHomeView() {
	function _getHomePhotos() {
		var homePhotos = '';
		for(var i = 0; i < data[currentView][0]['photos'].length; i++) {
			homePhotos += '<div class="slide link" hash="' + data[currentView][0]['photos'][i]['hash'] + '"><div class="caption">' + data[currentView][0]['photos'][i]['caption'] + '</div><img class="hidden" src="' + data[currentView][0]['photoFile'] + data[currentView][0]['photos'][i]['file'] + '"></img></div>';
		}
		return homePhotos;
	}

	var homeView = $('<div id="view" class="home">' +
		'<a id="martha-badge" href="http://thebridesguide.marthastewartweddings.com/2014/01/an-elegant-maui-destination-wedding.html"  target="blank"><img src="imgs/logoartwork/2014MSW_web.png" width="168" height="168"></a>' +
		'<div id="homeSlideshow">' + 
			_getHomePhotos() +
		'</div>' +
	'</div>');

	homeView.find('img').attr('onload', photoLoadHandler);

	$('#view-container').empty().prepend(homeView);

	$('#homeSlideshow').cycle({
		fx: 'fade',
		timeout: 2500
	});

}

//WEDDINGS
//EVENTS
//CORPORATE
function buildSidebar() {
	var sidebarDiv = '<div id="sidebar-left">' +
		_getSidebarItems() +
		'</div>';

	$('#view-container').empty().prepend(sidebarDiv);

	function _getSidebarItems() {
		var sidebarItems = '<ol>';

		for (var i = 0; i < data[currentView].length; i++) {
			sidebarItems += '<li class="link evt" hash="' + currentView + '?' + 'evt='+ (data[currentView][i]['name']).replace(/ /g,'_') +'">' + data[currentView][i]['name'] +
				(data[currentView][i]['location'] ? '<div class="location">' + data[currentView][i]['location'] + '</div>' : '') +
				'</li>';
		}
		return sidebarItems + '</ol>';
	}

}



//CORPORATE
function buildCorporatePreviewSidebar() {
	var corporateView = '<div class="corporateSidebar">' +
		data[currentView][0]['copy'] +
	'</div>';

	$('#view-container').prepend(corporateView);

};


<<<<<<< HEAD
//ABOUT US
function buildAboutUsView() {
	//FIND PERSON IN DATA
	var person = data[currentView][0]
	for (var i = 0; i < data[currentView].length; i++) {
		if (data[currentView][i]['name'] === currentEvt) {
			person = data[currentView][i];
		}
	}


	//BUILD VIEW
	var copy = person['copy'];
	var photo = '<img class="hidden" height=460 src="' + person['photo'] + '"></img>';
	var photoCredit = person['photoCredit'];

	var aboutUsView = $('<div id="view" class="aboutUs">' +
		'<div class="jennaPhoto">' + photo + '<p class="meetJennaPhotoCredit">' + photoCredit + '</p>' + '</div>' +
		'<div class="jennaCopy">' + copy + '</div>' + 
		'<div class="separator"><img height="417" src="' + person['separator'] + '">' +
			'<div class="logo"><img height="80" width="80" src="' + person['logo'] + '"></div>' +
		 '</div>' +
	'</div>');

	aboutUsView.find('img').attr('onload', photoLoadHandler);

	$('#view').remove();
	$('#view-container').append(aboutUsView);
=======
//MEET JENNA
function buildMeetJennaView() {
	var meetJennaText = data[currentView][0]['copy'];
	var meetJennaPhoto = '<img class="hidden" height=460 src="' + data[currentView][0]['photo'] + '"></img>';
	var meetJennaPhotoCredit = data[currentView][0]['photoCredit'];
	
	var meetJennaView = $('<div id="view" class="jenna">' +
			'<div class="jennaCopy">' + meetJennaText + '</div>' + 
			'<div class="jennaPhoto">' + meetJennaPhoto + '<p class="meetJennaPhotoCredit">' + meetJennaPhotoCredit + '</p>' + '</div>' +
			'<div class="separator"><img height="417" src="' + data[currentView][0]['separator'] + '">' +
				'<div class="logo"><img height="80" width="80" src="' + data[currentView][0]['logo'] + '"></div>' +
			 '</div>' +
		'</div>');

	meetJennaView.find('img').attr('onload', photoLoadHandler);

	$('#view-container').empty().prepend(meetJennaView);
>>>>>>> fd5c709e8c95865f820508d124c44d1cb4892a71
};


//BLOG
function _setIframeHeight() {
	var lastHeight = 10000;
	var blogHeightInterval
	clearInterval(blogHeightInterval)

	blogHeightInterval = setInterval(function() {
		var currScrollHeight = $('#blog-iframe').get(0) && $('#blog-iframe').get(0).contentWindow.document.body ? $($('#blog-iframe').get(0).contentWindow.document.body).height() : -1;
		//console.log('currScrollHeight ' + currScrollHeight)

		if (currScrollHeight > 1 && currScrollHeight != lastHeight && !isNaN(currScrollHeight)) {
			$('#blog-iframe').css('height', (currScrollHeight)+'px');
			lastHeight = currScrollHeight;
			//console.log('lastHeight ' + lastHeight)
		}

	}, 200)
	//$('#blog-iframe').removeClass('hidden');
}
function buildBlogView () {
	//var blogView = $('<div id="view" class="blog"><iframe onload="_setIframeHeight();" class="hidden" id="blog-iframe" scrolling=no seamless=seamless frameborder=0 width=940 height=1 src="http://www.jennalamevents.com/blog">');
	var blogView = $('<div id="view" class="blog"><iframe onload="_setIframeHeight();" id="blog-iframe" scrolling=no seamless=seamless frameborder=0 width=940 height=10000 src="http://www.jennalamevents.com/blog">');
	$('#view-container').empty().prepend(blogView);
	_setIframeHeight();
}



//AS SEEN IN
function buildAsSeenInView() {
}

//CONTACT
function buildContactSidebar() {
	var contactView = $('<div class="contactSidebar">' +
		'<div class="logo"><img height="80" width="80" src="' + data[currentView][0]['logo'] + '"></div>' +
		'<div class="name contactInfo">Jenna Lam</div>' +
		'<div class="email contactInfo"><a href="mailto:' + data[currentView][0]['email'] + '">' + data[currentView][0]['email'] + '</a></div>' +
		'<div class="phone"><span class="contactInfo">office ' + data[currentView][0]['office'] + '</span><br/><span class="contactInfo">cell ' + data[currentView][0]['cell'] + '</span></div>' +
	'</div>');

	$('#view-container').prepend(contactView);
}


photoLoadHandler = "$(this).removeClass('hidden');"







































/*! BUILD EVENT PHOTOROLL*/
function buildPhotoView() {
	var viewDiv = $('<div id="view" class="photo ' + currentView + '">' +
		buildPhotoRoll() +
		'</div>');

	//viewDiv.append(throbber);
	viewDiv.find('img').attr('onload', photoLoadHandler);
	$('#view').remove();
	$('#view-container').append(viewDiv);

	jFlowInit();
};

function buildPhotoRoll() {

	var evt = data[currentView][0];
	for (var i = 0; i < data[currentView].length; i++) {
		if (data[currentView][i]['name'] == currentEvt) {
			evt = data[currentView][i]; break;
		}
	}

	var photoRoll = '<div id="jFlow-wrap">' +
						 '<div id="jFlow-controller">' +
							_getControls() +
						 '</div>' + 

						'<div id="prevNext">' +
							'<span class="jFlowPrev"></span>' +
							'<span class="jFlowNext"></span>' +
						'</div>' +

						'<div id="jFlow-slides">' +
							_getPhotosWithCaptions() +
						'</div>' +
				'</div>';

	return photoRoll;

	function _getControls() {
		var jFlowControls = '';

		for (var i = 0; i < evt['photos'].length; i++) {
			jFlowControls += '<span class="jFlowControl" style="visibility:hidden;">' + i + '</span>';
		}
		return jFlowControls;
	};

	function _getPhotosWithCaptions() {
		var photosWithCaptions = ''; 
		var photo; 
		var caption;

		for (var i = 0; i < evt['photos'].length; i++) {
			photo = evt['photoFile'] + evt['photos'][i]['file'];
			caption = (evt['photos'][i]['caption'] ? evt['photos'][i]['caption'] : '');

			if (i == 0) {
				caption += '<p class="credit">' + 
					(evt['otherCredit'] ? evt['otherCredit'] + '&nbsp;&nbsp;/&nbsp;&nbsp;' : '') +
					(evt['photoCredit'] ? evt['photoCredit'] : '') +
					'</p>';
			}

			if (evt['photos'][i]['orientation'] == 'v') {
				photosWithCaptions += '<div>'+
					'<img class="hidden vertical" height="550" src="' + photo + '" style="margin:auto; display:block;"/>' +
					caption +
				'</div>';
			} else {
				photosWithCaptions += '<div>' + 
					'<img class="hidden" width="690" src="' + photo + '" style="margin:auto; display:block;"><p>' +
						caption + 
					'</p></div>';
			}
		}
		return photosWithCaptions;
	};

};


function resetAutoInterval() {
	if (data['options'][0]['useAutoslide']) {
		clearInterval(manualJFlowInterval);
		manualJFlowInterval = setInterval(function() {
			$('.jFlowNext').trigger('click');
		}, data['options'][0]['autoslideInterval'] * 1000);
	}
};

function jFlowInit() {
resetAutoInterval();
$("#jFlow-controller").jFlow({
        slides: "#jFlow-slides",
        width: "98%",
        height: "570px",
        duration: 600,
    	// 	autoSlide: true,
  		// interval: 1400
    });
};
	
// function preloadImages() {
// 	var images = [];
// 	var imgCount = 0;
// 	for (view in data) {
// 		for (var i = 0; i < data[view].length; i++) {
// 			if (data[view][i]['photos']) {
// 				for (var j = 0; j < data[view][i]['photos'].length; j++) {
// 					images[imgCount] = new Image();
// 					images[imgCount].src = data[view][i]['photoFile'] + data[view][i]['photos'][j]['file'];
// 					imgCount++;
// 				}
// 			}
// 		}
// 	}
// }




/*! Throbber */
/*var throbberPrototype = document.createElement('div');
throbberPrototype.className = 'throbber';
throbberPrototype.appendChild(document.createElement('div'));
throbberPrototype.firstChild.className = 'throbber-bar';
while (throbberPrototype.children.length < 12) {
	throbberPrototype.appendChild(throbberPrototype.firstChild.cloneNode(false));
}
throbber = function(params) {
	var throbber = throbberPrototype.cloneNode(true);
	return throbber;
};*/










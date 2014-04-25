/* JLE Data Each View is an array of objects */

var data = 
{
	options: [
		{
			autoslideInterval: 3.5, // How long before slide moves automatically (in seconds)
			useAutoslide: true //true or false to turn on/off autoslide
		}
	],

	home: [
		{
			photoFile: "imgs/home/",
			photos: [
				{file:'beaulieu_garden_wedding.jpg', caption:'Beaulieu Garden Wedding', hash:'weddings?evt=Beaulieu_Garden'},
				/*{file:'presidio_wedding.jpg', caption:'San Francisco Presidio Wedding', hash:'weddings?evt=Presidio_Social_Club'},*/
				{file:'san_francisco_bat_mitzvah.jpg', caption:'San Francisco Bat Mitzvah', hash:'events?evt=Sydney\'s_Bat_Mitzvah'},
				{file:'scottsdale_wedding.jpg', caption:'Scottsdale Wedding', hash:'weddings?evt=Four_Seasons_Scottsdale'},
				{file:'wine_cave_rehearsal_dinner.jpg', caption:'Wine Cave Rehearsal Dinner', hash:'events?evt=Wine_Cave_Rehearsal_Dinner'},
				{file:'wine_country_after-party.jpg', caption:'Wine Country After-Party', hash:'events?evt=Wine_Country_After-Party'},
				{file:'wine_country_estate_wedding.jpg', caption:'Wine Country Estate Wedding', hash:'weddings?evt=Wine_Country_Estate'},
				{file:'wine_country_welcome_party.jpg', caption:'Wine Country Welcome Party', hash:'events?evt=Wine_Country_Welcome_Party'}
			]
		}
	],

	weddings: [

		{
			name: "Sugarman Estate",
			fullname: "",
			location: "Maui, Hawaii",
			otherCredit: '',
			photoCredit: "Photos by Meg Smith",
			photoFile: "imgs/weddings/sugarman_estate_wedding_maui_hawaii/",
			photos: [
				{file: "Hawaii Invitation 16350.jpg", orientation:'v', caption: ''},
				{file: "stephanie_charles_0743.jpg", orientation:'v'},
				{file: "stephanie_charles_0816.jpg", orientation:'v'},
				{file: "stephanie_charles_0937.jpg", orientation:'v'},
				{file: "stephanie_charles_0948.jpg", orientation:'v'},
				{file: "stephanie_charles_0964.jpg", orientation:'v'},
				{file: "stephanie_charles_1208.jpg", orientation:'v'},
				{file: "stephanie_charles_1350 copy.jpg", orientation:'v'},
				{file: "stephanie_charles_1430.jpg", orientation:'h'},
				{file: "stephanie_charles_1438.jpg", orientation:'h'},
				{file: "stephanie_charles_1441.jpg", orientation:'v'},
				{file: "stephanie_charles_1442.jpg", orientation:'v'},
				{file: "stephanie_charles_1575.jpg", orientation:'v'},
				{file: "stephanie_charles_1590.jpg", orientation:'v'}
			]
		},		
		{
			name: "Viceroy Palm Springs",
			fullname: "",
			location: "Palm Springs, California",
			otherCredit: '',
			photoCredit: "Photos by Nima Salimi",
			photoFile: "imgs/weddings/viceroy_palm_springs_wedding/",
			photos: [
				//{file: "debra-yves-03.jpg", orientation:'v'},
				{file: "debra-yves-04.jpg", orientation:'h'},
				{file: "debra-yves-05.jpg", orientation:'h'},
				{file: "debra-yves-06.jpg", orientation:'h'},
				{file: "debra-yves-07.jpg", orientation:'v'},
				{file: "debra-yves-08.jpg", orientation:'h'},
				{file: "debra-yves-09.jpg", orientation:'v'},
				{file: "debra-yves-10.jpg", orientation:'h'},
				{file: "debra-yves-11.jpg", orientation:'h'},
				{file: "debra-yves-12.jpg", orientation:'h'},
				{file: "debra-yves-13.jpg", orientation:'v'},
				{file: "debra-yves-14.jpg", orientation:'h'},
				{file: "debra-yves-15.jpg", orientation:'v'},
				{file: "debra-yves-16.jpg", orientation:'h'},
				{file: "debra-yves-17.jpg", orientation:'h'},
				{file: "debra-yves-18.jpg", orientation:'h'},
				{file: "debra-yves-19.jpg", orientation:'h'},
				{file: "debra-yves-20.jpg", orientation:'h'},
				{file: "debra-yves-21.jpg", orientation:'h'},
				{file: "debra-yves-22.jpg", orientation:'h'}

			]
		},

		{
			name: "Villa Sevillano",
			fullname: "",
			location: "Santa Barbara, California",
			otherCredit: '',
			photoCredit: "Photos by Jose Villa",
			photoFile: "imgs/weddings/villa_sevillano_wedding_santa_barbara/",
			photos: [
				{file: "losey 1.jpg", orientation:'v', caption: ''},
				{file: "losey 2.0.jpg", orientation:'v'},
				{file: "losey 2.1.jpg", orientation:'v'},
				{file: "losey 3.0.jpg", orientation:'v'},
				{file: "losey 3.2.jpg", orientation:'v'},
				{file: "losey 3.5.jpg", orientation:'v'},
				{file: "losey 3.6.jpg", orientation:'v'},
				{file: "losey 3.7.jpg", orientation:'v'},
				{file: "losey 4.0.jpg", orientation:'v'},
				{file: "losey 4.5.jpg", orientation:'v'},
				{file: "losey 5.1.jpg", orientation:'v'},
				{file: "losey 5.5.jpg", orientation:'v'},
				{file: "losey 6.jpg", orientation:'v'},
				{file: "losey 8.jpg", orientation:'v'},
				{file: "losey 9.jpg", orientation:'v'},
				{file: "losey 10.5.jpg", orientation:'v'},
				{file: "losey 11.jpg", orientation:'v'},
				{file: "losey 12.jpg", orientation:'v'},
				{file: "losey 13.jpg", orientation:'v'},
				{file: "losey 14.2.jpg", orientation:'v'},
				{file: "losey 14.4.jpg", orientation:'h'},
				{file: "losey 14_0.jpg", orientation:'h'},
				{file: "losey 14-3.jpg", orientation:'h'},
				{file: "losey 15.jpg", orientation:'v'}
			]
		},

		{
			name: "Beaulieu Garden",
			fullname: "",
			location: "Rutherford, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Geoff Johnson",
			photoFile: "imgs/weddings/beaulieu_garden_wedding_rutherford_california/",
			photos: [
				{file: "courtney 3.jpg", orientation:'h', caption: ''},
				{file: "courtney 1.jpg", orientation:'v'},
				{file: "courtney 2.jpg", orientation:'h'},
				{file: "courtney 5.jpg", orientation:'h'},
				{file: "courtney 6.jpg", orientation:'v'},
				{file: "courtney 7.jpg", orientation:'v'},
				{file: "courtney 8.jpg", orientation:'v'},
				{file: "courtney 9.jpg", orientation:'h'},
				{file: "courtney 10.jpg", orientation:'h'},
				{file: "courtney 11.jpg", orientation:'v'},
				{file: "courtney 12.jpg", orientation:'h'},
				{file: "courtney 13.jpg", orientation:'h'},
				{file: "courtney 14.jpg", orientation:'v'},
				{file: "courtney 15.jpg", orientation:'v'},
				{file: "courtney 16.jpg", orientation:'h'},
				{file: "chatalas_gerlich_1037.jpg", orientation:'v'},
				{file: "courtney 18.jpg", orientation:'v'},
				{file: "courtney 19.jpg", orientation:'h'},
				{file: "courtney 20.jpg", orientation:'h'}
			]
		},

		{
			name: "Four Seasons Scottsdale",
			fullname: "",
			location: "Scottsdale, Arizona",
			otherCredit: '',
			photoCredit: "Photos by Suzy Clement",
			photoFile: "imgs/weddings/four_seasons_scottsdale_arizona/",
			photos: [
				{file: "I_0329.jpg", orientation:'h', caption: ''},
				{file: "I_0357.jpg", orientation:'v'},
				{file: "I_0415.jpg", orientation:'v'},
				{file: "I_0454.jpg", orientation:'h'},
				{file: "I_0455.jpg", orientation:'h'},
				{file: "I_0458.jpg", orientation:'h'},
				{file: "I_0470.jpg", orientation:'v'},
				{file: "I_0571.jpg", orientation:'v'},
				{file: "I_0584.jpg", orientation:'h'},
				{file: "I_0786.jpg", orientation:'h'},
				{file: "I_0635.jpg", orientation:'h'},
				{file: "I_0640.jpg", orientation:'h'},
				{file: "I_0653.jpg", orientation:'h'},
				{file: "I_0666.jpg", orientation:'h'},
				{file: "I_0669.jpg", orientation:'h'},
				{file: "I_0995.jpg", orientation:'h'},
				{file: "I_1090.jpg", orientation:'h'}
			]
		},

		/*{
			name: "Presidio Social Club",
			fullname: "",
			location: "San Francisco, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Meg Smith",
			photoFile: "imgs/weddings/the_presidio_san_francisco_california/",
			photos: [
				{file: "Julie_Josh_03.jpg", orientation:'h'},
				{file: "Julie_Josh_01.jpg", orientation:'h'},
				{file: "Julie_Josh_02.jpg", orientation:'v', caption: ''},
				{file: "Julie_Josh_04.jpg", orientation:'v'},
				{file: "Julie_Josh_05.jpg", orientation:'v'},
				{file: "Julie_Josh_06.jpg", orientation:'v'},
				{file: "Julie_Josh_07.jpg", orientation:'v'},
				{file: "Julie_Josh_08.jpg", orientation:'v'},
				{file: "Julie_Josh_10.jpg", orientation:'v'},
				{file: "Julie_Josh_11.jpg", orientation:'h'},
				{file: "Julie_Josh_12.jpg", orientation:'v'},
				{file: "Julie_Josh_13.jpg", orientation:'h'},
				{file: "Julie_Josh_14.jpg", orientation:'v'},
				{file: "Julie_Josh_15.jpg", orientation:'h'}
			]
		},*/
		
		{
			name: "Wine Country Estate",
			fullname: "",
			location: "Oakville, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Suzy Clement",
			photoFile: "imgs/weddings/oakville_estate_wedding_oakville/",
			photos: [
				{file: "borger-1051.jpg", orientation:'h', caption: ''},
				{file: "borger-0555.jpg", orientation:'v'},
				{file: "borger-0571.jpg", orientation:'v'},
				{file: "borger-0705.jpg", orientation:'h'},
				{file: "borger-1033.jpg", orientation:'v'},
				{file: "borger-1046.jpg", orientation:'v'},
				{file: "borger-1068.jpg", orientation:'v'},
				{file: "borger-1069.jpg", orientation:'h'},
				{file: "borger-1075.jpg", orientation:'h'},
				{file: "borger-1078.jpg", orientation:'v'},
				{file: "borger-1082.jpg", orientation:'v'},
				{file: "borger-1101.jpg", orientation:'h'},
				{file: "borger-1127.jpg", orientation:'v'},
				{file: "borger-1129.jpg", orientation:'h'}

			]
		},


	],

	events: [		

		{
			name: "Wine Cask Rehearsal Dinner",
			fullname: "",
			location: "Santa Barbara, California",
			photoCredit: "Photos by Jose Villa",
			photoFile: "imgs/events/wine_cask_rehersal_dinner_santa_barbara/",
			photos: [
/*				{file: "005234-R1-007.jpg", orientation:'v', caption: ''},*/
				{file: "005235-R1-010.jpg", orientation:'v'},
			/*	{file: "005236-R1-007.jpg", orientation:'v'},*/
				{file: "005240-R1-007.jpg", orientation:'v'},
				{file: "005242-R1-015.jpg", orientation:'v'},
				{file: "005244-R1-005.jpg", orientation:'v'},
				{file: "005246-R1-010.jpg", orientation:'v'},
				{file: "005248-R1-012.jpg", orientation:'v'},
				{file: "005250-R1-002.jpg", orientation:'v'},
				{file: "005252-R1-007.jpg", orientation:'v'},
				{file: "005252-R1-015.jpg", orientation:'v'}
			
			],
		},
		{
			name: "Upcountry BBQ",
			fullname: "",
			location: "Maui, Hawaii",
			photoCredit: "Photos by Meg Smith",
			photoFile: "imgs/events/upcountry_bbq_maui_hawaii/",
			photos: [
				{file: "stephanie_charles_0001.jpg", orientation:'v', caption: ''},
				{file: "stephanie_charles_0002.jpg", orientation:'v'},
				{file: "stephanie_charles_0003.jpg", orientation:'v'},
				{file: "stephanie_charles_0004.jpg", orientation:'v'},
				{file: "stephanie_charles_0007.jpg", orientation:'v'},
				{file: "stephanie_charles_0008.jpg", orientation:'v'},
				{file: "stephanie_charles_0009.jpg", orientation:'v'},
				{file: "stephanie_charles_0014.jpg", orientation:'v'},
				{file: "stephanie_charles_0032.jpg", orientation:'h'},
				{file: "stephanie_charles_0035.jpg", orientation:'v'},
				{file: "stephanie_charles_0044.jpg", orientation:'v'},
				{file: "stephanie_charles_0052.jpg", orientation:'v'},
				{file: "stephanie_charles_0053.jpg", orientation:'v'},
				{file: "stephanie_charles_0080.jpg", orientation:'v'},
				{file: "stephanie_charles_0320.jpg", orientation:'h'}
			
			],
		},
		{
			name: "Contemporary Jewish Museum Bat Mitzvah",
			fullname: "",
			location: "San Francisco, California",
			photoCredit: "Photos by Angie Silvy Photography",
			photoFile: "imgs/events/contemporary_jewish_museum_bat_mitzvah_san_francisco/",
			photos: [
				{file: "levine 1.jpg", orientation:'v', caption: ''},
				{file: "levine 2.jpg", orientation:'v'},
				{file: "levine 3.jpg", orientation:'v'},
				{file: "levine 4.jpg", orientation:'v'},
				{file: "levine 5.jpg", orientation:'v'},
				{file: "levine 6.jpg", orientation:'v'},
				{file: "levine 7_5.jpg", orientation:'v'},
				{file: "levine 7.jpg", orientation:'v'},
				{file: "levine 9.jpg", orientation:'v'},
				{file: "levine 10.jpg", orientation:'v'},
				{file: "levine 11.jpg", orientation:'v'},
				{file: "levine 12.jpg", orientation:'v'},
				{file: "levine 13.jpg", orientation:'v'},
				{file: "levine 14.jpg", orientation:'v'},
				{file: "levine 15.jpg", orientation:'v'},
				{file: "levine 16.jpg", orientation:'v'}
			],
		},

		{
			name: "Fiesta Rehearsal Dinner",
			fullname: "",
			location: "Scottsdale, Arizona",
			photoCredit: "Photos by Suzy Clement",
			photoFile: "imgs/events/fiesta_rehearsal_dinner_scottsdale_arizona/",
			photos: [
				{file: "I_0131.jpg", orientation:'h', caption: ''},
				{file: "I_0146.jpg", orientation:'h'},
				{file: "I_0170.jpg", orientation:'v'},
				{file: "I_0254.jpg", orientation:'v'},
				{file: "I_0314.jpg", orientation:'h'},
				{file: "I_0316.jpg", orientation:'h'},
				{file: "I_0320.jpg", orientation:'h'},
				{file: "I_0295.jpg", orientation:'h'},
				{file: "I_0326.jpg", orientation:'v'},
				{file: "I_0327.jpg", orientation:'h'}
			],
		},

		{
			name: "Sydney\'s Bat Mitzvah",
			fullname: "",
			location: "San Francisco, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by JK Lifestories",
			photoFile: "imgs/events/sydney_bat_mitzvah_san_francisco/",
			photos: [
				{file: "Sydney 2.jpg", orientation:'h'},
				{file: "Sydney 1.jpg", orientation:'v', caption: ''},
				{file: "Sydney 3.jpg", orientation:'v'},
				{file: "Sydney 4.jpg", orientation:'h'},
				{file: "Sydney 5.jpg", orientation:'h'},
				{file: "Sydney 6.jpg", orientation:'h'},
				{file: "Sydney 7.jpg", orientation:'v'},
				{file: "Sydney 8.5.jpg", orientation:'v'},
				{file: "Sydney 8.jpg", orientation:'v'},
				{file: "Sydney 9.jpg", orientation:'h'},
				{file: "Sydney 10.jpg", orientation:'h'},
				{file: "Sydney 11.jpg", orientation:'h'},
				{file: "Sydney 12.jpg", orientation:'h'},
				{file: "Sydney 13.jpg", orientation:'h'},
				{file: "Sydney 14.jpg", orientation:'v'}
			],
		},

		{
			name: "Wine Country Welcome Party",
			fullname: "",
			location: "Yountville, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Geoff Johnson",
			photoFile: "imgs/events/welcome_party_yountville_california/",
			photos: [
				{file: "chatalas_gerlich_522.jpg", orientation:'h', caption: ''},
				{file: "98260004.jpg", orientation:'v'},
				{file: "chatalas_gerlich_326.jpg", orientation:'h'},
				{file: "chatalas_gerlich_328.jpg", orientation:'h'},
				{file: "chatalas_gerlich_519.jpg", orientation:'h'},
				{file: "98260002.jpg", orientation:'v'},
				{file: "chatalas_gerlich_521.jpg", orientation:'h'},
				{file: "chatalas_gerlich_527.jpg", orientation:'h'},
				{file: "chatalas_gerlich_1131.jpg", orientation:'v'}
				
			],
		},

		{
			name: "Wine Cave Rehearsal Dinner",
			fullname: "",
			location: "Rutherford, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Geoff Johnson",
			photoFile: "imgs/events/wine_cave_rehearsal_dinner_rutherford_california/",
			photos: [
				{file: "chatalas_gerlich_1053.jpg", orientation:'h', caption: ''},
				{file: "chatalas_gerlich_1045.jpg", orientation:'v'},
				{file: "chatalas_gerlich_427.jpg", orientation:'h'},
				{file: "chatalas_gerlich_430.jpg", orientation:'v'},
				{file: "chatalas_gerlich_1065.jpg", orientation:'v'}
			],
		},

		{
			name: "Wine Country After-Party",
			fullname: "",
			location: "St. Helena, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Geoff Johnson",
			photoFile: "imgs/events/wine_country_after_party_st_helena_california/",
			photos: [
				{file: "chatalas_gerlich_542.jpg", orientation:'h', caption: ''},
				{file: "chatalas_gerlich_413.jpg", orientation:'h'},
				{file: "chatalas_gerlich_540.jpg", orientation:'v'},
				{file: "chatalas_gerlich_408.jpg", orientation:'h'},
				{file: "chatalas_gerlich_545.jpg", orientation:'h'},
				{file: "chatalas_gerlich_546.jpg", orientation:'v'},
				{file: "chatalas_gerlich_547.jpg", orientation:'h'},
				{file: "chatalas_gerlich_1169.jpg", orientation:'v'},
				{file: "chatalas_gerlich_551.jpg", orientation:'h'}
			],
		},

		{
			name: "Meadowood Croquet Brunch",
			fullname: "",
			location: "St. Helena, California",
			otherCredit: 'Jenna Lam for <a href="http://lauriearons.com/" onclick="window.open(\'\',\'_new\').location.href=this.href; return false;">Laurie Arons Special Events</a>',
			photoCredit: "Photos by Suzy Clement",
			photoFile: "imgs/events/meadowood_croquet_brunch_st_helena/",
			photos: [
				{file: "borger-1378.jpg", orientation:'h', caption: ''},
				{file: "borger-1238.jpg", orientation:'h'},
				{file: "borger-1244.jpg", orientation:'h'},
				{file: "borger-1368.jpg", orientation:'v'}
			],
		},
/*		{
			name: "Marin Holiday Party",
			fullname: "",
			location: "Marin, California",
			photoCredit: "Photos by Nima Salimi",
			photoFile: "imgs/events/marin_holiday_party/",
			photos: [
				{file: "jenna-1.jpg", orientation:'h', caption: ''},
				{file: "jenna-4.jpg", orientation:'h'},
				{file: "jenna-5.jpg", orientation:'v'},
				{file: "jenna-8.jpg", orientation:'h'},
				{file: "jenna-20.jpg", orientation:'h'},
				{file: "jenna-38.jpg", orientation:'h'}
			],
		},*/


	],


	corporate: [
		{
			name: "",
			fullname: "",
			location: "",
			photo: "imgs/corporate/corp_photo.jpg",
			photoFile: "imgs/corporate/",
			photos: [
				{file: "corp_photo.jpg", orientation:'h'}
				],

			copy: "Jenna Lam Events is available for select luxury retreats, incentives, holiday parties, special events, and galas. We are committed to producing flawless events that perfectly align with your budget and goals.<br/><br/> Please <span id='corporate-contact-link' class='link view' hash='contact'>contact us</span> to inquire about our corporate event services."

		}
	],

<<<<<<< HEAD
	aboutUs: [
		{
			name: "Meet Jenna Lam",
			location: "Founder & Director",
			copy: "Obsessed with wedding and event design since her early teens, Jenna has been planning seamless events in the San Francisco Bay Area and beyond since 2006.  Jenna has applied her perfectionism, precision and warmth to weddings, birthday bashes, bat mitzvahs and corporate gigs alike.<br/><br/>Jenna holds a degree in Business with a minor in Economics from Emory University. In 2011, San Francisco Brides magazine named Jenna part of the city's 'New Guard' of up and coming wedding professionals.<br/><br/>She currently resides in the Napa Valley where she can be found indulging her sweet tooth at Bouchon Bakery and sipping wine on the terrace of Auberge du Soleil.",
			photo: "imgs/headshot/jenna_lam.jpg",
			separator: "imgs/logoartwork/separator_grey_small_nologo.png",
			logo: "imgs/logoartwork/roundmark_jennalamevents_grey.png",
			photoCredit: "Photo by Angie Silvy"

		},

		{
			name: "Meet Lexie Brooks",
			location: "Creative Director",
			copy: "Lexie joined the JLE team in 2013 with more than 11 years of experience in the floral industry. A native of New Jersey, Lexie has worked for some of the most prestigious event and floral designers on the east and west coast.<br/><br/>Lexie approaches each event with fresh creativity and enthusiasm. Her timeless aesthetic and attention to detail make her a perfect fit with the JLE team. <br/><br/>Lexie lives in Marin with her husband, daughter Susie and their dog, Whiskey.",
			photo: "imgs/headshot/lexie_brooks.jpg",
=======
	jenna: [
		{
			copy: "Obsessed with wedding and event design since her early teens, Jenna has been planning seamless events in the San Francisco Bay Area and beyond since 2006.  Jenna has applied her perfectionism, precision and warmth to weddings, birthday bashes, bat mitzvahs and corporate gigs alike.<br/><br/>She currently resides in the Napa Valley where she can be found indulging her sweet tooth at Bouchon Bakery and sipping wine on the terrace of Auberge du Soleil.<br/><br/>Jenna holds a degree in Business with a minor in Economics from Emory University. In 2011, San Francisco Brides magazine named Jenna part of the city's 'New Guard' of up and coming wedding professionals.",
			photo: "imgs/headshot/jenna_lam.JPG",
>>>>>>> fd5c709e8c95865f820508d124c44d1cb4892a71
			separator: "imgs/logoartwork/separator_grey_small_nologo.png",
			logo: "imgs/logoartwork/roundmark_jennalamevents_grey.png",
			photoCredit: "Photo by Angie Silvy"

		}
	],

	seen: [],

	contact: [
		{
			name: "",
			fullname: "",
			location: "",
			photo: "imgs/weddings/beaulieu_garden_wedding_rutherford_california/courtney%2012.jpg",
			photoFile: "imgs/weddings/beaulieu_garden_wedding_rutherford_california/",
			photos: [
				{file: "courtney 12.jpg", orientation:'h'}
				],

			// Contact
			logo: "imgs/logoartwork/roundmark_jennalamevents_grey.png",
			email: "jenna@jennalamevents.com",
			office: "415.504.3545",
			cell: "414.418.8611"
		}
	]

};
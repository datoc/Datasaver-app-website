$(document).ready(function() {

	//--------------------------------Nav------------------------------------------------
	var georgian_nav = ["მახასიათებლები", "სქრინშოთები", "შესახებ", "ენა"];
	var english_nav = ["Features", "Screenshots", "About", "Lang"];
	var russian_nav = ["свойство", "Скриншоты", "О программе", "язык"];
	var navItemLength = document.getElementsByTagName("a").length;
	//-----------------------------------------------------------------------------------

	var i;

	//----------------------------------Headers------------------------------------------
	var header_english = ["Save your accounts in Data Saver", "DataSaver Features", "Background change", "Font change", "Language change", "What Our Software Can To Do For You", "Account Save", "Accounts Delete", "Safety", "Software Screenshots"];

	var header_georgian = ["შეინახე შენი ანგარიშების მონაცემები DataAsaer-ში", "DataSaver-ის მახასიათებლები", "ფონის შეცვლა", "ფონტის შეცვლა", "ენის შეცვლა", "რა შეუძლია გააკეთოს ჩვენს პროგრამას თქვენთვის", "ანგარიშის შენახვა", "ანგარიშების წაშლა", "დაცულობა", "პროგრამის სქრინშოთები"];

	var header_russian = ["Сохраните свои учетные записи в Data Saver", "Функции DataSaver", "Изменение фона", "Изменение шрифта", "Изменение языка", "Что наше программное обеспечение может сделать для вас", "Сохранение учетной записи", "Удаление учетных записей", "Безопасность", "Программное обеспечение Скриншоты"];
	var headersLength = document.getElementsByClassName("h").length;
	//-----------------------------------------------------------------------------------


	//----------------------------------Descriptions-------------------------------------
	var description_english = ["Software has background changing feature<br>User can change background color<br> any time, with any color.", "Software has font style changing feature<br>User can change font style<br> any time, with any font style.", "Software has language changing feature<br>User can change language<br> any time. Program has only<br> 3 language support: Georgian, English and Russian.", "You Can To Save Your Accounts Any Time. These Accounts Could Be: <strong>E-mail, Social Network</strong> <br> and etc. Software Do Not Uses DataBase and Network Connection.", "You Can To Delete Your Accounts Any Time. These Accounts Could Be: <strong>E-mail, Social Network</strong> <br> and etc. These Accounts Are Storing in Text file.", "Software Has Great Functions To Secure Your Program From Incorrect Data Entering.<br>User Must Be Authorized In Program To Show Datas."];

	var description_georgian = ["პროგრამას აქვს ფონის შეცვლის ფუნქცია, მომხმარებელს შეუძლია შეცვალოს ფონის ფერი ნებისმიერ დროს ნებისმიერ ფერში", "პროგრამული უზრუნველყოფა აქვს შრიფტის სტილის შეცვლის ფუნქციას <br> მომხმარებელი შეუძლია შეცვალოს შრიფტის სტილი ნებისმიერ დროს, ნებისმიერი შრიფტით სტილი. "," პროგრამულს ენის ენის შეცვლა აქვს, ნებისმიერ დროს ენის შეცვლა შეუძლია ", "პროგრამას აქვს მხოლოდ 3 ენის მხარდაჭერა: ქართული, ინგლისური და რუსული.", "თქვენ შეგიძლიათ შეინახოთ თქვენი ანგარიშები ნებისმიერ დროს ეს ანგარიშები შეიძლება იყოს: <strong> ელ.ფოსტა, სოციალური ქსელი </ strong> და ა.შ. პროგრამული უზრუნველყოფა არ იყენებს მონაცემთა ბაზასა და ქსელთან დაკავშირებას. "," შეგიძლიათ ანგარიშის წაშლა ნებისმიერ დროს. : <strong> ელ.ფოსტა, სოციალური ქსელი </ strong> <br> და ა.შ. ეს ანგარიშები შენახულია ტექსტურ ფაილში. "," პროგრამას აქვს დიდი ფუნქციები, რათა უზრუნველყოს თქვენი პროგრამა არასწორი მონაცემების შეყვანადან. ავტორიზებული პროგრამის ჩვენება მონაცემთა ბაზის ჩვენება. "];

	var description_russian = ["Программное обеспечение имеет функцию изменения фона <br> Пользователь может изменить цвет фона - в любое время, с любым цветом.", "Программное обеспечение имеет функцию изменения стиля шрифта - Пользователь может изменить стиль шрифта - в любое время, с любым шрифтом style. "," Программное обеспечение имеет функцию смены языка. Пользователь может изменить язык <br> в любое время. Программа поддерживает только 3 языка: грузинский, английский и русский. "," Вы можете сохранить свои учетные записи в любое время . Эти учетные записи могут быть: <strong> электронная почта, социальная сеть </ strong> <br> и т. Д. Программное обеспечение не использует базу данных и сетевое подключение. "," Вы можете удалить свои учетные записи в любое время. Эти учетные записи могут быть <strong> Электронная почта, социальная сеть </ strong> <br> и т. д. Эти учетные записи хранятся в текстовом файле. "," Программное обеспечение обладает большими функциями для защиты вашей программы от неправильного ввода данных. <br> Пользователь должен быть Авторизован в программе для показа данных."];

	var lenDesc = document.getElementsByClassName("tc").length;
	//-----------------------------------------------------------------------------------
	$("#gelang").click(function() {

		document.cookie = "lang=ge";
		
		for(i = 0; i < 5; i++) {
			if(i == 0) continue;
			document.getElementsByTagName("a")[i].innerHTML = georgian_nav[i - 1];
			document.getElementsByTagName("a")[4].innerHTML =  georgian_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
		}

		for(var j = 0; j < headersLength; j++) {
			document.getElementsByClassName("h")[j].innerHTML = header_georgian[j];
		}

		for(var d = 0; d < lenDesc; d++) {
			document.getElementsByClassName("tc")[d].innerHTML = description_georgian[d];
		}

		$(".myButton").text("მეტი პროგრამის შესახებ");
		$("#el1").text("Data Saver გეხმარებათ შეინახოთ თქვენი ანგარიშები");
		$("#el2").text("სწრაფი, დაცული და ადვილად მოსახმარი");
	});

	$("#enlang").on("click", function() {
		document.cookie = "lang=en";

		for(i = 0; i < 5; i++) {
			if(i == 0) continue;
			document.getElementsByTagName("a")[i].innerHTML = english_nav[i - 1];
			document.getElementsByTagName("a")[4].innerHTML =  english_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
		}

		for(var j = 0; j < headersLength; j++) {
			document.getElementsByClassName("h")[j].innerHTML = header_english[j];
		}

		for(var d = 0; d < lenDesc; d++) {
			document.getElementsByClassName("tc")[d].innerHTML = description_english[d];
		}

		$(".myButton").text("More about software");
		$("#el1").text("Data saver helps you tu save your accounts");
		$("#el2").text("fast, safe and easy to use");
	});

	$("#rulang").on("click", function() {
		document.cookie = "lang=ru";

		for(i = 0; i < 5; i++) {
			if(i == 0) continue;
			document.getElementsByTagName("a")[i].innerHTML = russian_nav[i - 1];
			document.getElementsByTagName("a")[4].innerHTML =  russian_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
		}

		for(var j = 0; j < headersLength; j++) {
			document.getElementsByClassName("h")[j].innerHTML = header_russian[j];
		}

		for(var d = 0; d < lenDesc; d++) {
			document.getElementsByClassName("tc")[d].innerHTML = description_russian[d];
		}

		$(".myButton").text("Подробнее о программе");
		$("#el1").text("Хранитель данных поможет вам сохранить ваши");
		$("#el2").text("быстрый, безопасный и простой в использовании");
	});

	var checkLang = document.cookie.split('=')[1];


	$(window).on("scroll", function() {
		$scrollD = $(window).scrollTop();

		if($scrollD > 100) {
			var nav = $(".navtyle");
			nav.addClass("scrolledNav");
		}else {
			var nav = $(".navtyle");
			nav.removeClass("scrolledNav");	
		}
	});

	$(window).on("load", function() {

		switch(checkLang) {
			case "ge":
				for(i = 0; i < 5; i++) {
					if(i == 0) continue;
					document.getElementsByTagName("a")[i].innerHTML = georgian_nav[i - 1];
					document.getElementsByTagName("a")[4].innerHTML =  georgian_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
				}

				for(var j = 0; j < headersLength; j++) {
					document.getElementsByClassName("h")[j].innerHTML = header_georgian[j];
				}

				for(var d = 0; d < lenDesc; d++) {
					document.getElementsByClassName("tc")[d].innerHTML = description_georgian[d];
				}

				$(".myButton").text("მეტი პროგრამის შესახებ");
				$("#el1").text("Data Saver გეხმარებათ შეინახოთ თქვენი ანგარიშები");
				$("#el2").text("სწრაფი, დაცული და ადვილად მოსახმარი");

				$("*").css({
					"font-family" : "mtavruli"
				});
			break;

			case "ru":
				for(i = 0; i < 5; i++) {
					if(i == 0) continue;
					document.getElementsByTagName("a")[i].innerHTML = russian_nav[i - 1];
					document.getElementsByTagName("a")[4].innerHTML =  russian_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
				}

				for(var j = 0; j < headersLength; j++) {
					document.getElementsByClassName("h")[j].innerHTML = header_russian[j];
				}

				for(var d = 0; d < lenDesc; d++) {
					document.getElementsByClassName("tc")[d].innerHTML = description_russian[d];
				}

				$(".myButton").text("Подробнее о программе");
				$("#el1").text("Хранитель данных поможет вам сохранить ваши");
				$("#el2").text("быстрый, безопасный и простой в использовании");
			break;

			case "en":
				for(i = 0; i < 5; i++) {
					if(i == 0) continue;
					document.getElementsByTagName("a")[i].innerHTML = english_nav[i - 1];
					document.getElementsByTagName("a")[4].innerHTML =  english_nav[3] + "&nbsp;&nbsp;<span class=\"caret\"></span>";
				}


				for(var j = 0; j < headersLength; j++) {
					document.getElementsByClassName("h")[j].innerHTML = header_english[j];
				}

				for(var d = 0; d < lenDesc; d++) {
					document.getElementsByClassName("tc")[d].innerHTML = description_english[d];
				}

				$(".myButton").text("More about software");
				$("#el1").text("Data saver helps you tu save your accounts");
				$("#el2").text("fast, safe and easy to use");
			break;
		}
	});
});
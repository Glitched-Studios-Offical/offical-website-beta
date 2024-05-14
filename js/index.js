function redirectIfNecessary() { var redirectionUrls = ["https://glitched-studios-offical.github.io/Official-Website/", "https://glitched-studios-offical.github.io/Official-Website/index.html" ,"glitched-studios-offical.github.io/Official-Website/"]; var currentUrl = window.location.href; if (redirectionUrls.includes(currentUrl)) { window.location.replace("https://glitched-studios.vercel.app/"); } }  window.onload = function() {redirectIfNecessary();};
let titleElement = document.getElementById("title");
			let titleArray = ["G", "Gl", "Gli", "Glit", "Glitc", "Glitch", "Glitche", "Glitched", "Glitched S", "Glitched St", "Glitched Stu", "Glitched Stud", "Glitched Studi", "Glitched Studio", "Glitched Studios™"];
			let titleIndex = 0;
			setInterval(function() {
				titleElement.textContent = titleArray[titleIndex];
				titleIndex = (titleIndex + 1) % titleArray.length;
			}, 300);
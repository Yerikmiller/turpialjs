var about = 
turpial.el("section", [
	turpial.el("h2", "Angular JS"),
	turpial.el("p", "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.<br><br>"),
	turpial.el("button", {onclick: "turpial.router('back');"}, "back")
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", about);

var about = 
turpial.el("section", [
	turpial.el("h2", "Vue JS"),
	turpial.el("p", "Vue.js is one of those new software technologies that are being widely used across the world for web development. Vue.js is actually a JavaScript framework with various optional tools for building user interfaces.<br><br>"),
	turpial.el("button", {onclick: "turpial.router('back');"}, "back")
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", about);

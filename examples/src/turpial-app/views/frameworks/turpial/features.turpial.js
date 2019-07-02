var about = 
turpial.el("section", [
	turpial.el("h2", "Turpial JS - Features"),
	turpial.el("ul", [
		turpial.el("li", "made it to create SPA easily"),
		turpial.el("li", "create and use web components easily."),
		turpial.el("li", "include dependencies and components sequentially"),
		turpial.el("li", "JSX templating engine"),
		turpial.el("li", "special functions like mapping elements and children to easy point to selectors"),
		turpial.el("li", "router and MVC"),
	]),
	turpial.el("button", {onclick: "turpial.router('back');"}, "back"),
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", about);

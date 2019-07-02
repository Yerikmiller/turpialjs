var about = 
turpial.el("section", [
	turpial.el("h2", "Turpial JS"),
	turpial.el("p", "Turpial JS it's a micro framework created with Pure Javascript, it offer a set of tools as: templating engine with JSX syntax, create, load & cache web components. Turpial JS do not manage a Virtual DOM, it point and manage the real DOM directly, Also it can create reusable web components. Loadfiles as views, modules components, or .turpial.js files sequentially. Divide your coding and make you web app faster.<br><br>"),
	turpial.el("button", {onclick: "turpial.router('back');"}, "back"),
	turpial.el("button", {onclick: "turpial.router({path: 'features'});"}, "Features"),
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", about);

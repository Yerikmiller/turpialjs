var about = 
turpial.el("section", [
	turpial.el("h2", "React"),
	turpial.el("p", "React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.<br><br>"),
	turpial.el("button", {onclick: "turpial.router('back');"}, "back")
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", about);

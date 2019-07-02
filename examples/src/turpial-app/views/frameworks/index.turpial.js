var frameworksList = 
turpial.el("ul", [
	turpial.el("li", turpial.el("turpial-router", 
		{"data-href": "turpial", "data-text": "turpial", "data-title": "Turpial Introduction"})),
	
	turpial.el("li", turpial.el("turpial-router", 
		{"data-href": "react", "data-text": "react", "data-title": "React Introduction"})),
	
	turpial.el("li", turpial.el("turpial-router", 
		{"data-href": "angular", "data-text": "angular", "data-title": "Angular JS Introduction"})),
	
	turpial.el("li", turpial.el("turpial-router", 
		{"data-href": "vue", "data-text": "vue", "data-title": "Vue Introduction"})),
])

// insert on turpial-app
// app/index.html - file
turpial.insert("turpial-app", frameworksList);

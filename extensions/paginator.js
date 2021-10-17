turpial.mdb = {
	paginate: {
		lists: [], // pagination elements on page
		elements_loading: {},
		templateButtons: function(number, classes){
			return turpial.el("a", {class: "turpial-buttons-mdb mdbButton "+classes, "data-number": number}, number);
		},
		loader: function(type, activated){
			activated = turpial.un(activated, true);
			if(activated === false){ return; }
			type = turpial.un(type, "show");
			if(type === "show"){topbar.show()}
				if(type === "hide"){topbar.hide()}
		},
		create: function(props){
			var app = this;
			props = props || {};
			var element_loading = coreApp.e(props.url);
			if(typeof this.elements_loading[element_loading] === "undefined"){
				this.elements_loading[element_loading] = {};
			}else{
				if(this.elements_loading[element_loading].loading === true){ return; }
			}			
			this.elements_loading[element_loading].loading = true;
			props.topbar = turpial.un(props.topbar, true);
			app.loader("show", props.topbar);
			coreApp.database.push({
				data: {
					info: {},
					"public": props.url,
					props: props
				},
				ready: function( response ){
					app.elements_loading[element_loading].loading = false;

					var data = coreApp.json.parse(response);
					if(data.data == null){
						props.ready(data);
						topbar.hide();
						return null;
					} else if(props.position > data.limit){
						props.onerror(data);
						topbar.hide();
						return null;
					}
					var navigation = app.createNavigationButtons({
						data: data,
						position: props.position,
						nextButton: props.nextButton,
						backButton: props.backButton,
						numbers: data.navigation,
						target: props.navigationContainer,
						options: props,
					})
					props.ready(data)

					// save array elements to push somewhere...
					app.lists[props.navigationContainer] = data; 
					app.loader("hide", props.topbar);
				},
				onerror(){

				}
			})
		},
		selectedButton: function(target, position, classes){
			target = turpial.find(target);
			var elements = coreApp.concat(target.querySelectorAll(".turpial-buttons-mdb"));
			var button = `<a data-number="${position}" class="turpial-buttons-mdb-selected mdbButton ${classes}">
				${position}
			</a>`
			turpial.insert(elements[0], button, "after");
		},
		createNextAndPrevius(target, props){
			var pp = this;
			props = props || {};
			var data = props.data;			
			var numberBack = Number.parseInt(data.position)-1;
			var numberNext = Number.parseInt(data.position)+1;

			var buttonBackProps = {};
			var buttonNextProps = {};
			if(numberBack < 1){
				numberBack = 1;
				buttonBackProps = {
					classes: "is-disabled",
					HTMLproperties: "disabled=''",
					disabledStyles: props.options.disabledStyles || "",
				}
			}else if(numberNext > data.limit){
				numberNext = data.limit;
				buttonNextProps = {
					classes: "is-disabled",
					HTMLproperties: "disabled=''",
					disabledStyles: props.options.disabledStyles || "",
				}
			}
			var buttonBack = `<a data-number="${numberBack}" style="${buttonBackProps.disabledStyles || ""}" class="turpial-buttons-mdb backButton mdbButton ${props.options.buttonClasses} ${buttonBackProps.classes || ""}" ${buttonBackProps.HTMLproperties || ""}>
				<span class="is-hidden-touch">${props.backButton}</span><span class="is-hidden-desktop"><</span>
			</a>`

			var buttonNext = `<a data-number="${numberNext}" style="${buttonNextProps.disabledStyles || ""}" class="turpial-buttons-mdb nextButton mdbButton ${props.options.buttonClasses} ${buttonNextProps.classes || ""}" ${buttonNextProps.HTMLproperties || ""}>
				<span class="is-hidden-touch">${props.nextButton}</span><span class="is-hidden-desktop">></span>
			</a>`
			target = turpial.find(target);
			var elements = coreApp.concat(target.querySelectorAll(".turpial-buttons-mdb"));
			turpial.insert(elements[0], buttonBack, "before");
			turpial.insert(elements.pop(), buttonNext, "after");
		},
		createFirstAndLast: function(idContainer, props){
			/*
			 * Create @last and @firts position
			 * firts and last position will appears when they are not in navigation numbers.
			 * @first: generally: 1 (props.numbers[0])
			 * @last: the last position it's the limit number in props.data.limit
			*/
			var app = this;
			var first = 1;
			var last = props.data.limit;
			var firstAppear = true;
			var lastAppear = true;
			var buttonNumberFirst = `<a data-number="${first}" class="turpial-buttons-mdb mdbButton ${props.options.buttonClasses}">
				${first}...
			</a>`;
			var buttonNumberLast = `<a data-number="${last}" class="turpial-buttons-mdb mdbButton ${props.options.buttonClasses}">
				...${last}
			</a>`;

			var elements = coreApp.concat(document.querySelectorAll(`#${idContainer} .turpial-buttons-mdb`));
			elements.forEach(function(element){
				var number = element.getAttribute("data-number");
				number = Number.parseInt(number);
				if(number === first){
					firstAppear = false;
				}
				if(number === last){
					lastAppear = false;
				}
			});

			if(firstAppear === true){
				turpial.insert(elements[0], buttonNumberFirst, "after");
			}
			if(lastAppear === true){
				turpial.insert(elements.pop(), buttonNumberLast, "before");
			}

		},
		createNavigationButtons: function(props){
			if(props.target == false){ return }
			props = props || {};
			var app = this;
			var position = props.position;
			var numbers = props.numbers;
			var idContainer = "mdbbuttons-"+props.target;
			props.options.buttonClasses = turpial.un(props.options.buttonClasses, "button is-light bold")
			var onclick = turpial.un(props.onclick, function(){})
			var htmlButtons = "";
			numbers.forEach(function( numberButton ){
				htmlButtons += app.templateButtons(numberButton, props.options.buttonClasses);
			})
			turpial.insert(props.target, 
				turpial.el("div", {class: "buttons is-grouped mdbbuttons-container is-centered", id: idContainer}, htmlButtons));
			// create Next And Previus
			app.createNextAndPrevius(idContainer, props);

			// create selected position:
			app.selectedButton(idContainer, props.position, props.options.buttonSelectedClasses);
			
			app.createFirstAndLast(idContainer, props);


			var insertedButtons = coreApp.concat(document.querySelectorAll(`#${idContainer} .turpial-buttons-mdb`));
			insertedButtons.forEach(function(btn){
				var number = btn.getAttribute("data-number");
				if(number > props.data.limit || number === props.position){
					btn.remove();
				}
				btn.addEventListener("click", function(){					
					props.options.position = number;
					app.create(props.options);
				})
			})
		}
	}
}

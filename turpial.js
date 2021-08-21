/*
  _______ _    _ _____  _____ _____          _             _  _____ 
 |__   __| |  | |  __ \|  __ \_   _|   /\   | |           | |/ ____|
    | |  | |  | | |__) | |__) || |    /  \  | |           | | (___  
    | |  | |  | |  _  /|  ___/ | |   / /\ \ | |       _   | |\___ \ 
    | |  | |__| | | \ \| |    _| |_ / ____ \| |____  | |__| |____) |
    |_|   \____/|_|  \_\_|   |_____/_/    \_\______|  \____/|_____/ 
    * Turpial JS Library V. 1.0.0
    * License: MIT.
    * Copyright Yorman Maricuto, May 2019.
    * @twitter: @MaricutoYorman, @Instagram: maricuto
    * Micro-Library to create web components, multi-fetch elements, append styles, scripts, templating engine JSX
*/
class Turpial
{
	constructor( tpObj = {} )
	{
		// this is for generate
		// a family tree of birds 
		// (parents-childrens -> map)
		// this is is to control realDOM (update-delete-insert-read)
		this.birds = [];
		this.un = (v, r = "")=> {
			if(typeof v === "undefined"){return r;}
			else{return v;}
		};
		this.searchStr = (where, what, position = false)=>{
			let search = where.search( what );
			if(search === -1){
				return false;
			}
			if(position === true){return search;}
			return true;
		}
		this.replacement = (target, search, replacement)=>{
			return target.split( search ).join( replacement )
		}
		this.find = (selector)=>{
			if(typeof selector === "string"){
				return document.getElementById(selector);
			}else{return selector;}
		}
		// helpers
		this.ext = ".turpial.js";		
		this.allowStateEvents = this.un(tpObj.allowStateEvents, false);
		this.loadModulesOnRoute = this.un(tpObj.loadModulesOnRoute, true);
		this.autoloader = this.un( tpObj.autoloader, false );
		this.autoloader_folder = this.un( tpObj.autoloader_folder, "" );
		this.cache = this.un( tpObj.cache, "public" );
		this.public_path = this.un( tpObj.public_path, "" );
		this.core_path = this.un( tpObj.core_path, "" );
		this.folder = this.un( tpObj.core_path, "/turpial/" );
		this.loader = {};
		this.httpRequests = [];
		this.loader.show = this.un( tpObj.loaderShow, null );
		this.loader.hide = this.un( tpObj.loaderHide, null );
		this.views = {};
		this.statusResources = "loaded";
		this.resources = {};
		this.myComponents = [];
		this.random_string = (length) => {
			"undefined"==typeof length&&(length=6);for(var result="",characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",charactersLength=characters.length,i=0;i<length;i++)result+=characters.charAt(Math.floor(Math.random()*charactersLength));
			return result;
		}
		this.selectData = ( arr, item, value, return_key )=> {
			return_key = turpial.un(return_key, false);
			var get = "";
			arr.forEach(function( dta, key ){	
				if(dta[item] == value){

					if(return_key === true){
						get = key;
						return;
					}else{
						get = dta;
						return;
					}				
				}
			})
			return get;
		}
		this.component = {
			applyProps: ( tag, props )=>{
				const applying = ()=>{
					const elements = document.querySelectorAll( tag );
					// like a spread operator
					Array.prototype.slice.call(elements). 
              		forEach(function(el){
                 		props(el);
            		})
				}
				const implement = ()=>{
					if(this.statusResources	=== "loading"){
						var limit = 0;
						var interval = setInterval(()=>{
							if(limit > 6000){
								console.warn("error loading resources and applying components");
								clearInterval(interval);
								return;
							}
							limit = limit + 20;
							if(this.statusResources	=== "loaded"){
								clearInterval(interval);
								applying( tag, props );
								return;
							}
						}, 20)
					}else{
						applying( tag, props );
						return;
					}
				}
				window.addEventListener("load", ()=>{
					implement();return;
				})
				if(document.readyState === "complete"){
				implement();return;}			
			},
			set: (obj)=>{
				const app = this;
				const component = app.component;
				var props = obj.props;
				var tag = obj.tag;
				app.myComponents.push( {tag: tag, props: props} );
				var extendTo = app.un( obj.extends, null );				
				if(extendTo !== null){extendTo = {extends: extendTo} }
				if(typeof window.customElements === "undefined"){
					app.component.olderVerBrow = ()=>{

					}
					component.applyProps( tag, props );
					return;
				}
				var get = window.customElements.get(tag);
				if(typeof get !== "undefined"){return;}
				window.customElements.define(tag, class extends HTMLElement {
					constructor( props = obj.props ){
						super(((props)=>{
							// on load window or document loaded...
							component.applyProps( tag, props );
						})(props));						
					}
				}, extendTo);
			}
		};
		this.view = {};
		this.models = {};
		this.models.sources = {};
		this.controller = {};	
		this.urls = {};
		this.filesLoaded = {};
		this.inject = (files)=>{
			for(const file of files){
				if(this.filesLoaded[ file ].tagName === "STYLE"){
					this.filesLoaded[ file ].innerHTML = this.filesLoaded[ file ].text;
				}
				document.head.appendChild( this.filesLoaded[ file ] );
			}
		}
		// end helpers
		this.models.fetch = (obj)=>{
			let app = this;
			let type = obj.type || "script";
			const cancelOnResend =	app.un(obj.cancelOnResend, null );
			const headers = app.un(obj.options, null );
			const method = app.un(obj.method, "GET" );

			obj.url = obj.url || [];
			obj.file = obj.file || obj.url;
			obj.files = obj.files || obj.file;

			var files = obj.files;

			if(typeof obj.ready === "undefined"){obj.ready = ()=>{}}
			if(typeof files === "string"){files = [ files ];}	
			const Head = document.head;
			const loaded = [];
			const unloaded = [];
			let text = [];
			obj.getString = ( r )=>{return r.clone().text();}
			obj.fetching = ( file )=>{

				// remove if the element exist 
				// to not create scripts elements with the same things...
				// just ignoring or stopping the re-injecting will fail...
				if(typeof app.filesLoaded[file] !== "undefined" && type === "script")
				{app.filesLoaded[file].remove()}
				var request = new XMLHttpRequest();				
				request.open(method, file, true);
				const options = [];
				const headersValues = [];

				if(headers !== null){
					for(var header in headers){
						headersValues.push( headers[header] );
					}
					Object.keys(headers).forEach(function(name, k){
						options.push( [ name, headersValues[k]] )
					});			
					options.forEach(function(option){
						request.setRequestHeader( option[0], option[1] );					
					})	
				}
				request.onload = function() {
				 if (request.status >= 200 && request.status < 400) {
				 	var resource = request.responseText;
				 	text.push( resource );
				 	var elementTag;
				 	if(type === "script" || type === "style" || type === "link"){
				 		elementTag = type;
				 	}else{
				 		// if tag name is another than both above.
				 		elementTag = "script"; 
				 	}				 	
					var el = document.createElement(elementTag);
					if(type === "style"){
						el.type = "text/css";
					}else if(type === "link"){
						el.rel = "stylesheet";
						el.media = "all";
						el.href = file;
					}
					el.text = resource;
					app.filesLoaded[ file ] = el;
					loaded.push( file );				 	
				 }else{
				 	if(typeof obj.onerror === "function" && request.status >= 400){
						return obj.onerror( request.status );
					}
				 }
				};
				request.onerror = function(){
					app.filesLoaded[ file ] = "";
					loaded.push( "unloaded:"+file );
					unloaded.push( file );
				}
				if(cancelOnResend === true){
					let idRequest = "rq_"+app.un(obj.id, app.random_string(4));
					let rq = app.httpRequests[idRequest];
					if(typeof rq !== "undefined"){
						try{
							app.httpRequests[idRequest].abort();
						} catch(e){
							console.warn("unable to cancel request.");
						}
					}
					app.httpRequests[idRequest] = request;
				}			
				if(method === "POST"){ 
					request.send( obj.data );
					return;
				}
				request.send();
			}
			app.statusResources	= "loading";	
			( (files)=>{
				for(const file of files){
					 obj.fetching( file );				
				}
				var counter = 0;
				let check = setInterval(()=>{
					counter = counter + 70;
					let forceLoad = false;
					if(counter === 10000){
						forceLoad = true;
						console.warn("¡Impossible to load all files.")
					}
					if(loaded.length === files.length || forceLoad === true){
						clearInterval(check);
						if(type === "script" || type === "style" || type === "link"){							
							app.inject(files);
							obj.ready();
						}else if(type === "text"){
							var texts = [];
							for(var file of files){
								texts.push(  app.filesLoaded[file].innerHTML );
							}
							obj.ready( texts );	
						}
						app.statusResources	= "loaded";
						return;
					}
				}, 70)
			})(files);
		};
		this.fetch = (props)=>{return this.models.fetch(props)}
		this.include = (props)=>{return this.models.fetch(props)}
		this.linkCSS = (props)=>{
			props.type = "link";
			var app = this;	
			props.type = "style";
			props.url = props.url||[];
			props.file = props.file || props.url;
			props.files = props.files || props.file;
			var nodes = [];
			props.files.map((file)=>{
				var link = document.createElement("link");
				link.setAttribute("media", "all");
				link.setAttribute("rel", "stylesheet");
				link.href = file;
				var el = app.mount(document.head, link);
				nodes.push(el);
			})
			props.ready(nodes);
			return nodes;
			// return this.models.fetch(props)
		}
		this.includeCSS = (props)=>{		
			props.type = "style";
			return this.models.fetch(props)
		}
		this.controller.views = {
			path: (obj)=>{
				const ext = this.ext; 
				var folder = `${this.folder}views/`;
				var file_name = obj.views;			
				var resources = this.resources;	
				// in case of route.
				var routing = file_name.split("/");
				var Path = folder;		
				if(routing.length === 1){
					var file = routing[0];
					Path += `${file}${ext}`;
					resources[file] = {}; // create view instance.
					return Path;
				}
				else{
					// file
					var last = routing.pop();
					// last folder
					var penultimate = routing.pop();	
					var LastFolder = penultimate;
					var file = last;
					resources[LastFolder] = {}; // create view instance.
					resources[LastFolder][file] = {}; // create view instance.
				}
				if(routing.length === 0){
					Path += `${LastFolder}/${file}${ext}`;
				}else{
					routing.forEach(function(subfolder){
						Path += `${subfolder}/`
					});
					Path += `${LastFolder}/${file}${ext}`;
				}
				return Path;
			}
		};
		this.view.load = ( props )=>{
			props = props||{};
			props.ready = props.ready||function(){}; 
			props.folder = this.autoloader_folder||"";
			const ext = this.ext;			
			const parameters = this.app.parameters;		
			const controller = this.app.controller_name;
			const action = this.app.action_name;
			const base = `${this.folder}${props.folder}${controller}`;
			props.module = turpial.un(props.module, null);
			if(controller === "index"){
				var urlPath =  `${base}${ext}`;
			}else if(parameters.length === 0 && controller !== "index" && typeof action === "undefined"){
				var urlPath =  `${base}/index${ext}`;
			}else if(parameters.length === 0 && action !== "undefined"){
				var urlPath =  `${base}/${action}/index${ext}`;
			}else {				
				var urlPath = `${base}/${action}`;
				parameters.forEach(function( parameter ){
					urlPath += `/${parameter}`;
				})
				urlPath += ext;
			}	
			if(typeof props.module === "string"){
				props.ext = props.ext || ext
				urlPath = this.core_path+props.module+props.ext;
			}

			var data = {
				file: urlPath,
				options: props.options || {},
				ready: ()=>{ props.ready() },
			};
			if(typeof props.error === "function"){
				data["error"] = (data)=>{ props.error(data) };
			}
			this.DataView = data;
			if(props.module === ""){ return; }
			if(props.module === false){ return; }
			this.fetch( data );			
		};
		this.controller.routes = {
			getHost: (props)=>{
				const app = this;
				props = props||{};
				if(props.loadModule === false || app.loadModulesOnRoute === false){
					props.relativeModules = true;
				}
				var href = window.location.href;
				href = href.split("#");
				href = href[0];
				href = href.split("?");
				href = href[0];

				/*if( app.searchStr(obj.path, "http") === true ){
					href = "";
				}*/
				let relativeModules = app.un(props.relativeModules, false);

				// search for dynamic host.
				let position = href.search(app.public_path);
				let Host = href.slice(position, position+app.public_path.length);
				Host = href.split(Host)[0]+Host;

				var slash = Host.slice(-1)
				if(slash !== "/"){slash = "/"}
				else{slash = "";}
				if(relativeModules == true){
					return `${Host}${slash}`;
				}else{
					slash = href.slice(-1)
					if(slash !== "/"){slash = "/"}
					else{slash = "";}
					return `${href}${slash}`;
				}

				// old output: `${href}${d}${obj.path}`
				
			},
			set: ()=>{
				const app = this;
				app.app = {};
				var Path = window.location.href.split("?");
				Path = Path[0];
				Path = Path.split("#");
				let SearchPublichPath = Path[0].search(app.public_path);
				if(SearchPublichPath > 0){
					Path = Path[0].substr( SearchPublichPath + app.public_path.length )
				}else{
					console.warn("bad_public_path_name");
					return;
				}
				var routes = Path.split("/");
				var n = 0;
				var param = 0;
				app.app.parameters = [];			
				routes.forEach(function(route){
					if(route == ""){return;}					
					if(n === 0){
						app.app.controller_name = route;
					}
					if(n === 1){
						app.app.action_name = route;
					}else if(n > 1){
						app.app.parameters[ param++ ] = route;
					}
					n++;
				})				
				if(typeof app.app.controller_name === "undefined")
				{app.app.controller_name = "index";}
				app.host = app.controller.routes.getHost();
			},
			change: ( obj )=>{
				const app = this;
				obj.loadModule = app.un(obj.loadModule, true);

				let output = `${app.controller.routes.getHost( obj )}${obj.path}`;

				if(output === window.location.href){ return; }
				
				window.history.pushState( app.un( obj.object ),
										  "",
										  app.un( output ) );	
				if(obj.loadModule === true && app.loadModulesOnRoute === true){
					app.urls.load(obj);
				}
				let title = app.un( obj.title, false );
				if(typeof title === "string"){
					document.title = title;
				}
			},
			go: (value)=>{
				if(typeof value === "number"){
					window.history.go(value)
				}else if(value === "back"){
					window.history.back();
				}else if(value === "forward"){
					window.history.forward();
				}else{return;}
				this.controller.routes.set();
				this.urls.load();
			}
		}
		this.router = (obj, ready)=>{
			ready = ready||function(){};
			if(typeof obj === "number" || typeof obj === "string"){
				this.controller.routes.go( obj );
				return;
			}
			this.controller.routes.change( obj );
			this.stateEvent();
			ready();
		};
		this.routes = this.controller.routes.set;
		this.routes(); // execute routes	
		this.controller.components = {};
		this.views.get = (obj)=>{
			if(typeof obj !== "object"){return;}
			if(typeof obj.views === "string"){
				obj.views = [ obj.views ];
			}
			var Paths = [];
			var controller = this.controller.views;
			obj.views.forEach(function(view, key){
				obj.views = view;
				Paths[key] = controller.path(obj);
			});
			Object.assign(obj, {file: Paths, ready: obj.ready});
			this.fetch(obj);
		}
		this.urls = {};
		this.urls.load = (obj)=>{
			obj = obj || {};
			const app = this;
			const controller = app.app.controller_name;
			const action = app.app.action_name;
			const parameters = app.app.parameters;
			// if this is undefined set as empty...
			let moduleController = app.urls[controller] || false;
			obj.module = turpial.un(obj.module, null);


			// when @turpial.router method is used and 
			// load a custom JS module/component file.
			if(typeof obj.module === "string"){app.view.load(obj); return;} 

			// when url is root or there isn't modules
			if(moduleController === false){app.view.load(obj); return;} 

			let loadController = app.un(moduleController.loadController, true);
			let loadAction = app.un(moduleController.loadAction, true);
			let loadParameters = app.un(moduleController.loadParameters, 1000);
			let moduleAction = app.un(app.urls[controller][action], false);

			if(typeof moduleController.self === "function"){
				if(typeof moduleAction === "function" && loadAction === true){
					if(parameters.length > loadParameters){
						moduleController.self( ()=>{ moduleAction( ()=>{} ); } )
						return; 
					}
					moduleController.self( ()=>{ moduleAction( ()=>{app.view.load(obj);} ); } )
					return;
				}else if(loadAction === false && typeof action === "string"){
					moduleController.self( ()=>{ moduleAction( ()=>{} ); } );
					return;
				}

				moduleController.self(()=>{app.view.load(obj);})
				return;
			}
		}
		this.historyEvents = {};
		this.URLNoHASH = function(url){
			return url.split("#")[0];
		}
		this.createHistoryEvent = function(position, callback){
			var main = this.URLNoHASH(window.location.href);
			position = position || "";
			position = main+position;
			this.historyEvents[position] = callback;
			/* @HOW TO USE HISTORY VIEWS.
			 * you need to create new history events for actual position history
			 * you can rename index position to trigger a function when back history
			 * action was executed.
			 * 
			 * ex: you can create history events like: 
			 * @index-> localhost/myweb
			 * when you create an application that generate a different view
			 * and generating new html elements and change history wirh router.
			 * you can add it to history event views to generate 
			 * a callback function when history has that location path.
			 *
			 * You need to set @allowStateEvents to true to trigger this turpial function.
			 * 
			 * note: turpial will trigger index or main view in the position you have
			 * for example if the page load at: myweb.com/portfolio/
			 * that point will be considered like a main position view.
			 * @you can rename index if you left empty url position
			 *  value on createHistoryEvent method.
			 * @you can create another view like myweb.com/portfolio/client-1 naming
			 *  position url like "/client-1"
			 *  note the "/" sign at the beginning
			 * @set the function to be executed on callback in second value property.
			*/
		}
		this.createHistoryEvent("", function(){});
		this.stateEvent = () =>{
			var event = this.historyEvents;
			if(typeof event[this.URLNoHASH(window.location.href)] === "function"){
				event[this.URLNoHASH(window.location.href)]();
			}
		}
		if(this.allowStateEvents === true){
			window.addEventListener("popstate", this.stateEvent);
		}		
		if(tpObj.autoloader === true){

			window.addEventListener("load", ()=>{				
				this.urls.load();
			})
			window.onpopstate = (event)=>{
				// on window history change
				// update routes and reload modules. 
			  this.controller.routes.set(); // execute routes
			  this.urls.load();
			  (function(){
			  	// just for older browsers
			  	if(typeof window.customElements === "undefined"){
			  		Array.prototype.slice.call( this.myComponents )
			  			.forEach(function(com){
			  				this.component.set({
			  					tag: com.tag,
			  					props: com.props,
			  				})
			  			})
			  	}
			  })();
			};
		}

		this.template = (html, replacemets)=>{
			const engine = {
				run: function( html, replacemets ){
					replacemets = replacemets||[];
					if(typeof replacemets === "object" && !Array.isArray(replacemets)){
						var reArrange = [];
						Object.values(replacemets).map(( element, number )=>{
						    reArrange.push({[Object.keys(replacemets)[number]]: element})
						})
						replacemets = reArrange;

					}
					if(typeof html === "object"){ html = html.innerHTML }
					var template = function(template, searchall, replaceby){
						return template.split(searchall).join(replaceby);
					}
					var structure = html;		
					replacemets.forEach(function( replacement ){
						var items = Object.keys(replacement);
						var values = Object.values(replacement);
						items.forEach(function( item, key ){						
							item = `{{ ${item} }}`;
							if(html.search(item) >= 0){
								structure = template(structure, item, values[key]);
							}						
						})
					})
					return structure;
				},
				replace: function( item, replacement, HTML ){
					item = `{{ ${item} }}`;
					HTML = HTML.split(item).join(replacement);
					return HTML;
				},
				joinMoreElements: function(target, elements){
					Object.values(elements).forEach(function(element, key){					
						target[Object.keys(elements)[key]] = element;
					})
					return target;
				},
				toHTML: function( target, strings ){
					if(target !== false){
						target.innerHTML = strings;
						target = target.content.firstElementChild;		
						return target;
					}else{
						turpial.render()
					}	
					
				},
				toString: function( target, html ){
					html = html.cloneNode(true);
					var dom_elem = target;
					dom_elem.innerHTML = "<div></div>";
					dom_elem = dom_elem.content.firstElementChild;
					dom_elem.appendChild(html);
					return dom_elem.innerHTML;
				},
				create: function( element, replacements ){
					var app = this;
					// start with "div" after template tag.		
					var content = turpial.find(element).content.firstElementChild;
					// this is to fill it, after finish the process.
					var container = content.cloneNode( true );
					var getHTMLText = content.innerHTML;
					var eraseEls = [];		
					Object.keys(replacements).forEach(function( item, key ){
						getHTMLText = app.replace(item, Object.values(replacements)[key], getHTMLText);		
					})
					// PUSH INTO THE CLONDED
					container.innerHTML = getHTMLText;
					return container;
				}
			}
			return engine.run(html, replacemets);
		}
	}
	map(appName, nodes = [])
	{
		var app = this;	
		var map = app.birds[appName];
		if(typeof appName === "object"){
			map = appName;
		}else if(typeof map === "undefined"){
			map = this.find( appName )
		}

		if(typeof nodes === "object")
		{
			if(typeof nodes[0] === "undefined"){return map;}
			map = map.children;
			nodes.forEach(function( node, key ){
				if( typeof nodes[key+1] === "undefined" ){
					map = map[node];
				}else{
					map = map[node].children;
				}								
			});
		}
		return map;		
	}
	createMap(app)
	{
		app = this.find( app );
		var turpial_app_id = app.getAttribute("id");
		if(typeof turpial_app_id !== "undefined"){
			var realDOMElement = document.getElementById(turpial_app_id);
			this.birds[turpial_app_id] = realDOMElement;
		}
	}
	read(appName, nodes = [])
	{
		return this.map(appName, nodes);
	}
	selectorApp(appName, selector = [])
	{
		if(typeof selector === "object"){
			// searching via map.
			if(Number.isInteger(selector[0]) === true){
				return this.map(appName, selector);
			}else{
				return selector;
			}			
		}else{return selector;}
	}
	delete( selector )
	{
		selector = this.find( selector );
		selector.remove();
	}
	update(selector, insert = null, where = 'replace-selector', justUpdate = true)
	{
		if(typeof insert === "string"){
			var content = this.render( insert );
			var string = insert;
		}
		else{
			var content = insert;
		}
		if(content === null){

			var isHTML = false;		
			var content = insert;
		}else{
			var isHTML = true;
		}
		// get the child to insert a new element before or after
		var child = selector;
		if(justUpdate === true){ // if the the call is for update
			where = 'replace-selector';
		}
		// get his parent
		var output = false;
		var parent = child.parentNode;
		if(where === "before"){
			parent.insertBefore(content, child);
			output = content;
		}else if(where === "after"){
			// emulating with next sibling.
			parent.insertBefore(content, child.nextSibling);
			output = content;
		}else if(where === "replace-selector"){
			// insertar nuevo elemento y eliminar viejo...
			parent.replaceChild(content, child);
			output = content;
		}else if(where === "inner"){
			if(isHTML === true){
				// editar el child
				child.innerHTML = string;
			}else{
				child.innerText = content;
			}
			output = child;
		}
		else{console.warn("error-on-placement");return false;}	
		let mapping = child;
		this.createMap( mapping );
		return output;
	}
	insert(selector, content, where = "inner")
	{
		selector = this.find( selector );
		return this.update(selector, content, where, false);
	}
	render(LiteralsString)
	{
		var dom_elem = document.createElement("template");
		dom_elem.innerHTML = LiteralsString;
		dom_elem = dom_elem.content.firstElementChild;		
		return dom_elem;
	}
	mount(place, things)
	{
		if(typeof things === "string"){
			var things = this.render( things );
		}if(things === null){console.warn("need to be HTML string or object");return;}
		place = this.find( place );
		let target = place.appendChild(things);
		let app = place;
		this.createMap( app );
		return target;
	}
	settings(attrs)
	{
		if(typeof attrs[0] !== "undefined"){return;}
		var setAttrsValues = [];
		var i = 0;

		var Values = [];
		for(var value in attrs){
			Values.push( attrs[value] );
		}
		Values.forEach(function(value){
			setAttrsValues[i++] = value;
		});

		var setAttrsNames = [];
		var i = 0;
		Object.keys(attrs).forEach(function(name){
			setAttrsNames[i++] = name;
		});

		var pushAttrs = "";
			var i = 0;
			setAttrsNames.forEach(function(item, key){
				pushAttrs += ` ${item}="${setAttrsValues[key]}"`;
			});
		return pushAttrs;
	}
	createTag(el, attrs = "", content = "")
	{
		if(typeof attrs === "object"){
			attrs = this.settings(attrs);
		}
		let tag  = `<${el}${attrs}>`;
		tag += content;
		if(el !== "br"){
			tag += `</${el}>`;
		}		
		return tag;
	}
	html(el, attrs, content)
	{
		const replacement = this.replacement;
		const app = this;	
		if(el === "code"){
			content = replacement(content, "<", "&lt;");
			content = replacement(content, ">", "&gt;");
			content = replacement(content, " ", "&nbsp;");
		}			
		if (typeof content === "undefined"){
			// si no existen atributos
			// y existe contenido el esquema puede ser así
			// el($tag, $contenido)
			// por lo que el contenido ahora es igual al campo atributos.
			var content = attrs;
			var attrs = "";
		}
		if(typeof content === "object" && typeof content[0] !== "undefined"){

			var elements = "";
			var i = 0;
			content.forEach(function(item, key){
				elements += `${item}`;
			});
			var html = app.createTag(el, attrs, elements);
		}else if(typeof content === "object"){
			// si llega a este punto y sigue siendo
			// un objeto quiere decir que el segundo 
			// argumento es un objeto con class id etc.
			// se puede estar intentando crear un elemento vacío.
			// por lo tanto content será igual a nada
			var attrs = content;
			var html = app.createTag(el, attrs, content = "");			
		}else{
			var html = app.createTag(el, attrs, content);
		}
		return html;
	}
	el(el, attrs, content)
	{
		return this.html(el, attrs, content);
	}
}
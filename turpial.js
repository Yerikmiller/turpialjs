/*
 *	Turpial JS Templating Engine Library V. 1.0.0
 *	Copyright Yorman Maricuto, May 2019.  
 * 	License MIT.
 * 	Social Media/Contact:
 *	@twitter: @MaricutoYorman
 *	@Instagram: maricuto
 *	@email: yerikmiller@gmail.com
 *	@number: +584267886875
 *	@github: yerikmiller
 * 	@project: guide | github.
 *	Micro Framework to create web components and a templating engine for user interfaces (UI).
 *	Turpial: The Venezuela's national bird.
 *
 * 	MADE IN: V E N E Z U E L A.
 * 	@Development Version. V. 1.0.0
 *
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
		this.autoloader = this.un( tpObj.autoloader, false );
		this.autoloader_folder = this.un( tpObj.autoloader_folder, "" );
		this.cache = this.un( tpObj.cache, "public" );
		this.public_path = this.un( tpObj.public_path, "" );
		this.core_path = this.un( tpObj.core_path, "" );
		this.folder = this.un( tpObj.core_path, "/turpial/" );
		this.loader = {};
		this.loader.show = this.un( tpObj.loaderShow, null );
		this.loader.hide = this.un( tpObj.loaderHide, null );
		this.views = {};
		this.statusResources = "loaded";
		this.resources = {};
		this.myComponents = [];
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
				document.head.appendChild( this.filesLoaded[ file ] );
			}
		}
		// end helpers
		this.models.fetch = (obj)=>{
			let app = this;
			let type = app.un(obj.type, "script");			
			const headers = app.un(obj.options, null );
			const method = app.un(obj.method, "GET" );

			if(typeof obj.data !== "undefined"){
				obj.file = obj.data;
			}
			if(typeof obj.files !== "undefined"){
				// si existe files en vez de file.
				obj.file = obj.files;
			}

			var files = obj.file;

			if(typeof obj.ready === "undefined"){obj.ready = ()=>{}}
			if(typeof files === "string"){files = [ files ];}	
			const Head = document.head;
			const loaded = [];
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
					var el = document.createElement("script");				
					el.text = resource;
					app.filesLoaded[ file ] = el;
					loaded.push( file );				 	
				 }else{
				 	if(typeof obj.error === "function" && r.status !== 200){
						return obj.error( request.status );
					}
				 }
				};
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
						if(type === "script"){
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
		this.fetch = (obj)=>{return this.models.fetch(obj)}
		this.include = (obj)=>{return this.models.fetch(obj)}
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
		this.view.load = ( obj = { folder: this.autoloader_folder, ready: ()=>{} } )=>{
			const ext = this.ext;			
			const parameters = this.app.parameters;		
			const controller = this.app.controller_name;
			const action = this.app.action_name;
			const base = `${this.folder}${obj.folder}${controller}`;
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
			var data = {
				file: urlPath,
				ready: ()=>{ obj.ready() },
			};
			if(typeof obj.error === "function"){
				data["error"] = (data)=>{ obj.error(data) };
			}			
			this.fetch( data );
			this.DataView = data;
		};
		this.controller.routes = {
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
			},
			change: (obj)=>{
				const app = this;
				var href = window.location.href;
				href = href.split("#");
				href = href[0];
				href = href.split("?");
				href = href[0];
				var d = href.split("/")
				if(d.pop() === ""){d = ""}
				else{d = "/";}
				if( app.searchStr(obj.path, "http") === true ){
					href = "";
				}
				window.history.pushState( app.un( obj.object ),
										  "",
										  app.un( `${href}${d}${obj.path}` ) );				
				app.controller.routes.set();				
				app.urls.load();
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
		this.router = (obj)=>{
			if(typeof obj === "number" || typeof obj === "string"){
				this.controller.routes.go( obj )
				return;
			}
			this.controller.routes.change( obj )			
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
		this.urls.load = ()=>{
			const app = this;
			const controller = app.app.controller_name;
			const action = app.app.action_name;
			const parameters = app.app.parameters;
			// if this is undefined set as empty...
			let moduleController = app.un(app.urls[controller], false);

			// when url is root or there isn't modules
			if(moduleController === false){app.view.load(); return;} 

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
					moduleController.self( ()=>{ moduleAction( ()=>{app.view.load();} ); } )
					return;
				}else if(loadAction === false && typeof action === "string"){
					moduleController.self( ()=>{ moduleAction( ()=>{} ); } );
					return;
				}
				moduleController.self(()=>{app.view.load();})
				return;
			}
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

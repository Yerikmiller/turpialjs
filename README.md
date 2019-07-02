<div>
	<section>	
	<h1>
		Turpial JS - Micro Javascript Framework to create single page applications.
	</h1>	
	<div style="width: 100%;text-align: center;">
		<img style="margin:auto" src="http://maricuto.website/default/public/html_base/img/projects/turpial-logo.svg" alt="Turpial JS - Micro Javascript Framework to create SPA easily">
	</div>
	<p>
		Turpial JS is a micro framework and library with a set of tools to create web applications faster. Templating engines with JSX syntax. Create, load, and use components; load dependencies sequentially whenever you want in your app, and also load files <strong>(components, views, JS files)</strong> based on the URLs. Update views easily and develop a single page application in a few steps.
	</p>
	</section>
	<section>
	<h2>
		Getting Started
	</h2>
	<pre>
	<code>
	<script src="https://cdn.jsdelivr.net/gh/Yerikmiller/turpialjs/turpial.min.js"></script>
	</code>
	</pre>
	<h2>
		Basic Usage
	</h2>
	<pre>
	<code>
	const turpial = new Turpial({
	  core_path: "/turpial/src/turpial-app/",
	  autoloader_folder: "views/",
	  public_path: "turpial",
	  cache: "no-store",
	  autoloader: true,
	});
	// core_path: where is alocated your turpial application (.turpial.js files)
	/* public_path: Your application root folder name. Ex: 127.0.0.1:8080/mywebpage
	 * in this case yout public_path should be "mywebpage"
	*/
	/* autoloader_folder: if you want to autoload views (turpial.js) files based on URL
	 * we can manage how will work in each case manually
	*/
	// cache: select if you want to cache files loaded
	// autoloader: set as true if you want to activate autolaoder option.
	</code>
	</pre>
	</section>
	<section>
	<h2>
		Documentation - Index
	</h2>
	<ol>
		<li><a href="http://maricuto.website/projects/turpial/introduction">Introduction</a></li>
		<li><a href="http://maricuto.website/projects/turpial/creating_html_elements">HTML - Elements</a></li>
		<li><a href="http://maricuto.website/projects/turpial/map">Mapping Elements tool</a></li>
		<li><a href="http://maricuto.website/projects/turpial/create_web_components">Components</a></li>
		<li><a href="http://maricuto.website/projects/turpial/including_views_and_components">Including components and views</a></li>
		<li><a href="http://maricuto.website/projects/turpial/mvc_pattern">MVC Pattern</a></li>
		<li><a href="http://maricuto.website/projects/turpial/routes">Turpial Routes</a></li>
	</ol>
	</section>
</div>

<#assign content>
<h1> ${title} </h1>

<div method="GET" action="/bacon/actor/:id">

	<h1> Actor: ${name} </h1>
	
	<ul id = "actList">
		<#list movies?keys as id>
			<li><a href="/bacon/movie/:id${id}">${movies[id]}</a>
		</#list>
	
	</ul>
		
</div>

<a href="/bacon">Return to home page.</a>

</#assign>
<#include "main.ftl">
<#assign content>
<h1> ${title} </h1>

<div method="GET" action="/bacon/movie/:id">

	<h1> Movie: ${name} </h1>
	
	<ul id = "movList">
		<#list actors?keys as id>
			<li><a href="/bacon/actor/:id${id}">${actors[id]}</a>
		</#list>
	
	</ul>
		
</div>

<a href="/bacon">Return to home page.</a>

</#assign>
<#include "main.ftl">
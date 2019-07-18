<#assign content>


<h1> Path between selected actors: <br> </h1>

<ul id="path">

<#list results as result>
	${result}<br>
</#list>

</ul>

<a href="/bacon">Return to home page.</a>


</#assign>
<#include "main.ftl">
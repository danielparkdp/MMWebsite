<#assign content>


<h1> Stars Found: <br> </h1>

<ul>
<#list results as result>
	${result}<br>
</#list>
</ul>

<a href="/stars">Return to home page.</a>


</#assign>
<#include "main.ftl">
<#assign content>
<h1> ${title} </h1>

<form method="POST" action="/resultsn">
	
	<ul>
		<li>
			Name
			<input type="radio" name="type" value="name">
		</li>
		<li>
			Coordinates
			<input type="radio" name="type" value="coordinate">
		</li>
	</ul><br>
	
	
	<textarea name="num" placeholder="How many neighbors?">
	</textarea><br>
	
	<textarea name="id" placeholder="Enter star identifying info here (name or coords)">
	</textarea><br>

	
	<button type="submit">
		SUBMIT</submit>
	</button>
	
</form>
</#assign>
<#include "main.ftl">
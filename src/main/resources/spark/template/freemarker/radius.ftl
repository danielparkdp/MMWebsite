<#assign content>
<h1> ${title} </h1>

<form method="POST" action="/resultsr">
	
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
	
	
	<textarea name="givenRadius" placeholder="Radius value (positive double or 0)">
	</textarea><br>
	
	<textarea name="id" placeholder="Enter star identifying info">
	</textarea><br>

	
	<button type="submit">
		SUBMIT</submit>
	</button>
	
</form>
</#assign>
<#include "main.ftl">
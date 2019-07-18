<#assign content>
<h1> ${title} </h1>

<form method="POST" action="/baconpath">

	<p>Type in start actor's name in first box, and end actor's name in second box. (no quotation marks)</p>
	<p>This page will offer autocorrect suggestions on their names.</p>
	<p>To see the shortest weight path between them, hit submit. You can also click the names to link to personal info pages!</p><br><br>
	
	
	<br><p>Type in start actor's name here (no quotation marks).</p><br>
	<textarea name = "startActor" id="startActor">
	</textarea><br>
	
	<ul name = "startSuggestions" id="startSuggestions"></ul>
	
	<br><br><br><br><br>
	<br><p>Type in end actor's name here (no quotation marks).</p><br>
	<textarea name = "endActor" id="endActor">
	</textarea><br>
	
	<ul name = "endSuggestions" id="endSuggestions"></ul>
	
	<button type="submit" id="buto">
		SUBMIT</submit>
	</button>

	
</form>

</#assign>
<#include "main.ftl">
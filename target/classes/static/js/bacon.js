
// Waits for DOM to load before running
$(document).ready(() => {
	
	const submit = $("#buto");
	
	submit.click(event1 => {
		
		const postParameters = {startActor : $("#startActor"), endActor : $("#endActor")};
		
		
		$.post("/baconpath", postParameters, responseJSON => {

            const responseObject = JSON.parse(responseJSON);
        	$("#path").empty();
//            
//            for(let i = 0; i < responseObject.size-1; i++) {
//            	$("#path").append("<a href=\"/bacon/actor?id=" +"actorId"> +responseObject.actNames.get(i) + 
//            			" -> " + responseObject.actNames.get(i+1)+" : " +
//            			responseObject.movNames.get(i) + "</a>");
//            }
//            
//            for path in response:
//            	let li = $(<li></li>)
//            	li.html("<a href=/bacon/actor?id=" + actor1Id + movelink + -> + actor2link)
            	
           
        });
			
	});	
	
});



// Waits for DOM to load before running
$(document).ready(() => {
	
	let currText2 = ''
		show2 = true;
	
	const box = $("#endActor");
    

    // Listen for keypress event2s in box.
    box.keyup(event2 => {
    	const input = event2.which || event2.keyCode;
    	if (event2.which == 27){
    		if (show2) {
            	$("#endSuggestions").empty();    			
    			show2 = false;
    		} else {
    			currText2 = document.getElementById("endActor").value;
        		
        		const postParameters = {word : currText2};

                $.post("/actorsuggest", postParameters, responseJSON => {

                    const responseObject = JSON.parse(responseJSON);
                	$("#endSuggestions").empty();
                    
                    for(let suggestion of responseObject.map) {
                    	$("#endSuggestions").append("<li>"+suggestion+"</li>");
                    }
                   
                });
    			
    			show2 = true;
    		}
    	} else if (event2.which == 13){
    		document.getElementById("endActor").value = '';
    		$("#endSuggestions").empty();
    	} else if (show2) {
    		currText2 = document.getElementById("endActor").value;
    		
    		if (currText2 == ''){
    			$("#endSuggestions").empty();
    		} else {
    		
	    		const postParameters = {word : currText2};
	
	            $.post("/actorsuggest", postParameters, responseJSON => {
	
	                const responseObject = JSON.parse(responseJSON);
	            	$("#endSuggestions").empty();
	                
	                for(let suggestion of responseObject.map) {
	                	$("#endSuggestions").append("<li>"+suggestion+"</li>");
	                }
	               
	            });
    		}
    	}
    	
        
        
    });
});


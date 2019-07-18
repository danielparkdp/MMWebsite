
// Waits for DOM to load before running
$(document).ready(() => {
	
	let currText1 = ''
		show1 = true;
	
	const box = $("#startActor");
    

    // Listen for keypress events in box.
    box.keyup(event => {
    	const input = event.which || event.keyCode;
    	if (event.which == 27){
    		if (show1) {
            	$("#startSuggestions").empty();    			
    			show1 = false;
    		} else {
    			currText1 = document.getElementById("startActor").value;
        		
        		const postParameters = {word : currText1};

                $.post("/actorsuggest", postParameters, responseJSON => {

                    const responseObject = JSON.parse(responseJSON);
                	$("#startSuggestions").empty();
                    
                    for(let suggestion of responseObject.map) {
                    	$("#startSuggestions").append("<li>"+suggestion+"</li>");
                    }
                   
                });
    			
    			show1 = true;
    		}
    	} else if (event.which == 13){
    		document.getElementById("startActor").value = '';
    		$("#startSuggestions").empty();
    	} else if (show1) {
    		currText1 = document.getElementById("startActor").value;
    		
    		if (currText1 == ''){
    			$("#startSuggestions").empty();
    		} else {
    		
	    		const postParameters = {word : currText1};
	
	            $.post("/actorsuggest", postParameters, responseJSON => {
	
	                const responseObject = JSON.parse(responseJSON);
	            	$("#startSuggestions").empty();
	                
	                for(let suggestion of responseObject.map) {
	                	$("#startSuggestions").append("<li>"+suggestion+"</li>");
	                }
	               
	            });
    		}
    	}
    	
        
        
    });
});



// Waits for DOM to load before running
$(document).ready(() => {
	
	let currText = ''
		show = true;
	
	const box = $("#actext");
    

    // Listen for keypress events in box.
    box.keyup(event => {
    	const input = event.which || event.keyCode;
    	if (event.which == 27){
    		if (show) {
            	$("#suggestions").empty();    			
    			show = false;
    		} else {
    			currText = document.getElementById("actext").value;
        		
        		const postParameters = {word : currText};

                $.post("/suggest", postParameters, responseJSON => {

                    const responseObject = JSON.parse(responseJSON);
                	$("#suggestions").empty();
                    
                    for(let suggestion of responseObject.map) {
                    	$("#suggestions").append("<li>"+suggestion+"</li>");
                    }
                   
                });
    			
    			show = true;
    		}
    	} else if (event.which == 13){
    		document.getElementById("actext").value = '';
    		$("#suggestions").empty();
    	} else if (show) {
    		currText = document.getElementById("actext").value;
    		
    		if (currText == ''){
    			$("#suggestions").empty();
    		} else {
    		
	    		const postParameters = {word : currText};
	
	            $.post("/suggest", postParameters, responseJSON => {
	
	                const responseObject = JSON.parse(responseJSON);
	            	$("#suggestions").empty();
	                
	                for(let suggestion of responseObject.map) {
	                	$("#suggestions").append("<li>"+suggestion+"</li>");
	                }
	               
	            });
    		}
    	}
    	
        
        
    });
});


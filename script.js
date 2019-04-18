
$(document).ready(function(){

    $("#button").click(function(){
    	
    	var text = "";
    	var output = generate(
    		$("#number").val(),
    		$("#length").val(),
    		$("#order:checked").val(),
    		$("#skip:checked").val()
    	);
    	
    	if(output === null){
    		console.log('null')
    	}else {
    		for(var i = 0; i < output.length; i++){
    			text += '<li class="list-group-item">'+output[i]+'</li>'
			}
		}

    	$(".list-group").html(text);

    	if($("#number").val() === '' ){
    		$("#err-number").css("display", "block")
    	}else {
    		$("#err-number").css("display", "none")
    	}

    	if($("#length").val() === '' || $("#length").val() < 5 || $("#length").val() > 18){
    		$("#err-length").css("display", "block")
    	}else {
    		$("#err-length").css("display", "none")
    	}

    	if($("#skip_arr").val() === ''){
    		$("#err-empty").css("display", "block")
    	}else {
    		$("#err-empty").css("display", "none");
    		if(rightFormat($("#skip_arr").val())){
	    		$("#err-format").css("display", "none")
	    	}else {
	    		$("#err-format").css("display", "block")
	    	}
    	}
        
    });

    $("#form-skip").change(function(event){
    	if(event.target.value == 1){
    		$("#skip_arr_div").css("display", "block")
    	}else {
    		$("#skip_arr_div").css("display", "none")
    	}
    })
});

function generate(number, length, order, skip){
	var ran_num = Array();
	var ran_num_order = Array();
	var skip_arr = Array();
	
	var single_num;
	var i = 0;

	if(isNaN(number) || number === ''){
		// return 'Hãy nhập vào 1 số!'
		return null
	}
	if(isNaN(length) || length < 5 || length > 18){
		// return 'Hãy nhập vào 1 số từ 5 tới 18'
		return null
	}

	if(skip == 0){
		if(order == 1){
			while(i < number){
		  		single_num = pad(Math.floor(Math.random()* Math.pow(10, length)), length);
		  		if(ran_num.indexOf(single_num) === -1){
		  			ran_num[i] = single_num;
		  			i++;

		  		};
		  		
		  	}
			return ran_num
		}else {
			while(i < number){
		  		single_num = pad(Math.floor(Math.random()* Math.pow(10, length)), length);
		  		if(ran_num_order.indexOf(single_num.split('').sort().join('')) === -1){
		  			ran_num[i] = single_num;
		  			ran_num_order[i] = single_num.split('').sort().join('');
		  			i++
		  		};
		  		
		  	}

		  	return ran_num
		}
	}else {
		if($("#skip_arr").val() === ''){
			// return 'Không được để trống trường này!'
			return null
		}else {
			skip = $("#skip_arr").val();
		}

		skip_arr = skip.trim().split(',');

		for(i = 0; i < skip_arr.length; i++){
			skip_arr[i] = skip_arr[i].trim();
			if(isNaN(skip_arr[i]) || skip_arr[i] === ""){
				// return 'Không đúng định dạng!'
				return null

			}
				
		}
		
		if(order == 1){
			i = 0;
			while(i < number){
		  		single_num = pad(Math.floor(Math.random()* Math.pow(10, length)), length);
		  		if(ran_num.indexOf(single_num) === -1 && skip_arr.indexOf(single_num) === -1){
		  			ran_num[i] = single_num;
		  			i++;

		  		};
		  		
		  	}
			return ran_num
		}else {
			i = 0;
			while(i < number){
		  		single_num = pad(Math.floor(Math.random()* Math.pow(10, length)), length);

		  		if(ran_num_order.indexOf(single_num.split('').sort().join('')) === -1 && skip_arr.indexOf(single_num) === -1){
		  			ran_num[i] = single_num;
		  			ran_num_order[i] = single_num.split('').sort().join('');
		  			i++
		  		};
		  		
		  	}

		  	return ran_num
		}
	}
}

function pad(num, size) {
    var s = "000000000000000000" + num;
    return s.substr(s.length-size);
}

function rightFormat(string){
	var skip_arr = Array();
	skip_arr = string.trim().split(',');
	for(i = 0; i < skip_arr.length; i++){
		skip_arr[i] = skip_arr[i].trim();
		if(isNaN(skip_arr[i]) || skip_arr[i] === ""){
			return false
			// err['skip_arr'] = 'Không đúng dịnh dạng!'

		}
			
	}

	return true
}
var phonenumberRGX = mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
    var persianNum = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    var number = $('#Number');
    var text = $('#Text');
    var max_chars = 11;
    number.keydown(function (e) {
        if ($(this).val().length >= max_chars)
            $(this).val($(this).val().substr(0, max_chars));
        number.next().text('you have interred :' + parseInt($(this).val().length) + " numbers");
        if($(this).val().length == max_chars)
            number.next().text('you reached the maximun of :' + parseInt($(this).val().length) + " numbers");
    });
    number.keyup(function (e) {
        if ($(this).val().length >= max_chars)
            $(this).val($(this).val().substr(0, max_chars));
        number.next().text('you have interred :' + parseInt($(this).val().length)+" numbers");
        if($(this).val().length == max_chars)
            number.next().text('you reached the maximun of :' + parseInt($(this).val().length) + " numbers");
    });
    function ChangePersianNumbers(str) {
        var temp=[];
        
        for (var i = 0; i < 10; i++) 
            temp.push(str.charAt(i));
        temp = temp.join('').split('');
        for(var key in temp) {           
             switch(temp[key]){
                 case '0':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[0]);
                     break;
                case '1':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[1]);
                     break;
                case '2':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[2]);
                     break;
                case '3':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[3]);
                     break;
                case '4':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[4]);
                     break;
                case '5':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[5]);
                     break;
                case '6':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[6]);     
                     break;
                case '7':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[7]);                 
                     break;
                case '8':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[8]);
                     break;
                case '9':      
                        s=temp[key];
                        temp[key]=  s.replace(temp[key],persianNum[9]);                   
                     break;
             }            
            }
            
        return temp.join('');
    }
    $('form').submit(function (e) {  
        e.preventDefault();
        number.next().next().text("converted persian number is : " + ChangePersianNumbers(number.val()));        
        if (!number.val()) {
            e.preventDefault();
            number.next().text('PhoneNumber cannot be empty');
        } else {
            text.next().text('');
        }
        if (!number.val().match(phonenumberRGX) && number.val()) {
            e.preventDefault();
            number.next().text('PhoneNumber is Not In Correct IR Correct Format');
        }
    });   

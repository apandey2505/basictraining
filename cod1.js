function secondLargest(myarr) {
  
    var size = myarr.length;
    //console.log(typeof myarr);
    
    var max1 = -2147483648;
    var max2 = -2147483648;
    
    for (i=0 ; i <size; i++ )
    
        {
            if (myarr[i] > max1 ) {
                max2 = max1 ;
                max1 = myarr[i];
            } else if (myarr[i]> max2)
    
                {
                    max2 = myarr[i];
                }
    
    
            } 
    
    return max2; 
    }
var a=0;

var x1,x2,x3;
var x4,x5,x6;
var x7,x8,x9;

var o1,o2,o3;
var o4,o5,o6;
var o7,o8,o9;

var con1=con2=con3=con4=con5=con6=con7=con8=con9=1;
    function show(){
        document.querySelector(".box").style.display="flex";

    }

    function x_win(){
        document.querySelector(".box").innerText="X is win"; 
        document.querySelector(".box").style.color="white"; 
    }

    function o_win(){
        document.querySelector(".box").innerText="O is win";
        document.querySelector(".box").style.color="white";
    }

    // .............. x_color ...........
    function x_color(clss){
        document.querySelector(clss).style.color="blue";
    }
    
    // ............... o_color ............ 
    function o_color(clss){
        document.querySelector(clss).style.color="red";
    }

    document.querySelector(".cell1").addEventListener("click",function(){
        if(a%2==0){
             x1=1;
             if(x1==con1){
                 document.querySelector(".cell1").innerText="X";
                 con1++;
                x_color(".cell1");
                  if(x1==x2 && x2==x3){
                    show(); 
                x_win();
            }
            if(x1==x4 && x4==x7){
                show();
                x_win();
            }
            if(x1==x5 && x5==x9){
                show();
                x_win();
            }
             }
            
            a++;
           
           
        }
        else{
             o1=1;
             if(o1==con1){
                 document.querySelector(".cell1").innerText="O";
                 con1++;
                 o_color(".cell1");
                  if(o1==o2 && o2==o3){
                      show();
                    o_win();
            }
            if(o1==o4 && o4==o7){
                show();
                o_win();
    
            }
            if(o1==o5 && o5==o9){
                show();
                o_win();
    
            }
             }
            
           
            a++;
           
           
        }
    });


    document.querySelector(".cell2").addEventListener("click",function(){
        if(a%2==0){
                x2=1;
            if(x2==con2){
                document.querySelector(".cell2").innerText="X";
                con2++;
                x_color(".cell2");
                if(x1==x2 && x2==x3){
                    show();
                                x_win();
                            }
                            if(x2==x5 && x5==x8){
                                show();
                                x_win();
                            }

            }
            
            a++;
            
           

        }
        else{
            o2=1;
            if(o2==con2){
                document.querySelector(".cell2").innerHTML="O";
                con2++;
                o_color(".cell2");
                if(o1==o2 && o2==o3){
                            show();
                                o_win();
                    
                            }
                            if(o2==o5 && o5==o8){
                                show();
                                o_win();
                    
                            }

            }
            
            a++;
           
            
        }
    });


    document.querySelector(".cell3").addEventListener("click",function(){
        if(a%2==0){
            x3=1;
            if(x3==con3){
                document.querySelector(".cell3").innerText="X";
                con3++;
                x_color(".cell3");
                if(x1==x2 && x2==x3){
                    show();
                                x_win();
                            }
                            if(x3==x6 && x6==x9){
                                show();
                                x_win();
                            }
                            if(x3==x5 && x5==x7){
                                show();
                                x_win();
                            }

            }
            
            a++;
            
           
        }
        else{
                o3=1;
            if(o3==con3){
                document.querySelector(".cell3").innerText="O";
                con3++;
                o_color(".cell3");
                if(o1==o2 && o2==o3){
                    show();
                o_win();
    
            }
            if(o3==o6 && o6==o9){
                show();
                o_win();
    
            }
            if(o3==o5 && o5==o7){
                show();
                o_win();
    
            }
            }
            
            a++;
            
            
        }
    });

    //.........................second row.............................
    document.querySelector(".cell4").addEventListener("click",function(){
        if(a%2==0){
              x4=1;  
            if(x4==con4){
                
                document.querySelector(".cell4").innerText="X";
                con4++;
                x_color(".cell4");
                 if(x4==x5 && x5==x6){
                     show();
                x_win();
            }
            if(x4==x1 && x4==x7){
                show();
                x_win();
            }
            }
            
            a++;
            
           
        }
        else{
                o4=1;
            if(o4==con4){
                document.querySelector(".cell4").innerText="O";
                con4++;
                o_color(".cell4");
                if(o4==o5 && o5==o6){
                    show();
                o_win();
    
            }
            if(o4==o1 && o4==o7){
                show();
                o_win();
    
            }
            }
            
            a++;
            
            
        }
    });


    document.querySelector(".cell5").addEventListener("click",function(){
        if(a%2==0){
                x5=1;
            if(x5==con5){
                document.querySelector(".cell5").innerText="X";
                con5++;
                x_color(".cell5");
                  if(x4==x5 && x5==x6){
                      show();
                x_win();
            }
            if(x1==x5 && x5==x9){
                show();
                x_win();
            }
            if(x2==x5 && x5==x8){
                show();
                x_win();
            }
            if(x3==x5 && x5==x7){
                show();
                x_win();
            }
            }
            
            a++;
          
          
        }
        else{
             o5=1;
            if(o5==con5){
                document.querySelector(".cell5").innerText="O";
                con5++;
                o_color(".cell5");
            if(o4==o5 && o5==o6){
                show();
                o_win();
    
            }
            if(o1==o5 && o5==o9){
                show();
                o_win();
    
            }
            if(o2==o5 && o5==o8){
                show();
                o_win();
    
            }
            if(o3==o5 && o5==o7){
                show();
                o_win();
    
            }
            }
            
            a++;
           
        }
    });


    document.querySelector(".cell6").addEventListener("click",function(){
        if(a%2==0){
             x6=1;
            if(x6==con6){
                document.querySelector(".cell6").innerText="X";
                con6++;
                x_color(".cell6");
            if(x4==x5 && x5==x6){
                show();
                            x_win();
                        }
                        if(x3==x6 && x6==x9){
                            show();
                            x_win();
                        }

            }
            
            a++;
           
            
        }
        else{
            o6=1;
            if(o6==con6){
                document.querySelector(".cell6").innerText="O";
                con6++;
                o_color(".cell6");
                if(o4==o5 && o5==o6){
                    show();
                o_win();
    
            }
            if(o3==o6 && o6==o9){
                show();
                o_win();
    
            }
            }
            
            a++;
            
            
        }
    });
    

    //.......................third row..........................
    document.querySelector(".cell7").addEventListener("click",function(){
        if(a%2==0){
                x7=1;
            if(x7==con7){
                document.querySelector(".cell7").innerText="X";
                con7++;
                x_color(".cell7");
                if(x7==x8 && x8==x9){
                        show();
                                x_win();
                            }
                            if(x1==x4 && x4==x7){
                                show();
                                x_win();
                            }
                            if(x3==x5 && x5==x7){
                                show();
                                x_win();
                            }

            }
            
            a++;
           
           
        }
        else{
            o7=1;
            if(o7==con7){
                document.querySelector(".cell7").innerText="O";
                con7++;
                o_color(".cell7");
                if(o7==o8 && o8==o9){
                    show();
                                o_win();
                    
                            }
                            if(o1==o4 && o4==o7){
                                show();
                                o_win();
                    
                            }
                            if(o3==o5 && o5==o7){
                                show();
                                o_win();
                    
                            }

            }
            
            a++;
            
            
        }
    });


    document.querySelector(".cell8").addEventListener("click",function(){
        if(a%2==0){
                x8=1;
            if(x8==con8){
                document.querySelector(".cell8").innerText="X";
                con8++;
                x_color(".cell8");
                if(x7==x8 && x8==x9){
                    show();
                                x_win();
                            }
                            if(x2==x5 && x5==x8){
                                show();
                                x_win();
                            }

            }
            
            a++;
            
            
        }
        else{
            o8=1;
            if(o8==con8){
                document.querySelector(".cell8").innerText="O";
                con8++;
                o_color(".cell8");
                 if(o7==o8 && o8==o9){
                     show();
                o_win();
    
            }
            if(o2==o5 && o5==o8){
                show();
                o_win();
    
            }
            }
            
            a++;
           
           
        }
    });


    document.querySelector(".cell9").addEventListener("click",function(){
        if(a%2==0){
            x9=1;
            if(x9==con9){
                 document.querySelector(".cell9").innerText="X";
                 con9++;
                 x_color(".cell9");
                 if(x7==x8 && x8==x9){
                     show();
                x_win();
            }
            if(x1==x5 && x5==x9){
                show();
                x_win();
            }
            if(x3==x6 && x6==x9){
                show();
                x_win();
            }
            }
           
            a++;
            
            
        }
        else{
             o9=1;
            if(o9==con9){
                document.querySelector(".cell9").innerText="O";
                con9++;
                o_color(".cell9");
                if(o7==o8 && o8==o9){
                    show();
                o_win();
    
            }
            if(o1==o5 && o5==o9){
                show();
                o_win();
    
            }
            if(o3==o6 && o6==o9){
                show();
                o_win();
    
            }
            }
            
            a++;
           
            
        }
    });
    

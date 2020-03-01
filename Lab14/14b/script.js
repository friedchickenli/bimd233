var state = 'IDLE';

function myFunc(){
    var cmd = ""
    do{
        cmd = prompt("Current state:" + state + ", enter command: ", 'next');
        switch(state){
            case"IDLE":
               if (cmd === "run"){
                   state = "S1";
               }
            
            break;
            case "S1":
            
                if (cmd === "next"){
                    state = "S2";
                }else if (cmd === "skip"){
                    state = "S3";
                }else if (cmd === "prev"){
                    state = "S4";
                }
            
            break;
            case "S2":
    
                if (cmd === "next"){
                    state = "S3";
                }
            break;
            case "S3":
    
                if (cmd === "next"){
                    state = "S4";
                }else if (cmd === "home"){
                    state = "S1";
                }
            break;
            case "S4":
    
                if (cmd === "next"){
                    state = "S1";
                }
        }
    }while (cmd != "exit" && cmd != "quit");
}

//GENERA TABLA EN EJECUCION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        var tabla_body = document.getElementById("tablaBodyValores");
        
        var tr1;
        var td1;
        var lbl1;
        var br1;
        var input1;
        var LETRA=""
        for (let j = 65; j <= 76; j++) {
            var LETRA=String.fromCharCode(j);
            //tr1
            tr1=document.createElement("tr");
            tr1.setAttribute("class",j%2==0?"ColorEstandar":"ColorDefault");
            //tr1 td1         
            td1=document.createElement("td");
            tr1.appendChild(td1);

            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML=LETRA;
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);

            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Nominal";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);

            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="Nom"+LETRA;
            input1.setAttribute("onkeyup","calcularGONOGO(this);");
            lbl1.appendChild(input1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="&nbsp;";
            td1.appendChild(lbl1);
        



            //tr1 td2
            td1=document.createElement("td");
            tr1.appendChild(td1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Antes Min";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            input1.type="number";
            input1.id="vAntesNeg"+LETRA;
            lbl1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Antes Max";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            input1.type="number";
            input1.id="vAntesPos"+LETRA;
            lbl1.appendChild(input1);
        
        
        
            //tr1 td3
            td1=document.createElement("td");
            tr1.appendChild(td1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Tol Min";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="TolNeg"+LETRA;
            input1.setAttribute("onkeyup","calcularGONOGO(this);");
            lbl1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Tol Max";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="TolPos"+LETRA;
            input1.setAttribute("onkeyup","calcularGONOGO(this);");
            lbl1.appendChild(input1);


            //tr1 td4
            td1=document.createElement("td");
            tr1.appendChild(td1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Limite Min";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="LimNeg"+LETRA;
            lbl1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Limite Max";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="LimPos"+LETRA;
            lbl1.appendChild(input1);

            tabla_body.appendChild(tr1);

            //Tr2
            tr1=document.createElement("tr");
            tr1.setAttribute("class",j%2==0?"ColorEstandar":"ColorDefault")
            //tr2 td1
            td1=document.createElement("td");
            tr1.appendChild(td1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Descripción 1";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="text";
            input1.id="coment"+LETRA+"1";
            lbl1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="Descripción 2";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="text";
            input1.id="coment"+LETRA+"2";
            lbl1.appendChild(input1);

            //tr2 td2
            td1=document.createElement("td");
            tr1.appendChild(td1);

            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v1n"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1.innerHTML="&nbsp;";
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="&nbsp;";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v1p"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);  
            //tr2 td3
            td1=document.createElement("td");
            tr1.appendChild(td1);

            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v2n"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1.innerHTML="&nbsp;";
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="&nbsp;";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v2p"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);



            //tr2 td4
            td1=document.createElement("td");
            tr1.appendChild(td1);

            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v3n"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            lbl1.innerHTML="&nbsp;";
            lbl1=document.createElement("label");
            lbl1.setAttribute("class","labelEstandar");
            lbl1.innerHTML="&nbsp;";
            td1.appendChild(lbl1);
            br1=document.createElement("br");
            lbl1.appendChild(br1);
            input1=document.createElement("input");
            input1.setAttribute("class","inputEstandar");
            input1.type="number";
            input1.id="v3p"+LETRA;
            input1.setAttribute("onkeyup","validargo(this)");
            input1.setAttribute("onchange","setTwoNumberDecimal");
            td1.appendChild(input1);

            tabla_body.appendChild(tr1);
            
            //console.log(tr1);
        };
        //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        function setTwoNumberDecimal(event) {
            console.log(this.value);
            this.value = parseFloat(this.value).toFixed(2);
        }

        function LimparDatosGO(){
            var v1N;
            var v2N;
            var v3N;
            var v1P;
            var v2P;
            var v3P;


            for (let i = 65; i <= 76; i++) {
                v1N=document.getElementById("v1n"+ String.fromCharCode(i));
                v2N=document.getElementById("v2n"+ String.fromCharCode(i));
                v3N=document.getElementById("v3n"+ String.fromCharCode(i));
                v1P=document.getElementById("v1p"+ String.fromCharCode(i));
                v2P=document.getElementById("v2p"+ String.fromCharCode(i));
                v3P=document.getElementById("v3p"+ String.fromCharCode(i));

                v1N.value="";
                v2N.value="";
                v3N.value="";
                v1P.value="";
                v2P.value="";
                v3P.value="";

                v1N.setAttribute("style","backgroundColor='';");
                v1N.setAttribute("style","backgroundColor='';");
                v2N.setAttribute("style","backgroundColor='';");
                v2N.setAttribute("style","backgroundColor='';");
                v3N.setAttribute("style","backgroundColor='';");
                v3N.setAttribute("style","backgroundColor='';");
                v1P.setAttribute("style","backgroundColor='';");
                v1P.setAttribute("style","backgroundColor='';");
                v2P.setAttribute("style","backgroundColor='';");
                v2P.setAttribute("style","backgroundColor='';");
                v3P.setAttribute("style","backgroundColor='';");
                v3P.setAttribute("style","backgroundColor='';");

                
            }

        };

        //----------------------------------------------------------------

        function validargo(inp){
            var id=inp.id;
           // console.log(id);
           var div=inp.parentElement;
            for(let i=65;i<=76;i++){
                switch(id){
                    case "v1n"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimNeg"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                        //console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                            
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    case "v2n"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimNeg"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    case "v3n"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimNeg"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    case "v1p"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimPos"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    case "v2p"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimPos"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    case "v3p"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimPos"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    
                    case "vAntesPos"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimPos"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
    
                    
                    case "vAntesNeg"+ String.fromCharCode(i):
                        var val=parseFloat(inp.value);
                        var TOLminimo=parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        var LimNeg=parseFloat(document.getElementById("LimNeg"+ String.fromCharCode(i)).value);
                        var min=LimNeg-(TOLminimo*0.1);
                        var max=LimNeg+(TOLminimo*0.1);
                       // console.log(LimNeg+ " "+ TOLminimo +" "+min);
                        if(val>=min && val<=max){
                            inp.style.backgroundColor="rgb(163, 255, 204)";
                            div.style.backgroundColor="rgb(163, 255, 204)";
                        }
                        else{
                            inp.style.backgroundColor="rgb(255, 163, 182)";
                            div.style.backgroundColor="rgb(255, 163, 182)";
                        }
                    break;
                    default:
                        break;
                }
    
            }
    
        }
    //-----------------------------------------------
        function calcularGONOGO(input){
            var id=input.id;
            for (let i = 65; i <=76 ; i++) {
                switch (id) {
                    case "Nom" + String.fromCharCode(i):
                        document.getElementById("LimNeg"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) - parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        document.getElementById("LimPos"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) + parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        break;
                    case "TolNeg" + String.fromCharCode(i) :
                        document.getElementById("LimNeg"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) - parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        document.getElementById("LimPos"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) + parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        break;
                    case "TolPos"+ String.fromCharCode(i):
                        document.getElementById("LimNeg"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) - parseFloat(document.getElementById("TolNeg"+ String.fromCharCode(i)).value);
                        document.getElementById("LimPos"+ String.fromCharCode(i)).value=parseFloat(document.getElementById("Nom"+ String.fromCharCode(i)).value) + parseFloat(document.getElementById("TolPos"+ String.fromCharCode(i)).value);
                        break;
                    default:
                        break;
                } 
            }
    
        }
var tabla_body = document.getElementById("tablaBodyValores");
            let valor=new Object();
            for (let i = 1; i <= 30; i++) {
                valor[i]={
                    "Nominal":"Nom"+i,
                    "Antes":"Antes"+i,
                    "Min":"lmin"+i,
                    "Max":"lmax"+i,
                    "Descripccion":"car_row"+i,
                    "v1":"v"+i+"-1",
                    "v2":"v"+i+"-2",
                    "v3":"v"+i+"-3",
                    "clase":i%2==0?"ColorDefault":"ColorEstandar"
                };
                
                
            };
            var tr1;
            var td1;
            var lbl1;
            var br1;
            var input1;
            
           // console.log(valor);
            for (let j = 1; j <= 30; j++) {
                tr1=document.createElement("tr");
                tr1.setAttribute("class",valor[j].clase)
                
                td1=document.createElement("td");
                tr1.appendChild(td1);
                lbl1=document.createElement("label");
                lbl1.setAttribute("class","labelEstandar");
                lbl1.innerHTML="Nominal";
                td1.appendChild(lbl1);
                br1=document.createElement("br");
                lbl1.appendChild(br1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].Nominal;
                lbl1.appendChild(input1);
                
                td1=document.createElement("td");
                tr1.appendChild(td1);
                lbl1=document.createElement("label");
                lbl1.setAttribute("class","labelEstandar");
                lbl1.innerHTML="Antes";
                td1.appendChild(lbl1);
                br1=document.createElement("br");
                lbl1.appendChild(br1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].Antes;
                lbl1.appendChild(input1);

                td1=document.createElement("td");
                tr1.appendChild(td1);
                lbl1=document.createElement("label");
                lbl1.setAttribute("class","labelEstandar");
                lbl1.innerHTML="Min";
                td1.appendChild(lbl1);
                br1=document.createElement("br");
                lbl1.appendChild(br1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].Min;
                lbl1.appendChild(input1);

                td1=document.createElement("td");
                tr1.appendChild(td1);
                lbl1=document.createElement("label");
                lbl1.setAttribute("class","labelEstandar");
                lbl1.innerHTML="Max";
                td1.appendChild(lbl1);
                br1=document.createElement("br");
                lbl1.appendChild(br1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].Max;
                lbl1.appendChild(input1);

                tabla_body.appendChild(tr1);

                tr1=document.createElement("tr");
                tr1.setAttribute("class",valor[j].clase)

                td1=document.createElement("td");
                tr1.appendChild(td1);
                lbl1=document.createElement("label");
                lbl1.setAttribute("class","labelEstandar");
                lbl1.innerHTML="Descripción";
                td1.appendChild(lbl1);
                br1=document.createElement("br");
                lbl1.appendChild(br1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="text";
                input1.id=valor[j].Descripccion;
                lbl1.appendChild(input1);

                td1=document.createElement("td");
                tr1.appendChild(td1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].v1;
                input1.setAttribute("onkeyup","validarIns(this)");
                td1.appendChild(input1);

                td1=document.createElement("td");
                tr1.appendChild(td1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].v2;
                input1.setAttribute("onkeyup","validarIns(this)");
                td1.appendChild(input1);
                
                td1=document.createElement("td");
                tr1.appendChild(td1);
                input1=document.createElement("input");
                input1.setAttribute("class","inputEstandar");
                input1.type="number";
                input1.id=valor[j].v3;
                input1.setAttribute("onkeyup","validarIns(this)");
                td1.appendChild(input1);

                tabla_body.appendChild(tr1);
                
                //console.log(tr1);
            };
            function limpiarDatosINS(){
                var inp_valor;
                for (let i = 1; i <=30; i++) {
                    for (let j = 1; j <=3; j++) {
                            inp_valor=document.getElementById("v"+i+"-"+j);
                            inp_valor.value="";
                            //inp_valor.setAttribute("style","min-width: 150px;max-width:150px;backgroundColor='';");
                            inp_valor.parentElement.setAttribute("style","backgroundColor='';");
                        }
                    
                    }
        
                }
            
                function validarIns(inp){
                var id=inp.id;
                var div=inp.parentElement;
                //console.log(inp.parentElement);
                for (let i = 0; i <= 30; i++) {
                    switch (id) {
                        case "v"+ i + "-1":
                            var val=parseFloat(inp.value);               
                            var minimo=parseFloat(document.getElementById("lmin"+ i).value);                  
                            var maximo=parseFloat(document.getElementById("lmax"+ i).value);                    
                            if(val>=minimo && val<=maximo){
                                inp.style.backgroundColor="rgb(163, 255, 204)";
                                div.style.backgroundColor="rgb(163, 255, 204)";
                            }
                            else{
                                inp.style.backgroundColor="rgb(255, 163, 182)";
                                div.style.backgroundColor="rgb(255, 163, 182)";
                            }
                            break;
                        case "v"+ i + "-2":
                            var val=parseFloat(inp.value);
                            //console.log(val);
                            var minimo=parseFloat(document.getElementById("lmin"+ i).value);
                            //console.log(minimo);
                            var maximo=parseFloat(document.getElementById("lmax"+ i).value);
                            //console.log(maximo);
                            if(val>=minimo && val<=maximo){
                                inp.style.backgroundColor="rgb(163, 255, 204)";
                                div.style.backgroundColor="rgb(163, 255, 204)";
                            }
                            else{
                                inp.style.backgroundColor="rgb(255, 163, 182)";
                                div.style.backgroundColor="rgb(255, 163, 182)";
                            }
                            break;
                            case "v"+ i + "-3":
                            var val=parseFloat(inp.value);
                            var minimo=parseFloat(document.getElementById("lmin"+ i).value);
                            var maximo=parseFloat(document.getElementById("lmax"+ i).value); 
                            if(val>=minimo && val<=maximo){
                                inp.style.backgroundColor="rgb(163, 255, 204)"
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
        
            };
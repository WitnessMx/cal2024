var CAPTURAR_NUEVA_IMAGEN=false;
        $boton_pause = document.querySelector("#boton-pause");
        $boton_play = document.querySelector("#boton-play");
        $boton_cancelar_play=document.querySelector('#boton-cancelar-play');
        $boton_cancelar_pause=document.querySelector('#boton-cancelar-pause');
        let boton_guardar=document.getElementById('boton-guardar');
        $select=document.querySelector('#seleccionarDispositivo');
        let canvas=document.getElementById('canvas')
        var video=document.querySelector('#video');
        let estado_camara=document.getElementById('estado');


        const limpiarSelect = () => {
            for (let x = $select.options.length - 1; x >= 0; x--)
            $select.remove(x);
        };
        const obtenerDispositivos = () => navigator
            .mediaDevices
            .enumerateDevices();
        const llenarSelectConDispositivosDisponibles = () => {

            limpiarSelect();
            obtenerDispositivos()
                .then(dispositivos => {
                    const dispositivosDeVideo = [];
                    dispositivos.forEach(dispositivo => {
                        const tipo = dispositivo.kind;
                        if (tipo === "videoinput") {
                            dispositivosDeVideo.push(dispositivo);
                        }
                    });
                    // Vemos si encontramos algún dispositivo, y en caso de que si, entonces llamamos a la función
                    if (dispositivosDeVideo.length > 0) {
                        // Llenar el select
                        dispositivosDeVideo.forEach(dispositivo => {
                            const option = document.createElement('option');
                            dispositivo.deviceId==''? option.value='sin id':option.value=dispositivo.deviceId;
                            dispositivo.label==''?option.text='sin etiqueta':option.text = dispositivo.label;
                            $select.appendChild(option);
                        });
                    }
                });
        }

        $boton_cancelar_pause.addEventListener("click", function() {
                           video.play();
                            CAPTURAR_NUEVA_IMAGEN=false;
                            //console.log(CAPTURAR_NUEVA_IMAGEN);
                         
                    });



        $boton_pause.addEventListener("click", function() {
                        CAPTURAR_NUEVA_IMAGEN=true;
                        //console.log(CAPTURAR_NUEVA_IMAGEN);
                        video.pause();

                    });


     let stream;
        $boton_play.addEventListener("click", function() {
            if(!(navigator.getUserMedia||
                            navigator.webkitGetUSerMedia||
                            navigator.mozGetUSerMEdia)){
                                alert("Lo siento. Tu navegador no soporta esta característica");
                                estado_camara.innerHTML = "Parece que tu navegador no soporta esta característica. Intenta actualizarlo.";
                                return;
            }
            navigator.getMedia=(navigator.getUserMedia||
                            navigator.webkitGetUSerMedia||
                            navigator.mozGetUSerMEdia);


            obtenerDispositivos().then(dispositivos => {

                const dispositivosDeVideo = [];
                dispositivos.forEach(function(dispositivo) {
                    const tipo = dispositivo.kind;
                    if (tipo === "videoinput") {
                            
                           
                            dispositivosDeVideo.push(dispositivo);
                        }
                        

                });

                if (dispositivosDeVideo.length > 0) {
                    mostrarStream(dispositivosDeVideo[0].deviceId);//<--- cambiar a 1 para Movil camara trasera
                }
            });
            const mostrarStream=idDispositivo=>{

                navigator.getMedia({ video:{
                                        deviceId:idDispositivo,
                                    // width: { ideal: 425 }, 
                                        height: { ideal: 1080 } 
                                        }
                                    },
                                    function(localMediaStream){
                                        video.srcObject=localMediaStream;

                                        $select.onchange = () => {
                                            if (stream) {
                                                stream.getTracks().forEach(function(track) {
                                                    track.stop();
                                                });
                                            }
                                            mostrarStream($select.value);
                                        }
                                        

                                        stream=localMediaStream;
                                        video.onloadedmetadata=function(e){
                                            console.log("cancelaplai")
                                            $boton_cancelar_play.addEventListener("click",function(){
                                                video.setAttribute('style','height:2px;');
                                                CAPTURAR_NUEVA_IMAGEN=false;
                                                stream.getTracks()[0].stop();
                                            });


                                        };

                                    },
                                    function(err){
                                        console.log("ocurrior el siguiente error: "+ err);
                                    }
                                
            )};
            llenarSelectConDispositivosDisponibles();
            video.setAttribute('style','height:299px;');
            CAPTURAR_NUEVA_IMAGEN=false;
            //console.log(CAPTURAR_NUEVA_IMAGEN);
            video.play();                    
                                    

            
        });
       
        
        boton_guardar.addEventListener("click",function(){
                        
                        idGage=document.getElementById("idGage1");
                        if (CAPTURAR_NUEVA_IMAGEN==true) {
                            if(idGage.value!=''){
                                let contexto = canvas.getContext("2d");
                                canvas.width = video.videoWidth;
                                canvas.height = video.videoHeight;
                                contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

                                new Promise(function (resolve, reject) {
                                canvas.toBlob(function (blob) {resolve(URL.createObjectURL(blob));}, "image/webp");
                                
                                }).then(function(data){
                                    let foto = canvas.toDataURL();
                                    var f=new Date();
                                    var dd=(f.getDate()<10?'0':'')+f.getDate();
                                    var mm=((f.getMonth()+1)<10?'0':'')+(f.getMonth()+1);
                                    var yy=(f.getFullYear().toString().substr(-2));
                                    var FechaHoy=dd+mm+yy;
                                    let imageLink = document.createElement("a");
                                    imageLink.setAttribute("href", data);
                                    imageLink.setAttribute('download',idGage.value +" IMG "+FechaHoy+".webp");
                                    imageLink.click();                               
                                });
                                CAPTURAR_NUEVA_IMAGEN=false;
                                video.play();
                                
                            }else{
                                alert("ingresa id de Gage");
                            }
                            
                        } else {
                            console.log("nada que capturar");
                        }

                    });
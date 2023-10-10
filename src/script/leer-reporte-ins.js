            //INSTRUMENTO
            var ExcelToJSON2 = function() {
                this.parseExcel = function(file) {
                    var reader = new FileReader();
                        reader.onload = function(e) {
                        var data = e.target.result;
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });

                        var datos1=workbook.Sheets["TR-FRM-0124"];
                        var JsonDatos=JSON.stringify(datos1);
                        var DATOS=JSON.parse(JsonDatos);


                        //console.log(DATOS);
                        //id
                        document.getElementById('idGage').value=DATOS.B7.w;
                        document.getElementById('idGage1').value=DATOS.B7.w;
                        //desc
                        document.getElementById('DesGage').value=DATOS.B6.w;
                        //mod
                        document.getElementById('ModGage').value=DATOS.B9.w;
                        //fabricante
                        document.getElementById('FabGage').value=DATOS.E8.w;
                        //Tipo
                        document.getElementById('TipoGage').value=DATOS.B8.w;
                        //Localizacion
                        document.getElementById('LocGage').value=DATOS.E7.w;
                        //Serial
                        typeof(DATOS.E9)=='undefined'?document.getElementById('SerGage').value="":document.getElementById('SerGage').value=DATOS.E9.w;
                        //frecuencia
                        document.getElementById('FrecGage').value=DATOS.F6.w;
                        //Fecha de cal
                        document.getElementById('UltimaCal').value=DATOS.E17.w;
                        //medo 
                        document.getElementById('MetodCal').value="NA"
                        document.getElementById('MetodUtil').value=DATOS.G19.w;
                        //FRM
                        document.getElementById('FRM').value="NA"
                        document.getElementById('Rev').value="NA"
                        //Estandar1
                        document.getElementById('E1Nombre').value=DATOS.D12.w;
                        document.getElementById('E1Id').value=DATOS.G12.w;
                        //Estandar2
                        document.getElementById('E2Nombre').value=DATOS.E12.w;
                        document.getElementById('E2Id').value=DATOS.H12.w;

                        //coordenadas de ubicacion
                        if (typeof(DATOS.J7)==='undefined') {
                            
                        }
                        else{
                            var X1=DATOS.K7.v;
                            var Y1=DATOS.J7.v;
                            console.log(X1 + " " + Y1)
                            mostrar_ubic(DATOS.B7.v,Y1,X1);
                        }
                        //IMAGEN->>>>>>>>>

                        //console.log(UBICACIONES);
                        var id_img=DATOS.B7.w
                        /*  UBICACIONES.forEach(Ruta => {
                            console.log(Ruta);
                        });*/
                        let ruta_img;
                        for (let index = 0; index < UBICACIONES.length; index++) {

                            const element = UBICACIONES[index].Gage_iD;

                            if (element==id_img) {
                                ruta_img=UBICACIONES[index].Ruta;
                                break;
                            } else {
                            
                            }
                        
                        }
                        //console.log(ruta_img);
                        var img=document.getElementById('img_gages')
                        document.getElementById('ruta_label').innerHTML=ruta_img;
                        img.setAttribute('src','sources/images/Galeria/'+ ruta_img);
                        // console.log(id_img);


                        //------<<<<<<<<



                        //CARACTERISTICA--->>>>

                        var caracteristica_de_Inst="";

  

                    //--------<<<

                    //VALORES--->>>
                    for (let i = 23; i <=52; i++) {
                        //console.log(i);
                        var num= i-22;
                        var n=num.toString();
                        // console.log(num.toString());
                        document.getElementById('car_row'+n).value=typeof(DATOS[String.fromCharCode(65)+i])==='undefined'?'':DATOS[String.fromCharCode(65)+i]['v'];
                        typeof(DATOS['B'+i])==='undefined' ? document.getElementById('Nom'+n).value=""   :  document.getElementById('Nom'+n).value=  DATOS['B'+i]['v'];
                        typeof(DATOS['D'+i])==='undefined' ? document.getElementById('Antes'+n).value="" :  document.getElementById('Antes'+n).value=DATOS['D'+i]['v'];
                        typeof(DATOS['E'+i])==='undefined' ? document.getElementById('lmin'+n).value=""  :  document.getElementById('lmin'+n).value= DATOS['E'+i]['v'];
                        typeof(DATOS['F'+i])==='undefined' ? document.getElementById('lmax'+n).value=""  :  document.getElementById('lmax'+n).value= DATOS['F'+i]['v'];
                        
                        
                    }
                    //-------<<<<<<
                };
                reader.onerror = function(ex) {
                    console.log(ex);
                };
                reader.readAsBinaryString(file);
            };

        };
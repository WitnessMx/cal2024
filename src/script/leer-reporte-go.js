var ExcelToJSON2 = function() {
    this.parseExcel = function(file) {
        var reader = new FileReader();
            reader.onload = function(e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            var datos1=workbook.Sheets["TR-FRM-0145"];
            var JsonDatos=JSON.stringify(datos1);
            var DATOS=JSON.parse(JsonDatos);

            var valores1=workbook.Sheets["Inspección"];
            var JsonValores=JSON.stringify(valores1);
            var VALORES=JSON.parse(JsonValores);

            var mtto1=workbook.Sheets["RMG"];
            var Jsonmtto1=JSON.stringify(mtto1);
            var MTTO1=JSON.parse(Jsonmtto1);

            //console.log(DATOS);
            //id
            document.getElementById('idGage').value=DATOS.F9.w;
            document.getElementById('idGage1').value=DATOS.F9.w;
            //desc
            document.getElementById('DesGage').value=DATOS.C9.w;
            //mod
            document.getElementById('ModGage').value=DATOS.F10.w;
            //fabricante
            document.getElementById('FabGage').value=DATOS.C10.w;
            //Tipo
            document.getElementById('TipoGage').value=DATOS.C11.w;
            //Localizacion
            document.getElementById('LocGage').value=DATOS.F11.w;
            //Serial
            typeof(DATOS.H10)=='undefined'?document.getElementById('SerGage').value="":document.getElementById('SerGage').value=DATOS.H10.w;
            //frecuencia
            document.getElementById('FrecGage').value=DATOS.H9.w;
            //Fecha de cal
            document.getElementById('UltimaCal').value=DATOS.C22.w;
            //medo 
            document.getElementById('MetodCal').value=DATOS.F21.w;
            document.getElementById('MetodUtil').value=DATOS.F23.w;
            //FRM
            document.getElementById('FRM').value=MTTO1.E7.w;
            document.getElementById('Rev').value=MTTO1.G7.w;
            //Estandar1
            document.getElementById('E1Nombre').value=DATOS.D33.w;
            document.getElementById('E1Id').value=DATOS.B33.w;
            //Estandar2
            document.getElementById('E2Nombre').value=DATOS.D34.w;
            document.getElementById('E2Id').value=DATOS.B34.w;

            //coordenadas de ubicacion
            if (typeof(DATOS.J7)==='undefined') {
                
            }
            else{
                var X1=DATOS.K7.v;
                var Y1=DATOS.J7.v;
                mostrar_ubic(DATOS.F9.v,Y1,X1);
            }
            //IMAGEN->>>>>>>>>

            //console.log(UBICACIONES);
            var id_img=DATOS.F9.w
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

        //VALORES--->>>
        var LETRA1="";
        var renglon=9;
        for (let i = 65; i <= 76; i++) {                    
            LETRA1= String.fromCharCode(i);
            var aumento=renglon+1;
            document.getElementById('Nom'       +LETRA1     ).value=(typeof(VALORES["B"+renglon])==='undefined'?'': VALORES["B"+renglon]["v"]);
            document.getElementById('TolNeg'    +LETRA1     ).value=(typeof(VALORES["D"+renglon])==='undefined'?'': VALORES["D"+renglon]["v"]);
            document.getElementById('LimNeg'    +LETRA1     ).value=(typeof(VALORES["F"+renglon])==='undefined'?'':(VALORES["F"+renglon]["v"]===0?'':VALORES["F"+renglon]["v"]));
            document.getElementById('vAntesNeg' +LETRA1     ).value=(typeof(VALORES["J"+renglon])==='undefined'?'':(VALORES["J"+renglon]["v"]===0?'':VALORES["J"+renglon]["v"]));
            document.getElementById('TolPos'    +LETRA1     ).value=(typeof(VALORES["D"+aumento])==='undefined'?'': VALORES["D"+aumento]["v"]);
            document.getElementById('LimPos'    +LETRA1     ).value=(typeof(VALORES["F"+aumento])==='undefined'?'':(VALORES["F"+aumento]["v"]===0?'':VALORES["F"+aumento]["v"]));
            document.getElementById('vAntesPos' +LETRA1     ).value=(typeof(VALORES["J"+aumento])==='undefined'?'':(VALORES["J"+aumento]["v"]===0?'':VALORES["J"+aumento]["v"]));
            document.getElementById('coment'    +LETRA1+'1' ).value=(typeof(VALORES["N"+renglon])==='undefined'?'':VALORES["N"+renglon]["v"]);
            document.getElementById('coment'    +LETRA1+'2' ).value=(typeof(VALORES["N"+aumento])==='undefined'?'':VALORES["N"+aumento]["v"]);
            renglon+=3; 
        }
        //-------<<<<<<
    };
    reader.onerror = function(ex) {
        console.log(ex);
    };
    reader.readAsBinaryString(file);
};

};
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
            //coordenadas de ubicacion
            if (typeof(DATOS.J7)==='undefined') {
                
            }
            else{
                var X1=DATOS.K7.v;
                var Y1=DATOS.J7.v;
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


            var caracteristica_de_Inst="";

       
    };
    reader.onerror = function(ex) {
        console.log(ex);
    };
    reader.readAsBinaryString(file);
};

};
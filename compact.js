
//upload gambar
 function tampilkanPreview(gambar,idpreview){
//                membuat objek gambar
                var gb = gambar.files;
//                loop untuk merender gambar
                for (var i = 0; i < gb.length; i++){
//                    bikin variabel
                    var gbPreview = gb[i];
                    var imageType = /image.*/;
                    var preview=document.getElementById(idpreview);
                    var reader = new FileReader();
                    if (gbPreview.type.match(imageType)) {
//                        jika tipe data sesuai
                        preview.file = gbPreview;
                        reader.onload = (function(element) {
                            return function(e) {
                                element.src = e.target.result;
                            };
                        })(preview);
    //                    membaca data URL gambar
                        reader.readAsDataURL(gbPreview);
                    }else{
//                        jika tipe data tidak sesuai
                        alert("Type file tidak sesuai. Khusus image.");
                    }
                }
            }





  //post blog
  function onclk() {
    var doc = document.getElementById("judul").value;
    document.getElementById("judulss").innerHTML = doc;
    var isi = document.getElementById("isi").value;
    document.getElementById("isis").innerHTML = isi;
    var tgl = document.getElementById("datepicker").value;
    var tanggalan = document.getElementById("tanggals").innerHTML = tgl;


  }


//komen da array
    var adds = ["Comment"];
    document.getElementById("demo").innerHTML = adds;

    function ons() {
        var addi = document.getElementById("aidi").value;
        document.getElementById("demo").innerHTML = addi;
        adds.push(addi);
    }


    //tombol reset post
  function res() {
      document.getElementById("reset").reset();
  }

//tombol reset komen
  function rese() {
      document.getElementById("rest").reset();
  }

  //desc dan asc user


//komen da array
    var adds = ["Comment"];
    document.getElementById("demo").innerHTML = adds;

    function ons() {
        var addi = document.getElementById("aidi").value;
        document.getElementById("demo").innerHTML = addi;
        adds.push(addi);
    }

//sercing admin

  function validasi() {
    var namas = document.getElementById("namax").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("password").value;
    if (nama != "" && email!="" && alamat !="") {
      return true;
    }else{
      alert('Anda harus mengisi data dengan lengkap !');
    }
  }

  function onclk() {
    var doc = document.getElementById("judul").value;
    document.getElementById("judulss").innerHTML = doc;
    var isi = document.getElementById("isi").value;
    document.getElementById("isis").innerHTML = isi;


    // for (var i = 0; i <100; i++) {
    //     document.write("<div class="row mt-5 mb-5" id="for">");
    //     document.write("<div class="card" style="width: 18rem;">");
    //     document.write("<img src="" class="card-img-top" id="preview" width="30%">");
    //     document.write(" <div class="card-body">");
    //     document.write(" <h5 class="card-title" id="judulss"></h5>");
    //     document.write("<p class="card-text" id="isis"></p>");
    //     document.write("</div>");
    //     document.write("</div>");
    //     document.write("</div>");
    // }


  }

  //date picker untuk tanggal
  $(document).ready(function() {
      $(".tanggal").datepicker({
        format: "dd-mm-yyyy",
        autoclose:true;
      });
  })


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
//


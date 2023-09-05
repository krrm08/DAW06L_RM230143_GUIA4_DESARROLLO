var fechaHoy = new Date();

    var title = document.getElementById('pagetitle');

    var desfase = -(Math.round(fechaHoy.getTimezoneOffset()/60)) + 12;

    function iniciar() {
      var select = document.getElementById("zhselect");
      if (select.addEventListener) {
        select.addEventListener("change", getHoraLocal, false);
      } else if (select.attachEvent) {
        select.attachEvent("onchange", getHoraLocal);
      }
    }

    function getHoraLocal() {
      var fechaHoy = new Date();

      var zh = document.zonahoraria.zonas.selectedIndex - desfase;

      fechaHoy.setHours(fechaHoy.getHours() + zh);

      title.innerHTML = "Zona horaria de " +
        document.zonahoraria.zonas.options[document.zonahoraria.zonas.selectedIndex].text;
      document.zonahoraria.hour.value = fechaHoy.toLocaleString();
    }

    if (window.addEventListener) {
      window.addEventListener("load", iniciar, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", iniciar);
    }
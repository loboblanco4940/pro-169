AFRAME.registerComponent("markerhandler", {
    init: async function() {
      this.el.addEventListener("markerFound", () => {
        console.log("Se encontro el marcador")
        this.handleMarkerFound();
      });
      this.el.addEventListener("markerLost", () =>{
        console.log("Se perdio el marcador")
        this.handleMarkerLost();
      });
    },

    handleMarkerFound: function(){
        //cambiar la visibilidad del botón 
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        //Usar los eventos de clic
        orderButton.addEventListener("click", function () {
            swal({
                icon: "https://i.imur.com/4NZ6uLy.jpg",
                title: "Gracias por tu orden",
                text: " ",
                timer: 2000,
                buttons:false
            })
        })

        orderSummaryButton.addEventListener("click", function () {
            swal({
                icon: "warning",
                title: "Resumen de la orden",
                text: "Operacion en curso"
            })
        })
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.desplay = "none";
        
        
    },
  });
var REEV0036 = {
    init:function() {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "reev0036";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", div_click);
        div.addEventListener("mouseover", div_mouseOver);
        div.addEventListener("mouseout", div_mouseOut);

        function div_click(event) {
          event.currentTarget.style.backgroundColor = "#5691bb";
          event.currentTarget.style.borderColor = "#28547f";
        }

        function div_mouseOver(event) {
          event.currentTarget.classList.toggle("highlight");
        }

        function div_mouseOut(event) {
          event.currentTarget.classList.toggle("highlight");
        }
    }
};
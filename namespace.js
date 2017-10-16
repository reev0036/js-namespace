var REEV0036 = {
    init: function () {
        var div = document.createElement("div");
        div.classList.add("box");
        div.textContent = "REEV0036";
        document.getElementById("boxes").appendChild("div");
        
        div.addEventListener("click", div_click);
        div.addEventListener("mouseover", div_mouseOver);
        div.addEventListener("mouseout", div_mouseOut);

        function div_click(event) {
            event.currentTarget.style.backgroundColor = "blue";
            event.currentTarget.style.borderColor = "lightgreen";
        }
        
        function div_mouseOver(event) {
            event.currentTarget.classList.toggle("highlight");
        }
        
        function div_mouseOut(event) {
            event.currentTarget.classList.toggle("highlight");
        }

    }
};

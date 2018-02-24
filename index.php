<?php
    include 'html/cabecalho.html'
?>
    <body onload="autoSlide()">

        <div class="clear"></div>
        
        <div id="slider">
            <button onclick="slide()" id="sldLeft" class="sldBtn"></button>
                <img href='imagens/forest.jpg'>
            <button onclick="slideBack()" id="sldRight" class="sldBtn"></button>
            <img id="slideImage">
        </div>
        <script type="text/javascript" src="js/home.js"></script>
    </body>
</html>
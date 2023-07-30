function askerlikdurumu(deger)
        {
            if(document.getElementById(deger).value=="erkek")
            {
                document.getElementById("askerlik").type="text";
            }
            else
            {
               document.getElementById("askerlik").type="hidden";
            }
        }

        function ackapat(deger)
        {
        if(document.getElementById(deger).value=="type")
        {document.getElementById("deger").type="hidden";}
        else
        {document.getElementById("deger").type="text";}
        }

        function kapat()
        {


            document.getElementById("askerlik").value="";
            document.getElementById("digerdil").value="";
            document.getElementById("digerbeceri").value="";
            document.getElementById("digerilgi").value="";

            document.getElementById("askerlik").type="hidden";
            document.getElementById("digerdil").type="hidden";
            document.getElementById("digerbeceri").type="hidden";
            document.getElementById("digerilgi").type="hidden";
        }
         

        function bosalt(x)
        {
            if (document.getElementById(x).value=="Lütfen adınızı giriniz" || document.getElementById(x).value=="lütfen soyadınızı giriniz" )
            {
                document.getElementById(x).value="";
            }
            else
            {}
        }
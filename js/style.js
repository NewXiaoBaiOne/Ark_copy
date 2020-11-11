window.onload = () => {
    window.onscroll =
        function() {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if(t <=2){

                document.getElementsByClassName("top-Navg")[0].style.height = '100px';
                document.getElementsByClassName("logo")[0].style.height = '93px';
                document.getElementsByClassName("logo")[0].style.width = '393px';
                document.getElementsByClassName("new-ul22")[0].style.top = '100px';
                document.getElementsByClassName("top-wx")[0].style.top = '100px';
                document.getElementsByClassName("more-box")[0].style.top = '38px';
                let chaA = document.getElementsByClassName("news-ul")[0].getElementsByClassName("cha");
                for(let i=0;i<chaA.length;i++){
                    chaA[i].style.paddingTop = '32px';
                }
            }else if (t > 2) {
                document.getElementsByClassName("top-Navg")[0].style.height = '70px';
                document.getElementsByClassName("logo")[0].style.height = '60px';
                document.getElementsByClassName("logo")[0].style.width = '253px';
                document.getElementsByClassName("new-ul22")[0].style.top = '70px';
                document.getElementsByClassName("top-wx")[0].style.top = '70px';
                document.getElementsByClassName("more-box")[0].style.top = '11px';
                let chaA = document.getElementsByClassName("news-ul")[0].getElementsByClassName("cha");
                for(let i=0;i<chaA.length;i++){
                    chaA[i].style.paddingTop = '20px';
                }
            }
        };

}
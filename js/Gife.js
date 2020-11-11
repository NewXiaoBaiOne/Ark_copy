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

        let gife_btn = document.getElementsByClassName("gife-btn");
        let result = 0;
        let gifecode = document.getElementById("gifecode").value;
        gife_btn[0].onclick = ()=>{
            gifecode = document.getElementById("gifecode").value;
            if(gifecode == 'ok'){
                document.getElementsByClassName("suc")[0].style.display = 'block';
            }else{
                document.getElementsByClassName("fail")[0].style.display = 'block';
            }
        }
        let close = document.getElementsByClassName("close");
        for(let i=0; i<close.length;i++){
            close[i].onclick = ()=>{
                document.getElementsByClassName("suc")[0].style.display = 'none';
                document.getElementsByClassName("fail")[0].style.display = 'none';
            }
        }
        let know_btn = document.getElementsByClassName("btn");
        for(let i=0;i<know_btn.length;i++){
            know_btn[i].onclick = ()=>{
                document.getElementsByClassName("suc")[0].style.display = 'none';
                document.getElementsByClassName("fail")[0].style.display = 'none';
            }
        }




}
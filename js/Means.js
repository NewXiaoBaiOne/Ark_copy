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
        let i_btn = document.getElementsByClassName("info")[0].getElementsByTagName("i");
        let p_data = document.getElementsByClassName("content")[0].getElementsByTagName("p");
        for(let i=0; i<i_btn.length;i++){
            let data = 14;
            i_btn[i].onclick = ()=>{
                let data1 = 2 * i +data;
                p_data[0].style.fontSize = data1 + 'px';
                p_data[1].style.fontSize = data1 + 'px';
            }
        }



}
window.onload = () => {
    let screen_index2 = 0;
    /*     背景视频出现      */
    let btn = document.getElementById('video-bf').getElementsByClassName("video-bf-ring");
    btn[0].onclick = () => {
        document.getElementsByClassName("video-sp")[0].getElementsByTagName("video")[0].load();
        document.getElementById('video-Tj').style.display = 'block';
    }
    let tuichu = document.getElementsByClassName('video-sp')[0].getElementsByTagName("span");
    
    /*     背景视频退出（刷新等待下次调用）     */
    tuichu[0].onclick = () => {
        document.getElementById('video-Tj').style.display = 'none';
        document.getElementsByClassName("video-sp")[0].getElementsByTagName("video")[0].pause();
    }
    
    let content1_mediatitle = document.getElementsByClassName("media-title-content");
    let media_aggregate = document.getElementsByClassName("media-aggregate")[0].getElementsByTagName("a");
    for (let i = 0; i < media_aggregate.length; i++) {
        media_aggregate[i].onmouseover = () => {
            let position = parseInt(content1_mediatitle[0].style.left);
            content1_mediatitle[0].style.left = -i * 369 + 'px';
            console.log(position);
        }
    }
/*         下载点击事件          */
document.getElementById("download-btn").onclick = ()=>{
    document.getElementById("download-btn").style.display = "none";
    document.getElementsByClassName("down-content")[0].style.display = "block";
    setTimeout(() => {
        document.getElementsByClassName("down-content")[0].style.display = "none";
        document.getElementById("download-btn").style.display = "block";
    }, 3000);
}

    let content1_Navg_count1 = 0;
    let content1_Navg_position = 0;

    let content1_Navg_count = 0;
    let content1_Navg = document.getElementsByClassName("content1-top-Navgbox")[0].getElementsByTagName("span");
    let content1_Rotation = document.getElementById("content1-top-box");
    // 鼠标绑定事件
    window.onscroll =
        function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t <= 2) {

                document.getElementsByClassName("top-Navg")[0].style.height = '100px';
                document.getElementsByClassName("logo")[0].style.height = '93px';
                document.getElementsByClassName("logo")[0].style.width = '393px';
                document.getElementsByClassName("new-ul22")[0].style.top = '100px';
                document.getElementsByClassName("top-wx")[0].style.top = '100px';
                document.getElementsByClassName("more-box")[0].style.top = '38px';
                let chaA = document.getElementsByClassName("news-ul")[0].getElementsByClassName("cha");
                for (let i = 0; i < chaA.length; i++) {
                    chaA[i].style.paddingTop = '32px';
                }
            } else if (t > 2) {
                document.getElementsByClassName("top-Navg")[0].style.height = '70px';
                document.getElementsByClassName("logo")[0].style.height = '60px';
                document.getElementsByClassName("logo")[0].style.width = '253px';
                document.getElementsByClassName("new-ul22")[0].style.top = '70px';
                document.getElementsByClassName("top-wx")[0].style.top = '70px';
                document.getElementsByClassName("more-box")[0].style.top = '11px';
                let chaA = document.getElementsByClassName("news-ul")[0].getElementsByClassName("cha");
                for (let i = 0; i < chaA.length; i++) {
                    chaA[i].style.paddingTop = '20px';
                }
            }
            if (t > 300) {
                document.getElementById('SB').style.display = 'none';
            } else {
                document.getElementById('SB').style.display = 'none';
                setTimeout(() => {
                    document.getElementById('SB').style.display = 'block';
                }, 3000);
                console.log(t);
            }
            
            /* content1   鼠标监听动画 */
            if (t > 200) {
                document.getElementsByClassName("content1-left")[0].style.left = '0px';
                document.getElementsByClassName("content1-left")[0].style.opacity = '1';
                document.getElementsByClassName("content1-top")[0].style.top = '140px';
                document.getElementsByClassName("content1-top")[0].style.opacity = '1';
                document.getElementsByClassName("content1-bottom")[0].style.bottom = '0px';
                document.getElementsByClassName("content1-bottom")[0].style.opacity = '1';
            }
            if (t > 1250) {
                document.getElementsByClassName("content2-T")[0].style.top = '254px';
                document.getElementsByClassName("content2-T")[0].style.opacity = '1';
            }
            if (t > 2100) {
                document.getElementsByClassName("content3-content")[0].style.top = '244px';
                document.getElementsByClassName("content3-content")[0].style.opacity = '1';
            }
            if (t > 3030) {
                document.getElementsByClassName("content4-content")[0].style.top = '235px';
                document.getElementsByClassName("content4-content")[0].style.opacity = '1';
            }
        };

    function content1_auto() {
        content1_Navg_position = parseInt(content1_Rotation.style.left);
        if (content1_Navg_count1 == 0 && content1_Navg_position > -930) {
            content1_Navg_position -= 465;
            content1_Rotation.style.left = content1_Navg_position + 'px';
            content1_Navg_func(content1_Navg_count, content1_Navg_count + 1);
            content1_Navg_count++;
        } else {
            content1_Navg_count1 = 2;
        }
        if (content1_Navg_count1 == 2 && content1_Navg_position < 0) {
            content1_Navg_position += 465;
            content1_Rotation.style.left = content1_Navg_position + 'px';
            content1_Navg_func(content1_Navg_count, content1_Navg_count - 1);
            content1_Navg_count--;
        } else {
            content1_Navg_count1 = 0;
        }
    }
    let SeTInt = '';
    function loop_func() {
        SeTInt = setInterval(() => {
            content1_auto();
        }, 2000);
    }
    loop_func();
    for (let i = 0; i < content1_Navg.length; i++) {
        content1_Navg[i].onclick = () => {
            content1_Rotation.style.left = -i * 465 + 'px';
            content1_Navg_func(content1_Navg_count, i);
            content1_Navg_count = i;
            clearTimeout(SeTInt);
            setTimeout(() => {
                loop_func();
            }, 3000);
        }
    }
    
    /*    小轮播导航栏函数      */
    function content1_Navg_func(navg, newnavg) {
        content1_Navg[navg].style.width = '12px';
        content1_Navg[navg].style.height = '12px';
        content1_Navg[navg].style.background = '#ccc';
        content1_Navg[navg].style.borderRadius = '6px';

        content1_Navg[newnavg].style.width = '20px';
        content1_Navg[newnavg].style.background = 'cyan';
        content1_Navg[newnavg].style.borderRadius = '5px';

    }

    /*        轮播跳转       */
    let content2_btn = document.getElementsByClassName("content2-T")[0].getElementsByTagName('a');
    content2_btn[0].onclick = () => {
        if (screen_index2 == 0) {
            screen_run(9);
        } else {
            screen_run(screen_index2 - 1);
        }
    }
    content2_btn[1].onclick = () => {
        if (screen_index2 == 9) {
            screen_run(1);
        } else {
            screen_run(screen_index2 + 1);
        }
    }
/*   直播放大事件      */
    let live_event = document.getElementsByClassName("live-content")[0].getElementsByClassName("live-contentbox");
    for(let i=0;i<live_event.length;i++){
        live_event[i].onmouseover = ()=>{
            live_event[i].getElementsByTagName("img")[0].style.transform = "translateZ(100px)";
        }
        live_event[i].onmouseout = ()=>{
                live_event[i].getElementsByTagName("img")[0].style.transform = "translateZ(0px)";
        }
    }



    let screen_Navg_span = document.getElementsByClassName("content2-Navg")[0].getElementsByTagName("span");
    for (let i = 0; i < 10; i++) {
        screen_Navg_span[i].onmouseover = () => {
            screen_run(i);
        }
    }

    let Cont2_screen = document.getElementsByClassName("Cont2-screen");
    let screen_img_position = 0;
    let screen_introduce_position = 0;

    function screen_run(data) {
        screen_index2 = data;
        screen_introduce_position = parseInt(Cont2_screen[data].getElementsByClassName("screen-introduce")[0].style.left);
        screen_img_position = parseInt(Cont2_screen[data].getElementsByTagName("img")[0].style.right);
        Cont2_screen[data].getElementsByClassName("screen-introduce")[0].style.left = screen_img_position - 200 + 'px';
        Cont2_screen[data].getElementsByTagName("img")[0].style.right = screen_introduce_position - 300 + 'px';

        let screen_img_position1 = parseInt(Cont2_screen[data].getElementsByClassName("screen-introduce")[0].style.left);
        let screen_introduce_position1 = parseInt(Cont2_screen[data].getElementsByTagName("img")[0].style.right);
        goods_move(screen_introduce_position1, screen_img_position1, data);

        console.log(screen_img_position, screen_introduce_position);
        console.log(screen_img_position1, screen_introduce_position1);
        clear_cur(data);
    }

    /* function goods_move(position_right, data){

    } */
    /*        虚化合拢      */
    function goods_move(position_left, position_right, data) {
        let averageleft = -200 / 200;
        let averageright = -300 / 200;
        let positionA = position_left;
        let positionB = position_right;
        function move() {
            positionA -= averageleft;
            positionB -= averageright;
            if (positionA < position_left || positionB < position_right) {
                setTimeout(() => {
                    Cont2_screen[data].getElementsByClassName("screen-introduce")[0].style.left = positionA + 'px';
                    Cont2_screen[data].getElementsByTagName("img")[0].style.right = positionB + 'px';
                }, 5);
                move();
            } else {
                Cont2_screen[data].getElementsByClassName("screen-introduce")[0].style.left = screen_introduce_position + 'px';
                Cont2_screen[data].getElementsByTagName("img")[0].style.right = screen_img_position + 'px';
            }
        }
        move();

    }

    function clear_cur(data) {
        for (let i = 0; i < 10; i++) {
            Cont2_screen[i].className = "Cont2-screen";
        }
        Cont2_screen[data].className = "Cont2-screen screen-cur";
    }

    /*            大轮播               */
    let content3_index = 0;
    let content3_position = 0;
    let content3_btn = document.getElementsByClassName("content3-content")[0].getElementsByTagName('a');
    /*        左键        */
    let img3_span = document.getElementsByClassName("img3-Navg")[0].getElementsByTagName("span");
    let content3_img_box = document.getElementsByClassName('auto-img-box');
    content3_btn[0].onclick = () => {

        content3_position = parseInt(content3_img_box[0].style.left) + 1305;
        content3_img_box[0].style.left = content3_position + 'px';
        if (content3_position == 0) {
            content3_index = 3;
            setTimeout(() => {
                content3_img_box[0].style.transition = 'left 0s';
                content3_img_box[0].style.left = -5220 + 'px';
                setTimeout(() => {
                    content3_img_box[0].style.transition = 'left 1s';
                }, 20);
            }, 1000);
        } else {
            content3_index--;
        }
        large_auto(content3_index);
    }
    /*      右键     */

    content3_btn[1].onclick = () => {
        content3_position = parseInt(content3_img_box[0].style.left) - 1305;
        content3_img_box[0].style.left = content3_position + 'px';
        if (content3_position == -6525) {
            content3_index = 0;
            setTimeout(() => {
                content3_img_box[0].style.transition = 'left 0s';
                content3_img_box[0].style.left = -1305 + 'px';
                setTimeout(() => {
                    content3_img_box[0].style.transition = 'left 1s';
                }, 20);
            }, 1000);
        } else {
            content3_index++;
        }
        large_auto(content3_index);
    }
    function large_auto(data) {
        for (let i = 0; i < 4; i++) {
            img3_span[i].className = 'content3-Navg';
        }
        img3_span[data].className = 'content3-Navg content3-Navg-cur';
    }

    /*            大轮播导航       */
    let content3_img_Navg = document.getElementsByClassName("img3-Navg")[0].getElementsByTagName("span");
    for (let i = 0; i < content3_img_Navg.length; i++) {
        content3_img_Navg[i].onclick = () => {
            if (i != content3_index) {
                content3_position = parseInt(content3_img_box[0].style.left) - 1305 * (i - content3_index);
                content3_img_box[0].style.left = content3_position + 'px';
                content3_index = i;
                large_auto(content3_index);
            }
            // console.log(12)
        }
    }


    /*        $4  JS点击下载之无法下载    */
    let content4_btn = document.getElementsByClassName("content4-content")[0].getElementsByTagName("a");
    content4_btn[0].onclick = () => {
        content4_btn[0].style.display = 'none';
        document.getElementsByClassName("content4-content")[0].getElementsByClassName("content4-black")[0].style.display = 'block';
    }


}


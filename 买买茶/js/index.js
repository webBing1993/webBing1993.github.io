/**
 * Created by Administrator on 2016/10/4.
 */
window.onload = function () {
    /*��������ʼ*/

    var lis = document.getElementById('menuUl').getElementsByTagName('li');
    lis[0].onmousemove = function(){
        this.className = "active";
    };
    for(var i = 1; i < lis.length - 2; i++){
        lis[i].onmousemove = function () {
            this.className = "active";
        };
        lis[i].onmouseout = function () {
            this.className = "";
        }
    }
    //���ﳵ
    var newBuycar = document.getElementById('newBuycar');
    newBuycar.onmousemove = function () {
        newBuycar.style.backgroundColor = "#438f0e";
    };
    newBuycar.onmouseout = function () {
        newBuycar.style.backgroundColor = "#62b206";
    };
    /*����������*/

    /*���߿ͷ���ʼ*/
    var showBox = document.getElementById('showBox');
    var open = document.getElementById('open');
    var contenBox = document.getElementById('contenBox');
    var closeBox = document.getElementById('closeBox');

    /*չ��*/
    open.onclick = function () {
        this.style.display = "none";
        contenBox.style.display = "block";

    };
    /*�ر�*/
    closeBox.onclick = function () {
        open.style.display = "block";
        contenBox.style.display = "none";
    };
    /*���߿ͷ�����*/

    /*�ֲ�ͼ��ʼ*/
    var playerCon = document.getElementById('player_con');
    var playerImg = document.getElementById('player_img');
    var liImgs = playerImg.getElementsByTagName('li');
    var circleLis = document.getElementById('circleUl').getElementsByTagName('li');
    var leader = 0, target = 0;
    var timer1 = null,timer2 = null, timer3 = 0;

    timer1 = setInterval(autoPlay, 10);
    function autoPlay() {
        leader--;
        leader <= -3166 ? leader = 0 : leader;
        playerImg.style.left = leader + "px";
        if (parseInt(leader % 1583) == 0){
            clearInterval(timer1);
            // ��ʱ�Զ����ŵĶ�ʱ�� timer2
            timer2 = setTimeout(function () {
                timer1 = setInterval(autoPlay, 10);
            }, 3000);
        }

    }
    for (var i = 0; i < circleLis.length; i++){

        circleLis[i].onmouseover = function () {
            // �õ�Ŀ��λ����
            var num = this.getElementsByTagName('a')[0];
            target = (-num.innerHTML + 1)* 1583;
            clearInterval(timer1);
            clearTimeout(timer2);
            num.style.color = "red";
            // ��num����Ŀ��λ��, ��Ϊ����������ͼƬ����
            num = target;
            // ��Ӧ�û�����ƽ��Ķ�ʱ�� timer3
            timer3 = setInterval(function () {
                leader = leader + (target - leader) / 10;

                playerImg.style.left = leader + "px";
            }, 20);

        };
        circleLis[i].onmouseout = function () {
            var num = this.getElementsByTagName('a')[0];
            num.style.color = "#fff";
            clearInterval(timer3);
            timer2 = setTimeout(function () {
                timer1 = setInterval(autoPlay, 10);
            }, 3000);
        }
    }
    /*�ֲ�ͼ����*/

    /*��ʱ�ؼۿ�ʼ*/

        $(function(){
            var nav=$('.hotpro_header');
            var lis1=$('ul>li',nav);
            var cons=$('.new_hotpro_con');

            lis1.mouseover(function(){
                var se=$(this);
                var num=se.index();
                $(this).addClass("mover");
                cons.hide();
                cons.eq(num).show();
            });
            lis1.mouseout(function(){
               $(this).removeClass("mover");
            });
            /********************/

            $('.tab_title ul li').mouseover(function(){
                    $(this).addClass('on').siblings().removeClass('on');
                });
            $('#today-special').mouseover(function(){
                $('#goods-li-first').show();
                $('#goods-li-second').hide();
            });
            $('#latest-news').mouseover(function(){
                $('#goods-li-first').hide();
                $('#goods-li-second').show();
            });
            /***********************/
        });
            /*�������ʾ��ʼ*/
            var lis2 = $('.mc_right>ul>li');
            lis2.mouseover(function(){
                $(this).addClass("on").removeClass("off").siblings().removeClass("on").addClass("off");
            });
            /*�������ʾ����*/

            /*���������ֲ���ʼ*/
            var leader3 = 0, target3 = 0, index = 0;
            var conContainer = document.getElementById('conContainer');
            var hotC = document.getElementById('hotcircl');
            var hotCircls = document.getElementById('hotcircl').getElementsByTagName('li');
            var timer4 = null;
                function setTimer4(){
                    hotCircls[index].className = '';
                    leader3 -= 338;
                    index++;
                    if(leader3 < -676){
                        leader3 = 0;
                    }
                    if(index > 2) {
                        index = 0;
                    }
                    //console.log(index);

                    hotCircls[index].className = 'activeCir';
                    conContainer.style.left = leader3 + "px";
                }
               timer4 = setInterval(setTimer4,1000);

            for(var j = 0; j < hotCircls.length; j++){
                //��ȡ�±�
                hotCircls[j].index = j;
                hotCircls[j].onmousemove = function(){
                    clearInterval(timer4);
                    for(var i = 0; i < hotCircls.length; i++){
                        hotCircls[i].className = '';
                    }
                    this.className = 'activeCir';
                    conContainer.style.left = this.index * (-338) + "px";
                };
                hotCircls[j].onmouseout = function(){
                    clearInterval(timer4);
                    timer4 = setInterval(setTimer4,1000);

                }

            }

            /*���������ֲ�����*/


    /*��ʱ�ؼ۽���*/


    /*�������¼���ʼ*/
    var leader2 = 0;
    var target2 = 0;
    window.onscroll = function () {
        clearInterval(showBoxTimer);
        var quaiTop =document.getElementById('quaiTop');
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        target2= scrollTop + 200;

        //���߿ͷ���ʱ��
        var showBoxTimer = setInterval(function () {
            leader2 = leader2 + (target2 - leader2) / 25;
            showBox.style.top = leader2 + "px";
        },100);

        /*���ض�����ͷ*/
        if(scrollTop >= 410){
            quaiTop.style.display = "block";
        }else{
            quaiTop.style.display = "none";
        }
        //clearInterval(showBoxTimer);
        quaiTop.onclick = function(){
            /*var num = 1;
            var quaiTopTimer = setInterval(function () {
                num -= 0.1;
                if(num <= 0){
                    num = 0;
                }
                quaiTop.style.opacity = num;
                return num;
            },100);
            if(num == 0){
                quaiTop.style.display = "none";
            }*/
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            quaiTop.style.display = "none";
        }
    };

    /*�������¼�����*/


    /*��������ſ�ʼ*/
    var  news = $('#titleUl').children('li');
    var newText = document.getElementById('newText');
    var newContent = document.getElementById('newContent');


    news[0].onmouseover = function () {
            news[1].style.backgroundColor = '#fafafa';
            this.style.backgroundColor = '#ffffff';
            newContent.style.display = 'none';
            newText.style.display = 'block';

    };
    news[1].onmouseover = function () {
            news[0].style.backgroundColor = '#fafafa';
            this.style.backgroundColor = '#ffffff';
            newContent.style.display = 'block';
            newText.style.display = 'none';

    };


    /*��������Ž���*/



};
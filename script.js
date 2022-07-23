
set.onclick = function() {
    settings.style.display = 'flex';
}
ok.onclick = function() {
    settings.style.display = 'none';
}
d_n.onclick = function() {
    wrap.style.backgroundImage = 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01073865290819.5d61d475f0072.jpg)';
    set.style.backgroundImage = 'url(set.png)'
    h.style.color = 'black';
    road.src = 'main_day.png';
    set.style.width = '50px';
    set.style.height = '50px';
    set.style.marginRight = '0px';
}
d_n2.onclick = function() {
    wrap.style.backgroundImage = 'url(https://i.pinimg.com/originals/c3/c8/77/c3c877175a3491f097c02b8eba2416df.jpg)';
    wrap.style.backgroundSize = 'cover';
    h.style.color = 'white';
    set.style.backgroundImage = 'url(settings.png)';
    set.style.width = '40px';
    set.style.height = '40px';
    set.style.marginRight = '5px';
    road.src = 'main_night.png';
}
rain.onclick = function() {
    wrap.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/000/420/025/large_2x/vector-background-scene-with-rain-and-thunders.jpg)';
    h.style.color = 'white';
    set.style.backgroundImage = 'url(settings.png)'
    road.src = 'main_rain.png';
    set.style.width = '40px';
    set.style.height = '40px';
    set.style.marginRight = '5px';
}
change.onclick = function() {
    chose_car.style.display = 'flex';
}
btn_start.onclick = function() {
    chose_car.style.display = 'none';
}
let nofcar = 2;
box_car1.onclick = function() {
    car.src = 'car1.png';
    car_name.innerText = ' ' + ' Mercedes-Benz c63amg'
    car.style.transition = '0.5s';
    nofcar = 1;
}
box_car2.onclick = function() {
    car.src = 'car2.png';
    car_name.innerText =  ' ' + ' Mercedes-Maybach s550';
    car.style.transition = '0.5s';
    nofcar = 2;
}
box_car3.onclick = function() {
    car.src = 'car3.png';
    car_name.innerText =  ' ' + ' Mercedes-Benz e63amg';
    car.style.transition = '0.5s';
    nofcar = 3;
}
box_car4.onclick = function() {
    car.src = 'car4.png';
    car_name.innerText =  ' ' + ' Mercedes-Benz g550amg';
    car.style.transition = '0.5s';
    nofcar = 4;
}
let t_cur = 0;
let l_cur = 0;
s1.onclick = function() {
    t_cur = t_cur - 30;
    car.style.marginTop = t_cur + 'px';
    console.log(t_cur);
};
s4.onclick = function() {
    t_cur = t_cur + 30;
    car.style.marginTop = t_cur + 'px';
    console.log(t_cur);
};

s2.onclick = function() {
    l_cur = l_cur - 30;
    car.style.marginLeft = l_cur + 'px';
};
s3.onclick = function() {
    l_cur = l_cur + 30;
    car.style.marginLeft = l_cur + 'px';
};
let rv_cur = false;
rv.onclick = function() {
    if(rv_cur === false){
    car.style.transform = 'scale(-1,1)';
    rv_cur = true;
    }else{
        car.style.transform = 'scale(1,1)';
         rv_cur = false;
    }
};
let cl_cur = false;
car_light.onclick = function() {
    if(cl_cur === false) {
        if(nofcar === 1) {
            car.src = 'car1_night.png';
            cl_cur = true;
        } else if(nofcar === 2) {
            car.src = 'car2_night.png';
            cl_cur = true;
        } else if(nofcar === 3) {
            car.src = 'car3_night.png';
            cl_cur = true;
        } else if(nofcar === 4) {
            car.src = 'car4_night.png';
            cl_cur = true;
        }
    }else if(cl_cur === true) {
        if(nofcar === 1) {
            car.src = 'car1.png';
            cl_cur = false;
        } else if(nofcar === 2) {
            car.src = 'car2.png';
            cl_cur = false;
        } else if(nofcar === 3) {
            car.src = 'car3.png';
            cl_cur = false;
        } else if(nofcar === 4) {
            car.src = 'car4.png';
            cl_cur = false;
        };
        

    }
    
};
cp1.onclick = function() {
    b1.style.backgroundColor = '6DCBFF';
    b2.style.backgroundColor = '#fff';
    b3.style.backgroundColor = '#fff';
    b4.style.backgroundColor = '#fff';
    b5.style.backgroundColor = '#fff';



    // speed
    s1.onclick = function() {
        t_cur = t_cur - 30;
        car.style.marginTop = t_cur + 'px';
    };
    s4.onclick = function() {
        t_cur = t_cur + 30;
        car.style.marginTop = t_cur + 'px';
    };
    
    s2.onclick = function() {
        l_cur = l_cur - 30;
        car.style.marginLeft = l_cur + 'px';
    };
    s3.onclick = function() {
        l_cur = l_cur + 30;
        car.style.marginLeft = l_cur + 'px';
    };
};
cp2.onclick = function() {
    b1.style.backgroundColor = '6DCBFF';
    b2.style.backgroundColor = '#00CA14';
    b3.style.backgroundColor = '#fff';
    b4.style.backgroundColor = '#fff';
    b5.style.backgroundColor = '#fff';

    // speed
    s1.onclick = function() {
        t_cur = t_cur - 30;
        car.style.marginTop = t_cur + 'px';
    };
    s4.onclick = function() {
        t_cur = t_cur + 30;
        car.style.marginTop = t_cur + 'px';
    };
    
    s2.onclick = function() {
        l_cur = l_cur - 40;
        car.style.marginLeft = l_cur + 'px';
    };
    s3.onclick = function() {
        l_cur = l_cur + 40;
        car.style.marginLeft = l_cur + 'px';
    };
};
cp3.onclick = function() {
    b1.style.backgroundColor = '6DCBFF';
    b2.style.backgroundColor = '#00CA14';
    b3.style.backgroundColor = '#FF9900';
    b4.style.backgroundColor = '#fff';
    b5.style.backgroundColor = '#fff';

    // speed
    s1.onclick = function() {
        t_cur = t_cur - 30;
        car.style.marginTop = t_cur + 'px';
    };
    s4.onclick = function() {
        t_cur = t_cur + 30;
        car.style.marginTop = t_cur + 'px';
    };
    
    s2.onclick = function() {
        l_cur = l_cur - 50;
        car.style.marginLeft = l_cur + 'px';
    };
    s3.onclick = function() {
        l_cur = l_cur + 50;
        car.style.marginLeft = l_cur + 'px';
    };
};
cp4.onclick = function() {
    b1.style.backgroundColor = '6DCBFF';
    b2.style.backgroundColor = '#00CA14';
    b3.style.backgroundColor = '#FF9900';
    b4.style.backgroundColor = '#FF0000';
    b5.style.backgroundColor = '#fff';

    // speed
    s1.onclick = function() {
        t_cur = t_cur - 30;
        car.style.marginTop = t_cur + 'px';
    };
    s4.onclick = function() {
        t_cur = t_cur + 30;
        car.style.marginTop = t_cur + 'px';
    };
    
    s2.onclick = function() {
        l_cur = l_cur - 70;
        car.style.marginLeft = l_cur + 'px';
    };
    s3.onclick = function() {
        l_cur = l_cur + 70;
        car.style.marginLeft = l_cur + 'px';
    };
};
cp5.onclick = function() {
    b1.style.backgroundColor = '6DCBFF';
    b2.style.backgroundColor = '#00CA14';
    b3.style.backgroundColor = '#FF9900';
    b4.style.backgroundColor = '#FF0000';
    b5.style.backgroundColor = '#8B0000';
    
    // speed
    
    s1.onclick = function() {
        t_cur = t_cur - 30;
        car.style.marginTop = t_cur + 'px';
    };
    s4.onclick = function() {
        t_cur = t_cur + 30;
        car.style.marginTop = t_cur + 'px';
    };
    
    s2.onclick = function() {
        l_cur = l_cur - 90;
        car.style.marginLeft = l_cur + 'px';
    };
    s3.onclick = function() {
        l_cur = l_cur + 90;
        car.style.marginLeft = l_cur + 'px';
    };
};

let a_cur = false;
alertc.onclick = function() {
    if(a_cur === false) {
        if(nofcar === 1) {
            car.src = 'car1_a.png';
            a_cur = true;
        } else if(nofcar === 2) {
            car.src = 'car2_a.png';
            a_cur = true;
        } else if(nofcar === 3) {
            car.src = 'car3_a.png';
            a_cur = true;
        } else if(nofcar === 4) {
            car.src = 'car4_a.png';
            a_cur = true;
        }
    }else if(a_cur === true) {
        if(nofcar === 1) {
            car.src = 'car1.png';
            a_cur = false;
        } else if(nofcar === 2) {
            car.src = 'car2.png';
            a_cur = false;
        } else if(nofcar === 3) {
            car.src = 'car3.png';
            a_cur = false;
        } else if(nofcar === 4) {
            car.src = 'car4.png';
            a_cur = false;
        };
        

    }
    
};







// -120 top 60 bot





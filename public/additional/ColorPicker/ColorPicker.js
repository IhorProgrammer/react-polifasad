class EventOM{
    constructor() {
        this._events = {};
    }

    addEventListener(name, func) {
        if (!this._events[name]) {
            this._events[name] = [];
        }

        this._events[name].push(func);
    }

    removeEventListener(name, func) {
        if (this._events[name]) {
            this._events[name] = this._events[name].filter(handler => handler !== func);
        }
    }

    beginEvent(name) {
        if (this._events[name]) {
            this._events[name].forEach(func => func());
        }
    }

    beginEventWidthParameters(name, parameters) {
        if (this._events[name]) {
            this._events[name].forEach(func => func(parameters));
        }
    }
} 

class ColorPicker{
    _root = null;
    _mainCircle = null;
    selectedColor = "fff";
    event = new EventOM();

    constructor(root, mainCircle) {
        if( !root ) throw "root is null";
        if( !mainCircle ) throw "mainCircle is null";
        this._root = root;
        this._mainCircle = mainCircle;
        this.cheakColorEvents(this._root);
    }
    createCircles(shag, colorPickerArray) {
        if( !colorPickerArray ) throw "colors is empty";
        if ( !Array.isArray(colorPickerArray) ) throw "colors is not array";
        const length = colorPickerArray.length;
        let i = 0;
        let styles = window.getComputedStyle(this._root);
        for(i = 0; i < length; i++) {

            const circleColors = colorPickerArray[i];
            if( !circleColors ) throw "circle is empty";
            if ( !Array.isArray(circleColors) ) throw "circle is not array";        
            this._root.appendChild(this.createCircle( parseInt(styles.width) - shag * i, circleColors));        

        }
    }
    createCircle(widthHeight, colors) {
        if( !colors ) throw "colors empty";
        if( colors.length < 4 ) throw "colors < 4";

        const circle = document.createElement('div');
        circle.style.width = circle.style.height = widthHeight + "px";
        circle.classList.add("circle");

        const number_colors = colors.length;
        const skew = 90 - 360 / number_colors - 1;
        const rotate = 360 / number_colors;
        for (let i = 0; i < number_colors; i++) {
            const colorPicker = document.createElement('div');
            colorPicker.classList.add("sector");
            colorPicker.style.transform = `rotate(${rotate * i}deg) skew(${skew}deg)`;
            colorPicker.style.boxShadow = `#${colors[i]} 5px 0px 20px -10px`;
            colorPicker.style.backgroundColor = "#"+colors[i];
            colorPicker.id = colors[i];
            circle.appendChild(colorPicker)
        }
        return circle;
    }
    cheakColorEvents(target){
        let isClick = false;
        target.addEventListener('mouseover', (e) => { if ( !isClick ) this.checkColor(e) });
        target.addEventListener('click', (e) => { 
            isClick = true; this.checkColor(e); 
            this.event.beginEventWidthParameters("click-color", event); 
        });
    }
    checkColor(event) {
        let selectedColor = event.target.id;
        this._mainCircle.style.backgroundColor = "#" + selectedColor;
        this.selectedColor = selectedColor;
    }
}

function viewColorFullScreen(colorPicker, triger, bgn) {
    let toogleTriger = true;
    triger.addEventListener("click", () => {
        if(toogleTriger){
            bgn.style.backgroundColor = "#" + colorPicker.selectedColor;
        } 
        else {
            bgn.style.backgroundColor = "";
        }
        bgn.classList.toggle("checkColor");
        toogleTriger = !toogleTriger;
    })
}

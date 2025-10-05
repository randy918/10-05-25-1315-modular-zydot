//_        ALERT________________________________
//!        ALERT________________________________
//~        ALERT________________________________
//?        NOTICE________________________________
//>        NOTICE________________________________
//<        NOTICE________________________________
//^        NOTICE________________________________
//$        NOTICE________________________________
//-        NOTICE________________________________

//?        RANDOM_________________________________

document.addEventListener("DOMContentLoaded", function () {
    function random(min, max) {
        // 2.0, accepts single value for 1-x
        if (max === undefined) {
            max = min;
            min = 1;
        }
        const randomNumber =
            min - 1 + Math.ceil(Math.random() * (max + 1 - min));
        return randomNumber;
    }

    //<        COLOR CLASS_________________________

    class Color {
        constructor(name, kind, amt = 1) {
            this.name = name;
            this.kind = kind;
            this.amt = amt;
            this.rRGB = 0;
            this.gRGB = 0;
            this.bRGB = 0;
            this.hHSL = 0;
            this.sHSL = 0;
            this.lHSL = 0;
            this.hHSV = 0;
            this.sHSV = 0;
            this.bHSV = 0;
            this.rgbColorCSS = "";
            this.hslColorCSS = "";
            this.hsbColorCSS = "";
            this.elements = null;
            this.rRGBArray = [];
            this.gRGBArray = [];
            this.bRGBArray = [];
        }

        //^        SERVING METHODS________________________

        assignRGBWords() {
            this.rgbColorCSS = `rgb(${this.rRGB}, ${this.gRGB}, ${this.bRGB})`;
        }

        assignHSLWords() {
            this.hslColorCSS = `hsl(${this.hHSL}, ${this.sHSL}%, ${this.lHSL}%)`;
        }

        assignCSSHTML() {
            this.elements = document.querySelectorAll(`.${this.name}`);

            if (this.elements.length === 0) {
                console.warn(
                    `Color class: No elements found with class ".${this.name}".`
                );
                return; // Exit if no elements to style
            }

            switch (this.kind) {
                case "both":
                    this.elements.forEach((element) => {
                        element.style.color = this.rgbColorCSS;
                        element.textContent = this.rgbColorCSS;
                    });
                    break;

                case "content":
                    this.elements.forEach((element) => {
                        element.textContent = this.rgbColorCSS;
                    });
                    break;

                case "background":
                    this.elements.forEach((element) => {
                        element.style.backgroundColor = this.rgbColorCSS;
                    });
                    break;

                case "text":
                    this.elements.forEach((element) => {
                        element.style.color = this.rgbColorCSS;
                    });
                    break;

                case "contrast":
                    this.elements.forEach((element) => {
                        element.style.color = this.getContrastingTextColor(
                            this.rgbColorCSS
                        );
                        element.textContent = this.rgbColorCSS;
                        element.style.backgroundColor = this.rgbColorCSS;
                    });
                    break;
            }
        }

        getContrastingTextColor(rgbColor) {
            const rgb = rgbColor.match(/\d+/g).map(Number);
            const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
            return luminance > 149 ? "black" : "white";
        }

        rgbToHSL() {
            let r = this.rRGB / 255;
            let g = this.gRGB / 255;
            let b = this.bRGB / 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);

            let h = 0,
                s = 0,
                l = (max + min) / 2;

            if (max === min) {
                h = s = 0; // achromatic
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }

            this.hHSL = Math.round(h * 360);
            this.sHSL = Math.round(s * 100);
            this.lHSL = Math.round(l * 100);
            this.assignHSLWords(); // Correctly call the method on the instance
            return this.hslColorCSS;
        }

        hslToRGB() {
            // Converts the instance's HSL values to RGB
            let h = this.hHSL;
            let s = this.sHSL / 100;
            let l = this.lHSL / 100;
            let r, g, b;

            if (s === 0) {
                r = g = b = l; // achromatic
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h / 360 + 1 / 3);
                g = hue2rgb(p, q, h / 360);
                b = hue2rgb(p, q, h / 360 - 1 / 3);
            }

            this.rRGB = Math.round(r * 255);
            this.gRGB = Math.round(g * 255);
            this.bRGB = Math.round(b * 255);
            this.assignRGBWords();
        }

        hsvToRGB() {
            let h = this.hHSV;
            let s = this.sHSV / 100;
            let v = this.bHSV / 100;
            let r, g, b;

            // The formula for conversion
            let i = Math.floor(h / 60);
            let f = h / 60 - i;
            let p = v * (1 - s);
            let q = v * (1 - f * s);
            let t = v * (1 - (1 - f) * s);

            switch (i % 6) {
                case 0:
                    (r = v), (g = t), (b = p);
                    break;
                case 1:
                    (r = q), (g = v), (b = p);
                    break;
                case 2:
                    (r = p), (g = v), (b = t);
                    break;
                case 3:
                    (r = p), (g = q), (b = v);
                    break;
                case 4:
                    (r = t), (g = p), (b = v);
                    break;
                case 5:
                    (r = v), (g = p), (b = q);
                    break;
            }

            // If saturation is 0, the color is a shade of grey
            if (s === 0) {
                r = g = b = v;
            }

            // Set the RGB properties on the instance
            this.rRGB = Math.round(r * 255);
            this.gRGB = Math.round(g * 255);
            this.bRGB = Math.round(b * 255);
            this.assignRGBWords();
        }

        //^        MAIN METHODS_____________________
        //<        TEST67 BRIGHT_______________

        bright() {
            this.rRGB = random(86, 255);
            this.gRGB = random(86, 255);
            this.bRGB = random(86, 255);
            this.assignRGBWords();
            this.assignCSSHTML();
            return this.rgbColorCSS;
        }
        //<        TEST67 DARKER_______________

        darker() {
            this.rRGB = random(0, 255);
            this.gRGB = random(0, 100);
            this.bRGB = random(0, 100);
            this.assignRGBWords();
            this.assignCSSHTML();
            return this.rgbColorCSS;
        }

        //<        TEST68 VIVID______________________

        vivid() {
            this.hHSL = random(0, 360);
            this.sHSL = random(80, 100);
            this.lHSL = random(40, 60);

            this.hslToRGB();
            this.assignRGBWords();
            this.assignCSSHTML();
            return this.rgbColorCSS;
        }

        //<        TEST69 VIVID TO EACH______________

        vividMulti() {
            for (let i = 0; i < this.amt; i++) {
                this.hHSL = random(0, 360);
                this.sHSL = random(80, 100);
                this.lHSL = random(40, 60);

                this.hslToRGB();
                this.assignRGBWords();
                this.assignCSSHTML();
            }
        }
    }

    //<?       SCREEN USE_____________________________
    //<        TEST67 BRIGHT__________________________

    // "content" "color" "background" "contrast" or "both"
    const mycolor = new Color("test67", "contrast", 1);
    mycolor.bright();

    //<        TEST68 VIVID____________________________

    const mycolor2 = new Color("test68", "contrast", 1);
    mycolor2.vivid();
    // console.log(mycolor.vivid());

    //<        TEST70 VIVID____________________________

    const mycolor4 = new Color("test70", "contrast", 1);
    mycolor4.vivid();

    //<        TEST69 MULTI VIVID______________________

    const mycolor3 = new Color("test69", "contrast", 1);
    mycolor3.vividMulti();

    //<        TEST h1Dark______________________

    const mycolor5 = new Color("h1Dark", "text", 1);
    mycolor5.darker();
});

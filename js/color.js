// import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

// import { getYear } from "./myfunctions.js";

document.addEventListener("DOMContentLoaded", function () {
    var r1 = 0,
        g1 = 0,
        b1 = 0,
        h1 = 0,
        s1 = 0,
        l1 = 0;

    const reloadButton = document.getElementById("reload-button");
    if (reloadButton) {
        reloadButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the link from navigating
            location.reload();
        });
    }

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

    //! ████████████████████████████████████ COLOR 2

    function getRgb(r, g, b) {
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        return rgbColor;
    }

    function getHsl(h, s, l) {
        const rgbColor = `hsl(${h}, ${s}%, ${l}%)`;
        return hslColor;
    }

    // Opposite of getRgb: parses an "rgb()" string into its components
    function parseRgb(rgbString) {
        const [r, g, b] = rgbString.match(/\d+/g).map(Number);
        return { r, g, b };
    }

    // Opposite of getHsl: parses an "hsl()" string into its components
    function parseHsl(hslString) {
        const [h, s, l] = hslString.match(/\d+/g).map(Number);
        return { h, s, l };
    }

    function getBrightRGB() {
        const r = random(86, 255);
        const g = random(86, 255);
        const b = random(86, 255);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        if (isTooGray(r, g, b)) {
            return getBrightRGB(); // Recursively call until a bright color is found
        }
        const h1Elements3 = document.querySelectorAll(".container__title");
        h1Elements3.forEach((h1) => {
            h1.style.color = rgbBright;
        });
        return rgbColor;
    }

    function getBrightRGB2() {
        const r = random(86, 255);
        const g = random(86, 255);
        const b = random(86, 255);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        if (isTooGray(r, g, b)) {
            return getBrightRGB(); // Recursively call until a bright color is found
        }
        return rgbColor;
    }

    function getVividHSL() {
        const h = random(0, 360);
        const s = random(80, 100);
        const l = random(40, 60);
        h1 = h;
        s1 = s;
        l1 = l;
        const h2Test = `hsl(${h}, ${s}%, ${l}%)`;
        console.log(h2Test);
        const h1Elements2 = document.querySelectorAll(".h2Test");
        h1Elements2.forEach((h2) => {
            h2.style.backgroundColor = h2Test;
            
        });
        return h2Test;
        // if (isTooGray(r1, g1, b1)) {
        //     return getBrightRGB(); // Recursively call until a bright color is found
        return hslColor;
    }

    function getVividHSL2() {
        h1 = (h1 + 180) % 360;
                const h3Test = `hsl(${h1}, ${s1}%, ${l1}%)`;

        console.log(h1);
        const h1Elements2 = document.querySelectorAll(".h3Test");
        h1Elements2.forEach((h2) => {
            h2.style.backgroundColor = h3Test;
            h2.textContent = h3Test;
        });
        return h3Test;
        // if (isTooGray(r1, g1, b1)) {
        //     return getBrightRGB(); // Recursively call until a bright color is found
        return hslColor;
    }

    function getVividHSLDarker() {
        const h = random(0, 360);
        const s = random(80, 100);
        const l = random(20, 40);
        const h1Dark = `hsl(${h}, ${s}%, ${l}%)`;
        console.log(h1Dark);
        const h1Elements5 = document.querySelectorAll(".h1Dark");
        h1Elements5.forEach((h2) => {
            h2.style.color = h1Dark;
        });
        return h1Dark;
    }

    function isTooGray(r, g, b, threshold = 20) {
        // const max = Math.max(r, g, b);
        // const min = Math.min(r, g, b);
        // return max - min <= threshold;
    }

    function rgbToHsl(r, g, b) {
        r *= 255;
        g *= 255;
        b *= 255;

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
            h = h / 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    }

    function rgbToHsb(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h = 0,
            s = 0,
            v = max; // In HSB/HSV, Value/Brightness is the max component

        const d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max !== min) {
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
            h = h / 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            b: Math.round(v * 100),
        };
    }

    function hslToRgb(h, s, l) {
        let r, g, b;

        s /= 100;
        l /= 100;

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

        return `rgb(${r}, ${g}, ${b})`;
    }

    function getContrastingTextColor(rgbColor) {
        const rgb = rgbColor.match(/\d+/g).map(Number);
        const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
        return luminance > 149 ? "black" : "white";
    }

    //! █████████████ h1Test getBrightRGB BACKGROUND

    const h1Test = getBrightRGB();

    const textColor = getContrastingTextColor(h1Test);

    const h1Elements1 = document.querySelectorAll(".rgbBright");
    h1Elements1.forEach((h1) => {
        h1.style.backgroundColor = h1Test;
        h1.style.color = getContrastingTextColor(h1Test);

        h1.textContent = h1Test;
    });

    //! █████████████ rgbBright getBrightRGB
    const rgbBright = getBrightRGB();
    console.log(rgbBright);

    //! ███████████████████████████ h2Test
    getVividHSL();
    getVividHSL2();

    //! ███████████████████████████ h1Dark
    getVividHSLDarker();

    //! █████████████████████████████ rgb Set
    const rgbExample = getRgb(150, 150, 150);

    const elements4 = document.querySelectorAll(".rgbExample");
    elements4.forEach((element) => {
        element.style.backgroundColor = rgbExample;
        element.style.color = getContrastingTextColor(rgbExample);

        element.textContent = rgbExample;
    });
});

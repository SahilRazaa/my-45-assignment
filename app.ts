let personName : string ="Sahil raza"
console.log("lowecase:", personName.toLowerCase());

// uppercase
console.log("uppercase:",personName.toLocaleUpperCase());

// titlecase

console.log("titlecase:",personName.replace(/\bw/g,c =>c.toUpperCase())); 

var personName = "Sahil raza";
console.log("lowecase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

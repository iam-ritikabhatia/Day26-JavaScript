// Math.asinh() method is used to find the inverse hyperbolic cosine of a number
// make sure that the number is >= 1
// formula of asinh = sinh^(-1) = ln( x + sqrt( (x^2) + 1 ) )  and x belongs to R


let a = 67;
let b = Math.asinh(a);
console.log(b); // output 4.897784103607189

console.log(Math.asinh(-1)); // Output is NaN

console.log(Math.asinh(1)); // Output is 0

/************************************atan.html******************************************/
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Math.atan() method</title>
  </head>
  <body>
    <h1>
      Note: we are using html because in node.js, prompt() function will not
      work
    </h1>
    <h2>
      Math.atan() method is used to find the inverse tangent of opposite,
      adjacent (in radians) in a right-angle triangle
    </h2>
    <div
      class="calculation"
      style="
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        justify-content: space-between;
      "
    >
      <input type="text" placeholder="Value of opposite" id="opposite" />
      <input type="text" placeholder="Value of adjacent" id="adjacent" />
      <button onclick="angleInradian()">Calculate(in radians)</button>
      <button onclick="angleIndegree()">Calculate(in degrees)</button>
      <h4 id="RadianOutput"></h4>
      <h4 id="DegreeOutput"></h4>
    </div>
    <script>
      const opposite = document.getElementById("opposite");
      const adjacent = document.getElementById("adjacent");
      const Inradian = document.getElementById("RadianOutput");
      const Indegree = document.getElementById("DegreeOutput");
      let outputRadian;

      const angleInradian = function () {
        const oppositeValue = opposite.value; // value property is used for extracting the value of input
        const adjacentValue = adjacent.value;
        outputRadian = Math.atan(oppositeValue / adjacentValue);

        Inradian.innerHTML = `Angle in radian is ${outputRadian}`;
      };

      const angleIndegree = function () {
        const outputIndegree = (180 / Math.PI) * outputRadian;

        if (outputRadian !== undefined) {
          // this will insure that first radians is calculated
          Indegree.innerHTML = `Angle in degree is ${outputIndegree}`;
        } else {
          alert("Calculate radians first");
        }
      };
    </script>
  </body>
</html>
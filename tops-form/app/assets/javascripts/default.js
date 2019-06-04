function fillData(){

    var courses =  $('#courses-label').data('courses');
    var keywords =  $('#keywords-label').data('keywords');
    var cuts =  $('#cuts-label').data('cuts');

    if(courses != undefined) {
        $('#courses').dropdown('set selected',courses);
    }
    if(keywords != undefined) {
        $('#keywords').dropdown('set selected',keywords);
    }
    if(cuts != undefined) {
        var i = 0;
        for(i; i < cuts.length; ++i){
            addCut(cuts[i]);
        }
        console.log(cuts)
        $('#cuts').dropdown('set selected',cuts);
    }

}

function addCut(val){
    var cut = val;
    var option = "<option value=\""+cut+"\">"+cut+"</option>";
    $('#cuts').append(option);
}

function update_ui(){
    $('.dropdown').dropdown();
}

$( document ).ready(function() {



    $('.edit')
        .popup({
            on: 'hover'
        })
    ;

    $('.ui.embed').embed();



    $('.menu .item').tab();

    $('.dropdown').dropdown();

    $('#addField').click(function(){
        var x =  $('#keywords').children("option:selected").val()
        var keywords = [];
        $.each($("#keywords option:selected"), function(){
            keywords.push($(this).val());
        });
        var html = "<div class=\"field\">" +
            "         <div class=\"ui action input\">" +
            " <input type=\"text\" placeholder=\"Ex: 08:23\" name=\"cut\">" +
            "<select id=\"mfield\" multiple=\"multiple\" class=\"ui fluid search dropdown\" name=\"video[keywords][]\"><option value=\"Absolute\">Absolute</option>" +
            "<option value=\"Absolute Convergence\">Absolute Convergence</option>" +
            "<option value=\"Absolute Maximum\">Absolute Maximum</option>" +
            "<option value=\"Absolute Minimum\">Absolute Minimum</option>" +
            "<option value=\"Absolutely Convergent\">Absolutely Convergent</option>" +
            "<option value=\"Acceleration\">Acceleration</option>" +
            "<option value=\"Algorithm\">Algorithm</option>" +
            "<option value=\"Alternating Series\">Alternating Series</option>" +
            "<option value=\"alternating series estimation theorem\">alternating series estimation theorem</option>" +
            "<option value=\"Alternating Series Remainder\">Alternating Series Remainder</option>" +
            "<option value=\"Alternating Series Test\">Alternating Series Test</option>" +
            "<option value=\"Analytic Methods\">Analytic Methods</option>" +
            "<option value=\"Annulus\">Annulus</option>" +
            "<option value=\"Antiderivative of a Function\">Antiderivative of a Function</option>" +
            "<option value=\"antidifferentiation\">antidifferentiation</option>" +
            "<option value=\"Approximation by Differentials\">Approximation by Differentials</option>" +
            "<option value=\"ARC\">ARC</option>" +
            "<option value=\"Arc Length of a Curve\">Arc Length of a Curve</option>" +
            "<option value=\"arcsine\">arcsine</option>" +
            "<option value=\"area\">area</option>" +
            "<option value=\"area  under velocity function\">area  under velocity function</option>" +
            "<option value=\"Area between Curves\">Area between Curves</option>" +
            "<option value=\"Area of an Ellipse\">Area of an Ellipse</option>" +
            "<option value=\"Area under a Curve\">Area under a Curve</option>" +
            "<option value=\"Area Using Parametric Equations\">Area Using Parametric Equations</option>" +
            "<option value=\"Area Using Polar Coordinates\">Area Using Polar Coordinates</option>" +
            "<option value=\"Asymptote\">Asymptote</option>" +
            "<option value=\"autonomous\">autonomous</option>" +
            "<option value=\"Average Rate of Change\">Average Rate of Change</option>" +
            "<option value=\"Average Value of a Function\">Average Value of a Function</option>" +
            "<option value=\"average velocity\">average velocity</option>" +
            "<option value=\"Axis of Rotation\">Axis of Rotation</option>" +
            "<option value=\"Boundary Value Problem\">Boundary Value Problem</option>" +
            "<option value=\"Bounded Function\">Bounded Function</option>" +
            "<option value=\"Bounded Sequence\">Bounded Sequence</option>" +
            "<option value=\"Bounds of Integration\">Bounds of Integration</option>" +
            "<option value=\"Calculus\">Calculus</option>" +
            "<option value=\"carrying capacity\">carrying capacity</option>" +
            "<option value=\"Cartesian Form\">Cartesian Form</option>" +
            "<option value=\"Cavalieri’s Principle\">Cavalieri’s Principle</option>" +
            "<option value=\"Center of Mass Formula\">Center of Mass Formula</option>" +
            "<option value=\"central difference\">central difference</option>" +
            "<option value=\"Centroid\">Centroid</option>" +
            "<option value=\"Chain Rule\">Chain Rule</option>" +
            "<option value=\"codomain\">codomain</option>" +
            "<option value=\"common ratio\">common ratio</option>" +
            "<option value=\"Comparison Test\">Comparison Test</option>" +
            "<option value=\"composition\">composition</option>" +
            "<option value=\"Concave\">Concave</option>" +
            "<option value=\"Concave Down\">Concave Down</option>" +
            "<option value=\"Concave Up\">Concave Up</option>" +
            "<option value=\"concavity\">concavity</option>" +
            "<option value=\"Conditional Convergence\">Conditional Convergence</option>" +
            "<option value=\"constant function\">constant function</option>" +
            "<option value=\"constant multiple rule for definite integral\">constant multiple rule for definite integral</option>" +
            "<option value=\"Constant Term\">Constant Term</option>" +
            "<option value=\"Continued Sum\">Continued Sum</option>" +
            "<option value=\"continuous\">continuous</option>" +
            "<option value=\"continuous at x = a\">continuous at x = a</option>" +
            "<option value=\"Continuous Function\">Continuous Function</option>" +
            "<option value=\"Continuously Differentiable Function\">Continuously Differentiable Function</option>" +
            "<option value=\"Converge\">Converge</option>" +
            "<option value=\"Converge Absolutely\">Converge Absolutely</option>" +
            "<option value=\"Converge Conditionally\">Converge Conditionally</option>" +
            "<option value=\"convergence\">convergence</option>" +
            "<option value=\"Convergence Tests\">Convergence Tests</option>" +
            "<option value=\"Convergent Sequence\">Convergent Sequence</option>" +
            "<option value=\"Convergent Series\">Convergent Series</option>" +
            "<option value=\"converges\">converges</option>" +
            "<option value=\"cosecant\">cosecant</option>" +
            "<option value=\"cosine\">cosine</option>" +
            "<option value=\"cotangent\">cotangent</option>" +
            "<option value=\"Critical Number\">Critical Number</option>" +
            "<option value=\"Critical Point\">Critical Point</option>" +
            "<option value=\"Critical Value\">Critical Value</option>" +
            "<option value=\"Curly d\">Curly d</option>" +
            "<option value=\"Curve\">Curve</option>" +
            "<option value=\"Curve Sketching\">Curve Sketching</option>" +
            "<option value=\"Cusp\">Cusp</option>" +
            "<option value=\"Cylindrical Shell Method\">Cylindrical Shell Method</option>" +
            "<option value=\"Decreasing Function\">Decreasing Function</option>" +
            "<option value=\"Definite Integral\">Definite Integral</option>" +
            "<option value=\"Definite Integral Rules\">Definite Integral Rules</option>" +
            "<option value=\"definition\">definition</option>" +
            "<option value=\"definition of definite integral\">definition of definite integral</option>" +
            "<option value=\"Degenerate\">Degenerate</option>" +
            "<option value=\"Del Operator\">Del Operator</option>" +
            "<option value=\"Deleted Neighborhood\">Deleted Neighborhood</option>" +
            "<option value=\"Delta (Δ δ)\">Delta (Δ δ)</option>" +
            "<option value=\"density\">density</option>" +
            "<option value=\"Derivative\">Derivative</option>" +
            "<option value=\"Derivative of a Power Series\">Derivative of a Power Series</option>" +
            "<option value=\"Derivative Rules\">Derivative Rules</option>" +
            "<option value=\"Difference Quotient\">Difference Quotient</option>" +
            "<option value=\"Differentiable\">Differentiable</option>" +
            "<option value=\"Differential\">Differential</option>" +
            "<option value=\"Differential Equation\">Differential Equation</option>" +
            "<option value=\"Differentiation\">Differentiation</option>" +
            "<option value=\"Differentiation Rules\">Differentiation Rules</option>" +
            "<option value=\"Discontinuity\">Discontinuity</option>" +
            "<option value=\"Discontinuous Function\">Discontinuous Function</option>" +
            "<option value=\"Disk\">Disk</option>" +
            "<option value=\"Disk Method\">Disk Method</option>" +
            "<option value=\"Distance from a Point to a Line\">Distance from a Point to a Line</option>" +
            "<option value=\"distance traveled\">distance traveled</option>" +
            "<option value=\"Diverge\">Diverge</option>" +
            "<option value=\"Divergence Test\">Divergence Test</option>" +
            "<option value=\"Divergent Sequence\">Divergent Sequence</option>" +
            "<option value=\"Divergent Series\">Divergent Series</option>" +
            "<option value=\"diverges\">diverges</option>" +
            "<option value=\"domain\">domain</option>" +
            "<option value=\"Ellipsoid\">Ellipsoid</option>" +
            "<option value=\"End Behavior\">End Behavior</option>" +
            "<option value=\"Epsilon (Ε ε)\">Epsilon (Ε ε)</option>" +
            "<option value=\"equation\">equation</option>" +
            "<option value=\"equilibrium solution\">equilibrium solution</option>" +
            "<option value=\"error function\">error function</option>" +
            "<option value=\"Essential Discontinuity\">Essential Discontinuity</option>" +
            "<option value=\"Euler’s Method\">Euler’s Method</option>" +
            "<option value=\"evaluate\">evaluate</option>" +
            "<option value=\"Explicit Differentiation\">Explicit Differentiation</option>" +
            "<option value=\"Explicit Function\">Explicit Function</option>" +
            "<option value=\"Exponential Decay\">Exponential Decay</option>" +
            "<option value=\"exponential function\">exponential function</option>" +
            "<option value=\"Exponential Growth\">Exponential Growth</option>" +
            "<option value=\"Exponential Model\">Exponential Model</option>" +
            "<option value=\"extreme value\">extreme value</option>" +
            "<option value=\"Extreme Value Theorem\">Extreme Value Theorem</option>" +
            "<option value=\"Extreme Values of a Polynomial\">Extreme Values of a Polynomial</option>" +
            "<option value=\"Extremum\">Extremum</option>" +
            "<option value=\"Factorial\">Factorial</option>" +
            "<option value=\"Falling Bodies\">Falling Bodies</option>" +
            "<option value=\"Fibonacci sequence\">Fibonacci sequence</option>" +
            "<option value=\"First Derivative\">First Derivative</option>" +
            "<option value=\"First Derivative Test\">First Derivative Test</option>" +
            "<option value=\"first order\">first order</option>" +
            "<option value=\"First Order Differential Equation\">First Order Differential Equation</option>" +
            "<option value=\"Fixed\">Fixed</option>" +
            "<option value=\"foot-pound\">foot-pound</option>" +
            "<option value=\"forward difference\">forward difference</option>" +
            "<option value=\"FTC\">FTC</option>" +
            "<option value=\"function\">function</option>" +
            "<option value=\"Function Operations\">Function Operations</option>" +
            "<option value=\"function-derivative pair\">function-derivative pair</option>" +
            "<option value=\"Fundamental Theorem of Calculus\">Fundamental Theorem of Calculus</option>" +
            "<option value=\"fundamental trigonometric identity\">fundamental trigonometric identity</option>" +
            "<option value=\"general antiderivative\">general antiderivative</option>" +
            "<option value=\"geometric\">geometric</option>" +
            "<option value=\"geometric series\">geometric series</option>" +
            "<option value=\"geometric sum\">geometric sum</option>" +
            "<option value=\"GLB\">GLB</option>" +
            "<option value=\"global\">global</option>" +
            "<option value=\"Global Maximum\">Global Maximum</option>" +
            "<option value=\"Global Minimum\">Global Minimum</option>" +
            "<option value=\"Golden Spiral\">Golden Spiral</option>" +
            "<option value=\"graph of antiderivative\">graph of antiderivative</option>" +
            "<option value=\"Graphic Methods\">Graphic Methods</option>" +
            "<option value=\"Greatest Lower Bound\">Greatest Lower Bound</option>" +
            "<option value=\"Greek Alphabet\">Greek Alphabet</option>" +
            "<option value=\"Harmonic Progression\">Harmonic Progression</option>" +
            "<option value=\"Harmonic Sequence\">Harmonic Sequence</option>" +
            "<option value=\"Harmonic Series\">Harmonic Series</option>" +
            "<option value=\"Helix\">Helix</option>" +
            "<option value=\"Higher Derivative\">Higher Derivative</option>" +
            "<option value=\"Hole\">Hole</option>" +
            "<option value=\"Homogeneous System of Equations\">Homogeneous System of Equations</option>" +
            "<option value=\"Hooke’s Law\">Hooke’s Law</option>" +
            "<option value=\"horizontal asymptote\">horizontal asymptote</option>" +
            "<option value=\"Hyperbolic Trig\">Hyperbolic Trig</option>" +
            "<option value=\"Hyperbolic Trigonometry\">Hyperbolic Trigonometry</option>" +
            "<option value=\"Identity Function\">Identity Function</option>" +
            "<option value=\"Implicit Differentiation\">Implicit Differentiation</option>" +
            "<option value=\"implicit function\">implicit function</option>" +
            "<option value=\"Implicit Function or Relation\">Implicit Function or Relation</option>" +
            "<option value=\"Improper Integral\">Improper Integral</option>" +
            "<option value=\"increasing\">increasing</option>" +
            "<option value=\"Increasing Function\">Increasing Function</option>" +
            "<option value=\"Indefinite Integral\">Indefinite Integral</option>" +
            "<option value=\"Indefinite Integral Rules\">Indefinite Integral Rules</option>" +
            "<option value=\"indeterminate\">indeterminate</option>" +
            "<option value=\"Indeterminate Expression\">Indeterminate Expression</option>" +
            "<option value=\"Infinite Geometric Series\">Infinite Geometric Series</option>" +
            "<option value=\"Infinite Limit\">Infinite Limit</option>" +
            "<option value=\"Infinite Series\">Infinite Series</option>" +
            "<option value=\"Infinitesimal\">Infinitesimal</option>" +
            "<option value=\"Infinity\">Infinity</option>" +
            "<option value=\"Inflection Point\">Inflection Point</option>" +
            "<option value=\"initial condition\">initial condition</option>" +
            "<option value=\"Initial Value Problem\">Initial Value Problem</option>" +
            "<option value=\"Instantaneous Acceleration\">Instantaneous Acceleration</option>" +
            "<option value=\"Instantaneous Rate of Change\">Instantaneous Rate of Change</option>" +
            "<option value=\"Instantaneous Velocity\">Instantaneous Velocity</option>" +
            "<option value=\"Integrable Function\">Integrable Function</option>" +
            "<option value=\"Integral\">Integral</option>" +
            "<option value=\"integral function\">integral function</option>" +
            "<option value=\"Integral Methods\">Integral Methods</option>" +
            "<option value=\"Integral of a Function\">Integral of a Function</option>" +
            "<option value=\"Integral of a Power Series\">Integral of a Power Series</option>" +
            "<option value=\"Integral Rules\">Integral Rules</option>" +
            "<option value=\"integral sign\">integral sign</option>" +
            "<option value=\"Integral Table\">Integral Table</option>" +
            "<option value=\"Integral Test\">Integral Test</option>" +
            "<option value=\"Integral Test Remainder\">Integral Test Remainder</option>" +
            "<option value=\"Integrand\">Integrand</option>" +
            "<option value=\"Integration\">Integration</option>" +
            "<option value=\"Integration by Parts\">Integration by Parts</option>" +
            "<option value=\"Integration by Substitution\">Integration by Substitution</option>" +
            "<option value=\"Integration Methods\">Integration Methods</option>" +
            "<option value=\"Intermediate Value Theorem\">Intermediate Value Theorem</option>" +
            "<option value=\"Interval of Convergence\">Interval of Convergence</option>" +
            "<option value=\"Iterative Process\">Iterative Process</option>" +
            "<option value=\"IVP\">IVP</option>" +
            "<option value=\"IVT\">IVT</option>" +
            "<option value=\"Jump Discontinuity\">Jump Discontinuity</option>" +
            "<option value=\"L&#39;Hôpital&#39;s Rule\">L&#39;Hôpital&#39;s Rule</option>" +
            "<option value=\"Lagrange error bound\">Lagrange error bound</option>" +
            "<option value=\"Least Upper Bound\">Least Upper Bound</option>" +
            "<option value=\"left\">left</option>" +
            "<option value=\"left limit\">left limit</option>" +
            "<option value=\"lemniscate\">lemniscate</option>" +
            "<option value=\"Limit\">Limit</option>" +
            "<option value=\"Limit Comparison Test\">Limit Comparison Test</option>" +
            "<option value=\"Limit from Above\">Limit from Above</option>" +
            "<option value=\"Limit from Below\">Limit from Below</option>" +
            "<option value=\"Limit from the Left\">Limit from the Left</option>" +
            "<option value=\"Limit from the Right\">Limit from the Right</option>" +
            "<option value=\"Limit Involving Infinity\">Limit Involving Infinity</option>" +
            "<option value=\"Limit Test for Divergence\">Limit Test for Divergence</option>" +
            "<option value=\"Limits of Integration\">Limits of Integration</option>" +
            "<option value=\"local\">local</option>" +
            "<option value=\"Local Behavior\">Local Behavior</option>" +
            "<option value=\"local linearization\">local linearization</option>" +
            "<option value=\"Local Maximum\">Local Maximum</option>" +
            "<option value=\"Local Minimum\">Local Minimum</option>" +
            "<option value=\"locally linear\">locally linear</option>" +
            "<option value=\"logarithm\">logarithm</option>" +
            "<option value=\"Logarithmic Differentiation\">Logarithmic Differentiation</option>" +
            "<option value=\"logistic\">logistic</option>" +
            "<option value=\"logistic equation\">logistic equation</option>" +
            "<option value=\"Logistic Growth\">Logistic Growth</option>" +
            "<option value=\"LUB\">LUB</option>" +
            "<option value=\"Maclaurin series\">Maclaurin series</option>" +
            "<option value=\"mass\">mass</option>" +
            "<option value=\"Mathematical Model\">Mathematical Model</option>" +
            "<option value=\"Maximize\">Maximize</option>" +
            "<option value=\"maximum\">maximum</option>" +
            "<option value=\"Maximum of a Function\">Maximum of a Function</option>" +
            "<option value=\"Mean Value Theorem\">Mean Value Theorem</option>" +
            "<option value=\"Mean Value Theorem for Integrals\">Mean Value Theorem for Integrals</option>" +
            "<option value=\"Mesh\">Mesh</option>" +
            "<option value=\"middle\">middle</option>" +
            "<option value=\"midpoint rule\">midpoint rule</option>" +
            "<option value=\"Min/Max Theorem\">Min/Max Theorem</option>" +
            "<option value=\"Minimize\">Minimize</option>" +
            "<option value=\"Minimum of a Function\">Minimum of a Function</option>" +
            "<option value=\"Mode\">Mode</option>" +
            "<option value=\"Model\">Model</option>" +
            "<option value=\"Moment\">Moment</option>" +
            "<option value=\"Multivariable\">Multivariable</option>" +
            "<option value=\"Multivariable Analysis\">Multivariable Analysis</option>" +
            "<option value=\"Multivariable Calculus\">Multivariable Calculus</option>" +
            "<option value=\"Multivariate\">Multivariate</option>" +
            "<option value=\"MVT\">MVT</option>" +
            "<option value=\"n tuple\">n tuple</option>" +
            "<option value=\"Neighborhood\">Neighborhood</option>" +
            "<option value=\"net signed area\">net signed area</option>" +
            "<option value=\"Newton-meter\">Newton-meter</option>" +
            "<option value=\"Newton&#39;s Method\">Newton&#39;s Method</option>" +
            "<option value=\"Newton’s Law of Cooling\">Newton’s Law of Cooling</option>" +
            "<option value=\"Norm of a Partition\">Norm of a Partition</option>" +
            "<option value=\"Normal\">Normal</option>" +
            "<option value=\"nth Degree Taylor Polynomial\">nth Degree Taylor Polynomial</option>" +
            "<option value=\"nth Derivative\">nth Derivative</option>" +
            "<option value=\"nth Partial Sum\">nth Partial Sum</option>" +
            "<option value=\"Oblate Spheroid\">Oblate Spheroid</option>" +
            "<option value=\"One Sided Limit\">One Sided Limit</option>" +
            "<option value=\"one-sided\">one-sided</option>" +
            "<option value=\"one-to-one\">one-to-one</option>" +
            "<option value=\"onto\">onto</option>" +
            "<option value=\"Operations on Functions\">Operations on Functions</option>" +
            "<option value=\"Order of a Differential Equation\">Order of a Differential Equation</option>" +
            "<option value=\"Ordinary Differential Equation\">Ordinary Differential Equation</option>" +
            "<option value=\"Orthogonal\">Orthogonal</option>" +
            "<option value=\"p series\">p series</option>" +
            "<option value=\"Parallel Cross Sections\">Parallel Cross Sections</option>" +
            "<option value=\"Parameter (algebra)\">Parameter (algebra)</option>" +
            "<option value=\"Parametric Derivative Formulas\">Parametric Derivative Formulas</option>" +
            "<option value=\"Parametric Equations\">Parametric Equations</option>" +
            "<option value=\"Parametric Integral Formula\">Parametric Integral Formula</option>" +
            "<option value=\"Parametrize\">Parametrize</option>" +
            "<option value=\"partial fractions\">partial fractions</option>" +
            "<option value=\"Partial Fractions\">Partial Fractions</option>" +
            "<option value=\"partial sum\">partial sum</option>" +
            "<option value=\"Partial Sum of a Series\">Partial Sum of a Series</option>" +
            "<option value=\"Partition of an Interval\">Partition of an Interval</option>" +
            "<option value=\"per capita growth rate\">per capita growth rate</option>" +
            "<option value=\"Piecewise Continuous Function\">Piecewise Continuous Function</option>" +
            "<option value=\"Pinching Theorem\">Pinching Theorem</option>" +
            "<option value=\"Polar Derivative Formulas\">Polar Derivative Formulas</option>" +
            "<option value=\"Polar Integral Formula\">Polar Integral Formula</option>" +
            "<option value=\"position\">position</option>" +
            "<option value=\"Positive Series\">Positive Series</option>" +
            "<option value=\"power function\">power function</option>" +
            "<option value=\"Power Rule\">Power Rule</option>" +
            "<option value=\"Power Series\">Power Series</option>" +
            "<option value=\"Power Series Convergence\">Power Series Convergence</option>" +
            "<option value=\"Product Rule\">Product Rule</option>" +
            "<option value=\"Projectile Motion\">Projectile Motion</option>" +
            "<option value=\"Prolate Spheroid\">Prolate Spheroid</option>" +
            "<option value=\"Quotient Rule\">Quotient Rule</option>" +
            "<option value=\"Radius of Convergence\">Radius of Convergence</option>" +
            "<option value=\"Ratio Test\">Ratio Test</option>" +
            "<option value=\"Rationalizing Substitutions\">Rationalizing Substitutions</option>" +
            "<option value=\"Reciprocal Rule\">Reciprocal Rule</option>" +
            "<option value=\"Rectangular Form\">Rectangular Form</option>" +
            "<option value=\"Related Rates\">Related Rates</option>" +
            "<option value=\"relative\">relative</option>" +
            "<option value=\"Relative Maximum\">Relative Maximum</option>" +
            "<option value=\"Relative Minimum\">Relative Minimum</option>" +
            "<option value=\"Remainder of a Series\">Remainder of a Series</option>" +
            "<option value=\"Removable Discontinuity\">Removable Discontinuity</option>" +
            "<option value=\"Riemann Sum\">Riemann Sum</option>" +
            "<option value=\"right\">right</option>" +
            "<option value=\"right limit\">right limit</option>" +
            "<option value=\"Rolle&#39;s Theorem\">Rolle&#39;s Theorem</option>" +
            "<option value=\"Root Test\">Root Test</option>" +
            "<option value=\"Sandwich Theorem\">Sandwich Theorem</option>" +
            "<option value=\"Scalar\">Scalar</option>" +
            "<option value=\"secant\">secant</option>" +
            "<option value=\"Secant Line\">Secant Line</option>" +
            "<option value=\"Second\">Second</option>" +
            "<option value=\"Second Derivative\">Second Derivative</option>" +
            "<option value=\"Second Derivative Test\">Second Derivative Test</option>" +
            "<option value=\"Second Order Critical Point\">Second Order Critical Point</option>" +
            "<option value=\"Second Order Differential Equation\">Second Order Differential Equation</option>" +
            "<option value=\"separable\">separable</option>" +
            "<option value=\"Separable Differential Equation\">Separable Differential Equation</option>" +
            "<option value=\"Sequence\">Sequence</option>" +
            "<option value=\"sequence of partial sums\">sequence of partial sums</option>" +
            "<option value=\"Sequence of Partial Sums\">Sequence of Partial Sums</option>" +
            "<option value=\"Series\">Series</option>" +
            "<option value=\"Series Rules\">Series Rules</option>" +
            "<option value=\"Shell Method\">Shell Method</option>" +
            "<option value=\"Sigma (Σ σ)\">Sigma (Σ σ)</option>" +
            "<option value=\"Sigma Notation\">Sigma Notation</option>" +
            "<option value=\"Simple Closed Curve\">Simple Closed Curve</option>" +
            "<option value=\"Simple Harmonic Motion (SHM)\">Simple Harmonic Motion (SHM)</option>" +
            "<option value=\"Simpson’s rule\">Simpson’s rule</option>" +
            "<option value=\"sine\">sine</option>" +
            "<option value=\"slope\">slope</option>" +
            "<option value=\"slope field\">slope field</option>" +
            "<option value=\"Slope of a Curve\">Slope of a Curve</option>" +
            "<option value=\"Solid\">Solid</option>" +
            "<option value=\"Solid of Revolution\">Solid of Revolution</option>" +
            "<option value=\"solution\">solution</option>" +
            "<option value=\"Solve Analytically\">Solve Analytically</option>" +
            "<option value=\"Solve Graphically\">Solve Graphically</option>" +
            "<option value=\"Speed\">Speed</option>" +
            "<option value=\"Squeeze Theorem\">Squeeze Theorem</option>" +
            "<option value=\"stable\">stable</option>" +
            "<option value=\"Step Discontinuity\">Step Discontinuity</option>" +
            "<option value=\"Substitution Method\">Substitution Method</option>" +
            "<option value=\"sum rule\">sum rule</option>" +
            "<option value=\"sum rule for definite integral\">sum rule for definite integral</option>" +
            "<option value=\"Surface\">Surface</option>" +
            "<option value=\"Surface Area of a Surface of Revolution\">Surface Area of a Surface of Revolution</option>" +
            "<option value=\"Surface of Revolution\">Surface of Revolution</option>" +
            "<option value=\"Table of Integrals\">Table of Integrals</option>" +
            "<option value=\"tangent\">tangent</option>" +
            "<option value=\"Tangent Line\">Tangent Line</option>" +
            "<option value=\"Taylor Polynomial\">Taylor Polynomial</option>" +
            "<option value=\"Taylor Series\">Taylor Series</option>" +
            "<option value=\"Taylor Series Remainder\">Taylor Series Remainder</option>" +
            "<option value=\"term\">term</option>" +
            "<option value=\"Theorem of Pappus\">Theorem of Pappus</option>" +
            "<option value=\"Torus\">Torus</option>" +
            "<option value=\"total change theorem\">total change theorem</option>" +
            "<option value=\"trapezoid rule\">trapezoid rule</option>" +
            "<option value=\"Trapezoid Rule\">Trapezoid Rule</option>" +
            "<option value=\"triangular numbers\">triangular numbers</option>" +
            "<option value=\"Trig Substitution\">Trig Substitution</option>" +
            "<option value=\"trigonometry\">trigonometry</option>" +
            "<option value=\"U-Substitution\">U-Substitution</option>" +
            "<option value=\"Unbounded integrand\">Unbounded integrand</option>" +
            "<option value=\"Unbounded region of integration\">Unbounded region of integration</option>" +
            "<option value=\"Uniform\">Uniform</option>" +
            "<option value=\"Unstable\">Unstable</option>" +
            "<option value=\"Vector Calculus\">Vector Calculus</option>" +
            "<option value=\"Velocity\">Velocity</option>" +
            "<option value=\"Vertical asymptote\">Vertical asymptote</option>" +
            "<option value=\"Volume\">Volume</option>" +
            "<option value=\"Volume by Parallel Cross Sections\">Volume by Parallel Cross Sections</option>" +
            "<option value=\"Washer\">Washer</option>" +
            "<option value=\"Washer Method\">Washer Method</option>" +
            "<option value=\"weighted average\">weighted average</option>" +
            "<option value=\"Work \">Work </option></select>" +
            "         </div>" +
            "       </div>"
        $('#timekeyword').after(html)
        $('#mfield').dropdown('set selected',keywords);

        update_ui()
    })


    $('.video').click(function () {
        var link = $(this).attr('data-link');
        $('iframe').attr('src',link);
        $('.ui.basic.modal')
            .modal('show')
        ;
    });

    $('#addKeyword').click(function(){
        $('.ui.accordion')
            .accordion()
        ;
    });

    $('.ui.accordion').accordion();

    $('.ui.radio.checkbox').checkbox();
    fillData()

    var cuts =  $('#cuts-label').data('cuts');
    var formattedCuts = [];
    var i = 0;
    for(i; i < cuts.length; ++i){
        var cut = {name: cuts[i].toString(), value: cuts[i].toString()};
        formattedCuts.push(cut);
    }

    $('.cuts').dropdown({
        apiSettings: {
            responseAsync: function(settings, callback) {
                const query = settings.urlData.query;
                var response = {
                    success: true,
                    results: formattedCuts
                };
                callback(response);
            }
        }
    });

    $('.ui.form')
        .form({
            fields: {
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [

                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        },
                    ]
                },
                name: {
                    identifier: 'name',
                    rules: [

                        {
                            type: 'empty',
                            prompt: 'Please enter your name'
                        },
                    ]
                },
            }})


    })








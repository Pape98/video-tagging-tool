function fillData(){

    var courses =  $('#courses-label').data('courses');
    var presenter =  $('#presenter-label').data('presenter');
    var x = $('.cut-input');

    if(courses != undefined) {
        $('#courses').dropdown('set selected',courses);
    }
    if(presenter != undefined) {
        $('#presenter').dropdown('set selected',presenter);
    }
    for(var i = 0; i < x.length; ++i){
        var keywords = $(x[i]).data('keywords');
        var cut = $(x[i]).data('cut');
        if(cut != ''){
            $('.'+cut).dropdown('set selected',keywords);
        }
    }
    update_ui()
}


function addCut(val){
    var cut = val;
    var option = "<option value=\""+cut+"\">"+cut+"</option>";
    $('#cuts').append(option);
}

function update_ui(){
    $('.dropdown').dropdown();
}
var indexforID=0;
function uniqueID(){
    return indexforID++;
};
$( document ).ready(function() {


    $('.ui.form')
        .form({
            fields: {
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


    $('.edit')
        .popup({
            on: 'hover'
        })
    ;
    $('#addReview').click(function () {
        $('.ui.longer.modal')
            .modal('show')
        ;
    })

    $('.ui.embed').embed();



    $('.menu .item').tab();

    $('.dropdown').dropdown();

    $('#addField').click(function(){
        var x =  $('#keywords').children("option:selected").val()
        var keywords = [];
        $.each($("#keywords option:selected"), function(){
            keywords.push($(this).val());
        });
        console.log(keywords)
        var id = uniqueID()
        console.log(id);
        var html = '<div class="field" style="margin-top:20px ">' +
                '<div class="ui action input">' +
            '<input type="text" placeholder="Ex: 08:23" name="video[segments[]][cut]">' +
            '<select id="mfield' + id + '" multiple="multiple" class="ui fluid search dropdown" name="video[segments[]][keywords][]">' +
            '<option value="Absolute">Absolute</option>'+
            '<option value="Absolute Convergence">Absolute Convergence</option>'+
            '<option value="Absolute Maximum">Absolute Maximum</option>'+
            '<option value="Absolute Minimum">Absolute Minimum</option>'+
            '<option value="Absolute Value">Absolute Value</option>'+
            '<option value="Absolutely Convergent">Absolutely Convergent</option>'+
            '<option value="Acceleration">Acceleration</option>'+
            '<option value="Algorithm">Algorithm</option>'+
            '<option value="Alternating Series">Alternating Series</option>'+
            '<option value="Alternating Series Estimation Theorem">Alternating Series Estimation Theorem</option>'+
            '<option value="Alternating Series Remainder">Alternating Series Remainder</option>'+
            '        <option value="Alternating Series Test">Alternating Series Test</option>'+
            '        <option value="Analytic Methods">Analytic Methods</option>'+
            '        <option value="Annulus">Annulus</option>'+
            '            <option value="Antiderivative of a Function">Antiderivative of a Function</option>'+
            '        <option value="Antidifferentiation">Antidifferentiation</option>'+
            '            <option value="Approximation by Differentials">Approximation by Differentials</option>'+
            '        <option value="Arc">Arc</option>'+
            '            <option value="Arc Length of a Curve">Arc Length of a Curve</option>'+
            '        <option value="Arccosine">Arccosine</option>'+
            '            <option value="Arcsine">Arcsine</option>'+
            '            <option value="Arctangent">Arctangent</option>'+
            '            <option value="Area">Area</option>'+
            '            <option value="Area under Velocity Function">Area under Velocity Function</option>'+
            '        <option value="Area between Curves">Area between Curves</option>'+
            '        <option value="Area of an Ellipse">Area of an Ellipse</option>'+
            '        <option value="Area under a Curve">Area under a Curve</option>'+
            '        <option value="Area Using Parametric Equations">Area Using Parametric Equations</option>'+
            '        <option value="Area Using Polar Coordinates">Area Using Polar Coordinates</option>'+
            '        <option value="Asymptote">Asymptote</option>'+
            '            <option value="Autonomous">Autonomous</option>'+
            '            <option value="Average Rate of Change">Average Rate of Change</option>'+
            '        <option value="Average Value of a Function">Average Value of a Function</option>'+
            '        <option value="Average Velocity">Average Velocity</option>'+
            '        <option value="Axis of Rotation">Axis of Rotation</option>'+
            '        <option value="Boundary Value Problem">Boundary Value Problem</option>'+
            '        <option value="Bounded Function">Bounded Function</option>'+
            '        <option value="Bounded Sequence">Bounded Sequence</option>'+
            '        <option value="Bounds of Integration">Bounds of Integration</option>'+
            '        <option value="Calculus">Calculus</option>'+
            '            <option value="Carrying Capacity">Carrying Capacity</option>'+
            '        <option value="Cartesian Form">Cartesian Form</option>'+
            '        <option value="Cavalieri’s Principle">Cavalieri’s Principle</option>'+
            '        <option value="Center of Mass Formula">Center of Mass Formula</option>'+
            '        <option value="central difference">central difference</option>'+
            '        <option value="Centroid">Centroid</option>'+
            '            <option value="Chain Rule">Chain Rule</option>'+
            '        <option value="Codomain">Codomain</option>'+
            '            <option value="Common Ratio">Common Ratio</option>'+
            '        <option value="Comparison Test">Comparison Test</option>'+
            '        <option value="Composition">Composition</option>'+
            '            <option value="Concave">Concave</option>'+
            '            <option value="Concave Down">Concave Down</option>'+
            '        <option value="Concave Up">Concave Up</option>'+
            '        <option value="Concavity">Concavity</option>'+
            '            <option value="Conditional Convergence">Conditional Convergence</option>'+
            '        <option value="Constant Function">Constant Function</option>'+
            '        <option value="Constant Multiple Rule for Definite Integral">Constant Multiple Rule for Definite Integral</option>'+
            '        <option value="Constant Term">Constant Term</option>'+
            '        <option value="Continued Sum">Continued Sum</option>'+
            '        <option value="Continuous">Continuous</option>'+
            '            <option value="Continuous at x = a">Continuous at x = a</option>'+
            '            <option value="Continuous Function">Continuous Function</option>'+
            '        <option value="Continuously Differentiable Function">Continuously Differentiable Function</option>'+
            '        <option value="Converge">Converge</option>'+
            '            <option value="Converge Absolutely">Converge Absolutely</option>'+
            '        <option value="Converge Conditionally">Converge Conditionally</option>'+
            '        <option value="Convergence">Convergence</option>'+
            '            <option value="Convergence Tests">Convergence Tests</option>'+
            '        <option value="Convergent Sequence">Convergent Sequence</option>'+
            '        <option value="Convergent Series">Convergent Series</option>'+
            '        <option value="Cosecant">Cosecant</option>'+
            '            <option value="Cosine">Cosine</option>'+
            '            <option value="Cotangent">Cotangent</option>'+
            '            <option value="Critical Number">Critical Number</option>'+
            '        <option value="Critical Point">Critical Point</option>'+
            '        <option value="Critical Value">Critical Value</option>'+
            '        <option value="Curly d">Curly d</option>'+
            '        <option value="Curve">Curve</option>'+
            '            <option value="Curve Sketching">Curve Sketching</option>'+
            '        <option value="Cusp">Cusp</option>'+
            '            <option value="Cylindrical Shell Method">Cylindrical Shell Method</option>'+
            '        <option value="Decreasing Function">Decreasing Function</option>'+
            '        <option value="Definite Integral">Definite Integral</option>'+
            '        <option value="Definite Integral Rules">Definite Integral Rules</option>'+
            '        <option value="Definition">Definition</option>'+
            '            <option value="Definition of Definite Integral">Definition of Definite Integral</option>'+
            '        <option value="Degenerate">Degenerate</option>'+
            '            <option value="Del Operator">Del Operator</option>'+
            '        <option value="Deleted Neighborhood">Deleted Neighborhood</option>'+
            '        <option value="Delta (Δ δ)">Delta (Δ δ)</option>'+
            '        <option value="Density">Density</option>'+
            '            <option value="Derivative">Derivative</option>'+
            '            <option value="Derivative of a Power Series">Derivative of a Power Series</option>'+
            '        <option value="Derivative Rules">Derivative Rules</option>'+
            '        <option value="Difference Quotient">Difference Quotient</option>'+
            '        <option value="Differentiable">Differentiable</option>'+
            '            <option value="Differential">Differential</option>'+
            '            <option value="Differential Equation">Differential Equation</option>'+
            '        <option value="Differentiation">Differentiation</option>'+
            '            <option value="Differentiation Rules">Differentiation Rules</option>'+
            '        <option value="Discontinuity">Discontinuity</option>'+
            '            <option value="Discontinuous Function">Discontinuous Function</option>'+
            '        <option value="Disk">Disk</option>'+
            '            <option value="Disk Method">Disk Method</option>'+
            '        <option value="Distance from a Point to a Line">Distance from a Point to a Line</option>'+
            '        <option value="Distance Traveled">Distance Traveled</option>'+
            '        <option value="Diverge">Diverge</option>'+
            '            <option value="Divergence Test">Divergence Test</option>'+
            '        <option value="Divergent Sequence">Divergent Sequence</option>'+
            '        <option value="Divergent Series">Divergent Series</option>'+
            '        <option value="Domain">Domain</option>'+
            '            <option value="e">e</option>'+
            '            <option value="Ellipsoid">Ellipsoid</option>'+
            '            <option value="End Behavior">End Behavior</option>'+
            '        <option value="Epsilon (Ε ε)">Epsilon (Ε ε)</option>'+
            '        <option value="Equation">Equation</option>'+
            '            <option value="Equilibrium Solution">Equilibrium Solution</option>'+
            '        <option value="Error Function">Error Function</option>'+
            '        <option value="Essential Discontinuity">Essential Discontinuity</option>'+
            '        <option value="Euler’s Method">Euler’s Method</option>'+
            '        <option value="Evaluate">Evaluate</option>'+
            '            <option value="Explicit Differentiation">Explicit Differentiation</option>'+
            '        <option value="Explicit Function">Explicit Function</option>'+
            '        <option value="Exponential Decay">Exponential Decay</option>'+
            '        <option value="Exponential Function">Exponential Function</option>'+
            '        <option value="Exponential Growth">Exponential Growth</option>'+
            '        <option value="Exponential Model">Exponential Model</option>'+
            '        <option value="Extreme Value">Extreme Value</option>'+
            '        <option value="Extreme Value Theorem">Extreme Value Theorem</option>'+
            '        <option value="Extreme Values of a Polynomial">Extreme Values of a Polynomial</option>'+
            '        <option value="Extremum">Extremum</option>'+
            '            <option value="Factorial">Factorial</option>'+
            '            <option value="Falling Bodies">Falling Bodies</option>'+
            '        <option value="Fibonacci sequence">Fibonacci sequence</option>'+
            '        <option value="First Derivative">First Derivative</option>'+
            '        <option value="First Derivative Test">First Derivative Test</option>'+
            '        <option value="First Order">First Order</option>'+
            '        <option value="First Order Differential Equation">First Order Differential Equation</option>'+
            '        <option value="Fixed">Fixed</option>'+
            '            <option value="Foot-Pound">Foot-Pound</option>'+
            '            <option value="Forward Difference">Forward Difference</option>'+
            '        <option value="Function">Function</option>'+
            '            <option value="Function Operations">Function Operations</option>'+
            '        <option value="Function-Derivative Pair">Function-Derivative Pair</option>'+
            '        <option value="Fundamental Theorem of Calculus">Fundamental Theorem of Calculus</option>'+
            '        <option value="Fundamental Trigonometric Identity">Fundamental Trigonometric Identity</option>'+
            '        <option value="General Antiderivative">General Antiderivative</option>'+
            '        <option value="Geometric">Geometric</option>'+
            '            <option value="Geometric Series">Geometric Series</option>'+
            '        <option value="Geometric Sum">Geometric Sum</option>'+
            '        <option value="Greatest Lower Bound">Greatest Lower Bound</option>'+
            '        <option value="Global">Global</option>'+
            '            <option value="Global Maximum">Global Maximum</option>'+
            '        <option value="Global Minimum">Global Minimum</option>'+
            '        <option value="Golden Spiral">Golden Spiral</option>'+
            '        <option value="Graph">Graph</option>'+
            '            <option value="Graph of Derivative">Graph of Derivative</option>'+
            '        <option value="Graph of Antiderivative">Graph of Antiderivative</option>'+
            '        <option value="Graphic Methods">Graphic Methods</option>'+
            '        <option value="Greatest Lower Bound">Greatest Lower Bound</option>'+
            '        <option value="Greek Alphabet">Greek Alphabet</option>'+
            '        <option value="Harmonic Progression">Harmonic Progression</option>'+
            '        <option value="Harmonic Sequence">Harmonic Sequence</option>'+
            '        <option value="Harmonic Series">Harmonic Series</option>'+
            '        <option value="Helix">Helix</option>'+
            '            <option value="Higher Derivative">Higher Derivative</option>'+
            '        <option value="Hole">Hole</option>'+
            '            <option value="Homogeneous System of Equations">Homogeneous System of Equations</option>'+
            '        <option value="Hooke’s Law">Hooke’s Law</option>'+
            '        <option value="Horizontal Asymptote">Horizontal Asymptote</option>'+
            '        <option value="Hyperbolic Trigonometry">Hyperbolic Trigonometry</option>'+
            '        <option value="Identity Function">Identity Function</option>'+
            '        <option value="Implicit Differentiation">Implicit Differentiation</option>'+
            '        <option value="Implicit Function or Relation">Implicit Function or Relation</option>'+
            '        <option value="Improper Integral">Improper Integral</option>'+
            '        <option value="Increasing">Increasing</option>'+
            '            <option value="Increasing Function">Increasing Function</option>'+
            '        <option value="Indefinite Integral">Indefinite Integral</option>'+
            '        <option value="Indefinite Integral Rules">Indefinite Integral Rules</option>'+
            '        <option value="Indeterminate">Indeterminate</option>'+
            '            <option value="Indeterminate Difference">Indeterminate Difference</option>'+
            '        <option value="Indeterminate Form">Indeterminate Form</option>'+
            '        <option value="Indeterminate Power">Indeterminate Power</option>'+
            '        <option value="Indeterminate Product">Indeterminate Product</option>'+
            '        <option value="Infinite Geometric Series">Infinite Geometric Series</option>'+
            '        <option value="Infinite Limit">Infinite Limit</option>'+
            '        <option value="Infinite Series">Infinite Series</option>'+
            '        <option value="Infinitesimal">Infinitesimal</option>'+
            '            <option value="Infinity">Infinity</option>'+
            '            <option value="Inflection Point">Inflection Point</option>'+
            '        <option value="Initial Condition">Initial Condition</option>'+
            '        <option value="Initial Value Problem">Initial Value Problem</option>'+
            '        <option value="Instantaneous Acceleration">Instantaneous Acceleration</option>'+
            '        <option value="Instantaneous Rate of Change">Instantaneous Rate of Change</option>'+
            '        <option value="Instantaneous Velocity">Instantaneous Velocity</option>'+
            '        <option value="Integrable Function">Integrable Function</option>'+
            '        <option value="Integral">Integral</option>'+
            '            <option value="Integral Function">Integral Function</option>'+
            '        <option value="Integral Methods">Integral Methods</option>'+
            '        <option value="Integral of a Function">Integral of a Function</option>'+
            '        <option value="Integral of a Power Series">Integral of a Power Series</option>'+
            '        <option value="Integral Rules">Integral Rules</option>'+
            '        <option value="Integral Sign">Integral Sign</option>'+
            '        <option value="Integral Table">Integral Table</option>'+
            '        <option value="Integral Test">Integral Test</option>'+
            '        <option value="Integral Test Remainder">Integral Test Remainder</option>'+
            '        <option value="Integrand">Integrand</option>'+
            '            <option value="Integration">Integration</option>'+
            '            <option value="Integration by Parts">Integration by Parts</option>'+
            '        <option value="Integration by Substitution">Integration by Substitution</option>'+
            '        <option value="Integration Methods">Integration Methods</option>'+
            '        <option value="Intermediate Value Theorem">Intermediate Value Theorem</option>'+
            '        <option value="Interval of Convergence">Interval of Convergence</option>'+
            '        <option value="Iterative Process">Iterative Process</option>'+
            '        <option value="Initial Value Problem">Initial Value Problem</option>'+
            '        <option value="Jump Discontinuity">Jump Discontinuity</option>'+
            '        <option value="L&#39;Hôpital&#39;s Rule">L&#39;Hôpital&#39;s Rule</option>'+
            '        <option value="Lagrange Error Bound">Lagrange Error Bound</option>'+
            '        <option value="Least Upper Bound">Least Upper Bound</option>'+
            '        <option value="Left Limit">Left Limit</option>'+
            '        <option value="Lemniscate">Lemniscate</option>'+
            '            <option value="Limit">Limit</option>'+
            '            <option value="Limit Comparison Test">Limit Comparison Test</option>'+
            '        <option value="Limit from Above">Limit from Above</option>'+
            '        <option value="Limit from Below">Limit from Below</option>'+
            '        <option value="Limit from the Left">Limit from the Left</option>'+
            '        <option value="Limit from the Right">Limit from the Right</option>'+
            '        <option value="Limit Involving Infinity">Limit Involving Infinity</option>'+
            '        <option value="Limit Test for Divergence">Limit Test for Divergence</option>'+
            '                                                                 <option value="Limits of Integration">Limits of Integration</option>'+
            '        <option value="Local">Local</option>'+
            '            <option value="Local Behavior">Local Behavior</option>'+
            '        <option value="Local Linearization">Local Linearization</option>'+
            '        <option value="Local Maximum">Local Maximum</option>'+
            '        <option value="Local Minimum">Local Minimum</option>'+
            '        <option value="Locally Linear">Locally Linear</option>'+
            '        <option value="Logarithm">Logarithm</option>'+
            '            <option value="Logarithmic Differentiation">Logarithmic Differentiation</option>'+
            '        <option value="Logistic">Logistic</option>'+
            '            <option value="Logistic Equation">Logistic Equation</option>'+
            '        <option value="Logistic Growth">Logistic Growth</option>'+
            '        <option value="Maclaurin Series">Maclaurin Series</option>'+
            '        <option value="Mass">Mass</option>'+
            '            <option value="Mathematical Model">Mathematical Model</option>'+
            '        <option value="Maximize">Maximize</option>'+
            '            <option value="Maximum	(verbs vs nouns">Maximum	(verbs vs nouns</option>'+
            '        <option value="Maximum of a Function">Maximum of a Function</option>'+
            '        <option value="Mean Value Theorem">Mean Value Theorem</option>'+
            '        <option value="Mean Value Theorem for Integrals">Mean Value Theorem for Integrals</option>'+
            '                        <option value="Mesh">Mesh</option>'+
            '            <option value="Midpoint Rule">Midpoint Rule</option>'+
            '        <option value="Min/Max Theorem">Min/Max Theorem</option>'+
            '        <option value="Minimize">Minimize</option>'+
            '            <option value="Minimum of a Function">Minimum of a Function</option>'+
            '        <option value="Mode">Mode</option>'+
            '            <option value="Model">Model</option>'+
            '            <option value="Moment">Moment</option>'+
            '            <option value="Multivariable">Multivariable</option>'+
            '            <option value="Multivariable Analysis">Multivariable Analysis</option>'+
            '        <option value="Multivariable Calculus">Multivariable Calculus</option>'+
            '        <option value="Multivariate">Multivariate</option>'+
            '            <option value="n Tuple">n Tuple</option>'+
            '        <option value="Neighborhood">Neighborhood</option>'+
            '            <option value="Net Signed Area">Net Signed Area</option>'+
            '        <option value="Newton-meter">Newton-meter</option>'+
            '            <option value="Newton&#39;s Method">Newton&#39;s Method</option>'+
            '        <option value="Newton’s Law of Cooling">Newton’s Law of Cooling</option>'+
            '        <option value="Norm of a Partition">Norm of a Partition</option>'+
            '        <option value="Normal">Normal</option>'+
            '            <option value="nth Degree Taylor Polynomial">nth Degree Taylor Polynomial</option>'+
            '        <option value="nth Derivative">nth Derivative</option>'+
            '        <option value="nth Partial Sum">nth Partial Sum</option>'+
            '        <option value="Oblate Spheroid">Oblate Spheroid</option>'+
            '        <option value="One Sided Limit">One Sided Limit</option>'+
            '        <option value="One-Sided">One-Sided</option>'+
            '            <option value="One-to-One">One-to-One</option>'+
            '            <option value="Operations on Functions">Operations on Functions</option>'+
            '        <option value="Order of a Differential Equation">Order of a Differential Equation</option>'+
            '        <option value="Ordinary Differential Equation">Ordinary Differential Equation</option>'+
            '        <option value="Orthogonal">Orthogonal</option>'+
            '            <option value="p Series">p Series</option>'+
            '        <option value="Parallel Cross Sections">Parallel Cross Sections</option>'+
            '        <option value="Parameter (Algebra)">Parameter (Algebra)</option>'+
            '            <option value="Parametric Derivative Formulas">Parametric Derivative Formulas</option>'+
            '        <option value="Parametric Equations">Parametric Equations</option>'+
            '        <option value="Parametric Integral Formula">Parametric Integral Formula</option>'+
            '        <option value="Parametrize">Parametrize</option>'+
            '            <option value="Partial Fractions">Partial Fractions</option>'+
            '        <option value="Partial Sum">Partial Sum</option>'+
            '        <option value="Partial Sum of a Series">Partial Sum of a Series</option>'+
            '        <option value="Partition of an Interval">Partition of an Interval</option>'+
            '        <option value="Per Capita Growth Rate">Per Capita Growth Rate</option>'+
            '        <option value="Piecewise Continuous Function">Piecewise Continuous Function</option>'+
            '        <option value="Pinching Theorem">Pinching Theorem</option>'+
            '        <option value="Polar Derivative Formulas">Polar Derivative Formulas</option>'+
            '        <option value="Polar Integral Formula">Polar Integral Formula</option>'+
            '        <option value="Position">Position</option>'+
            '            <option value="Positive Series">Positive Series</option>'+
            '        <option value="Power Function">Power Function</option>'+
            '        <option value="Power Rule">Power Rule</option>'+
            '        <option value="Power Series">Power Series</option>'+
            '        <option value="Power Series Convergence">Power Series Convergence</option>'+
            '        <option value="Product Rule">Product Rule</option>'+
            '        <option value="Projectile Motion">Projectile Motion</option>'+
            '        <option value="Prolate Spheroid">Prolate Spheroid</option>'+
            '        <option value="Quotient Rule">Quotient Rule</option>'+
            '        <option value="Radius of Convergence">Radius of Convergence</option>'+
            '        <option value="Ratio Test">Ratio Test</option>'+
            '        <option value="Rationalizing Substitutions">Rationalizing Substitutions</option>'+
            '        <option value="Reciprocal Rule">Reciprocal Rule</option>'+
            '        <option value="Rectangular Form">Rectangular Form</option>'+
            '        <option value="Related Rates">Related Rates</option>'+
            '        <option value="Relative">Relative</option>'+
            '            <option value="Relative Maximum">Relative Maximum</option>'+
            '        <option value="Relative Minimum">Relative Minimum</option>'+
            '        <option value="Remainder of a Series">Remainder of a Series</option>'+
            '        <option value="Removable Discontinuity">Removable Discontinuity</option>'+
            '        <option value="Riemann Sum">Riemann Sum</option>'+
            '        <option value="Right Limit">Right Limit</option>'+
            '        <option value="Rolle&#39;s Theorem">Rolle&#39;s Theorem</option>'+
            '        <option value="Root Test">Root Test</option>'+
            '        <option value="Scalar">Scalar</option>'+
            '            <option value="Secant">Secant</option>'+
            '            <option value="Secant Line">Secant Line</option>'+
            '        <option value="Second Derivative">Second Derivative</option>'+
            '        <option value="Second Derivative Test">Second Derivative Test</option>'+
            '        <option value="Second Order Critical Point">Second Order Critical Point</option>'+
            '        <option value="Second Order Differential Equation">Second Order Differential Equation</option>'+
            '        <option value="Separable">Separable</option>'+
            '            <option value="Separable Differential Equation">Separable Differential Equation</option>'+
            '        <option value="Sequence">Sequence</option>'+
            '            <option value="Sequence of Partial Sums">Sequence of Partial Sums</option>'+
            '        <option value="Series">Series</option>'+
            '            <option value="Series Rules">Series Rules</option>'+
            '        <option value="Shell Method">Shell Method</option>'+
            '        <option value="Sigma (Σ σ)">Sigma (Σ σ)</option>'+
            '        <option value="Sigma Notation">Sigma Notation</option>'+
            '        <option value="Simple Closed Curve">Simple Closed Curve</option>'+
            '        <option value="Simple Harmonic Motion (SHM)">Simple Harmonic Motion (SHM)</option>'+
            '        <option value="Simpson’s rule">Simpson’s rule</option>'+
            '        <option value="Sine">Sine</option>'+
            '            <option value="Slope">Slope</option>'+
            '            <option value="Slope Field">Slope Field</option>'+
            '        <option value="Slope of a Curve">Slope of a Curve</option>'+
            '        <option value="Solid">Solid</option>'+
            '            <option value="Solid of Revolution">Solid of Revolution</option>'+
            '        <option value="Solution">Solution</option>'+
            '            <option value="Solve Analytically">Solve Analytically</option>'+
            '        <option value="Solve Graphically">Solve Graphically</option>'+
            '        <option value="Speed">Speed</option>'+
            '            <option value="Square Root">Square Root</option>'+
            '        <option value="Squeeze (or Sandwich) Theorem">Squeeze (or Sandwich) Theorem</option>'+
            '        <option value="Stable">Stable</option>'+
            '            <option value="Step Discontinuity">Step Discontinuity</option>'+
            '        <option value="Substitution Method">Substitution Method</option>'+
            '        <option value="Sum Rule">Sum Rule</option>'+
            '        <option value="Sum Rule for Definite Integral">Sum Rule for Definite Integral</option>'+
            '        <option value="Surface">Surface</option>'+
            '            <option value="Surface Area of a Surface of Revolution">Surface Area of a Surface of Revolution</option>'+
            '        <option value="Surface of Revolution">Surface of Revolution</option>'+
            '        <option value="Table of Integrals">Table of Integrals</option>'+
            '        <option value="Tangent">Tangent</option>'+
            '            <option value="Tangent Line">Tangent Line</option>'+
            '        <option value="Taylor Polynomial">Taylor Polynomial</option>'+
            '        <option value="Taylor Series">Taylor Series</option>'+
            '        <option value="Taylor Series Remainder">Taylor Series Remainder</option>'+
            '        <option value="Term">Term</option>'+
            '        <option value="Theorem of Pappus">Theorem of Pappus</option>'+
            '        <option value="Torus">Torus</option>'+
            '        <option value="Total Change Theorem">Total Change Theorem</option>'+
            '        <option value="Trapezoid Rule">Trapezoid Rule</option>'+
            '        <option value="Triangular Numbers">Triangular Numbers</option>'+
            '        <option value="Trig Substitution">Trig Substitution</option>'+
            '        <option value="Trigonometry">Trigonometry</option>'+
            '            <option value="u Substitution">u Substitution</option>'+
            '        <option value="Unbounded Integrand">Unbounded Integrand</option>'+
            '<option value="Unbounded Region of Integration">Unbounded Region of Integration</option>'+
            '        <option value="Uniform">Uniform</option>'+
            '            <option value="Unstable">Unstable</option>'+
            '            <option value="Vector">Vector</option>'+
            '            <option value="Vector Derivative">Vector Derivative</option>'+
            '        <option value="Vector Calculus">Vector Calculus</option>'+
            '        <option value="Velocity">Velocity</option>'+
            '            <option value="Vertical Asymptote">Vertical Asymptote</option>'+
            '        <option value="Volume">Volume</option>'+
            '            <option value="Volume by Parallel Cross Sections">Volume by Parallel Cross Sections</option>'+
            '        <option value="Washer">Washer</option>'+
            '            <option value="Washer Method">Washer Method</option>'+
            '        <option value="Weighted Average">Weighted Average</option>'+
            '        <option value="Work">Work</option>'+
            '            <option value="Word Problems">Word Problems</option>	   	' +
            '</select>' +
            '<div class="ui negative button deleteField">Delete</div>' +
            '        </div>' +
            '       </div>';
        $('#timekeyword').append(html);
        $('#mfield' + id).dropdown('set selected',keywords);

        update_ui()
    });

    $('.field').on('click', '.deleteField',function(){
        $(this).parent('div').remove();
    });

    $('#addKeyword').click(function(){
        $('.ui.accordion')
            .accordion()
        ;
    });

    $('.ui.accordion').accordion();

    $('.ui.radio.checkbox').checkbox();
    fillData()


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

    $('.ui.sticky')
        .sticky({
            context: '#context',
            // offset:-25,
            // bottomOffset: 1000,
        })
    ;

    })








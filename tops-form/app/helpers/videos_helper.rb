module VideosHelper

  def courses
    [
        # "141 - Business Math I",
        # "142 - Business Math II",
        # "150 - PreCalculus",
        # "151 - Calculus I",
        # "152 - Calculus II",
        # "251 - Calculus III",
        # "304 - Linear Algebra",
        # "308 Differential Equations"
        "141",
        "142",
        "150",
        "151",
        "152",
        "251",
        "304",
        "308"
    ]
  end

  counter = 0

  def choices value

    choice = value
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Agree\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Agree</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Agree\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label> Agree</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Disagree\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label>Disagree</label>
         </div>
       </div>
        <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Disagree\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Disagree</label>
         </div>
       </div>
<div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Not Applicable\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Not Applicable</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices2 value

    choice = value
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Yes\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label>Yes</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"No\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\">
           <label>No</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Maybe\" name=\"#{choice}\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Maybe</label>
         </div>
       </div>".html_safe
    return @html
  end


end

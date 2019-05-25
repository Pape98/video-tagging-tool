module VideosHelper

  def videochoices
    @hmtl = "<tr>
          <td class=\"eleven wide\"></td>
          <td class=\"one wide\"><b>Strongly Agree</b></td>
          <td class=\"one wide\"><b>Agree</b></td>
          <td class=\"one wide\"><b>Disagree</b></td>
          <td class=\"one wide\"><b>Strongly Disagree</b></td>
          <td class=\"one wide\"><b>Not Applicable</b></td>
        </tr>".html_safe
  end


  def showchoice choice
    case choice
    when 'Strongly Agree'
      @hmtl = ' <td class="center aligned"><i class="large green checkmark icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>'.html_safe
    when 'Agree'
      @hmtl = '
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large green checkmark icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>'.html_safe
    when 'Disagree'
      @hmtl = '
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large green checkmark icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>'.html_safe
    when 'Strongly Disagree'
      @hmtl = ' <td class="center aligned"><i class="large green checkmark icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
<td class="center aligned"><i class="large green checkmark icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>'.html_safe
    when 'Not Applicable'
      @hmtl = '<td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large green checkmark icon"></i></td>'.html_safe
    end
    return @hmtl
  end

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
           <input type=\"radio\" value=\"Strongly Agree\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Agree</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Agree\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label> Agree</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Disagree\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Disagree</label>
         </div>
       </div>
        <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Disagree\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Disagree</label>
         </div>
       </div>
<div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Not Applicable\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Not Applicable</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices2 value

    choice = value
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Yes\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Yes</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"No\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>No</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Maybe\" name=\"video[#{choice}]\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Maybe</label>
         </div>
       </div>".html_safe
    return @html
  end


end

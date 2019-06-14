module VideosHelper

  def videochoices
    @hmtl = "<tr class=\"center aligned light-beige-bg\">
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
      @hmtl = '
          <td class="center aligned"><i class="large green checkmark icon"></i></td>
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
      @hmtl = '
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large green checkmark icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>'.html_safe
    when 'Not Applicable'
      @hmtl = '
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large red close icon"></i></td>
            <td class="center aligned"><i class="large green checkmark icon"></i></td>'.html_safe
    end
    return @hmtl
  end

  def showchoice2 choice
    case choice
    when 'Yes'  , 'Used as is'
      @hmtl = '
          <td colspan="2" class="center aligned"><i class="large green checkmark icon"></i></td>
          <td colspan="2" class="center aligned"><i class="large red close icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          '.html_safe
    when 'No', 'Used with revision'
      @hmtl = '
          <td colspan="2" class="center aligned"><i class="large red close icon"></i></td>
          <td colspan="2" class="center aligned"><i class="large green checkmark icon"></i></td>
          <td class="center aligned"><i class="large red close icon"></i></td>
          '.html_safe
    when 'Maybe', 'Not used'
      @hmtl = '
          <td colspan="2" class="center aligned"><i class="large red close icon"></i></td>
          <td colspan="2" class="center aligned"><i class="large red close icon"></i></td>
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
           <input type=\"radio\" value=\"Strongly Agree\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Agree</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Agree\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label> Agree</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Disagree\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Disagree</label>
         </div>
       </div>
        <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Disagree\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Strongly Disagree</label>
         </div>
       </div>
<div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Not Applicable\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Not Applicable</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices2 value

    choice = value
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Yes\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>Yes</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"No\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\">
           <label>No</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Maybe\" name=\"rubric[#{choice}]\" tabindex=\"0\" class=\"hidden\" checked>
           <label>Maybe</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices3(value, choice)

    case choice
    when 'Strongly Agree'
      a='checked'
      b=''
      c=''
      d=''
      e=''
    when 'Agree'
      a=''
      b='checked'
      c=''
      d=''
      e=''
    when 'Disagree'
      a=''
      b=''
      c='checked'
      d=''
      e=''
    when 'Strongly Disagree'
      a=''
      b=''
      c=''
      d='checked'
      e=''
    when 'Not Applicable'
      a=''
      b=''
      c=''
      d=''
      e='checked'
    end
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Agree\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{a}>
           <label>Strongly Agree</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Agree\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{b}>
           <label> Agree</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Disagree\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{c}>
           <label>Disagree</label>
         </div>
       </div>
        <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Strongly Disagree\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{d}>
           <label>Strongly Disagree</label>
         </div>
       </div>
<div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Not Applicable\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\" #{e}>
           <label>Not Applicable</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices4 value, choice

    case choice
    when 'Yes'
      a='checked'
      b=''
      c=''
    when 'No'
      a=''
      b='checked'
      c=''
    when 'Maybe'
      a=''
      b=''
      c='checked'
    end
    @html = "  <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Yes\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{a}>
           <label>Yes</label>
         </div>
       </div>
      <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"No\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\"#{b}>
           <label>No</label>
         </div>
       </div>
    <div class=\"field\">
         <div class=\"ui radio checkbox\">
           <input type=\"radio\" value=\"Maybe\" name=\"rubric[#{value}]\" tabindex=\"0\" class=\"hidden\" #{c}>
           <label>Maybe</label>
         </div>
       </div>".html_safe
    return @html
  end

  def choices5 choice
     case choice
     when 'Used as is'
               a='checked'
               b=''
               c=''
     when 'Used with revision'
               a=''
               b='checked'
               c=''
     when 'Not used'
               a=''
               b=''
               c='checked'
     end

    @hmtl = "<div class=\"field\">
            <div class=\"ui radio checkbox\">
              <input type=\"radio\" value=\"Used as is\" name=\"rubric[overall]\" tabindex=\"0\" class=\"hidden\" #{a}>
              <label>Used as is</label>
            </div>
          </div>
          <div class=\"field\">
            <div class=\"ui radio checkbox\">
              <input type=\"radio\" value=\"Used with revision\" name=\"rubric[overall]\" tabindex=\"0\" class=\"hidden\" #{b}>
              <label> Used with revision</label>
            </div>
          </div>
          <div class=\"field\">
            <div class=\"ui radio checkbox\">
              <input type=\"radio\" value=\"Not used\" name=\"rubric[overall]\" tabindex=\"0\" class=\"hidden\" #{c}
              <label>Not used</label>
            </div>
          </div>".html_safe


  end

 def videotimes
   Videotime.pluck(:time)
 end



end

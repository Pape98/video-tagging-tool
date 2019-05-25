module ApplicationHelper
  def professors
    Professor.pluck(:firstName ,:lastName).map { |name| name.join(" ") }
  end

  def videochoices
    @hmtl = "<tr>
          <td class=\"eleven wide\"></td>
          <td class=\"one wide\"><b>Strongly Agree</b></td>
          <td class=\"one wide\"><b>Agree</b></td>
          <td class=\"one wide\"><b>Disagree</b></td>
          <td class=\"one wide\"><b>Strongly Disagree</b></td>
          <td class=\"one wide\"><b>Strongly Disagree</b></td>
        </tr>".html_safe
  end
end

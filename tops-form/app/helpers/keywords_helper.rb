module KeywordsHelper

  def keywords
    @keywords = Keyword.pluck(:name)
  end

  def keyword_a(keyword)
    keyword = keyword.upcase
    if keyword[0] == 'A'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keyword}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_b(keyword)
    keyword = keyword.upcase
    if keyword[0] == 'B'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keyword}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_c(keyword)
    keyword = keyword.upcase
    if keyword[0] == 'C'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keyword}
          </div>
      </div>".html_safe
      return @html
    end
  end

end

module KeywordsHelper

  def keywords
    @keywords = Keyword.all
  end

  def keyword_a(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'A'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_b(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'B'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_c(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'C'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_d(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'D'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_e(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'E'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_f(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'F'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_g(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'G'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_h(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'H'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_i(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'I'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_j(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'J'
      @html =
          "<div class=\"item\">
          <a data-confirm=\"Are you sure?\" rel=\"nofollow\"
            data-method=\"delete\" href=\"/keywords/#{keyword.id}\">
            <i class=\"red delete icon\"></i></a>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_k(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'K'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_l(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'L'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_m(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'M'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_n(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'N'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_o(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'O'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_p(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'P'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_q(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'Q'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_r(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'R'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_s(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'S'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_t(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'T'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_u(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'U'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_v(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'V'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_w(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'W'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_x(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'X'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

  def keyword_y(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'Y'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end
  def keyword_z(keyword)
    keywordString = keyword.name.upcase
    if keywordString[0] == 'Z'
      @html =  "<div class=\"item\">
      <i class=\"red delete icon\"></i>
          <div class=\"content\">
            #{keywordString}
          </div>
      </div>".html_safe
      return @html
    end
  end

end

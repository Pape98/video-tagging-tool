module ApplicationHelper
  def professors
    Professor.pluck(:firstName ,:lastName).map { |name| name.join(" ") }
  end
end

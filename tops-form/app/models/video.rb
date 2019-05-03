class Video
  include Mongoid::Document
  field :link, type: String
  field :presenter, type: String
  field :cuts, type: String
  field :section, type: String
  field :topic, type:String
  field :courses, type:Array
  field :keywords, type:Array
end

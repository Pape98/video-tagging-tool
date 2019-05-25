class Video
  include Mongoid::Document
  field :link, type: String, default:""
  field :presenter, type: String, default:""
  field :cuts, type: String, default:""
  field :section, type: String, default:""
  field :topic, type:String, default:""
  field :courses, type:Array,default: []
  field :keywords, type:Array,default: []
  field :cuts, type:Array,default: []
  field :lastEdit, type:String
end

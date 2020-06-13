class Rubric
  include Mongoid::Document

  belongs_to :video

  field :author, type:String
  field :voice, type:String
  field :noise, type:String
  field :volume, type:String
  field :enhacements, type:String
  field :overallSmooth, type:String
  field :transition, type:String
  field :sharpFocus, type:String
  field :effects, type:String
  field :symbol, type:String
  field :informationMinimized, type:String
  field :conveyMessage, type:String
  field :wordingAccurate, type:String
  field :wordingAppropriate, type:String
  field :contentAccurate, type:String
  field :contentOrganized, type:String
  field :contentRelevant, type:String
  field :sequencing, type:String
  field :weblinks, type:String
  field :graphicsEffective, type:String
  field :graphicsDistraction, type:String
  field :graphicsQuality, type:String
  field :graphicsAppropriate, type:String
  field :textAppropriate, type:String
  field :textConsistent, type:String
  field :textAmount, type:String
  field :background, type:String
  field :interactive, type:String
  field :studentControl, type:String
  field :shownPresenter, type:String
  field :videoLength, type:String
  field :personal, type:String
  field :moving, type:String
  field :engaging, type:String
  field :normalPace, type:String
  field :enunciation, type:String
  field :problem, type:String
  field :lecture, type:String
  field :review, type:String
  field :concept, type:String
  field :supplementary, type:String
  field :print, type:String
  field :view, type:String
  field :use, type:String
  field :overall, type:String
end

class Professor
  include Mongoid::Document
  field :firstName, type: String
  field :lastName, type: String
end

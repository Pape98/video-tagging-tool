# -*- encoding: utf-8 -*-
# stub: active_reload 0.6.1 ruby lib

Gem::Specification.new do |s|
  s.name = "active_reload".freeze
  s.version = "0.6.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Robert Pankowecki".freeze]
  s.date = "2011-10-08"
  s.description = "Reload Rails code in development mode only when change is deteced".freeze
  s.email = ["robert.pankowecki@gmail.com".freeze]
  s.homepage = "https://github.com/paneq/active_reload".freeze
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Reload Rails code in development mode only when change is deteced".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<active_support>.freeze, [">= 0"])
      s.add_development_dependency(%q<bbq>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<active_support>.freeze, [">= 0"])
      s.add_dependency(%q<bbq>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<active_support>.freeze, [">= 0"])
    s.add_dependency(%q<bbq>.freeze, [">= 0"])
  end
end

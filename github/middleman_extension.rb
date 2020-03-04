require 'github/repo_data'
require 'github/helper'

module Github
  class MiddlemanExtension < Middleman::Extension
    self.defined_helpers = [ Helper ]

    def initialize(app, options_hash={}, &block)
      super
    end

    def after_configuration
      github = RepoData.new(app, self)
      app.set :github, github
      app.sitemap.register_resource_list_manipulator(:projects, github, false)
    end
  end
end

::Middleman::Extensions.register(:github, Github::MiddlemanExtension)

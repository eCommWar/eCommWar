require 'github/repo_data'
require 'github/helper'

module Github
  class MiddlemanExtension < Middleman::Extension
    expose_to_application :github
    self.defined_helpers = [ Helper ]

    def initialize(app, options_hash={}, &block)
      super
    end

    def github
      RepoData.new(app, self)
    end
    
    def after_configuration
      app.sitemap.register_resource_list_manipulator(:projects, github, false)
    end
  end
end

::Middleman::Extensions.register(:github, Github::MiddlemanExtension)

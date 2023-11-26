require 'github/repo_data'
require 'github/helper'

module Github
  class MiddlemanExtension < Middleman::Extension
    attr_reader :data

    expose_to_template github: :data

    self.defined_helpers = [ Helper ]

    def initialize(app, options_hash={}, &block)
      super
      @data = RepoData.new(app, self)
    end
    
    def after_configuration
      app.sitemap.register_resource_list_manipulator(:projects, @data, false)
    end
  end
end

::Middleman::Extensions.register(:github, Github::MiddlemanExtension)

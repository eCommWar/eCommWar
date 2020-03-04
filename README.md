# eCommWar

[eCommWar.com](https://www.ecommwar.com), a leaderboard of top open-source e-commerce platforms.

## Contributing

Missing an e-commerce platform here? Just fork the repo and add your platform
as a `<name>.md` in the `source/projects` folder.

Make sure to follow the following rules:

- **Open Source:** The platform must have a public repository on Github that we can link to and pull in stats from.
- **Stick to the format:** Fill out all the same fields as the other e-commerce platforms in `source/projects`.
- **Short description:** Keep all the details for the body text, keep the description for the overview page short and sweet.

## Dependencies

### Debian/Ubuntu

`sudo apt install ruby-bundler ruby-dev`

### Other

Check whether ruby could compile `native extensions`.

`middleman` depends on `nokogiri` which needs to compile native extension.

## Running locally

eCommWar is built with Middleman. To install and run locally:

```
    git clone https://github.com/eCommWar/eCommWar.git
    cd eCommWar
    bundle install --path vendor/bundle
    bundle exec middleman
```

You'll run into GitHub's API limits very quickly if you just do this. To avoid this we recommend you create a Github API token with permissions to access public repositories and Gist.

Then create a Gist with a single file `data.json` with an empty javascript object literal as content: {}

Then set these environment variables before running middleman:

```
    export GITHUB_TOKEN=YOUR_TOKEN
    export GIST_ID=ID_OF_YOUR_GIST
```

Then middleman will use the Gist you specified to archive stats (stars, forks and issues) for the repositories.

## License

This project is licensed under the [MIT license](http://opensource.org/licenses/MIT).

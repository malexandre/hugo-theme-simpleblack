# Clean and light theme for Hugo

I wanted a simple, light and complete theme for Hugo. The full CSS is only 7kb, and the base skeleton is around 8kb. Everything else will be the content.

## Why a new theme

I wanted the most simple & light theme. I make it for Pelican a few years back, but never published it. Now I'm porting it to Hugo, as I will use Hugo for my future blog. It's similar to Hyde, Blackburn and others, but with small diffences and optimizations to be sure to load as fast as possible, even on mobile.

## Screenshots & Demo

TODO

## Installation

TODO

## Configuration

This options are available on your `config.toml`:

```toml
[params]
  subtitle = "The site description in the sidebar. It can be as long as you want."
  author = "Your Name"
  avatar = "/avatar.jpeg"  # Root is your static folder
  email = "your@email.com"
  themepath = "themes/simpleblack"  # Use this params if you want to inline the CSS in the <head>
```

You should have a content for your `/about`.

## Formatting rules

If you do not specify styles/classes yourself, images will be displayed in block and centered.

## Future of the theme

- [X] Fix inline CSS path
- [ ] Better categories pages
- [ ] Robots.txt
- [ ] Link to Github, Twitter, others
- [ ] Disqus (async for better loading performance)
- [ ] Google Analytics (async for better loading performance)
- [ ] Adding an "author box" at the end of each post
- [ ] Class for inline images
- [ ] Image lazyloading
- [ ] Customizable menu? Maybe just about?

## Contribute

To build your CSS, use `npm` or `yarn`:

```bash
npm install
gulp
```

or

```bash
yarn
gulp
```

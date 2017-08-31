# Clean and light theme for Hugo

I wanted a simple, light and complete theme for Hugo. The full CSS is only 7kb, and the base skeleton with css inlined is around 10kb. Everything else will be your content.

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
  authorDescription = "Your description for the Author box at the end of posts"
  avatar = "/avatar.jpeg"  # Root is your static folder
  email = "your@email.com"
  themepath = "themes/simpleblack"  # Use this params if you want to inline the CSS in the <head>
```

You need to have `about.md` inside your content folder.

If you want to have links to your social profiles (Github for example), create a partial `social-links.html`. It will override the default empty partial. I didn't want to include `font-awesome` to the theme to not include unused fonts & css. For my own blog, I'm using a subset build with [http://fontello.com/](http://fontello.com/) to use icons only for the profiles I want.

If you want to add additional data in your `<head>` (like new css files for `font-awesome`), create a partial `customizable-head.html`.

If you want to add additional data at the end of your `<body>` (like new js files), create a partial `customizable-end-of-body.html`.

## Formatting rules

If you do not specify styles/classes yourself, images will be displayed in block and centered.

## Future of the theme

- [X] Fix inline CSS path
- [X] Better categories pages
- [X] Link to Github, Twitter, others
- [X] Disqus (async for better loading performance)
- [X] Google Analytics (async for better loading performance)
- [X] Adding an "author box" at the end of each post
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

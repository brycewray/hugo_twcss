# Hugo starter set

This is a starter set for the [Hugo](https://gohugo.io) [static site generator (SSG)](https://staticgen.com), based on the look-and-feel of my website at [brycewray.com](https://www.brycewray.com). **Note**: This repo **does NOT** use [Hugo Modules](https://gohugo.io/hugo-modules/).

See the [online demo](https://hugo-twcss.vercel.app/).

## How to use

1. Clone this to a local repo.
2. Make appropriate changes to `config.yaml` to conform to your site’s parameters.
3. Run `npm install` to load all the dependencies in `package.json`.
4. Once you have [installed Hugo](https://gohugo.io/getting-started/installing/), run `npm run start` from your terminal app. You can then view the site in [http://localhost:1313](http://localhost:1313) on your computer.
5. Read the sample posts and their Markdown files to see how everything works.
6. Edit the content to make it your own!
7. When ready, [deploy the site](https://gohugo.io/hosting-and-deployment/) to your chosen host. The `build` command is `npm run build`. (For local testing, you can use `npm run testbuild` to set the environment to `production`; see “What’s under the hood,” below.)


## What’s under the hood

For Hugo users unused to dealing with JavaScript from [Node.js](https://nodejs.org) plugins and dependencies, this repo may not be your cup of tea, and that’s perfectly understandable.* However, if you’re willing to take a trip to the Dark Side, it does offer some interesting add-on possibilities. (That said, Hugo’s single-binary, nearly-everything-out-of-the-box approach has served it well and is impressive.) In `package.json`, you’ll find dependencies that make possible the use of [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com). (**Note**: Tailwind’s [built-in use](https://tailwindcss.com/docs/controlling-file-size) of [PurgeCSS](https://purgecss.com/) works **only** in a **production** environment—so, if you want to check that during local testing, use the `npm run testbuild` script in `package.json`.)

In addition, there’s:

- Lazy-loading of in-body images through use of [lazyload](https://github.com/verlok/vanilla-lazyload).
- Responsive images through Hugo’s [built-in image processing capabilities](https://gohugo.io/content-management/image-processing/), using code borrowed shamelessly (and, where necessary, adapted for later versions of Hugo) from Stereobooster’s “[Responsive images for Hugo](https://dev.to/stereobooster/responsive-images-for-hugo-dn9)” and Strict Panda’s “[Using Image Processing to Load Images in Hugo](https://blog.strict-panda.com/post/image-processing-media-queries/).” (The **real** site’s repo uses [Cloudinary](https://cloudinary.com) rather than having the images in the repo and processing them as such.)

*Effective 2021-06-17, development on this repository will be* ***on hold*** *at least until Hugo is compatible with Tailwind CSS’s Just-in-Time mode (see [Hugo issue 8343](https://github.com/gohugoio/hugo/issues/8343)).*

\* If you don’t care for dealing with Node.js dependencies, you may be interested in another Hugo repo, [hugo_solo](https://github.com/brycewray/hugo_solo), which offers the same lazy-loading and image processing **but** uses [SCSS](https://sass-lang.com/) [through Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) instead of Tailwind CSS and PostCSS.
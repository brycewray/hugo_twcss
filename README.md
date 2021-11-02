# Hugo starter set

**Note**: Further development suspended as of 2021-09-11 **but**, on 2021-11-02, I went back in and made the repo compatible with [Tailwind CSS’s just-in-time (JIT) mode](https://tailwindcss.com/docs/just-in-time-mode). For details on how I did this, see “[Making Tailwind JIT work with Hugo](https://www.brycewray.com/posts/2021/11/making-tailwind-jit-work-hugo).”

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

For Hugo users unused to dealing with JavaScript from [Node.js](https://nodejs.org) plugins and dependencies, this repo may not be your cup of tea, and that’s perfectly understandable.* However, if you’re willing to take a trip to the Dark Side, it does offer some interesting add-on possibilities. (That said, Hugo’s single-binary, nearly-everything-out-of-the-box approach has served it well and is impressive.) In `package.json`, you’ll find dependencies that make possible the use of [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).

In addition, there’s:

- Lazy-loading of in-body images through use of [lazyload](https://github.com/verlok/vanilla-lazyload).
- Responsive images through Hugo’s [built-in image processing capabilities](https://gohugo.io/content-management/image-processing/), using code borrowed shamelessly (and, where necessary, adapted for later versions of Hugo) from Stereobooster’s “[Responsive images for Hugo](https://dev.to/stereobooster/responsive-images-for-hugo-dn9)” and Strict Panda’s “[Using Image Processing to Load Images in Hugo](https://blog.strict-panda.com/post/image-processing-media-queries/).” (The **real** site’s repo uses [Cloudinary](https://cloudinary.com) rather than having the images in the repo and processing them as such.)

\* If you don’t care for dealing with Node.js dependencies, you may be interested in another Hugo repo, [hugo_solo](https://github.com/brycewray/hugo_solo), which offers the same lazy-loading and image processing **but** uses [SCSS](https://sass-lang.com/) [through Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) instead of Tailwind CSS and PostCSS.
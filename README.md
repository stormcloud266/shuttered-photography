# Shuttered Photography
A simple, clean photography portfolio site with a dark UI. Features a blog connected to Netlify's CMS, lazy loaded images, and a contact form.

[View Website](https://shuttered-photography.netlify.app/)

![](https://github.com/stormcloud266/gatsby-photography/blob/master/screenshot.gif)

### Challenges and Goals
I created this project with two main challenges in mind:
* Connect a Gatsby site to a content management system and generate blog posts from that CMS
* Practice making responsive layouts using CSS Grid

In addition to these main challenges, I also wanted to practice styling a dark theme website and implement Gatsby Image for lazy loading images.

### Solution
I decided to use Netlify's open source CMS to organize my data. It integrates well with Github and Netlify hosting. Netlify CMS generates markdown files that are saved in my projects repo, and Gatsby takes these files, runs them through a template, and produces a website page for each file.

The services and blog page images are lazy loaded using Gatsby Image, and the blog posts page and portfolio are styled using CSS Grid. 

### Project Details
* Front end: [Gatsby](https://www.gatsbyjs.com/)
* Content management: [Netlify CMS](https://www.netlifycms.org/)
* Hosting: [Netlify](https://www.netlify.com/)

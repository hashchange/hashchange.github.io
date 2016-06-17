---
layout: default
title: Projects by hashchange
---

# Hacking the Front End

Hi. [I'm Michael][zw].

As the list of my open-source projects continues to grow, they have finally reached a point where an overview might be helpful. That's what this page is for.

#### What has made it on the list?

The projects below meet a certain standard. They are covered by an extensive test suite, I have reviewed them for their performance, and they are mature enough to have reached version 1.0, at the very least. All of them are safe to use in production.

If you are interested in experimental stuff as well, please head over to my [regular Github page][github] and check if anything is there.

#### Getting in Touch

Apart from [Github][github], you can get hold of me in a couple of other places, where I show up at random.

| [<span class="fa-icon fa-font"></span>][twitter] | [Twitter][twitter] | [<span class="fa-icon fa-font"></span>][so] | [Stack Overflow][so] |
| [<span class="fa-icon fa-font"></span>][google] | [Google+][google] | [<span class="fa-icon fa-font"></span>][zw] | [Zeilenwechsel.de][zw] |

If you'd like to get in touch, please do. You are welcome.

## Backbone and Marionette

### [Backbone.Select][bbsel]

A set of mixins for Backbone models and collections. Models gain the ability to be selected, and collections handle those selections.

- Collections either allow only a single model to be selected (Backbone.Select.One mixin), or cater for multiple selections (Backbone.Select.Many). 
- Events communicate selections and deselections to other parts of your application. 
- In model-sharing mode, models can be part of more than one collection. Backbone.Select will keep selections of shared models in sync and guarantee consistency in even the most complex scenarios.

[Project on Github, documentation][bbsel] \| [code example][bbsel-example] \| interactive demo ([JSBin][bbsel-jsbin], [Codepen][bbsel-codepen])

### [Backbone.Cycle][bbcy]

A set of mixins for Backbone models and collections. Adds methods for selecting Backbone models, and for navigating collections. 

Backbone.Cycle is built on top of [Backbone.Select][local-bbsel] ([see comparison](https://github.com/hashchange/backbone.cycle#backbonecycle-vs-backboneselect)). 

- Models gain the ability to be selected, and collections handle those selections. See [Backbone.Select][local-bbsel].
- Models can be shared across multiple collections, and selections are synced among them.
- Methods for navigating a collection are also part of the package, such as `model.ahead(3)`, `collection.selectNext()`, `collection.prev()`, `collection.prevNoLoop()`.
- You can enable predefined, common behaviours, like always selecting the first item in a new collection, or selecting the previous model when a selected model is removed. 

[Project on Github, documentation][bbcy] \| [code example][bbcy-example] \| interactive demo ([JSBin][bbcy-jsbin], [Codepen][bbcy-codepen])

### [Backbone.Declarative.Views][bbdv]

Defines the DOM element of a Backbone view right in the template. Keeps the tag name, class name and other attributes of `el` out of Backbone.View Javascript code. ([Read why.][bbdv-1])

Core functionality:

- You can read the markup for the container element of a view directly [from its template][bbdv-2]. 
- Works entirely behind the scenes. Just load Backbone.Declarative.Views into your project, and start declaring the view attributes in the HTML of your templates.
- Fully compatible with existing code. Does not interfere with "traditional" ways to define an `el` in Javascript. Does not break existing templates.
- Works seamlessly with frameworks built on top of Backbone, such as Marionette.
- Is very fast, thanks to template caching.

Additional benefits:

- Provides a Javascript API for [tapping into the template cache][bbdv-3]. Speeds up view creation, sometimes massively so. 
- If you tell it which template compiler to use, it will compile the templates for you and cache the compiled version. Makes your app even faster.

[Project on Github, documentation][bbdv] \| [code example][bbdv-example] \| interactive demos: plain Backbone ([JSBin][bbdv-jsbin-plain], [Codepen][bbdv-codepen-plain]), Marionette ([JSBin][bbdv-jsbin-marionette], [Codepen][bbdv-codepen-marionette])

### [Backbone.Marionette.Export][bbme]

Exposes Backbone model and collection methods to templates.

- Provides a simple, declarative syntax to define which methods of a model, or of a collection, provide their output to templates.
- Adds hooks for modifying the data before it is handed to a template.

The name of the plugin has turned out to be a bit of a misnomer, though. Backbone.Marionette.Export does not depend on Marionette and is [just as useful](https://github.com/hashchange/backbone.marionette.export#but-i-dont-use-marionette) in projects based on plain Backbone.

[Project on Github, documentation][bbme] \| [code examples][bbme-example] \| interactive demo ([JSBin][bbme-jsbin], [Codepen][bbme-codepen])

### [Marionette.Handlebars][mhlb]

Adds support for Handlebars and Mustache templates to Marionette.

- Does its job entirely behind the scenes – load it, and you are all set.
- Supports precompiled templates as well.
- Provides an extension point enabling you to lazy-load templates.

[Project on Github, documentation][mhlb]

## DOM and jQuery

### [jQuery.documentSize][jqds]

Detects the real width and height of the document. And the real width and height of the browser window. ([Read why this is necessary.][jqds-why])

- Works cross-browser, and returns the correct result in even the most exotic scenarios. It resolves the [shortcomings of jQuery][jqds-why] in that regard.
- Handles pinch zooming on mobile, and resolves iOS bugs, when determining the window size. 
- Supports both the [visual viewport and the layout viewport][jqds-viewports].
- Also returns the zoom level on mobile (pinch zooming).
- Is written in pure Javascript. You can use it without jQuery, too.
- An auto-generated, massive test suite covers all edge cases and combinations thereof, guaranteeing reliability.

[Project on Github, documentation][jqds] \| interactive demo ([JSBin][jqds-jsbin], [Codepen][jqds-codepen])

### [jQuery.isInView][jqiv]

Tells you if elements are in view inside a scrollable container, or inside a container hiding its overflow. 

- Provides [filters][jqiv-filters], [boolean queries][jqiv-bool], and an [`:inViewport` selector][jqiv-selector].
- Stringently optimized for performance and ridiculously fast.
- Fine-grained, intuitive [options][jqiv-opts] for full or partial visibility, box model, tolerance etc.
- Exposes useful helpers detecting the presence of scroll bars, and the space taken up by them.
- Works with respect to the viewport, iframes, or other scrollable elements.

[Project on Github, documentation][jqiv] \| [code example][jqiv-example] \| interactive demo ([JSBin][jqiv-jsbin], [Codepen][jqiv-codepen]) \| [performance test and comparison][jqiv-perf-jsbin]

### [jQuery.scrollable][jqscroll]

Manages animated scrolling in windows, scrollable elements and iframes. ([Read why jQuery.animate() isn't enough.][jqscroll-why])

- Handles browser inconsistencies.
- Respects user actions. Stops if the user clicks, taps, or tries to scroll.
- Gives you a choice for [handling overlapping calls][jqscroll-overlap].
- Provides flexible, intuitive scrolling options (relative targets, percentages, keywords, simultaneous or successive scrolling, etc).
- Supports smart speed adjustments, ensuring a fluid animation for short scroll distances.
- Runs in a dedicated animation queue so as not to interfere with other animations on the page.
- Exposes useful helpers to detect the maximum scrollable distance and the scrollable element.

[Project on Github, documentation][jqscroll] \| interactive demo ([JSBin][jqscroll-jsbin], [Codepen][jqscroll-codepen])

### [jQuery.Promises][jqpromises]

Groups related jQuery Deferreds, managing them collectively.

- Helps to collect Deferreds and add new ones later on.
- Can block and delay the resolution of the collection, until the collection is unblocked later on at a convenient time.
- Because of that, Deferreds can be added to the collection piecemeal, even when the collection itself has already been passed to `$.when`. Is protected from premature resolution.

[Project on Github, documentation][jqpromises] \| [code example][jqpromises-example]


[zw]: http://www.zeilenwechsel.de/ "Zeilenwechsel.de"
[zw-contact]: http://www.zeilenwechsel.de/general/contact.php "Zeilenwechsel.de – Contact Me"
[github]: https://github.com/hashchange "hashchange on Github"
[twitter]: https://twitter.com/hashchange "@hashchange on Twitter"
[so]: http://stackoverflow.com/users/508355/hashchange "hashchange on Stack Overflow"
[google]: https://plus.google.com/+MichaelHeim/posts "Michael on Google+"

[bbsel]: https://github.com/hashchange/backbone.select "Backbone.Select – Github"
[bbsel-example]: https://github.com/hashchange/backbone.select#an-introductory-example "Code example – Backbone.Select"
[bbsel-jsbin]: http://jsbin.com/xosepu/2/edit?js,output "Backbone.Select demo (AMD) – JSBin"
[bbsel-codepen]: http://codepen.io/hashchange/pen/yNdbgR "Backbone.Select demo (AMD) – Codepen"

[bbcy]: https://github.com/hashchange/backbone.cycle "Backbone.Cycle – Github"
[bbcy-example]: https://github.com/hashchange/backbone.cycle#the-gist-of-it "Code example – Backbone.Cycle"
[bbcy-jsbin]: http://jsbin.com/johoha/2/edit?js,output "Backbone.Cycle demo (AMD) – JSBin"
[bbcy-codepen]: http://codepen.io/hashchange/pen/OVeovy "Backbone.Cycle demo (AMD) – Codepen"

[bbdv]: https://github.com/hashchange/backbone.declarative.views "Backbone.Declarative.Views – Github"
[bbdv-example]: https://github.com/hashchange/backbone.declarative.views#core-functionality "Core functionality and examples – Backbone.Declarative.Views"
[bbdv-jsbin-plain]: http://jsbin.com/laxequ/2/edit?html,js,output "Backbone.Declarative.Views demo, using plain Backbone (AMD) – JSBin"
[bbdv-codepen-plain]: http://codepen.io/hashchange/pen/gpNdKp "Backbone.Declarative.Views demo, using plain Backbone (AMD) – Codepen"
[bbdv-jsbin-marionette]: http://jsbin.com/sopobo/3/edit?html,js,output "Backbone.Declarative.Views demo, using Marionette (AMD) – JSBin"
[bbdv-codepen-marionette]: http://codepen.io/hashchange/pen/vOqzPY "Backbone.Declarative.Views demo, using Marionette (AMD) – Codepen"

[bbdv-1]: https://github.com/hashchange/backbone.declarative.views#why-use-it "Backbone.Declarative.Views: Why use it?"
[bbdv-2]: https://github.com/hashchange/backbone.declarative.views#define-an-el-with-data-attributes-in-the-html "Define an `el` in the HTML – Backbone.Declarative.Views"
[bbdv-3]: https://github.com/hashchange/backbone.declarative.views#performance-use-the-template-cache "Performance: Use the template cache – Backbone.Declarative.Views"
[bbdv-4]: https://github.com/hashchange/backbone.declarative.views#keeping-compiled-templates-in-the-cache "Keeping compiled templates in the cache"

[bbme]: https://github.com/hashchange/backbone.marionette.export "Backbone.Marionette.Export – Github"
[bbme-example]: https://github.com/hashchange/backbone.marionette.export#usage-and-examples "Code examples – Backbone.Marionette.Export"
[bbme-jsbin]: http://jsbin.com/hoyome/6/edit?js,output "Backbone.Marionette.Export demo (AMD) – JSBin"
[bbme-codepen]: http://codepen.io/hashchange/pen/jPjvoG "Backbone.Marionette.Export demo (AMD) – Codepen"

[mhlb]: https://github.com/hashchange/marionette.handlebars "Marionette.Handlebars – Github"

[jqds]: https://github.com/hashchange/jquery.documentsize "jQuery.documentSize – Github"
[jqds-why]: https://github.com/hashchange/jquery.documentsize#what-does-it-do-that-jquery-doesnt "jQuery.documentSize: What does it do that jQuery doesn't?"
[jqds-viewports]: http://www.quirksmode.org/mobile/viewports2.html "Quirksmode.org: A tale of two viewports"
[jqds-jsbin]: http://jsbin.com/dujuyi/2 "jQuery.documentSize demo, using Zepto (AMD) – JSBin"
[jqds-codepen]: http://codepen.io/hashchange/full/xGomQQ "jQuery.documentSize demo, using Zepto (AMD) – Codepen"

[jqiv]: https://github.com/hashchange/jquery.isinview "jQuery.isInView – Github"
[jqiv-filters]: https://github.com/hashchange/jquery.isinview#filters "Filters – jQuery.isInView"
[jqiv-bool]: https://github.com/hashchange/jquery.isinview#boolean-queries "Boolean queries – jQuery.isInView"
[jqiv-selector]: https://github.com/hashchange/jquery.isinview#inviewport-selector ":inViewport selector – jQuery.isInView"
[jqiv-opts]: https://github.com/hashchange/jquery.isinview#options "Options – jQuery.isInView"
[jqiv-example]: https://github.com/hashchange/jquery.isinview#usage-by-example-lazy-loading "Usage by example: Lazy loading – jQuery.isInView"
[jqiv-jsbin]: http://jsbin.com/legice/6/edit?js,output "jQuery.isInView demo (AMD) – JSBin"
[jqiv-codepen]: http://codepen.io/hashchange/pen/LVKqPK "jQuery.isInView demo (AMD) – Codepen"
[jqiv-perf-jsbin]: http://jsbin.com/lisudi/3 "jQuery.isInView: Performance Test and Comparison (with isInViewport, jquery.visible, jquery_lazyload, hunt) - JS Bin"

[jqscroll]: https://github.com/hashchange/jquery.scrollable "jQuery.scrollable – Github"
[jqscroll-why]: https://github.com/hashchange/jquery.scrollable#why "jQuery.scrollable: Why?"
[jqscroll-overlap]: https://github.com/hashchange/jquery.scrollable#starting-a-scroll-movement-while-another-one-is-still-in-progress "Starting a scroll movement while another one is still in progress – jQuery.scrollable"
[jqscroll-jsbin]: http://jsbin.com/kurevu/2 "jQuery.scrollable demo (AMD) – JSBin"
[jqscroll-codepen]: http://codepen.io/hashchange/full/KpjLMo "jQuery.scrollable demo (AMD) – Codepen"

[jqpromises]: https://github.com/hashchange/jquery.promises "jQuery.Promises – Github"
[jqpromises-example]: https://github.com/hashchange/jquery.promises#making-promises-is-easy---postponing-them-too "Making Promises is easy – postponing them, too | jQuery.Promises"

[local-bbsel]: #backboneselectbbsel "Backbone.Select"


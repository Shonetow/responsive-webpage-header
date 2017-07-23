# Responsive Webpage Header

A simple responsive webpage header template.

[Demo](http://tired-can.surge.sh)

## Usage

Use _header.css_ file from _dist_ folder or import _header.scss_ into your .scss file.
There's a few lines of JavaScript code that you need to include as well.

You can change SASS variables to adapt header to your needs.

### Options:

- Background color of header and nav list
- Space around content
- Logo height
- Breakpoint (There is only one breakpoint and by default it is 968px)
- Menu btn size

### HTML structure

```html
<header class="main-header">
    <!-- Logo -->
    <div class="logo">
        <!--<h1><a href="#">ResponsiveHeader</a></h1>-->
        <div><a href="#"><img src="/images/logo.svg" alt="ResponsiveHeader"></a></div>
    </div>

    <!-- Navigation -->
    <nav class="navigation">
        <span class="btn-menu">Menu</span>
        <ol class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our work</a></li>
            <li><a href="#">Contact</a></li>
        </ol>
    </nav>
</header>
```

## Contributing

Yes please!

## License

Licensed under MIT/GPL.

GPL2 license:
http://www.gnu.org/licenses/gpl-2.0.html

MIT license:
http://www.opensource.org/licenses/mit-license.php
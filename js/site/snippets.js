$( function () {

    createHeaderAnchorLinks();
    initHamburgerIcon();

} );

/**
 * Creates anchor links for each header, based on its ID, and shows a "link" symbol on hover.
 *
 * Used in conjunction with the relevant CSS in _user-modifications.scss.
 *
 * For a first draft of the snippet, see http://ben.balter.com/2014/03/13/pages-anchor-links/ (but is modified here)
 */
function createHeaderAnchorLinks () {

    var iconHtml = '<i class="fa-font fa-link"></i>';

    $( "h2, h3, h4, h5, h6" ).each( function ( index, elem ) {
        var $elem = $( elem ),
            id = elem.id;

        if ( id ) $elem.prepend(
            $( "<a />" )
                .addClass( "header-link" )
                .attr( "href", "#" + id )
                .html( iconHtml )
        );
    } );

}

function initHamburgerIcon () {
    var $hamburger = $( ".menu-icon" ),
        $navLinks = $( ".nav-links" ),

        toggleNav = function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            $navLinks.toggle();
        };

    $hamburger.on( "click", toggleNav );

    // Hide the navigation links if the user clicks or taps elsewhere (only on mobile, ie when the hamburger icon is
    // visible).
    //
    // NB In iOS, the body does not respond to click events properly. A workaround with touchstart events is clunky and
    // unreliable. Instead, we just listen to the click event on all immediate children of the body - that works.
    $( "body, body>*" ).on( "click", function () {
        if ( $hamburger.is( ":visible" ) ) $navLinks.hide();
    } );
}

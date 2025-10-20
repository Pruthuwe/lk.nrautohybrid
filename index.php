<?php

$TEMPLATE_LOAD = __DIR__ . '/templates';


$APP_ROOT = '/lk.nrautohybrid';

// Get only the path from the full request URI, ignoring query strings
$REQUEST_URI = $_SERVER['REQUEST_URI'];
$parsed_url = parse_url($REQUEST_URI, PHP_URL_PATH);
$request = rtrim($parsed_url, '/');

// Check and serve appropriate pages based on the clean request URI
if ($request === $APP_ROOT) {
    require $TEMPLATE_LOAD . '/home.tpl.php';
} else if ($request === $APP_ROOT . '/about') {
    require $TEMPLATE_LOAD . '/about.tpl.php';
} else if ($request === $APP_ROOT . '/contact') {
    require $TEMPLATE_LOAD . '/contact.tpl.php';
} else if ($request === $APP_ROOT . '/service') {
    require $TEMPLATE_LOAD . '/service.tpl.php';
} else if ($request === $APP_ROOT . '/service-details') {
    require $TEMPLATE_LOAD . '/service-details.tpl.php';
} else if ($request === $APP_ROOT . '/blog-details-left-sidebar') {
    require $TEMPLATE_LOAD . '/blog-details-left-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/blog-details-right-sidebar') {
    require $TEMPLATE_LOAD . '/blog-details-right-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/blog-grid') {
    require $TEMPLATE_LOAD . '/blog-grid.tpl.php';
} else if ($request === $APP_ROOT . '/blog-left-sidebar') {
    require $TEMPLATE_LOAD . '/blog-left-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/blog-right-sidebar') {
    require $TEMPLATE_LOAD . '/blog-right-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/cart') {
    require $TEMPLATE_LOAD . '/cart.tpl.php';
} else if ($request === $APP_ROOT . '/checkout') {
    require $TEMPLATE_LOAD . '/checkout.tpl.php';
} else if ($request === $APP_ROOT . '/compare') {
    require $TEMPLATE_LOAD . '/compare.tpl.php';
} else if ($request === $APP_ROOT . '/empty-cart') {
    require $TEMPLATE_LOAD . '/empty-cart.tpl.php';
} else if ($request === $APP_ROOT . '/faq') {
    require $TEMPLATE_LOAD . '/faq.tpl.php';
} else if ($request === $APP_ROOT . '/login') {
    require $TEMPLATE_LOAD . '/login.tpl.php';
} else if ($request === $APP_ROOT . '/my-account') {
    require $TEMPLATE_LOAD . '/my-account.tpl.php';
} else if ($request === $APP_ROOT . '/our-team') {
    require $TEMPLATE_LOAD . '/our-team.tpl.php';
} else if ($request === $APP_ROOT . '/product-details-left-sidebar') {
    require $TEMPLATE_LOAD . '/product-details-left-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/product-details-right-sidebar') {
    require $TEMPLATE_LOAD . '/product-details-right-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/project-details') {
    require $TEMPLATE_LOAD . '/project-details.tpl.php';
} else if ($request === $APP_ROOT . '/project-gallery') {
    require $TEMPLATE_LOAD . '/project-gallery.tpl.php';
} else if ($request === $APP_ROOT . '/register') {
    require $TEMPLATE_LOAD . '/register.tpl.php';
} else if ($request === $APP_ROOT . '/shop-grid') {
    require $TEMPLATE_LOAD . '/shop-grid.tpl.php';
} else if ($request === $APP_ROOT . '/shop-left-sidebar') {
    require $TEMPLATE_LOAD . '/shop-left-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/shop-right-sidebar') {
    require $TEMPLATE_LOAD . '/shop-right-sidebar.tpl.php';
} else if ($request === $APP_ROOT . '/team-profile') {
    require $TEMPLATE_LOAD . '/team-profile.tpl.php';
} else if ($request === $APP_ROOT . '/wishlist') {
    require $TEMPLATE_LOAD . '/wishlist.tpl.php';
} else {
    // Redirect to 404 page if no matching route is found
    header('Location: ' . $APP_ROOT . '/error-404');
}
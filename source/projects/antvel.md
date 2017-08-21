---
title: Antvel
repo: ant-vel/App
homepage: N/A
demo: http://antvel.com
language: PHP
framework: Laravel 5.*
license: MIT
description: Laravel e-commerce Application.
---

## Antvel Introduction

<a href="https://packagist.org/packages/ant-vel/Shop"><img src="https://img.shields.io/packagist/dt/antvel/shop.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/ant-vel/Shop"><img src="https://img.shields.io/packagist/v/antvel/shop.svg" alt="Latest Stable Version"></a>
<a href="https://github.com/ant-vel/Shop"><img src="https://img.shields.io/badge/Core%20Package-Shop-brightgreen.svg" alt="Latest Stable Version"></a>


***Antvel*** is an ecommerce project written in Laravel 5.* intended for building a friendly eStore either for startups or big companies.

In spite of ***Antvel*** seems to be a whole couple app, it is powered by its <a href="https://github.com/ant-vel/Shop" target="_blank">core shop</a> which is a package that allows you to build a complete e-commerce based application for your needs.

***Antvel*** is in current development, receiving a ```whole rewrite``` from top to bottom toward a more stable platform where you might feel comfortable to walk along with.


<a name="installation"></a>
## Installation

Antvel uses [Composer](https://getcomposer.org) to manage its dependencies. So, before using it, make sure you have Composer installed on your machine.


First, download the Antvel installer through Composer:

    composer global require "antvel/installer"

Make sure to place the `$HOME/.composer/vendor/bin` directory (or the equivalent directory for your OS) in your $PATH so the `antvel` executable can be located by your system.

Once installed, the `antvel install` command will create a fresh copy of the project in the directory you provided. For example, `antvel install` will create a directory named `App-master` containing a fresh Antvel installation with all of its dependencies already installed:

    antvel install


<a href="https://github.com/ant-vel/Installer" _target="blank">More info</a>


<a name="features"></a>
## Features

* Responsivity
* Open Source
* Social Media Integration
* Unlimited Categories
* Unlimited Products
* Your Own Style
* Multi Language
* Product Reviews
* Product Ratings
* Automatic Image Resizing
* Related Products (What other customers are looking at, Recommendations for you in our categories, Store Trending)
* Search Engine Optimization
* Sales Reports
* Wish Lists
* Products Suggestions
* Products Grouping (http://antvel.com/products/42)
* Addresses Book
* User Profiles (Sellers & Buyers)
* Products barcode
* Administrative Panel - (http://antvel.com/dashboard)
* Users Orders list with action status (process, Placed, Cancel, Rated)
* Dynamic Products Features
* Company Profile
* Shopping Cart
* Users preferences control
* Users Notifications
* Company Info CMS
* Search Engine Suggestions
* Dynamic Breadcrumbs


## Dashboard

Here, you will be able to manage the base information of your store, such as categories, products features and more.

At the moment, the panel just has the module to manage the store categories, products and products features. However, it is intended to be the replacement for ***wpanel***.

You will be able to visit this section by typing this address within your installed app, as so ```http://app.dev/dashboard```. Once the whole ***wpanel*** is migrated to it, we will be updating the references in the app. Remember, you will have to be logged in either as seller or admin.


## Demo

* <a href="http://antvel.com" target="_blank">http://antvel.com</a>
* Admin: admin@antvel.com / admin
* Buyer: buyer@antvel.com / admin
* Seller: seller@antvel.com / admin


## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


## License

The MIT License (MIT). Please see [License File](https://github.com/ant-vel/App/blob/master/LICENSE) for more information.


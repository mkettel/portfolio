// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ImageController from "./image_controller"
application.register("image", ImageController)

import LoaderController from "./loader_controller"
application.register("loader", LoaderController)

import ScrollController from "./scroll_controller"
application.register("scroll", ScrollController)
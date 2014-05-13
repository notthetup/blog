#!/bin/bash

ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "chinpen.wordpress.2014-05-13.xml"
    })'

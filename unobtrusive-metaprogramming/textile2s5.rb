#!/usr/bin/env ruby
# -*- ruby-mode -*-
# Create an S5 slideshow from textile source
#
# Sean O'Halpin, 2007-10-30
#
# gem dependencies:
#
#   gem install redcloth attributes main -y
#
require 'rubygems'
require 'redcloth'
require 'erb'
require 'pp'
require 'attributes'
require 'main'
require 'date'
require 'time'

DEFAULT_S5_TEMPLATE = "s5-template.rhtml"

def do_erb(str, erb_binding, trim_mode = '%')
  str.untaint
  erb = ERB.new(str, $SAFE, trim_mode)
  erb.result(erb_binding)
end

def get_user_name
  begin
    ENV['USER'] || `whoami`.chomp
  rescue
    'Anon'
  end
end

class Presentation
  attribute :title => 'My Presentation'
  attribute :location => 'Here'
  attribute :date => Time.now.strftime('%Y-%m-%d')
  attribute :author => get_user_name
  attribute :company => ''
  attribute :slides do [] end
  def initialize(*args, &block)
    instance_eval &block if block_given?
  end
  
end

def change_extension(filename, extension)
  extension = extension.gsub(/^\.+/, '')
  filename = File.expand_path(filename)
  File.join(File.dirname(filename), File.basename(filename, File.extname(filename)) + '.html')
end

require 'syntax'
require 'syntax/convertors/html'

def convert_code(body, lang='ruby')
  converter = ::Syntax::Convertors::HTML.for_syntax(lang)
  "<pre class='#{lang}'><code class='#{lang}'>#{converter.convert(body,false)}</code></pre>"
end

def xml_unescape(txt)
  txt.gsub(/&lt;/, '<').gsub(/&gt;/, '>').gsub(/&apos;/, "'").gsub(/&amp;/, '&')
end

def textile2slides(options)
  presentation = Presentation.new

  template = File.read(fn = File.expand_path(options[:template]))
  STDERR.puts "using template: #{fn}"

  presentation.slides = File.read(options[:filename]).split(/^----/)

  metadata = presentation.slides.shift

  metadata.each do |line|
    key, value = line.chomp.split(' ', 2)
    presentation.send("#{key}=", value)
  end

  presentation.slides.map!{ |t| RedCloth.new(t) }

  if !options[:output].nil?
    io = File.open(options[:output], "wb")
  else
    io = STDOUT
  end
  result = do_erb(template, presentation.instance_eval{binding})
  result.gsub!(/<code>(.*?)<\/code>/m) do |block|
    code = xml_unescape($1.to_s.gsub(/\A\s+/m, ''))
    convert_code(code)
  end
  result.gsub!(/<xmpfilter>(.*?)<\/xmpfilter>/m) do |block|
    code = xml_unescape($1.to_s.gsub(/\A\s+/m, ''))
    File.open('/tmp/code', 'w') do |file|
      file.write code
    end
    res = `xmpfilter /tmp/code`
    convert_code(res)
  end
  io.puts result
  io.close if io != STDOUT
  
end

Main do
  program File.basename($0)
  synopsis "#{ program } input-filename [output-filename]"
  description "Create an S5 slideshow from textile source"
  argument 'filename' do
    description 'name of text file containing textile markup'
    # add about first slide, --- separator
    # use DATA as example
  end
  argument 'output' do
    optional
    description 'name of the output file (if omitted, outputs to STDOUT)'
  end
  option 'template' do
    default DEFAULT_S5_TEMPLATE
    description "the s5 template to use in erb format (default = #{DEFAULT_S5_TEMPLATE})"
  end

  # note: must come ~after~ parameters
  usage["NOTES"] =
%[
  The output HTML page relies on the contents of the ./ui directory from the S5 distribution,
  which can be found at: http://meyerweb.com/eric/tools/s5/.
  
  Stylesheets:
  - ui/default/slides.css
  - ui/default/outline.css
  - ui/default/print.css
  - ui/default/opera.css
  
  Javascript:
  - ui/default/slides.js
]
 
  def run
    #
    #p params[:filename]
#     if !params[:output].given?
#       params[:output].values << change_extension(params[:filename].values.first, 'html')
#     end
    #p params[:output]
    options = [:filename, :output, :template].inject({ }){ |hash, k| hash[k] = params[k].value; hash }
    #p options
    textile2slides options
  end
end

filename = ARGV[0]

__END__
title Example slide show
author Sean O'Halpin
date 2007-10-26
location Code Review
company Acme
---

h1. Selenium

A cross-browser testing tool

---

h1. What is Selenium?

* Client-side
* Cross-browser
* Automates browser via scripts
* Written in javascript & DHTML

---
h1. What is it for?

* Browser compatibility testing
** Test your application to see if it works correctly on different browsers and operating systems
** The same script can run on any Selenium platform
* System functional testing
** Create regression tests to verify application functionality and user acceptance

---

h1. Flavours...

* Selenium Core (SC)
* Selenium IDE (SIDE)
* Selenium Remote Control (SRC)
* Selenium on Rails (SOR)

---

h1. ...We're interested in

* Selenium Core (SC)
* Selenium IDE (SIDE)

---

  h1. Links

* http://www.openqa.org/selenium/


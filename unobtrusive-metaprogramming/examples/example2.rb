require 'imp2'
class Bar
  dsl do
    has :name
  end
end
bar = Bar.new
bar.name = 'Arthur'
bar.name # => "Arthur"
Bar.methods(false) # => []

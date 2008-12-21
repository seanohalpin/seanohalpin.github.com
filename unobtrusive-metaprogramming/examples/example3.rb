require 'imp3'
class Baz
  KittySafe.dsl do
    has :name
  end
end
baz = Baz.new
baz.name = "Ford"
baz.name # => "Ford"
Baz.methods(false) # => []

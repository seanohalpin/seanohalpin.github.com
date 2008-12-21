require 'imp3'

# inclusion
class Cat
  include KittySafe
  dsl do
    has :name
  end
end

fluff = Cat.new
fluff.name = "Fluff"
fluff.name # => "Fluff"

# inheritance
class Kitty < Cat
  dsl do
    has :cuteness
  end
end
kitty = Kitty.new
kitty.name = "Kitty"
kitty.cuteness = 10
kitty.name # => "Kitty"
kitty.cuteness # => 10


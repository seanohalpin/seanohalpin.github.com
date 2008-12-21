require 'imp1'

class Foo
end

DSL(Foo) do
  has :name
end

foo = Foo.new
foo.name = 'Trillian'
foo.name # => "Trillian"
Foo.methods(false) # =>

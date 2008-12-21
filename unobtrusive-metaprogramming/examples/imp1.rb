class ClassExtensions
  attr_accessor :model
  def initialize(model, &block)
    @model = model
  end
  # DSL method
  def has(*args)
    model.class_eval { attr_accessor(*args) }
  end
end
def DSL(klass, &block)
  ce = ClassExtensions.new(klass)
  ce.instance_eval(&block)
end


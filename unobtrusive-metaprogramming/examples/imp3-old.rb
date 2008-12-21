module KittySafe
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
  module ModuleMethods
    def xdsl(klass = nil, &block)
      if klass.nil?
        if block_given?
          klass = eval("self", block.binding)
        else
          raise ArgumentError, "need either a class argument or block"
        end
      end
      ce = ClassExtensions.new(klass)
      ce.instance_eval(&block)
    end
    def dsl(klass = nil, &block)
      klass = eval("self", block.binding) if klass.nil?
      ClassExtensions.new(klass).instance_eval(&block)
    end
  end
  extend ModuleMethods
  def self.included(other)
    other.extend ModuleMethods
  end
end

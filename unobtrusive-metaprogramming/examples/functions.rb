class Doodle
  module Utils
    class << self
      # Unnest arrays by one level of nesting, e.g. [1, [[2], 3]] =>
      # [1, [2], 3].
      def flatten_first_level(enum)
        enum.inject([]) {|arr, i|
          if i.kind_of?(Array)
            arr.push(*i)
          else
            arr.push(i)
          end
        }
      end
    end
  end
end

a = [[1, 2, [3, [4, 5]]], [6]]

Doodle::Utils.flatten_first_level(a) # => [1, 2, [3, [4, 5]], 6]

def caesar_cipher(string, shift_factor)
  result = ""

  string.each_char do |char|
    if char.match?(/[a-z]/)
      # Lowercase letter
      shifted = ((char.ord - 'a'.ord + shift_factor) % 26) + 'a'.ord
      result += shifted.chr
    elsif char.match?(/[A-Z]/)
      # Uppercase letter
      shifted = ((char.ord - 'A'.ord + shift_factor) % 26) + 'A'.ord
      result += shifted.chr
    else
      # Non-alphabetic character (spaces, punctuation, numbers)
      result += char
    end
  end

  result
end

# Test cases
puts caesar_cipher("What a string!", 5)
puts caesar_cipher("Hello, World!", 3)
puts caesar_cipher("xyz", 3)
puts caesar_cipher("XYZ", 3)
puts caesar_cipher("The quick brown fox jumps over the lazy dog.", 13)

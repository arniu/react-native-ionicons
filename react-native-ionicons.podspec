require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|

  s.name           = package["name"]
  s.version        = package["version"]
  s.summary        = package["description"]
  s.author         = package["author"]
  s.license        = package["license"]
  s.homepage       = package["homepage"]
  s.platforms      = { :ios => "9.0", :tvos => "9.0" }
  s.source         = { :git => "https://github.com/arniu/react-native-ionicons.git", :tag => "v#{s.version}" }
  s.resources      = "fonts/*.ttf"
  s.preserve_paths = "**/*.{js,json}"
  s.dependency 'React'

end

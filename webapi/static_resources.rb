require 'sinatra'

get '/' do
  send_file '../homepage.html'
end

get '/profile' do
    send_file  '../profile.html'
end

get '/library' do
    send_file '../library.html'
end

get '/lesson' do
    send_file '../lesson.html' 
end

get '/javascript/:file' do |file|
    send_file "../javascript/#{file}"
end

get '/css/:file' do |file|
    send_file "../css/#{file}"
end

get '/images/:file' do |file|
    send_file "../images/#{file}"
end

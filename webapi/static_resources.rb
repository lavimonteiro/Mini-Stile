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

get '/css/login.css' do
    send_file '../css/login.css'
end

get '/css/lessonicons.css' do
    send_file '../css/lessonicons.css'
end

get '/css/navstyle.css' do
    send_file '../css/navstyle.css'
end

get '/images/homepage.png' do
    send_file '../images/homepage.png'
end

get '/images/bowtie.png' do
    send_file '../images/bowtie.png'
end 

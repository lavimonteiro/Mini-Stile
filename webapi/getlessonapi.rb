require 'sinatra'
require 'sequel'
require 'sinatra/namespace'
require 'json'
require 'pp'
DB = Sequel.connect(  {
    adapter: 'mysql2',
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'mini-stile',
},)

get '/lesson/:id' do |id|
    sql = "SELECT lesson_id FROM lesson WHERE lesson_id = '#{id}'"
        result = DB.fetch(sql).all
        halt(404, { message:'Book Not Found'}.to_json) unless result.length>0
        result.to_json
        # send_file '../lesson2.html'

   
     
end

get '/lesson-two' do 
    send_file '../lesson2.html'
end
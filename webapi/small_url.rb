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

namespace '/api/v1' do
  
    before do
        content_type 'application/json'
    end
    
    helpers do
        def base_url
          @base_url ||= "#{request.env['rack.url_scheme']}://#{request.env['HTTP_HOST']}"
        end
    
        def json_params
          begin
            JSON.parse(request.body.read)
          rescue
            halt 400, { message:'Invalid JSON' }.to_json
          end
        end
    end
    get '/library/cards' do
        card = DB.fetch( "SELECT * FROM lessons JOIN card_content 
        ON lessons.lesson_id =  card_content.lesson_id 
        JOIN images
        ON card_content.image_id = images.image_id;
        ").all
        halt(404, { message:'Lesson Not Found'}.to_json) unless card.length>0
       
        card = card[0]
        lesson_title = card["lesson_title".to_sym].to_json
        text_content = card["text_content".to_sym].to_json
        image = card["image_url"].to_json
        alt_text = card["description"].to_json
    end

    get '/library/lesson/:name' do |name|
        lesson = DB.fetch("SELECT * FROM lessons JOIN lesson_content 
        ON lessons.lesson_id =  lesson_content.lesson_id 
        WHERE lessons.lesson_name = '#{name}' ;
        ").all
        images = DB.fetch("SELECT images.image_url, images.description FROM img_content JOIN lessons ON lessons.lesson_id = img_content.lesson_id JOIN images 
        ON img_content.image_id =  images.image_id 
        WHERE lessons.lesson_name = '#{name}' ;
        ").all
        halt(404, { message:'Lesson Not Found'}.to_json) unless lesson.length>0
       lesson.to_json + lesson.to_json 
        lesson = lesson[0]
        lesson_title = lesson["lesson_title".to_sym].to_json
        text_content = lesson["text_content".to_sym].to_json
        
        #image[0]
         images.to_json
    end

    get '/lesson/:name' do |name|
        card = DB.fetch( "SELECT * FROM lessons JOIN card_content 
        ON lessons.lesson_id =  card_content.lesson_id 
        JOIN images
        ON card_content.image_id = images.image_id
        WHERE lessons.lesson_name = '#{name}' ;
        ").all
        lesson = DB.fetch("SELECT * FROM lessons JOIN lesson_content 
        ON lessons.lesson_id =  lesson_content.lesson_id 
        WHERE lessons.lesson_name = '#{name}' ;
        ").all
        halt(404, { message:'Lesson Not Found'}.to_json) unless lesson.length>0
        card.to_json + lesson.to_json 
    end
end


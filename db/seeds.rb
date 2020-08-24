# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |u|
    user = User.create(
        name:Faker::Movies::HarryPotter.character, 
        email:"#{u}@test.com", 
        password:'1234567',
        image: (Faker::Avatar.image(
            slug: (Faker::Hipster.word) , 
            size: "200x200", format: "bmp", 
            set: "set2", bgset: "bg1")),)
            
        end
        
        
        Board.create(name:'Test board 1', user_id: rand(1..5), code: rand(1..5), description:Faker::TvShows::MichaelScott.quote)
        Board.create(name:'Test board 2', user_id: rand(1..5), code: rand(1..5), description:Faker::TvShows::MichaelScott.quote)
        Board.create(name:'Test board 3', user_id: rand(1..5), code: rand(1..5), description:Faker::TvShows::MichaelScott.quote)
        
        
        10.times do |u|
            Post.create(board_id: rand(1..3), user_id: rand(1..5), 
            description:Faker::Hipster.sentence, 
            title:Faker::Hipster.word,
            image: (Faker::Avatar.image(
                slug: (Faker::Hipster.word) , 
                size: "200x200", format: "bmp", 
                set: "set1", bgset: "bg1")))
            end
            
            10.times do |b|
                UserBoard.create(board_id: rand(1..3), user_id: rand(1..5))
            end
            
            20.times do |x|
                Comment.create(
                    post_id: rand(1..10), user_id: rand(1..5), description:Faker::GreekPhilosophers.quote)
            end
            
    
          puts "seeded"
            
           
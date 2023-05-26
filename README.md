# TOPS Video Tagging Tool


## Background 

Quick overview of project's context, problem, and my proposed solution.

### Context
The Math Department at Texas A&M has 5000 hours of video content to help students with math. The videos were recorded by different professors and are being integrated into the Virtual Math Learning Center. Initially, the videos were uncategorized and had poor quality. Students evaluated them using separate documents, creating a cumbersome workflow. To improve efficiency, a single web interface was created for everyone to access and edit the same database, eliminating the need for multiple documents and folders.

### Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=bQj2La-FvSw
" target="_blank"><img src="http://img.youtube.com/vi/bQj2La-FvSw/0.jpg" 
alt="solution's video" border="10" width="700" height="500" /></a>


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. The login information is provided below for testing purposes:

  - **username: test**
  - **password: test**

### Prerequisites

Make sure Ruby is installed on your system. Fire command prompt and run command:
```
ruby -v

```
Make sure Rails is installed
```
rails -v
```

### Installing
```
git clone https://github.com/Pape98/TOPS-Video-Tool.git
cd TOPS-Video-Tool
bundle install
rails s
```
Access website on localhost with the port number printed on terminal (usually 3000).

### Features

Users have the ability to:
  - login based on their admin level
  - create a single entry for each video
  - create multiple evaluations for each instance of a video
  - search videos by instructor name, keywors, or courses   
  - editing existing entries
  - delete existing entries
  - add new keywords

## Built With

* [Ruby on Rails](https://rubyonrails.org/)
* [Semantic UI](https://semmntic-ui.com/)
* [MongoDB]()
* [Apache Server]()
* [Phusion Passenger]()
* [JQuery]()

## Authors

 *Pape Sow Traore* - (https://github.com/Pape98)

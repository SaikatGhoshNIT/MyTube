const GOOGLE_API_KEY = "AIzaSyD1EeHCYHf5lX4wzzfBtobrncYOEYsTZfk"

//const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/videos?snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+GOOGLE_API_KEY

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=" + GOOGLE_API_KEY ;

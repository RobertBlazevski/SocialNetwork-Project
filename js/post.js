class Post {
  post_id = "";
  post_content = "";
  user_id = "";
  likes = "";
  api_url = "https://65daeef23ea883a15290e4b3.mockapi.io";

  async create() {
    let session = new Session();
     session_id = session.getSession();
    let data = {
      user_id: session_id,
      content: this.post_content,
      likes: 0
    };
    data = JSON.stringify(data)
    let response = await fetch(this.api_url + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    let responseData = await response.json();
    return responseData;
  }
  async getAllPosts(){
    let response = await fetch (this.api_url + '/posts');
    let data = await response.json();
    return data;
  }
}  
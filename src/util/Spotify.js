let accessToken = "";
const clientID = "57bf7b00c237442ba67b49b3fe2a7e1f";
const redirectURL = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    // Check if access token has been set
    if (accessToken) {
      return accessToken;
    }

    // If it has not been set already check if it is in the url
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = Number(urlExpiresIn[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // This clears the parameters, allowing us to grab a new access token when it expires.
      window.history.pushState("Access Token", null, "/");
      return accessToken;
      // If both conditions are not true, ask to log in
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    // Get access token
    const accessTokenAPI = this.getAccessToken();

    // Request the query
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessTokenAPI}`,
        },
      }
    );

    const jsonResponse = await response.json();

    if (!jsonResponse.tracks) {
      return [];
    }

    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  savePlaylistName(name, trackUris) {
    if (!name || !trackUris) {
      return;
    }
    const accessTokenAPI = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessTokenAPI}` };
    let userId;

    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export default Spotify;

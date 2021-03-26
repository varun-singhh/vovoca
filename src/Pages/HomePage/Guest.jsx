import React from 'react';
import '../../Static/css/Guest.css';
const Guest = () => {
  return (
    <div>
      <div className="guest">
        <div className="guest-chart mobile-chart">
          <div className="pricing-body">
            <h1 className="trend-heading">New Arrival</h1>
            <hr className="divider" />
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#1</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#2</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#3</p>
            </div>
          </div>
          <div className="pricing-body">
            <h1 className="trend-heading">Trending</h1>
            <hr className="divider" />
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/originals/72/c7/df/72c7df46166570810953740ebfcb3d70.png")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#1</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/originals/db/64/a9/db64a9770d61b573e9e1440d62aa4f14.jpg")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#2</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/originals/6a/2d/13/6a2d13b7be4848e17a35a3001c7db423.jpg")`,
                }}
              ></div>
              <p className="song-name">Name</p>
              <p className="song-rank">#3</p>
            </div>
          </div>
          <div className="pricing-body">
            <h1 className="trend-heading">Popular</h1>
            <hr className="divider" />
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png")`,
                }}
              ></div>
              <p className="song-name">Senorita ft. Kaustubh </p>
              <p className="song-rank">#1</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png")`,
                }}
              ></div>
              <p className="song-name">Shape of You ft. Varun</p>
              <p className="song-rank">#2</p>
            </div>
            <div className="song-box">
              <div
                className="music-cover"
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className="song-name">Yummy ft. prakhar pandey</p>
              <p className="song-rank">#3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;

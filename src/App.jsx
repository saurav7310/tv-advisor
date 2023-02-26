import React, { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetails from "./components/TVShowDetails/TVShowDetails";
import Logo from "./components/Logo/Logo";
import img from "./assests/images/logo.png";
import TvShowList from "./components/TvShowList/TvShowList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function fetchPopular() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (err) {
      alert("Unable to fetch Data ", err);
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListRes = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListRes.length > 0) {
        setRecommendationList(recommendationListRes.slice(0, 10));
      }
    } catch (err) {
      alert("Unable to fetch Data ", err);
    }
  }

  const updateCurrentTcShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (err) {
      alert("Unable to fetch Data ", err);
    }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo title="Watchers" subtitle="Find What You Like" img={img} />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar fetchByTitle={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TvShowList
            tvShowList={recommendationList}
            updateCurrentTcShow={updateCurrentTcShow}
          />
        )}
      </div>
    </div>
  );
};

export default App;

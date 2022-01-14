import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectedShortUrl
} from "../redux/actions/urlAction";
import {getShortUrlByUrl} from "../services/urlService"
const Ulrs = () => {
  const { url } = useParams();
  let shortLongUrl = useSelector((state) => state.shortLongUrl);
  const { full_short_link } = shortLongUrl;
  const dispatch = useDispatch();

  useEffect(() => {
    if (url && url !== "") 
    return new Promise((resolve, reject) => {
        try {
          getShortUrlByUrl(url).then((result) => {
            dispatch(selectedShortUrl(result))
         
          });
        } catch (error) {
          console.error("urls error!==", error);
          reject("urls error!");
        }
      });
  }, [url]);
  return (
    <div className="ui grid container">
      {Object.keys(url).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column rp">
                <h1>{full_short_link}</h1>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">copied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ulrs;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderBannerContainer } from "./order-number-banner.style";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { phoneNumber } from "../../_const";

const OrderNumberBanner = ({ top }) => {
  return (
    <a style={{ textDecoration: "none" }} href={`tel:${phoneNumber}`}>
      <OrderBannerContainer top={top}>
        <button type="button">
          <div>
            <FontAwesomeIcon className="phone" icon={faPhone} size="2x" />
            <div>Commandes où Livraisons</div>
          </div>
        </button>
      </OrderBannerContainer>
    </a>
  );
};

export default OrderNumberBanner;

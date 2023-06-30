import axios from "axios";
const MPT_DOMAIN = "https://localhost:8888";
const CardAxiosApi = {
  // 카테고리별 TOP1 카드 리스트
  getCategoryCardTop1: async () => {
    return await axios.get(MPT_DOMAIN + "/cardrecommend/category", {
      withCredentials: true,
    });
  },
  // 카테고리 카드 리스트
  getCardRecommend: async () => {
    return await axios.get(MPT_DOMAIN + "/cardrecommend", {
      withCredentials: true,
    });
  },
};

export default CardAxiosApi;

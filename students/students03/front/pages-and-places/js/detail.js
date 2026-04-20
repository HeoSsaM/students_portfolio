import { supabase } from "./supabase-config.js";

const detailWrap = document.querySelector("#detail-page");

const params = new URLSearchParams(location.search);
const id = params.get("id");

async function getPlaceDetail() {
  detailWrap.innerHTML = `<div class="loading-box">상세 정보를 불러오는 중입니다...</div>`;

  const { data: place, error } = await supabase
    .from("places")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !place) {
    console.error("장소 상세 조회 실패:", error);
    detailWrap.innerHTML = `
      <div class="empty-box">
        <p>해당 장소 정보를 찾을 수 없습니다.</p>
        <div style="margin-top:16px;">
          <a href="./place.html" class="btn-back">목록으로 돌아가기</a>
        </div>
      </div>
    `;
    return;
  }

  detailWrap.innerHTML = `
  <div class="detail-area">
    <div class="detail-image">
      <img src="${place.image}" alt="${place.location}">
    </div>

    <div class="detail-overlay"></div>

    <div class="detail-text">
      <p class="book">${place.book}</p>
      <h1>${place.title}</h1>
      <p class="location">${place.location}</p>
      <p class="desc">${place.desc}</p>

      <h3>🎒 여행 포인트</h3>
      <div class="points">${place.points}</div>
      <a href="./place.html" class="back-btn">뒤로 가기</a>
    </div>
  </div>
  `;
};

getPlaceDetail()